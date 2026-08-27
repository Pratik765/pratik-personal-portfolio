import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinate tracker
    const mouse = {
      x: null,
      y: null,
      radius: 160,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Particle Configuration based on screen size
    const isDark = theme === 'dark';
    const particleCount = width < 768 ? 38 : 75;
    const maxConnectionDistance = width < 768 ? 110 : 150;

    const colorPalette = isDark
      ? [
          { r: 99, g: 102, b: 241 }, // Indigo
          { r: 6, g: 182, b: 212 },  // Cyan
          { r: 168, g: 85, b: 247 }, // Purple
          { r: 147, g: 197, b: 253 }, // Soft Blue
        ]
      : [
          { r: 79, g: 70, b: 229 },  // Indigo (Darker for light mode)
          { r: 8, g: 145, b: 178 },  // Cyan
          { r: 147, g: 51, b: 234 }, // Purple
          { r: 100, g: 116, b: 139 }, // Slate
        ];

    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1; // 1px to 3px
        this.baseRadius = this.radius;
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        this.alpha = Math.random() * 0.5 + (isDark ? 0.35 : 0.25);
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Pulse size slightly
        this.pulseAngle += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulseAngle) * 0.4;

        // Bounce off canvas edges smoothly
        if (this.x < 0) {
          this.x = 0;
          this.vx *= -1;
        } else if (this.x > width) {
          this.x = width;
          this.vx *= -1;
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy *= -1;
        } else if (this.y > height) {
          this.y = height;
          this.vy *= -1;
        }

        // Mouse attraction/repulsion interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // Gentle fluid gravitational pull toward mouse
            const direction = 1;
            this.x += forceDirectionX * force * 1.5 * direction;
            this.y += forceDirectionY * force * 1.5 * direction;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for line performance
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Main animation loop
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animationFrameId) {
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Connect particles with network lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectionDistance) {
            const lineAlpha = (1 - dist / maxConnectionDistance) * (isDark ? 0.18 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Connect particles to mouse cursor for interactive web effect
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const mouseLineAlpha = (1 - dist / mouse.radius) * (isDark ? 0.35 : 0.22);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark
              ? `rgba(99, 102, 241, ${mouseLineAlpha})`
              : `rgba(79, 70, 229, ${mouseLineAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // Update & draw each particle
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full will-change-transform"
      style={{ opacity: theme === 'dark' ? 0.85 : 0.65 }}
    />
  );
};

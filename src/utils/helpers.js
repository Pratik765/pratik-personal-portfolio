import confetti from 'canvas-confetti';
import {
  Atom,
  FileCode,
  Layers,
  Palette,
  Globe,
  Sparkles,
  Compass,
  Send,
  Zap,
  Server,
  Cpu,
  Network,
  KeyRound,
  ShieldCheck,
  Lock,
  Database,
  Table,
  GitBranch,
  Radio,
  Terminal,
  Package,
  Boxes,
  GitFork,
  Code,
  CheckCircle,
  ExternalLink,
  Download,
  Mail,
  Clock,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  Eye,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';

export const iconMap = {
  Atom,
  FileCode,
  Layers,
  Palette,
  Globe,
  Sparkles,
  Compass,
  Send,
  Zap,
  Server,
  Cpu,
  Network,
  KeyRound,
  ShieldCheck,
  Lock,
  Database,
  Table,
  GitBranch,
  Github,
  Linkedin,
  Radio,
  Terminal,
  Package,
  Boxes,
  GitFork,
  Code,
  CheckCircle,
  ExternalLink,
  Download,
  Mail,
  Clock,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  Eye,
  ArrowUpRight,
  TrendingUp,
};

export const getIcon = (name) => {
  return iconMap[name] || Code;
};

export const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#06b6d4', '#8b5cf6', '#38bdf8'],
    });
  } catch (e) {
    console.log(e);
  }
};

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

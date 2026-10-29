declare module 'lucide-react' {
  import * as React from 'react'

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number
    color?: string
    strokeWidth?: string | number
    className?: string
  }

  export type Icon = React.FC<LucideProps>

  export const Home: Icon
  export const Sparkles: Icon
  export const Layers: Icon
  export const CreditCard: Icon
  export const BookOpen: Icon
  export const Compass: Icon
  export const FileText: Icon
  export const History: Icon
  export const Users: Icon
  export const Briefcase: Icon
  export const Mail: Icon
  export const ShieldCheck: Icon
  export const Lock: Icon
  export const FileCheck: Icon
  export const LifeBuoy: Icon
  export const ChevronLeft: Icon
  export const ChevronRight: Icon
  export const Search: Icon
  export const Sun: Icon
  export const Moon: Icon
  export const Zap: Icon
  export const X: Icon
  export const Menu: Icon
  export const ArrowRight: Icon
  export const ArrowUpRight: Icon
  export const Check: Icon
  export const CheckCircle2: Icon
  export const AlertCircle: Icon
  export const Info: Icon
  export const ExternalLink: Icon
  export const Terminal: Icon
  export const Activity: Icon
  export const Cpu: Icon
  export const RefreshCw: Icon
  export const Globe: Icon
  export const GitBranch: Icon
  export const GitCommit: Icon
  export const Code2: Icon
  export const MapPin: Icon
  export const Clock: Icon
  export const Send: Icon
  export const Shield: Icon
  export const MessageSquare: Icon
  export const MessageSquareCode: Icon
  export const HelpCircle: Icon
  export const Target: Icon
  export const Eye: Icon
  export const EyeOff: Icon
  export const Heart: Icon
  export const Award: Icon
  export const FileQuestion: Icon
  export const Store: Icon
  export const Building2: Icon
  export const Rocket: Icon
  export const Github: Icon
  export const Twitter: Icon
  export const Linkedin: Icon
  export const Copy: Icon
  export const Calendar: Icon
  export const User: Icon
  export const ShieldAlert: Icon
  export const Key: Icon
  export const Server: Icon
  export const Network: Icon
  export const Layout: Icon
  export const ShoppingBag: Icon

  const defaultExport: Record<string, Icon>
  export default defaultExport
}

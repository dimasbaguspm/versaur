import { SVGProps, ComponentType } from "react";

// Navigation & UI
import LoaderIcon from "../assets/loader.svg?react";
import UserIcon from "../assets/user.svg?react";
import ChevronDownIcon from "../assets/chevron-down.svg?react";
import ChevronUpIcon from "../assets/chevron-up.svg?react";
import ChevronLeftIcon from "../assets/chevron-left.svg?react";
import ChevronRightIcon from "../assets/chevron-right.svg?react";
import LayoutDashboardIcon from "../assets/layout-dashboard.svg?react";
import FileCodeIcon from "../assets/file-code.svg?react";
import HomeIcon from "../assets/home.svg?react";
import SearchIcon from "../assets/search.svg?react";
import SearchXIcon from "../assets/search-x.svg?react";
import MenuIcon from "../assets/menu.svg?react";
import MenuOpenIcon from "../assets/menu-open.svg?react";
import SettingsIcon from "../assets/settings.svg?react";
import GridIcon from "../assets/grid-2x2.svg?react";
import Grid3x3Icon from "../assets/grid-3x3.svg?react";
import Columns2Icon from "../assets/columns-2.svg?react";
import Columns3Icon from "../assets/columns-3.svg?react";
import ListIcon from "../assets/list.svg?react";
import ListChecksIcon from "../assets/list-checks.svg?react";
import ListOrderedIcon from "../assets/list-ordered.svg?react";
import SlidersIcon from "../assets/sliders.svg?react";

// Financial & Analytics
import TrendingUpIcon from "../assets/trending-up.svg?react";
import TrendingDownIcon from "../assets/trending-down.svg?react";
import BarChartIcon from "../assets/bar-chart.svg?react";
import BarChart2Icon from "../assets/bar-chart-2.svg?react";
import LineChartIcon from "../assets/line-chart.svg?react";
import AreaChartIcon from "../assets/area-chart.svg?react";
import PieChartIcon from "../assets/pie-chart.svg?react";
import DonutChartIcon from "../assets/donut-chart.svg?react";
import WalletIcon from "../assets/wallet.svg?react";
import CreditCardIcon from "../assets/credit-card.svg?react";
import DollarSignIcon from "../assets/dollar-sign.svg?react";
import PercentIcon from "../assets/percent.svg?react";
import GaugeIcon from "../assets/gauge.svg?react";
import GaugeCircleIcon from "../assets/gauge-circle.svg?react";

// Business & Operations
import BuildingIcon from "../assets/building.svg?react";
import Building2Icon from "../assets/building-2.svg?react";
import BriefcaseIcon from "../assets/briefcase.svg?react";
import Briefcase2Icon from "../assets/briefcase-2.svg?react";
import TargetIcon from "../assets/target.svg?react";
import TargetCircleIcon from "../assets/target-circle.svg?react";
import ZapIcon from "../assets/zap.svg?react";
import Zap2Icon from "../assets/zap-2.svg?react";
import ShieldIcon from "../assets/shield.svg?react";
import ShieldAlertIcon from "../assets/shield-alert.svg?react";
import ArchiveIcon from "../assets/archive.svg?react";
import ArchiveXIcon from "../assets/archive-x.svg?react";

// Notifications & Communication
import BellIcon from "../assets/bell.svg?react";
import BellOffIcon from "../assets/bell-off.svg?react";
import MailIcon from "../assets/mail.svg?react";
import MailOpenIcon from "../assets/mail-open.svg?react";
import MessageCircleIcon from "../assets/message-circle.svg?react";
import MessageSquareIcon from "../assets/message-square.svg?react";
import InboxIcon from "../assets/inbox.svg?react";

// Date & Time
import CalendarIcon from "../assets/calendar.svg?react";
import CalendarCheckIcon from "../assets/calendar-check.svg?react";
import ClockIcon from "../assets/clock.svg?react";
import ClockAlertIcon from "../assets/clock-alert.svg?react";

// Location
import MapPinIcon from "../assets/map-pin.svg?react";
import MapPinCheckIcon from "../assets/map-pin-check.svg?react";

// Data & Analytics
import LayersIcon from "../assets/layers.svg?react";
import ActivityIcon from "../assets/activity.svg?react";
import ActivitySquareIcon from "../assets/activity-square.svg?react";
import DataIcon from "../assets/data.svg?react";
import FunnelIcon from "../assets/funnel.svg?react";
import FilterIcon from "../assets/filter.svg?react";
import AwardIcon from "../assets/award.svg?react";
import StarIcon from "../assets/star.svg?react";

// Actions
import DownloadIcon from "../assets/download.svg?react";
import DownloadCloudIcon from "../assets/download-cloud.svg?react";
import UploadIcon from "../assets/upload.svg?react";
import UploadCloudIcon from "../assets/upload-cloud.svg?react";
import ShareIcon from "../assets/share.svg?react";
import Share2Icon from "../assets/share-2.svg?react";
import CopyIcon from "../assets/copy.svg?react";
import ClipboardIcon from "../assets/clipboard.svg?react";
import RepeatIcon from "../assets/repeat.svg?react";
import TrashIcon from "../assets/trash.svg?react";

// Security
import LockIcon from "../assets/lock.svg?react";
import UnlockIcon from "../assets/unlock.svg?react";
import GlobeIcon from "../assets/globe.svg?react";

// Utilities
import HelpCircleIcon from "../assets/help-circle.svg?react";
import PlusCircleIcon from "../assets/plus-circle.svg?react";
import PlusIcon from "../assets/plus.svg?react";
import MinusIcon from "../assets/minus.svg?react";
import SmileIcon from "../assets/smile.svg?react";
import FrownIcon from "../assets/frown.svg?react";
import AlertCircleIcon from "../assets/alert-circle.svg?react";
import AlertTriangleIcon from "../assets/alert-triangle.svg?react";
import CheckIcon from "../assets/check.svg?react";
import CheckCircleIcon from "../assets/check-circle.svg?react";
import XIcon from "../assets/x.svg?react";
import XCircleIcon from "../assets/x-circle.svg?react";
import Search2Icon from "../assets/search-2.svg?react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface IconMetadata {
  name: string;
  component: IconComponent;
  tags: string[];
}

// Icon registry with metadata (60 icons)
export const icons: Record<string, IconMetadata> = {
  // Navigation & UI
  loader: {
    name: "Loader",
    component: LoaderIcon,
    tags: ["loading", "spinner", "animation"],
  },
  user: {
    name: "User",
    component: UserIcon,
    tags: ["person", "profile", "account"],
  },
  "chevron-down": {
    name: "ChevronDown",
    component: ChevronDownIcon,
    tags: ["chevron", "arrow", "down", "navigation"],
  },
  "chevron-up": {
    name: "ChevronUp",
    component: ChevronUpIcon,
    tags: ["chevron", "arrow", "up", "navigation"],
  },
  "chevron-left": {
    name: "ChevronLeft",
    component: ChevronLeftIcon,
    tags: ["chevron", "arrow", "left", "navigation"],
  },
  "chevron-right": {
    name: "ChevronRight",
    component: ChevronRightIcon,
    tags: ["chevron", "arrow", "right", "navigation"],
  },
  "layout-dashboard": {
    name: "LayoutDashboard",
    component: LayoutDashboardIcon,
    tags: ["layout", "dashboard", "grid", "saas"],
  },
  "file-code": {
    name: "FileCode",
    component: FileCodeIcon,
    tags: ["file", "code", "document", "programming"],
  },
  home: {
    name: "Home",
    component: HomeIcon,
    tags: ["home", "house", "dashboard", "navigation"],
  },
  search: {
    name: "Search",
    component: SearchIcon,
    tags: ["search", "find", "magnifying", "glass"],
  },
  "search-x": {
    name: "SearchX",
    component: SearchXIcon,
    tags: ["search", "clear", "close", "no results"],
  },
  menu: {
    name: "Menu",
    component: MenuIcon,
    tags: ["navigation", "menu", "hamburger", "dashboard"],
  },
  "menu-open": {
    name: "MenuOpen",
    component: MenuOpenIcon,
    tags: ["navigation", "menu", "dashboard"],
  },
  settings: {
    name: "Settings",
    component: SettingsIcon,
    tags: ["configuration", "preferences", "dashboard"],
  },
  grid: {
    name: "Grid",
    component: GridIcon,
    tags: ["layout", "grid", "2x2", "dashboard"],
  },
  "grid-3x3": {
    name: "Grid3x3",
    component: Grid3x3Icon,
    tags: ["layout", "grid", "3x3", "dashboard"],
  },
  "columns-2": {
    name: "Columns2",
    component: Columns2Icon,
    tags: ["layout", "columns", "dashboard"],
  },
  "columns-3": {
    name: "Columns3",
    component: Columns3Icon,
    tags: ["layout", "columns", "dashboard"],
  },
  list: {
    name: "List",
    component: ListIcon,
    tags: ["list", "navigation", "dashboard"],
  },
  "list-checks": {
    name: "ListChecks",
    component: ListChecksIcon,
    tags: ["list", "checklist", "tasks", "dashboard"],
  },
  "list-ordered": {
    name: "ListOrdered",
    component: ListOrderedIcon,
    tags: ["list", "ordered", "numbering", "dashboard"],
  },
  sliders: {
    name: "Sliders",
    component: SlidersIcon,
    tags: ["settings", "controls", "configuration", "dashboard"],
  },

  // Financial & Analytics
  "trending-up": {
    name: "TrendingUp",
    component: TrendingUpIcon,
    tags: ["chart", "financial", "analytics", "growth"],
  },
  "trending-down": {
    name: "TrendingDown",
    component: TrendingDownIcon,
    tags: ["chart", "financial", "analytics", "decline"],
  },
  "bar-chart": {
    name: "BarChart",
    component: BarChartIcon,
    tags: ["chart", "financial", "analytics", "data"],
  },
  "bar-chart-2": {
    name: "BarChart2",
    component: BarChart2Icon,
    tags: ["chart", "financial", "analytics", "data"],
  },
  "line-chart": {
    name: "LineChart",
    component: LineChartIcon,
    tags: ["chart", "financial", "analytics", "data"],
  },
  "area-chart": {
    name: "AreaChart",
    component: AreaChartIcon,
    tags: ["chart", "financial", "analytics", "data"],
  },
  "pie-chart": {
    name: "PieChart",
    component: PieChartIcon,
    tags: ["chart", "financial", "analytics", "data"],
  },
  "donut-chart": {
    name: "DonutChart",
    component: DonutChartIcon,
    tags: ["chart", "financial", "analytics", "data"],
  },
  wallet: {
    name: "Wallet",
    component: WalletIcon,
    tags: ["payment", "financial", "money"],
  },
  "credit-card": {
    name: "CreditCard",
    component: CreditCardIcon,
    tags: ["payment", "financial", "money", "card"],
  },
  "dollar-sign": {
    name: "DollarSign",
    component: DollarSignIcon,
    tags: ["currency", "financial", "money", "price"],
  },
  percent: {
    name: "Percent",
    component: PercentIcon,
    tags: ["discount", "financial", "analytics", "percentage"],
  },
  gauge: {
    name: "Gauge",
    component: GaugeIcon,
    tags: ["performance", "analytics", "metrics"],
  },
  "gauge-circle": {
    name: "GaugeCircle",
    component: GaugeCircleIcon,
    tags: ["performance", "analytics", "metrics"],
  },

  // Business & Operations
  building: {
    name: "Building",
    component: BuildingIcon,
    tags: ["company", "organization", "saas", "business"],
  },
  "building-2": {
    name: "Building2",
    component: Building2Icon,
    tags: ["company", "organization", "saas", "business"],
  },
  briefcase: {
    name: "Briefcase",
    component: BriefcaseIcon,
    tags: ["work", "business", "projects", "saas"],
  },
  "briefcase-2": {
    name: "Briefcase2",
    component: Briefcase2Icon,
    tags: ["work", "business", "projects", "saas"],
  },
  target: {
    name: "Target",
    component: TargetIcon,
    tags: ["goals", "metrics", "business", "saas"],
  },
  "target-circle": {
    name: "TargetCircle",
    component: TargetCircleIcon,
    tags: ["goals", "metrics", "business", "saas"],
  },
  zap: {
    name: "Zap",
    component: ZapIcon,
    tags: ["performance", "power", "energy", "saas"],
  },
  "zap-2": {
    name: "Zap2",
    component: Zap2Icon,
    tags: ["performance", "power", "energy", "saas"],
  },
  shield: {
    name: "Shield",
    component: ShieldIcon,
    tags: ["security", "protection", "saas"],
  },
  "shield-alert": {
    name: "ShieldAlert",
    component: ShieldAlertIcon,
    tags: ["security", "alert", "warning", "saas"],
  },
  archive: {
    name: "Archive",
    component: ArchiveIcon,
    tags: ["storage", "backup", "files", "saas"],
  },
  "archive-x": {
    name: "ArchiveX",
    component: ArchiveXIcon,
    tags: ["delete", "remove", "storage", "saas"],
  },

  // Notifications & Communication
  bell: {
    name: "Bell",
    component: BellIcon,
    tags: ["notification", "alert", "dashboard"],
  },
  "bell-off": {
    name: "BellOff",
    component: BellOffIcon,
    tags: ["notification", "alert", "disabled", "dashboard"],
  },
  mail: {
    name: "Mail",
    component: MailIcon,
    tags: ["email", "communication", "message"],
  },
  "mail-open": {
    name: "MailOpen",
    component: MailOpenIcon,
    tags: ["email", "communication", "message"],
  },
  "message-circle": {
    name: "MessageCircle",
    component: MessageCircleIcon,
    tags: ["chat", "communication", "message"],
  },
  "message-square": {
    name: "MessageSquare",
    component: MessageSquareIcon,
    tags: ["chat", "communication", "message"],
  },
  inbox: {
    name: "Inbox",
    component: InboxIcon,
    tags: ["email", "communication", "notification"],
  },

  // Date & Time
  calendar: {
    name: "Calendar",
    component: CalendarIcon,
    tags: ["date", "scheduling", "time"],
  },
  "calendar-check": {
    name: "CalendarCheck",
    component: CalendarCheckIcon,
    tags: ["date", "scheduling", "confirmed"],
  },
  clock: {
    name: "Clock",
    component: ClockIcon,
    tags: ["time", "duration", "scheduling"],
  },
  "clock-alert": {
    name: "ClockAlert",
    component: ClockAlertIcon,
    tags: ["time", "alert", "warning"],
  },

  // Location
  "map-pin": {
    name: "MapPin",
    component: MapPinIcon,
    tags: ["location", "maps", "geo"],
  },
  "map-pin-check": {
    name: "MapPinCheck",
    component: MapPinCheckIcon,
    tags: ["location", "maps", "confirmed"],
  },

  // Data & Analytics
  layers: {
    name: "Layers",
    component: LayersIcon,
    tags: ["data", "structure", "analytics"],
  },
  activity: {
    name: "Activity",
    component: ActivityIcon,
    tags: ["data", "analytics", "metrics"],
  },
  "activity-square": {
    name: "ActivitySquare",
    component: ActivitySquareIcon,
    tags: ["data", "analytics", "metrics"],
  },
  data: {
    name: "Data",
    component: DataIcon,
    tags: ["data", "structure", "analytics"],
  },
  funnel: {
    name: "Funnel",
    component: FunnelIcon,
    tags: ["filter", "analytics", "data"],
  },
  filter: {
    name: "Filter",
    component: FilterIcon,
    tags: ["filter", "analytics", "data"],
  },
  award: {
    name: "Award",
    component: AwardIcon,
    tags: ["achievement", "recognition", "saas"],
  },
  star: {
    name: "Star",
    component: StarIcon,
    tags: ["rating", "favorite", "achievement"],
  },

  // Actions
  download: {
    name: "Download",
    component: DownloadIcon,
    tags: ["export", "file", "action"],
  },
  "download-cloud": {
    name: "DownloadCloud",
    component: DownloadCloudIcon,
    tags: ["export", "cloud", "file"],
  },
  upload: {
    name: "Upload",
    component: UploadIcon,
    tags: ["import", "file", "action"],
  },
  "upload-cloud": {
    name: "UploadCloud",
    component: UploadCloudIcon,
    tags: ["import", "cloud", "file"],
  },
  share: {
    name: "Share",
    component: ShareIcon,
    tags: ["share", "distribute", "action"],
  },
  "share-2": {
    name: "Share2",
    component: Share2Icon,
    tags: ["share", "distribute", "action"],
  },
  copy: {
    name: "Copy",
    component: CopyIcon,
    tags: ["duplicate", "clipboard", "action"],
  },
  clipboard: {
    name: "Clipboard",
    component: ClipboardIcon,
    tags: ["paste", "clipboard", "action"],
  },
  repeat: {
    name: "Repeat",
    component: RepeatIcon,
    tags: ["redo", "refresh", "sync"],
  },
  trash: {
    name: "Trash",
    component: TrashIcon,
    tags: ["delete", "remove", "action"],
  },

  // Security
  lock: {
    name: "Lock",
    component: LockIcon,
    tags: ["security", "protection", "locked"],
  },
  unlock: {
    name: "Unlock",
    component: UnlockIcon,
    tags: ["security", "protection", "unlocked"],
  },
  globe: {
    name: "Globe",
    component: GlobeIcon,
    tags: ["world", "internet", "web"],
  },

  // Utilities
  "help-circle": {
    name: "HelpCircle",
    component: HelpCircleIcon,
    tags: ["help", "information", "faq"],
  },
  "plus-circle": {
    name: "PlusCircle",
    component: PlusCircleIcon,
    tags: ["add", "create", "action"],
  },
  plus: {
    name: "Plus",
    component: PlusIcon,
    tags: ["add", "create", "action"],
  },
  minus: {
    name: "Minus",
    component: MinusIcon,
    tags: ["remove", "subtract", "action"],
  },
  smile: {
    name: "Smile",
    component: SmileIcon,
    tags: ["emotion", "happy", "feedback"],
  },
  frown: {
    name: "Frown",
    component: FrownIcon,
    tags: ["emotion", "sad", "feedback"],
  },
  "alert-circle": {
    name: "AlertCircle",
    component: AlertCircleIcon,
    tags: ["alert", "warning", "info"],
  },
  "alert-triangle": {
    name: "AlertTriangle",
    component: AlertTriangleIcon,
    tags: ["alert", "warning", "danger"],
  },
  check: {
    name: "Check",
    component: CheckIcon,
    tags: ["confirm", "success", "valid"],
  },
  "check-circle": {
    name: "CheckCircle",
    component: CheckCircleIcon,
    tags: ["confirm", "success", "valid"],
  },
  x: { name: "X", component: XIcon, tags: ["close", "cancel", "invalid"] },
  "x-circle": {
    name: "XCircle",
    component: XCircleIcon,
    tags: ["close", "cancel", "invalid"],
  },
  "search-2": {
    name: "Search2",
    component: Search2Icon,
    tags: ["search", "find", "magnifying"],
  },
};

// Named exports for direct imports
export {
  // Navigation & UI
  LoaderIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  FileCodeIcon,
  HomeIcon,
  SearchIcon,
  SearchXIcon,
  MenuIcon,
  MenuOpenIcon,
  SettingsIcon,
  GridIcon,
  Grid3x3Icon,
  Columns2Icon,
  Columns3Icon,
  ListIcon,
  ListChecksIcon,
  ListOrderedIcon,
  SlidersIcon,
  // Financial & Analytics
  TrendingUpIcon,
  TrendingDownIcon,
  BarChartIcon,
  BarChart2Icon,
  LineChartIcon,
  AreaChartIcon,
  PieChartIcon,
  DonutChartIcon,
  WalletIcon,
  CreditCardIcon,
  DollarSignIcon,
  PercentIcon,
  GaugeIcon,
  GaugeCircleIcon,
  // Business & Operations
  BuildingIcon,
  Building2Icon,
  BriefcaseIcon,
  Briefcase2Icon,
  TargetIcon,
  TargetCircleIcon,
  ZapIcon,
  Zap2Icon,
  ShieldIcon,
  ShieldAlertIcon,
  ArchiveIcon,
  ArchiveXIcon,
  // Notifications & Communication
  BellIcon,
  BellOffIcon,
  MailIcon,
  MailOpenIcon,
  MessageCircleIcon,
  MessageSquareIcon,
  InboxIcon,
  // Date & Time
  CalendarIcon,
  CalendarCheckIcon,
  ClockIcon,
  ClockAlertIcon,
  // Location
  MapPinIcon,
  MapPinCheckIcon,
  // Data & Analytics
  LayersIcon,
  ActivityIcon,
  ActivitySquareIcon,
  DataIcon,
  FunnelIcon,
  FilterIcon,
  AwardIcon,
  StarIcon,
  // Actions
  DownloadIcon,
  DownloadCloudIcon,
  UploadIcon,
  UploadCloudIcon,
  ShareIcon,
  Share2Icon,
  CopyIcon,
  ClipboardIcon,
  RepeatIcon,
  TrashIcon,
  // Security
  LockIcon,
  UnlockIcon,
  GlobeIcon,
  // Utilities
  HelpCircleIcon,
  PlusCircleIcon,
  PlusIcon,
  MinusIcon,
  SmileIcon,
  FrownIcon,
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckIcon,
  CheckCircleIcon,
  XIcon,
  XCircleIcon,
  Search2Icon,
};

// Utility to get all icon names
export const getIconNames = (): string[] => Object.keys(icons);

// Utility to get icon by name
export const getIcon = (name: string): IconMetadata | undefined => icons[name];

// Default export with all icons
export default icons;

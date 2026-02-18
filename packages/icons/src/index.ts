import type { ComponentType, SVGProps } from "react";

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
    component: LoaderIcon,
    name: "Loader",
    tags: ["loading", "spinner", "animation"],
  },
  user: {
    component: UserIcon,
    name: "User",
    tags: ["person", "profile", "account"],
  },
  "chevron-down": {
    component: ChevronDownIcon,
    name: "ChevronDown",
    tags: ["chevron", "arrow", "down", "navigation"],
  },
  "chevron-up": {
    component: ChevronUpIcon,
    name: "ChevronUp",
    tags: ["chevron", "arrow", "up", "navigation"],
  },
  "chevron-left": {
    component: ChevronLeftIcon,
    name: "ChevronLeft",
    tags: ["chevron", "arrow", "left", "navigation"],
  },
  "chevron-right": {
    component: ChevronRightIcon,
    name: "ChevronRight",
    tags: ["chevron", "arrow", "right", "navigation"],
  },
  "layout-dashboard": {
    component: LayoutDashboardIcon,
    name: "LayoutDashboard",
    tags: ["layout", "dashboard", "grid", "saas"],
  },
  "file-code": {
    component: FileCodeIcon,
    name: "FileCode",
    tags: ["file", "code", "document", "programming"],
  },
  home: {
    component: HomeIcon,
    name: "Home",
    tags: ["home", "house", "dashboard", "navigation"],
  },
  search: {
    component: SearchIcon,
    name: "Search",
    tags: ["search", "find", "magnifying", "glass"],
  },
  "search-x": {
    component: SearchXIcon,
    name: "SearchX",
    tags: ["search", "clear", "close", "no results"],
  },
  menu: {
    component: MenuIcon,
    name: "Menu",
    tags: ["navigation", "menu", "hamburger", "dashboard"],
  },
  "menu-open": {
    component: MenuOpenIcon,
    name: "MenuOpen",
    tags: ["navigation", "menu", "dashboard"],
  },
  settings: {
    component: SettingsIcon,
    name: "Settings",
    tags: ["configuration", "preferences", "dashboard"],
  },
  grid: {
    component: GridIcon,
    name: "Grid",
    tags: ["layout", "grid", "2x2", "dashboard"],
  },
  "grid-3x3": {
    component: Grid3x3Icon,
    name: "Grid3x3",
    tags: ["layout", "grid", "3x3", "dashboard"],
  },
  "columns-2": {
    component: Columns2Icon,
    name: "Columns2",
    tags: ["layout", "columns", "dashboard"],
  },
  "columns-3": {
    component: Columns3Icon,
    name: "Columns3",
    tags: ["layout", "columns", "dashboard"],
  },
  list: {
    component: ListIcon,
    name: "List",
    tags: ["list", "navigation", "dashboard"],
  },
  "list-checks": {
    component: ListChecksIcon,
    name: "ListChecks",
    tags: ["list", "checklist", "tasks", "dashboard"],
  },
  "list-ordered": {
    component: ListOrderedIcon,
    name: "ListOrdered",
    tags: ["list", "ordered", "numbering", "dashboard"],
  },
  sliders: {
    component: SlidersIcon,
    name: "Sliders",
    tags: ["settings", "controls", "configuration", "dashboard"],
  },

  // Financial & Analytics
  "trending-up": {
    component: TrendingUpIcon,
    name: "TrendingUp",
    tags: ["chart", "financial", "analytics", "growth"],
  },
  "trending-down": {
    component: TrendingDownIcon,
    name: "TrendingDown",
    tags: ["chart", "financial", "analytics", "decline"],
  },
  "bar-chart": {
    component: BarChartIcon,
    name: "BarChart",
    tags: ["chart", "financial", "analytics", "data"],
  },
  "bar-chart-2": {
    component: BarChart2Icon,
    name: "BarChart2",
    tags: ["chart", "financial", "analytics", "data"],
  },
  "line-chart": {
    component: LineChartIcon,
    name: "LineChart",
    tags: ["chart", "financial", "analytics", "data"],
  },
  "area-chart": {
    component: AreaChartIcon,
    name: "AreaChart",
    tags: ["chart", "financial", "analytics", "data"],
  },
  "pie-chart": {
    component: PieChartIcon,
    name: "PieChart",
    tags: ["chart", "financial", "analytics", "data"],
  },
  "donut-chart": {
    component: DonutChartIcon,
    name: "DonutChart",
    tags: ["chart", "financial", "analytics", "data"],
  },
  wallet: {
    component: WalletIcon,
    name: "Wallet",
    tags: ["payment", "financial", "money"],
  },
  "credit-card": {
    component: CreditCardIcon,
    name: "CreditCard",
    tags: ["payment", "financial", "money", "card"],
  },
  "dollar-sign": {
    component: DollarSignIcon,
    name: "DollarSign",
    tags: ["currency", "financial", "money", "price"],
  },
  percent: {
    component: PercentIcon,
    name: "Percent",
    tags: ["discount", "financial", "analytics", "percentage"],
  },
  gauge: {
    component: GaugeIcon,
    name: "Gauge",
    tags: ["performance", "analytics", "metrics"],
  },
  "gauge-circle": {
    component: GaugeCircleIcon,
    name: "GaugeCircle",
    tags: ["performance", "analytics", "metrics"],
  },

  // Business & Operations
  building: {
    component: BuildingIcon,
    name: "Building",
    tags: ["company", "organization", "saas", "business"],
  },
  "building-2": {
    component: Building2Icon,
    name: "Building2",
    tags: ["company", "organization", "saas", "business"],
  },
  briefcase: {
    component: BriefcaseIcon,
    name: "Briefcase",
    tags: ["work", "business", "projects", "saas"],
  },
  "briefcase-2": {
    component: Briefcase2Icon,
    name: "Briefcase2",
    tags: ["work", "business", "projects", "saas"],
  },
  target: {
    component: TargetIcon,
    name: "Target",
    tags: ["goals", "metrics", "business", "saas"],
  },
  "target-circle": {
    component: TargetCircleIcon,
    name: "TargetCircle",
    tags: ["goals", "metrics", "business", "saas"],
  },
  zap: {
    component: ZapIcon,
    name: "Zap",
    tags: ["performance", "power", "energy", "saas"],
  },
  "zap-2": {
    component: Zap2Icon,
    name: "Zap2",
    tags: ["performance", "power", "energy", "saas"],
  },
  shield: {
    component: ShieldIcon,
    name: "Shield",
    tags: ["security", "protection", "saas"],
  },
  "shield-alert": {
    component: ShieldAlertIcon,
    name: "ShieldAlert",
    tags: ["security", "alert", "warning", "saas"],
  },
  archive: {
    component: ArchiveIcon,
    name: "Archive",
    tags: ["storage", "backup", "files", "saas"],
  },
  "archive-x": {
    component: ArchiveXIcon,
    name: "ArchiveX",
    tags: ["delete", "remove", "storage", "saas"],
  },

  // Notifications & Communication
  bell: {
    component: BellIcon,
    name: "Bell",
    tags: ["notification", "alert", "dashboard"],
  },
  "bell-off": {
    component: BellOffIcon,
    name: "BellOff",
    tags: ["notification", "alert", "disabled", "dashboard"],
  },
  mail: {
    component: MailIcon,
    name: "Mail",
    tags: ["email", "communication", "message"],
  },
  "mail-open": {
    component: MailOpenIcon,
    name: "MailOpen",
    tags: ["email", "communication", "message"],
  },
  "message-circle": {
    component: MessageCircleIcon,
    name: "MessageCircle",
    tags: ["chat", "communication", "message"],
  },
  "message-square": {
    component: MessageSquareIcon,
    name: "MessageSquare",
    tags: ["chat", "communication", "message"],
  },
  inbox: {
    component: InboxIcon,
    name: "Inbox",
    tags: ["email", "communication", "notification"],
  },

  // Date & Time
  calendar: {
    component: CalendarIcon,
    name: "Calendar",
    tags: ["date", "scheduling", "time"],
  },
  "calendar-check": {
    component: CalendarCheckIcon,
    name: "CalendarCheck",
    tags: ["date", "scheduling", "confirmed"],
  },
  clock: {
    component: ClockIcon,
    name: "Clock",
    tags: ["time", "duration", "scheduling"],
  },
  "clock-alert": {
    component: ClockAlertIcon,
    name: "ClockAlert",
    tags: ["time", "alert", "warning"],
  },

  // Location
  "map-pin": {
    component: MapPinIcon,
    name: "MapPin",
    tags: ["location", "maps", "geo"],
  },
  "map-pin-check": {
    component: MapPinCheckIcon,
    name: "MapPinCheck",
    tags: ["location", "maps", "confirmed"],
  },

  // Data & Analytics
  layers: {
    component: LayersIcon,
    name: "Layers",
    tags: ["data", "structure", "analytics"],
  },
  activity: {
    component: ActivityIcon,
    name: "Activity",
    tags: ["data", "analytics", "metrics"],
  },
  "activity-square": {
    component: ActivitySquareIcon,
    name: "ActivitySquare",
    tags: ["data", "analytics", "metrics"],
  },
  data: {
    component: DataIcon,
    name: "Data",
    tags: ["data", "structure", "analytics"],
  },
  funnel: {
    component: FunnelIcon,
    name: "Funnel",
    tags: ["filter", "analytics", "data"],
  },
  filter: {
    component: FilterIcon,
    name: "Filter",
    tags: ["filter", "analytics", "data"],
  },
  award: {
    component: AwardIcon,
    name: "Award",
    tags: ["achievement", "recognition", "saas"],
  },
  star: {
    component: StarIcon,
    name: "Star",
    tags: ["rating", "favorite", "achievement"],
  },

  // Actions
  download: {
    component: DownloadIcon,
    name: "Download",
    tags: ["export", "file", "action"],
  },
  "download-cloud": {
    component: DownloadCloudIcon,
    name: "DownloadCloud",
    tags: ["export", "cloud", "file"],
  },
  upload: {
    component: UploadIcon,
    name: "Upload",
    tags: ["import", "file", "action"],
  },
  "upload-cloud": {
    component: UploadCloudIcon,
    name: "UploadCloud",
    tags: ["import", "cloud", "file"],
  },
  share: {
    component: ShareIcon,
    name: "Share",
    tags: ["share", "distribute", "action"],
  },
  "share-2": {
    component: Share2Icon,
    name: "Share2",
    tags: ["share", "distribute", "action"],
  },
  copy: {
    component: CopyIcon,
    name: "Copy",
    tags: ["duplicate", "clipboard", "action"],
  },
  clipboard: {
    component: ClipboardIcon,
    name: "Clipboard",
    tags: ["paste", "clipboard", "action"],
  },
  repeat: {
    component: RepeatIcon,
    name: "Repeat",
    tags: ["redo", "refresh", "sync"],
  },
  trash: {
    component: TrashIcon,
    name: "Trash",
    tags: ["delete", "remove", "action"],
  },

  // Security
  lock: {
    component: LockIcon,
    name: "Lock",
    tags: ["security", "protection", "locked"],
  },
  unlock: {
    component: UnlockIcon,
    name: "Unlock",
    tags: ["security", "protection", "unlocked"],
  },
  globe: {
    component: GlobeIcon,
    name: "Globe",
    tags: ["world", "internet", "web"],
  },

  // Utilities
  "help-circle": {
    component: HelpCircleIcon,
    name: "HelpCircle",
    tags: ["help", "information", "faq"],
  },
  "plus-circle": {
    component: PlusCircleIcon,
    name: "PlusCircle",
    tags: ["add", "create", "action"],
  },
  plus: {
    component: PlusIcon,
    name: "Plus",
    tags: ["add", "create", "action"],
  },
  minus: {
    component: MinusIcon,
    name: "Minus",
    tags: ["remove", "subtract", "action"],
  },
  smile: {
    component: SmileIcon,
    name: "Smile",
    tags: ["emotion", "happy", "feedback"],
  },
  frown: {
    component: FrownIcon,
    name: "Frown",
    tags: ["emotion", "sad", "feedback"],
  },
  "alert-circle": {
    component: AlertCircleIcon,
    name: "AlertCircle",
    tags: ["alert", "warning", "info"],
  },
  "alert-triangle": {
    component: AlertTriangleIcon,
    name: "AlertTriangle",
    tags: ["alert", "warning", "danger"],
  },
  check: {
    component: CheckIcon,
    name: "Check",
    tags: ["confirm", "success", "valid"],
  },
  "check-circle": {
    component: CheckCircleIcon,
    name: "CheckCircle",
    tags: ["confirm", "success", "valid"],
  },
  x: { component: XIcon, name: "X", tags: ["close", "cancel", "invalid"] },
  "x-circle": {
    component: XCircleIcon,
    name: "XCircle",
    tags: ["close", "cancel", "invalid"],
  },
  "search-2": {
    component: Search2Icon,
    name: "Search2",
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

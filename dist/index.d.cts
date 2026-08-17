import { ClassValue } from 'clsx';
import React, { CSSProperties, ReactNode, HTMLAttributes, ButtonHTMLAttributes, MouseEventHandler, SelectHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import * as RadixPopover from '@radix-ui/react-popover';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';

declare function cn(...inputs: ClassValue[]): string;

declare const ICON_PATHS: Record<string, React.ReactNode>;
type IconName = keyof typeof ICON_PATHS;
interface IconProps {
    name: IconName | string;
    size?: number;
    fill?: boolean;
    style?: CSSProperties;
    className?: string;
}
declare function Icon({ name, size, fill, style, className }: IconProps): React.JSX.Element;

type AppShellTheme = "light" | "dark";
type AppShellDensity = "compact" | "comfortable" | "spacious";
interface AppShellProps {
    theme?: AppShellTheme;
    density?: AppShellDensity;
    sidebar?: "expanded" | "collapsed";
    primaryColor?: string;
    className?: string;
    children: ReactNode;
}
/**
 * AppShell — root wrapper that establishes the design system context.
 *
 * Layouts a CSS grid:
 *   ┌─ sidebar ─┬─ topbar ─┐
 *   │           ├─ main ───┤
 *   │           └─ statusbar (optional) ─┘
 *
 * Apply data-app="ace" + theme/density attributes. Children should be:
 * <Sidebar/>, <TopBar/>, <main className="main">…</main>, optional <StatusBar/>
 */
declare function AppShell({ theme, density, sidebar, primaryColor, className, children, }: AppShellProps): React.JSX.Element;

interface NavItem {
    id: string;
    label: ReactNode;
    icon?: IconName | string;
    href?: string;
    active?: boolean;
    badge?: ReactNode;
    badgeWarn?: boolean;
    onClick?: () => void;
}
interface NavGroup {
    title?: ReactNode;
    rightAdornment?: ReactNode;
    items: NavItem[];
}
interface SidebarProps {
    brand?: ReactNode;
    workspaceSwitcher?: ReactNode;
    groups: NavGroup[];
    foot?: ReactNode;
    className?: string;
}
declare function Sidebar({ brand, workspaceSwitcher, groups, foot, className }: SidebarProps): React.JSX.Element;
interface SidebarBrandProps {
    mark?: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
}
declare function SidebarBrand({ mark, title, subtitle }: SidebarBrandProps): React.JSX.Element;

interface TopBarProps {
    searchPlaceholder?: string;
    onSearchClick?: () => void;
    searchKbd?: ReactNode;
    showSearch?: boolean;
    className?: string;
    children?: ReactNode;
}
declare function TopBar({ searchPlaceholder, onSearchClick, searchKbd, showSearch, className, children, }: TopBarProps): React.JSX.Element;
interface CostPillProps {
    label?: ReactNode;
    value: ReactNode;
    className?: string;
}
declare function CostPill({ label, value, className }: CostPillProps): React.JSX.Element;

type Status = "running" | "awaiting" | "queued" | "succeeded" | "failed" | "cancelled" | "healthy" | "degraded" | "unreach" | "info" | "critical" | "warning" | "error" | "neutral";
interface StatusDotProps {
    status: Status;
    className?: string;
    "aria-label"?: string;
}
declare function StatusDot({ status, className, ...rest }: StatusDotProps): React.JSX.Element;
interface StatusLabelProps {
    status: Status;
    children?: ReactNode;
    muted?: boolean;
    className?: string;
}
declare function StatusLabel({ status, children, muted, className }: StatusLabelProps): React.JSX.Element;

interface HealthService {
    name: string;
    status: Status;
}
interface StatusBarProps {
    connected?: boolean;
    connectedLabel?: ReactNode;
    disconnectedLabel?: ReactNode;
    queueDepth?: number;
    services?: HealthService[];
    version?: ReactNode;
    docsHref?: string;
    className?: string;
    children?: ReactNode;
}
declare function StatusBar({ connected, connectedLabel, disconnectedLabel, queueDepth, services, version, docsHref, className, children, }: StatusBarProps): React.JSX.Element;
interface HealthDotsProps {
    services: HealthService[];
    className?: string;
}
declare function HealthDots({ services, className }: HealthDotsProps): React.JSX.Element;

interface WorkspaceOption {
    id: string;
    name: string;
    badgeChar?: string;
    badgeColor?: string;
    subtitle?: ReactNode;
}
interface WorkspaceSwitcherProps {
    current: WorkspaceOption;
    options: WorkspaceOption[];
    onSelect?: (id: string) => void;
    onManage?: () => void;
    onCreate?: () => void;
    menuLabel?: ReactNode;
    className?: string;
}
declare function WorkspaceSwitcher({ current, options, onSelect, onManage, onCreate, menuLabel, className, }: WorkspaceSwitcherProps): React.JSX.Element;

interface PageHeadProps {
    title: ReactNode;
    sub?: ReactNode;
    className?: string;
    children?: ReactNode;
}
declare function PageHead({ title, sub, className, children }: PageHeadProps): React.JSX.Element;

interface CardProps {
    title?: ReactNode;
    meta?: ReactNode;
    action?: ReactNode;
    flush?: boolean;
    className?: string;
    children: ReactNode;
}
declare function Card({ title, meta, action, flush, className, children }: CardProps): React.JSX.Element;

type BannerTone = "info" | "warning" | "success";
interface BannerProps {
    tone?: BannerTone;
    icon?: IconName | string;
    title?: ReactNode;
    desc?: ReactNode;
    actionLabel?: ReactNode;
    onAction?: () => void;
    onDismiss?: () => void;
    dismissable?: boolean;
    className?: string;
}
declare function Banner({ tone, icon, title, desc, actionLabel, onAction, onDismiss, dismissable, className, }: BannerProps): React.JSX.Element | null;

type KPIAccent = "amber" | "primary" | "danger";
interface KPIProps {
    label: ReactNode;
    value: ReactNode;
    unit?: ReactNode;
    delta?: number;
    dir?: "up" | "down";
    hint?: ReactNode;
    accent?: KPIAccent;
    onClick?: () => void;
    className?: string;
}
declare function KPI({ label, value, unit, delta, dir, hint, accent, onClick, className }: KPIProps): React.JSX.Element;

interface EmptyProps {
    icon?: IconName | string;
    title: ReactNode;
    sub?: ReactNode;
    action?: ReactNode;
    className?: string;
}
declare function Empty({ icon, title, sub, action, className }: EmptyProps): React.JSX.Element;

interface TabItem {
    value: string;
    label: ReactNode;
    count?: number | string;
}
interface TabsProps {
    tabs: TabItem[];
    value: string;
    onChange?: (next: string) => void;
    pill?: boolean;
    className?: string;
}
declare function Tabs({ tabs, value, onChange, pill, className }: TabsProps): React.JSX.Element;

interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
    onClick?: () => void;
    current?: boolean;
    mono?: boolean;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}
declare function Breadcrumb({ items, className }: BreadcrumbProps): React.JSX.Element;

declare function Table({ className, children, ...rest }: HTMLAttributes<HTMLTableElement>): React.JSX.Element;
interface CellStackProps {
    className?: string;
    children: ReactNode;
}
declare function CellStack({ className, children }: CellStackProps): React.JSX.Element;
interface CellMetaProps {
    name: ReactNode;
    sub?: ReactNode;
    className?: string;
}
declare function CellMeta({ name, sub, className }: CellMetaProps): React.JSX.Element;

type ButtonVariant = "primary" | "secondary" | "ghost" | "gray" | "danger";
type ButtonSize = "sm" | "md" | "lg";
/**
 * Props are spelled out explicitly (rather than just extending
 * `ButtonHTMLAttributes<HTMLButtonElement>`) so consumers with their own
 * `@types/react` install — possibly resolved through a different module
 * graph than the kit's — see a stable surface that doesn't depend on
 * TS unifying two parallel React type trees.
 */
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    leftIcon?: IconName | string;
    rightIcon?: IconName | string;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
    title?: string;
    "aria-label"?: string;
}
declare function Button({ variant, size, leftIcon, rightIcon, className, children, ...rest }: ButtonProps): React.JSX.Element;
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconName | string;
    size?: ButtonSize;
    tooltip?: string;
    children?: ReactNode;
}
declare function IconButton({ icon, size, tooltip, className, ...rest }: IconButtonProps): React.JSX.Element;

type BadgeTone = "default" | "primary" | "success" | "warning" | "error" | "info";
interface BadgeProps {
    tone?: BadgeTone;
    dot?: boolean;
    className?: string;
    children: ReactNode;
}
declare function Badge({ tone, dot, className, children }: BadgeProps): React.JSX.Element;

interface ChipProps {
    active?: boolean;
    leftIcon?: IconName | string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children: ReactNode;
}
declare function Chip({ active, leftIcon, onClick, className, children }: ChipProps): React.JSX.Element;
interface TagProps {
    removable?: boolean;
    onRemove?: MouseEventHandler<HTMLSpanElement>;
    className?: string;
    children: ReactNode;
}
declare function Tag({ removable, onRemove, className, children }: TagProps): React.JSX.Element;

type AvatarSize = "sm" | "md" | "lg" | "xl";
interface AvatarProps {
    name?: string;
    src?: string;
    size?: AvatarSize;
    color?: string;
    className?: string;
}
declare function Avatar({ name, src, size, color, className }: AvatarProps): React.JSX.Element;
interface AvatarStackUser {
    name: string;
    color?: string;
}
interface AvatarStackProps {
    users: AvatarStackUser[];
    max?: number;
    className?: string;
}
declare function AvatarStack({ users, max, className }: AvatarStackProps): React.JSX.Element;

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    leftIcon?: IconName | string;
}
declare function TextInput({ label, hint, error, leftIcon, className, ...rest }: TextInputProps): React.JSX.Element;
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
}
declare function Textarea({ label, hint, error, className, ...rest }: TextareaProps): React.JSX.Element;
interface SelectOption {
    label: string;
    value: string;
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    options: Array<SelectOption | string>;
}
declare function Select({ label, hint, error, options, className, ...rest }: SelectProps): React.JSX.Element;

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
    checked?: boolean;
    onChange?: (next: boolean) => void;
}
declare function Toggle({ checked, onChange, ...rest }: ToggleProps): React.JSX.Element;
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
    checked?: boolean;
    onChange?: (next: boolean) => void;
    label?: ReactNode;
}
declare function Checkbox({ checked, onChange, label, ...rest }: CheckboxProps): React.JSX.Element;
interface RadioProps {
    checked?: boolean;
    onChange?: (value: string) => void;
    name?: string;
    value: string;
    label?: ReactNode;
}
declare function Radio({ checked, onChange, name, value, label }: RadioProps): React.JSX.Element;

interface SparklineProps {
    data: number[];
    color?: string;
    w?: number;
    h?: number;
    fill?: boolean;
}
declare function Sparkline({ data, color, w, h, fill, }: SparklineProps): React.JSX.Element | null;

type MeterTone = "is-warn" | "is-danger" | "is-teal" | "";
interface MeterProps {
    label: ReactNode;
    current: number;
    cap: number;
    format?: (n: number) => string;
    tone?: MeterTone;
    unit?: string;
    className?: string;
}
declare function Meter({ label, current, cap, format, tone, unit, className, }: MeterProps): React.JSX.Element;

interface LineSeries {
    data: number[];
    color?: string;
    label?: string;
}
interface LineChartProps {
    series: LineSeries[];
    w?: number;
    h?: number;
    labels?: string[];
    yTicks?: number;
}
declare function LineChart({ series, w, h, labels, yTicks }: LineChartProps): React.JSX.Element;
interface BarChartProps {
    data: number[];
    labels?: string[];
    w?: number;
    h?: number;
    color?: string;
}
declare function BarChart({ data, labels, w, h, color, }: BarChartProps): React.JSX.Element;
interface DonutSegment {
    value: number;
    color: string;
    label?: string;
}
interface DonutProps {
    segments: DonutSegment[];
    size?: number;
    thickness?: number;
}
declare function Donut({ segments, size, thickness }: DonutProps): React.JSX.Element;

interface DialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Dialog({ open, onOpenChange, children }: DialogProps): React.JSX.Element;
declare const DialogTrigger: React.ForwardRefExoticComponent<RadixDialog.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface DialogContentProps {
    title?: ReactNode;
    description?: ReactNode;
    width?: number | string;
    showClose?: boolean;
    className?: string;
    children: ReactNode;
    onPointerDownOutside?: (event: Event) => void;
    onInteractOutside?: (event: Event) => void;
}
declare function DialogContent({ title, description, width, showClose, className, children, onPointerDownOutside, onInteractOutside, }: DialogContentProps): React.JSX.Element;
declare function DialogBody({ className, children, }: {
    className?: string;
    children: ReactNode;
}): React.JSX.Element;
declare function DialogFooter({ className, children, }: {
    className?: string;
    children: ReactNode;
}): React.JSX.Element;
declare const DialogClose: React.ForwardRefExoticComponent<RadixDialog.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;

type DrawerSide = "right" | "left";
interface DrawerProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Drawer({ open, onOpenChange, children }: DrawerProps): React.JSX.Element;
declare const DrawerTrigger: React.ForwardRefExoticComponent<RadixDialog.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface DrawerContentProps {
    side?: DrawerSide;
    width?: number | string;
    title?: ReactNode;
    showClose?: boolean;
    className?: string;
    children: ReactNode;
}
declare function DrawerContent({ side, width, title, showClose, className, children, }: DrawerContentProps): React.JSX.Element;
declare const DrawerClose: React.ForwardRefExoticComponent<RadixDialog.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;

interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    delayDuration?: number;
    className?: string;
    triggerAsChild?: boolean;
}
declare function Tooltip({ content, children, side, delayDuration, className, triggerAsChild, }: TooltipProps): React.JSX.Element;

interface PopoverProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Popover({ open, onOpenChange, children }: PopoverProps): React.JSX.Element;
declare const PopoverTrigger: React.ForwardRefExoticComponent<RadixPopover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface PopoverContentProps {
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    className?: string;
    children: ReactNode;
}
declare function PopoverContent({ side, align, className, children, }: PopoverContentProps): React.JSX.Element;

interface DropdownProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Dropdown({ open, onOpenChange, children }: DropdownProps): React.JSX.Element;
declare const DropdownTrigger: React.ForwardRefExoticComponent<RadixDropdown.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface DropdownContentProps {
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    className?: string;
    children: ReactNode;
}
declare function DropdownContent({ side, align, className, children, }: DropdownContentProps): React.JSX.Element;
interface DropdownItemProps {
    onSelect?: (e: Event) => void;
    danger?: boolean;
    disabled?: boolean;
    className?: string;
    children: ReactNode;
}
declare function DropdownItem({ onSelect, danger, disabled, className, children, }: DropdownItemProps): React.JSX.Element;
declare function DropdownLabel({ children }: {
    children: ReactNode;
}): React.JSX.Element;
declare function DropdownSeparator(): React.JSX.Element;

interface AccordionProps {
    type?: "single" | "multiple";
    defaultValue?: string | string[];
    value?: string | string[];
    onValueChange?: (value: any) => void;
    collapsible?: boolean;
    className?: string;
    children: ReactNode;
}
declare function Accordion({ type, defaultValue, value, onValueChange, collapsible, className, children, }: AccordionProps): React.JSX.Element;
interface AccordionItemProps {
    value: string;
    className?: string;
    children: ReactNode;
}
declare function AccordionItem({ value, className, children }: AccordionItemProps): React.JSX.Element;
interface AccordionTriggerProps {
    className?: string;
    children: ReactNode;
}
declare function AccordionTrigger({ className, children }: AccordionTriggerProps): React.JSX.Element;
interface AccordionContentProps {
    className?: string;
    children: ReactNode;
}
declare function AccordionContent({ className, children }: AccordionContentProps): React.JSX.Element;

export { Accordion, AccordionContent, type AccordionContentProps, AccordionItem, type AccordionItemProps, type AccordionProps, AccordionTrigger, type AccordionTriggerProps, AppShell, type AppShellDensity, type AppShellProps, type AppShellTheme, Avatar, type AvatarProps, type AvatarSize, AvatarStack, type AvatarStackProps, type AvatarStackUser, Badge, type BadgeProps, type BadgeTone, Banner, type BannerProps, type BannerTone, BarChart, type BarChartProps, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardProps, CellMeta, type CellMetaProps, CellStack, type CellStackProps, Checkbox, type CheckboxProps, Chip, type ChipProps, CostPill, type CostPillProps, Dialog, DialogBody, DialogClose, DialogContent, type DialogContentProps, DialogFooter, type DialogProps, DialogTrigger, Donut, type DonutProps, type DonutSegment, Drawer, DrawerClose, DrawerContent, type DrawerContentProps, type DrawerProps, type DrawerSide, DrawerTrigger, Dropdown, DropdownContent, type DropdownContentProps, DropdownItem, type DropdownItemProps, DropdownLabel, type DropdownProps, DropdownSeparator, DropdownTrigger, Empty, type EmptyProps, HealthDots, type HealthDotsProps, type HealthService, Icon, IconButton, type IconButtonProps, type IconName, type IconProps, KPI, type KPIAccent, type KPIProps, LineChart, type LineChartProps, type LineSeries, Meter, type MeterProps, type MeterTone, type NavGroup, type NavItem, PageHead, type PageHeadProps, Popover, PopoverContent, type PopoverContentProps, type PopoverProps, PopoverTrigger, Radio, type RadioProps, Select, type SelectOption, type SelectProps, Sidebar, SidebarBrand, type SidebarBrandProps, type SidebarProps, Sparkline, type SparklineProps, type Status, StatusBar, type StatusBarProps, StatusDot, type StatusDotProps, StatusLabel, type StatusLabelProps, type TabItem, Table, Tabs, type TabsProps, Tag, type TagProps, TextInput, type TextInputProps, Textarea, type TextareaProps, Toggle, type ToggleProps, Tooltip, type TooltipProps, TopBar, type TopBarProps, type WorkspaceOption, WorkspaceSwitcher, type WorkspaceSwitcherProps, cn };

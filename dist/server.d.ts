import { ClassValue } from 'clsx';
import React, { CSSProperties, ReactNode, HTMLAttributes } from 'react';

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

interface EmptyProps {
    icon?: IconName | string;
    title: ReactNode;
    sub?: ReactNode;
    action?: ReactNode;
    className?: string;
}
declare function Empty({ icon, title, sub, action, className }: EmptyProps): React.JSX.Element;

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

type BadgeTone = "default" | "primary" | "success" | "warning" | "error" | "info";
interface BadgeProps {
    tone?: BadgeTone;
    dot?: boolean;
    className?: string;
    children: ReactNode;
}
declare function Badge({ tone, dot, className, children }: BadgeProps): React.JSX.Element;

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

export { AppShell, type AppShellDensity, type AppShellProps, type AppShellTheme, Avatar, type AvatarProps, type AvatarSize, AvatarStack, type AvatarStackProps, type AvatarStackUser, Badge, type BadgeProps, type BadgeTone, BarChart, type BarChartProps, Card, type CardProps, CellMeta, type CellMetaProps, CellStack, type CellStackProps, Donut, type DonutProps, type DonutSegment, Empty, type EmptyProps, HealthDots, type HealthDotsProps, type HealthService, Icon, type IconName, type IconProps, LineChart, type LineChartProps, type LineSeries, Meter, type MeterProps, type MeterTone, PageHead, type PageHeadProps, type Status, StatusBar, type StatusBarProps, StatusDot, type StatusDotProps, StatusLabel, type StatusLabelProps, Table, cn };

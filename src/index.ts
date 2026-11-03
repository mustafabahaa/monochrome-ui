import type {} from './mui';
import type {} from './mui-ui-roles';
import type {} from './mui-component-roles';

export type SemanticPaletteColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

// Public UI primitive surface. Applications import components here so this
// package remains the single supported entry point for visual building blocks.
export * from '@mui/material';
export {
  BarChart,
  ChartsGrid,
  ChartsReferenceLine,
  ChartsXAxis,
  LineChart,
} from '@mui/x-charts';
export * from '@mui/x-date-pickers';
export { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export { designTokens } from './foundations/tokens';
export { BrandMark } from './components/BrandMark';
export { EmptyStateLayout } from './components/EmptyStateLayout';
export type { EmptyStateLayoutProps } from './components/EmptyStateLayout';
export { CalendarDayButton } from './components/CalendarDayButton';
export type { CalendarDayButtonProps } from './components/CalendarDayButton';
export { PageHeader, SectionHeader } from './components/PageHeaders';
export type { PageHeaderBackAction, PageHeaderProps, SectionHeaderProps } from './components/PageHeaders';
export { PageScaffold } from './components/PageScaffold';
export type { PageScaffoldProps } from './components/PageScaffold';
export { ConfirmationDialog } from './components/ConfirmationDialog';
export type { ConfirmationDialogProps } from './components/ConfirmationDialog';
export { BrandLoadingScreen } from './components/BrandLoadingScreen';
export type { BrandLoadingScreenProps } from './components/BrandLoadingScreen';
export { BrandButton, MobileNavigationItem, NavigationAction, NavigationItem } from './components/NavigationPrimitives';
export { DestructiveListIcon } from './components/ListPrimitives';
export { CardFaceArtwork } from './components/CardFaceArtwork';
export { CardChip, ContactlessIcon } from './components/CardHardware';
export {
  MobileBottomNavigationAction,
  MobileBottomNavigationItem,
  MobileBottomNavigationShape,
  MobileBottomNavigationShell,
} from './components/BottomNavigationPrimitives';
export type { MobileBottomNavigationItemProps } from './components/BottomNavigationPrimitives';
export { MetricBadge } from './components/MetricBadge';
export type { MetricBadgeProps, MetricBadgeTone } from './components/MetricBadge';
export { ChartColorMarker } from './components/ChartColorMarker';
export type { ChartColorMarkerProps } from './components/ChartColorMarker';
export { ActivityStateText } from './components/ActivityStateText';
export {
  AiAssistantFooter,
  AiAssistantLoadingBadge,
  AiAssistantPage,
  AiAssistantStreamCursor,
} from './components/AiAssistantPrimitives';
export { AssistantChat } from './components/AssistantChat';
export type { AssistantChatMessage, AssistantChatProps } from './components/AssistantChat';
export {
  SystemStatusAction,
  SystemStatusCode,
  SystemStatusContent,
  SystemStatusLogo,
  SystemStatusTitle,
} from './components/SystemStatusPrimitives';
export { SystemStatusLayout } from './components/SystemStatusLayout';
export type { SystemStatusLayoutProps } from './components/SystemStatusLayout';
export {
  RowActionGroup,
  CompactIconButton,
  EditableListRow,
  DividedDetailRow,
  ResponsiveSummaryItem,
} from './components/RowPrimitives';
export { SaveFeedbackMotion } from './components/SaveFeedbackMotion';
export type { SaveFeedbackMotionProps, SaveFeedbackMotionVariant } from './components/SaveFeedbackMotion';
export { ComparisonColumn, ChartGuide, ChartSwatch, TrendAreaChart } from './components/ChartPrimitives';
export {
  RankedMetricTile,
  PulseSkeleton,
  StatusBadge,
  SupportingSummary,
  PercentageValue,
} from './components/MetricPulsePrimitives';
export type {
  MetricTileRank,
  MetricTileTone,
  SkeletonShape,
  StatusBadgeTone,
} from './components/MetricPulsePrimitives';
export { modeTokens } from './foundations/mode';
export { layoutTokens } from './foundations/layout';
export { createMonochromeTheme, appTheme } from './theme/createMonochromeTheme';
export type { ThemeMode } from './foundations/types';

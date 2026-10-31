import type {} from './mui';
import type {} from './mui-ui-roles';
import type {} from './mui-component-roles';

// Public UI primitive surface. Applications import components here so this
// package remains the single supported entry point for visual building blocks.
export * from '@mui/material';

export { designTokens } from './foundations/tokens';
export { BrandMark } from './components/BrandMark';
export { BrandLoadingScreen } from './components/BrandLoadingScreen';
export type { BrandLoadingScreenProps } from './components/BrandLoadingScreen';
export { BrandButton, MobileNavigationItem, NavigationAction, NavigationItem } from './components/NavigationPrimitives';
export { DestructiveListIcon } from './components/ListPrimitives';
export { BankCardArtwork } from './components/BankCardArtwork';
export { CardChip, ContactlessIcon } from './components/CardHardware';
export {
  MobileBottomNavigationAction,
  MobileBottomNavigationItem,
  MobileBottomNavigationShape,
  MobileBottomNavigationShell,
} from './components/BottomNavigationPrimitives';
export type { MobileBottomNavigationItemProps } from './components/BottomNavigationPrimitives';
export { BudgetMetricBadge } from './components/BudgetMetricBadge';
export type { BudgetMetricBadgeProps, BudgetMetricTone } from './components/BudgetMetricBadge';
export { ChartColorMarker } from './components/ChartColorMarker';
export type { ChartColorMarkerProps } from './components/ChartColorMarker';
export { CardActivityText } from './components/CardActivityText';
export {
  AiAssistantFooter,
  AiAssistantLoadingBadge,
  AiAssistantPage,
  AiAssistantStreamCursor,
} from './components/AiAssistantPrimitives';
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
  BudgetAllocationActions,
  BudgetAllocationRemoveButton,
  BudgetAllocationRow,
  BudgetCycleAccountRow,
  BudgetCycleSummaryItem,
} from './components/BudgetCyclePrimitives';
export { SaveFeedbackMotion } from './components/SaveFeedbackMotion';
export type { SaveFeedbackMotionProps, SaveFeedbackMotionVariant } from './components/SaveFeedbackMotion';
export { CycleCashFlowColumn, CycleCashFlowGuide, CycleChartSwatch, CycleTrendLineChart } from './components/CycleAnalyticsPrimitives';
export {
  BudgetPulseCategoryTile,
  BudgetPulseSkeleton,
  BudgetPulseStatus,
  BudgetPulseSummary,
  BudgetPulseValue,
} from './components/BudgetPulsePrimitives';
export type {
  BudgetPulseCategoryRank,
  BudgetPulseCategoryTone,
  BudgetPulseSkeletonVariant,
  BudgetPulseStatusTone,
} from './components/BudgetPulsePrimitives';
export { modeTokens } from './foundations/mode';
export { layoutTokens } from './foundations/layout';
export { createMonochromeTheme, appTheme } from './theme/createMonochromeTheme';
export type { ThemeMode } from './foundations/types';

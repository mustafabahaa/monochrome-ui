import '@mui/material/Chip';
import '@mui/material/Button';
import '@mui/material/Paper';
import '@mui/material/styles';
import '@mui/material/Typography';
import '@mui/material/MenuItem';
import '@mui/material/Avatar';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    filter: true;
    filterSelected: true;
    filterAction: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    segmented: true;
    segmentedSelected: true;
    keypad: true;
    keypadBack: true;
    compactField: true;
    primaryAction: true;
    assistantPrompt: true;
    assistantPromptFeatured: true;
    assistantSend: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    sectionSurface: true;
    cardSurface: true;
    cardSurfaceHeader: true;
    detailSurface: true;
    amountPanel: true;
    amountPanelInactive: true;
    selectable: true;
    selectableSelected: true;
    assistantAvatar: true;
    assistantComposer: true;
    assistantUserMessage: true;
    assistantReply: true;
    assistantMessageAvatar: true;
    assistantHeader: true;
    assistantCooldown: true;
    assistantAction: true;
    assistantChart: true;
    saveFeedbackOverlay: true;
    iconBadge: true;
    balanceTile: true;
    dividedRow: true;
    timelineRow: true;
    capacityTrack: true;
    capacityFill: true;
    capacityOverflow: true;
    detailRow: true;
    groupIdentityRow: true;
    navigationMenu: true;
    workspaceSidebar: true;
    emptyState: true;
    emptyStateIcon: true;
    emptyStateLogo: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    metricLabelCompact: true;
    summaryValue: true;
    metricMetadataCompact: true;
    tableColumnHeading: true;
    tableEmptyMessage: true;
    metricPercent: true;
    tableCellLabel: true;
    tableCellValue: true;
    statusBadgeLabel: true;
    percentageValue: true;
    percentageSuffix: true;
    supportingSummary: true;
    percentageLarge: true;
    percentageCompact: true;
    metricCaption: true;
    metricValueCaption: true;
    offlineBannerMessage: true;
    listItemTitle: true;
    listItemMetadata: true;
    listItemValue: true;
  }
}

declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides {
    userMenuAvatar: true;
    appBar: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    sectionLabel: React.CSSProperties;
    fieldHint: React.CSSProperties;
    amountValue: React.CSSProperties;
    amountPlaceholder: React.CSSProperties;
    amountCurrency: React.CSSProperties;
    assistantPromptLabel: React.CSSProperties;
    assistantPromptTitle: React.CSSProperties;
    assistantMessage: React.CSSProperties;
    metricTitle: React.CSSProperties;
    metricValue: React.CSSProperties;
    metricValueCompact: React.CSSProperties;
    metricMetadata: React.CSSProperties;
    sectionTitle: React.CSSProperties;
    sectionSubtitle: React.CSSProperties;
    userMenuName: React.CSSProperties;
    groupTitle: React.CSSProperties;
    groupIdentifier: React.CSSProperties;
    pageTitle: React.CSSProperties;
    emptyStateTitle: React.CSSProperties;
    emptyStateDescription: React.CSSProperties;
    tooltipEmphasis: React.CSSProperties;
    tooltipDetail: React.CSSProperties;
    offlineBannerMessage: React.CSSProperties;
    listItemTitle: React.CSSProperties;
    listItemMetadata: React.CSSProperties;
    listItemValue: React.CSSProperties;
    systemStatusCode: React.CSSProperties;
    systemStatusTitle: React.CSSProperties;
    chartTooltipValue: React.CSSProperties;
    chartPeriodLabel: React.CSSProperties;
    chartLegendLabel: React.CSSProperties;
    cardAmount: React.CSSProperties;
    cardNumber: React.CSSProperties;
    cardDetailNumber: React.CSSProperties;
    cardDetailAmount: React.CSSProperties;
    cardDetailLabel: React.CSSProperties;
    cardMicro: React.CSSProperties;
    cardExpiry: React.CSSProperties;
    activityAmount: React.CSSProperties;
    metricLabelCompact: React.CSSProperties;
    summaryValue: React.CSSProperties;
    metricMetadataCompact: React.CSSProperties;
    tableColumnHeading: React.CSSProperties;
    tableEmptyMessage: React.CSSProperties;
    metricPercent: React.CSSProperties;
    tableCellLabel: React.CSSProperties;
    tableCellValue: React.CSSProperties;
    statusBadgeLabel: React.CSSProperties;
    percentageValue: React.CSSProperties;
    percentageSuffix: React.CSSProperties;
    supportingSummary: React.CSSProperties;
    percentageLarge: React.CSSProperties;
    percentageCompact: React.CSSProperties;
    metricCaption: React.CSSProperties;
    metricValueCaption: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionLabel?: React.CSSProperties;
    fieldHint?: React.CSSProperties;
    amountValue?: React.CSSProperties;
    amountPlaceholder?: React.CSSProperties;
    amountCurrency?: React.CSSProperties;
    assistantPromptLabel?: React.CSSProperties;
    assistantPromptTitle?: React.CSSProperties;
    assistantMessage?: React.CSSProperties;
    metricTitle?: React.CSSProperties;
    metricValue?: React.CSSProperties;
    metricValueCompact?: React.CSSProperties;
    metricMetadata?: React.CSSProperties;
    sectionTitle?: React.CSSProperties;
    sectionSubtitle?: React.CSSProperties;
    userMenuName?: React.CSSProperties;
    groupTitle?: React.CSSProperties;
    groupIdentifier?: React.CSSProperties;
    pageTitle?: React.CSSProperties;
    emptyStateTitle?: React.CSSProperties;
    emptyStateDescription?: React.CSSProperties;
    tooltipEmphasis?: React.CSSProperties;
    tooltipDetail?: React.CSSProperties;
    offlineBannerMessage?: React.CSSProperties;
    listItemTitle?: React.CSSProperties;
    listItemMetadata?: React.CSSProperties;
    listItemValue?: React.CSSProperties;
    systemStatusCode?: React.CSSProperties;
    systemStatusTitle?: React.CSSProperties;
    chartTooltipValue?: React.CSSProperties;
    chartPeriodLabel?: React.CSSProperties;
    chartLegendLabel?: React.CSSProperties;
    cardAmount?: React.CSSProperties;
    cardNumber?: React.CSSProperties;
    cardDetailNumber?: React.CSSProperties;
    cardDetailAmount?: React.CSSProperties;
    cardDetailLabel?: React.CSSProperties;
    cardMicro?: React.CSSProperties;
    cardExpiry?: React.CSSProperties;
    activityAmount?: React.CSSProperties;
    metricLabelCompact?: React.CSSProperties;
    summaryValue?: React.CSSProperties;
    metricMetadataCompact?: React.CSSProperties;
    tableColumnHeading?: React.CSSProperties;
    tableEmptyMessage?: React.CSSProperties;
    metricPercent?: React.CSSProperties;
    tableCellLabel?: React.CSSProperties;
    tableCellValue?: React.CSSProperties;
    statusBadgeLabel?: React.CSSProperties;
    percentageValue?: React.CSSProperties;
    percentageSuffix?: React.CSSProperties;
    supportingSummary?: React.CSSProperties;
    percentageLarge?: React.CSSProperties;
    percentageCompact?: React.CSSProperties;
    metricCaption?: React.CSSProperties;
    metricValueCaption?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionLabel: true;
    fieldHint: true;
    amountValue: true;
    amountPlaceholder: true;
    amountCurrency: true;
    assistantPromptLabel: true;
    assistantPromptTitle: true;
    assistantMessage: true;
    metricTitle: true;
    metricValue: true;
    metricValueCompact: true;
    metricMetadata: true;
    sectionTitle: true;
    sectionSubtitle: true;
    userMenuName: true;
    groupTitle: true;
    groupIdentifier: true;
    pageTitle: true;
    emptyStateTitle: true;
    emptyStateDescription: true;
    tooltipEmphasis: true;
    tooltipDetail: true;
    chartTooltipValue: true;
    chartPeriodLabel: true;
    chartLegendLabel: true;
    cardAmount: true;
    cardNumber: true;
    cardDetailNumber: true;
    cardDetailAmount: true;
    cardDetailLabel: true;
    cardMicro: true;
    cardExpiry: true;
    activityAmount: true;
    offlineBannerMessage: true;
    listItemTitle: true;
    listItemMetadata: true;
    listItemValue: true;
    systemStatusCode: true;
    systemStatusTitle: true;
  }
}

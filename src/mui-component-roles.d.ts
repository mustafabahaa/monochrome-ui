import '@mui/material/AppBar';
import '@mui/material/Avatar';
import '@mui/material/MenuItem';
import '@mui/material/Chip';
import '@mui/material/IconButton';
import '@mui/material/Paper';
import '@mui/material/Skeleton';
import '@mui/material/Typography';

declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides { profile: true }
}
declare module '@mui/material/MenuItem' {
  interface MenuItemOwnProps { variant?: 'menuAction' | 'destructiveAction' }
}
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides { overlayBadge: true; quietBadge: true }
}
declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps { variant?: 'overlayAction' | 'userMenuTrigger' | 'utilityAction' | 'quietAction' }
}
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    mediaHero: true;
    shellBar: true;
    mediaScrim: true;
    insetPanel: true;
    iconBadge: true;
    dangerIconBadge: true;
    imagePicker: true;
    emptyState: true;
    emptyStateIcon: true;
    infoPanel: true;
    messagePanel: true;
    approvalPanel: true;
    codePanel: true;
    metadataPanel: true;
    tokenValue: true;
    appBackdrop: true;
    systemBackdrop: true;
    mobileDock: true;
    desktopRail: true;
    popoverMenuSurface: true;
    listRow: true;
  }
}
declare module '@mui/material/Skeleton' {
  interface SkeletonPropsVariantOverrides { mediaCover: true; mediaBadge: true; mediaTitle: true; mediaMetadata: true; mediaAction: true }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heroTitle: true;
    heroMetadata: true;
    monospaceValue: true;
    dialogTitle: true;
    sectionTitle: true;
    settingLabel: true;
    panelTitle: true;
    verificationCode: true;
    codeValue: true;
    technicalValue: true;
    navigationLabel: true;
    statusMetadata: true;
    statusMetadataEmphasis: true;
    brandWordmark: true;
    breadcrumb: true;
    breadcrumbCurrent: true;
    userName: true;
    userDetail: true;
    errorTitle: true;
    emptyStateTitle: true;
  }
}


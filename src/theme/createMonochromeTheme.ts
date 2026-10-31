import type {} from '../mui';
import type {} from '../mui-ui-roles';
import type {} from '../mui-component-roles';
import { createTheme, type Components, type Theme, type ThemeOptions } from '@mui/material/styles';
import { designTokens } from '../foundations/tokens';
import { modeTokens } from '../foundations/mode';
import type { ThemeMode } from '../foundations/types';
import { typography } from './typography';
import { createPalette } from './palette';
import {
  baselineOverrides,
  buttonOverrides,
  cardOverrides,
  chipOverrides,
  feedbackOverrides,
  inputOverrides,
  navigationOverrides,
  overlayOverrides,
  tableOverrides,
  uiRoleOverrides,
  componentRoleOverrides,
} from './components';

function mergeRecords(left: Record<string, unknown>, right: Record<string, unknown>): Record<string, unknown> {
  const result = { ...left };
  for (const [key, value] of Object.entries(right)) {
    const previous = result[key];
    const mergeable = (item: unknown): item is Record<string, unknown> =>
      Boolean(item) && typeof item === 'object' && !Array.isArray(item);
    result[key] = mergeable(previous) && mergeable(value) ? mergeRecords(previous, value) : value;
  }
  return result;
}

function mergeComponentOverrides(...sources: Components<Theme>[]): Components<Theme> {
  const result: Record<string, Record<string, unknown>> = {};
  for (const source of sources) {
    for (const [name, incoming] of Object.entries(source)) {
      if (!incoming || typeof incoming !== 'object') continue;
      const current = result[name] ?? {};
      const merged = mergeRecords(current, incoming as Record<string, unknown>);
      const currentVariants = current.variants;
      const incomingVariants = (incoming as { variants?: unknown }).variants;
      if (Array.isArray(currentVariants) && Array.isArray(incomingVariants)) {
        merged.variants = [...currentVariants, ...incomingVariants];
      }
      result[name] = merged;
    }
  }
  return result as Components<Theme>;
}

export function createMonochromeTheme(mode: ThemeMode, ...extensions: ThemeOptions[]): Theme {
  const context = { mode, tokens: modeTokens(mode) };
  const components = mergeComponentOverrides(
    baselineOverrides(context),
    buttonOverrides(context),
    cardOverrides(context),
    chipOverrides(context),
    feedbackOverrides(context),
    inputOverrides(context),
    navigationOverrides(context),
    overlayOverrides(context),
    tableOverrides(context),
    uiRoleOverrides,
    componentRoleOverrides(context),
  );
  const baseTheme = createTheme({
    palette: createPalette(mode),
    typography,
    shape: { borderRadius: designTokens.radius.moderate },
    components,
  });
  return extensions.length ? createTheme(baseTheme, ...extensions) : baseTheme;
}

export const appTheme = createMonochromeTheme('light');

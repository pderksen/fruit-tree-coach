/**
 * SVG fruit icons — flat, colorful illustrations for all FruitTreeType values.
 * Consistent style: simple geometric shapes, soft colors, no faces.
 */

import type { FruitTreeType } from "@/lib/types";
import type { ComponentType } from "react";

import { AppleIcon } from "./apple";
import { ApricotIcon } from "./apricot";
import { AvocadoIcon } from "./avocado";
import { CherryIcon } from "./cherry";
import { DateIcon } from "./date";
import { FigIcon } from "./fig";
import { GrapefruitIcon } from "./grapefruit";
import { GuavaIcon } from "./guava";
import { KumquatIcon } from "./kumquat";
import { LemonIcon } from "./lemon";
import { LimeIcon } from "./lime";
import { MandarinIcon } from "./mandarin";
import { MangoIcon } from "./mango";
import { MulberryIcon } from "./mulberry";
import { NectarineIcon } from "./nectarine";
import { OliveIcon } from "./olive";
import { OrangeIcon } from "./orange";
import { PawpawIcon } from "./pawpaw";
import { PeachIcon } from "./peach";
import { PearIcon } from "./pear";
import { PersimmonIcon } from "./persimmon";
import { PlumIcon } from "./plum";
import { PomegranateIcon } from "./pomegranate";
import { TangeloIcon } from "./tangelo";
import { TangerineIcon } from "./tangerine";

export interface FruitSvgProps {
  size?: number;
}

export const FRUIT_SVG_MAP: Record<FruitTreeType, ComponentType<FruitSvgProps>> = {
  Apple: AppleIcon,
  Apricot: ApricotIcon,
  Avocado: AvocadoIcon,
  Cherry: CherryIcon,
  Date: DateIcon,
  Fig: FigIcon,
  Grapefruit: GrapefruitIcon,
  Guava: GuavaIcon,
  Kumquat: KumquatIcon,
  Lemon: LemonIcon,
  Lime: LimeIcon,
  Mandarin: MandarinIcon,
  Mango: MangoIcon,
  Mulberry: MulberryIcon,
  Nectarine: NectarineIcon,
  Olive: OliveIcon,
  Orange: OrangeIcon,
  Pawpaw: PawpawIcon,
  Peach: PeachIcon,
  Pear: PearIcon,
  Persimmon: PersimmonIcon,
  Plum: PlumIcon,
  Pomegranate: PomegranateIcon,
  Tangelo: TangeloIcon,
  Tangerine: TangerineIcon,
};

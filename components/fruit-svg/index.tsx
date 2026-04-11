/**
 * SVG fruit icons — flat, colorful illustrations for all FruitTreeType values.
 * Consistent style: simple geometric shapes, soft colors, no faces.
 */

import type { FruitTreeType } from "@/lib/types";
import type { ComponentType } from "react";

import { AppleIcon } from "./apple";
import { ApricotIcon } from "./apricot";
import { AvocadoIcon } from "./avocado";
import { BananaIcon } from "./banana";
import { CherryIcon } from "./cherry";
import { CoconutIcon } from "./coconut";
import { CrabappleIcon } from "./crabapple";
import { DatePalmIcon } from "./date-palm";
import { DragonFruitIcon } from "./dragon-fruit";
import { ElderberryIcon } from "./elderberry";
import { FigIcon } from "./fig";
import { GooseberryIcon } from "./gooseberry";
import { GrapefruitIcon } from "./grapefruit";
import { GuavaIcon } from "./guava";
import { JackfruitIcon } from "./jackfruit";
import { JujubeIcon } from "./jujube";
import { KiwiIcon } from "./kiwi";
import { KumquatIcon } from "./kumquat";
import { LemonIcon } from "./lemon";
import { LimeIcon } from "./lime";
import { LoquatIcon } from "./loquat";
import { MangoIcon } from "./mango";
import { MedlarIcon } from "./medlar";
import { MulberryIcon } from "./mulberry";
import { NectarineIcon } from "./nectarine";
import { OliveIcon } from "./olive";
import { OrangeIcon } from "./orange";
import { PapayaIcon } from "./papaya";
import { PassionFruitIcon } from "./passion-fruit";
import { PawpawIcon } from "./pawpaw";
import { PeachIcon } from "./peach";
import { PearIcon } from "./pear";
import { PersimmonIcon } from "./persimmon";
import { PlumIcon } from "./plum";
import { PomegranateIcon } from "./pomegranate";
import { QuinceIcon } from "./quince";
import { StarfruitIcon } from "./starfruit";
import { TangerineIcon } from "./tangerine";

export interface FruitSvgProps {
  size?: number;
}

export const FRUIT_SVG_MAP: Record<FruitTreeType, ComponentType<FruitSvgProps>> = {
  Apple: AppleIcon,
  Apricot: ApricotIcon,
  Avocado: AvocadoIcon,
  Banana: BananaIcon,
  Cherry: CherryIcon,
  Coconut: CoconutIcon,
  Crabapple: CrabappleIcon,
  "Date Palm": DatePalmIcon,
  "Dragon Fruit": DragonFruitIcon,
  Elderberry: ElderberryIcon,
  Fig: FigIcon,
  Gooseberry: GooseberryIcon,
  Grapefruit: GrapefruitIcon,
  Guava: GuavaIcon,
  Jackfruit: JackfruitIcon,
  Jujube: JujubeIcon,
  Kiwi: KiwiIcon,
  Kumquat: KumquatIcon,
  Lemon: LemonIcon,
  Lime: LimeIcon,
  Loquat: LoquatIcon,
  Mango: MangoIcon,
  Medlar: MedlarIcon,
  Mulberry: MulberryIcon,
  Nectarine: NectarineIcon,
  Olive: OliveIcon,
  Orange: OrangeIcon,
  Papaya: PapayaIcon,
  "Passion Fruit": PassionFruitIcon,
  Pawpaw: PawpawIcon,
  Peach: PeachIcon,
  Pear: PearIcon,
  Persimmon: PersimmonIcon,
  Plum: PlumIcon,
  Pomegranate: PomegranateIcon,
  Quince: QuinceIcon,
  Starfruit: StarfruitIcon,
  Tangerine: TangerineIcon,
};

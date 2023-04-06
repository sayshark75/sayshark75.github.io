import { extendTheme } from "@chakra-ui/react";
import {
  Black,
  BlackTrans1,
  BlackTrans2,
  BlackTrans3,
  Blue,
  BluePlus,
  DarkBlue,
  DarkGrey,
  ExtraDarkBlue,
  GCDBase,
  GCDBg,
  GCDLevel1,
  GCDLevel2,
  GCDLevel3,
  GCDLevel4,
  GCDRing,
  GCDText,
  GCDTitle,
  GCLBase,
  GCLBg,
  GCLLevel1,
  GCLLevel2,
  GCLLevel3,
  GCLLevel4,
  GCLRing,
  GCLText,
  GCLTitle,
  HeartRed,
  LeafGreen,
  LightBlueHex,
  LightGreenHex,
  LightestBlue,
  SuiteBlue,
  White,
  WhiteTrans0,
  WhiteTrans1,
  WhiteTrans2,
  WhiteTrans3,
} from "./ColorPallet";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      MainBgColor: {
        default: LightestBlue,
        _dark: BlackTrans2,
      },
      White_Black: {
        default: White,
        _dark: Black,
      },
      White_Gray: {
        default: White,
        _dark: DarkGrey,
      },
      Black_White: {
        default: Black,
        _dark: White,
      },
      White_White: {
        default: White,
        _dark: White,
      },
      Black_Black: {
        default: Black,
        _dark: Black,
      },
      DarkBlue_White: {
        default: DarkBlue,
        _dark: White,
      },
      White_LBHex: {
        default: White,
        _dark: LightBlueHex,
      },
      LeafGreen_HeartRed: {
        default: LeafGreen,
        _dark: HeartRed,
      },
      LGHex_LBHex: {
        default: LightGreenHex,
        _dark: LightBlueHex,
      },      
      DarkBlue_WTrans2: {
        default: DarkBlue,
        _dark: WhiteTrans2,
      },
      Blue_White: {
        default: Blue,
        _dark: White,
      },
      White_Blue: {
        default: White,
        _dark: Blue,
      },
      SuiteBlue_White: {
        default: SuiteBlue,
        _dark: White,
      },
      DarkBlue_WTrans3: {
        default: DarkBlue,
        _dark: WhiteTrans3,
      },
      WTrans2_DarkBlue: {
        default: DarkBlue,
        _dark: WhiteTrans2,
      },
      DarkBlue_Black: {
        default: DarkBlue,
        _dark: Black,
      },
      DarkGrey_Black: {
        default: DarkGrey,
        _dark: Black,
      },
      DarkGrey_White: {
        default: DarkGrey,
        _dark: White,
      },
      Black_LGreenHex: {
        default: Black,
        _dark: LightGreenHex,
      },
      WTrans1_BTrans3: {
        default: WhiteTrans1,
        _dark: BlackTrans3,
      },
      WTrans3_BTrans1: {
        default: WhiteTrans3,
        _dark: BlackTrans1,
      },
      White_WTrans0: {
        default: White,
        _dark: WhiteTrans0,
      },
      White_WTrans1: {
        default: White,
        _dark: WhiteTrans1,
      },
      White_WTrans2: {
        default: White,
        _dark: WhiteTrans2,
      },
      EDBlue_White: {
        default: ExtraDarkBlue,
        _dark: White,
      },
      BluePlus_WTrans2: {
        default: BluePlus,
        _dark: WhiteTrans2,
      },
      LeafGreen_White: {
        default: LeafGreen,
        _dark: White,
      },
      GCLevel1: {
        default: GCLLevel1,
        _dark: GCDLevel1,
      },
      GCLevel2: {
        default: GCLLevel2,
        _dark: GCDLevel2,
      },
      GCLevel3: {
        default: GCLLevel3,
        _dark: GCDLevel3,
      },
      GCLevel4: {
        default: GCLLevel4,
        _dark: GCDLevel4,
      },
      GCBase: {
        default: GCLBase,
        _dark: GCDBase,
      },
      GCBg: {
        default: GCLBg,
        _dark: GCDBg,
      },
      GCTitle: {
        default: GCLTitle,
        _dark: GCDTitle,
      },
      GCText: {
        default: GCLText,
        _dark: GCDText,
      },
      GCRing: {
        default: GCLRing,
        _dark: GCDRing,
      },
    },
  },
});

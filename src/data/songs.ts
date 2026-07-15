export interface Song {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  pcNotes: string;
  mobileNotes: string;
  sheetPath?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Sample data with Genshin Impact songs
export const songs: Song[] = [
  {
    id: '1',
    title: "KARMA",
    artist: "Alien Stage",
    thumbnail: 'https://i.ytimg.com/vi/e8lSYc3WvJ8/maxresdefault.jpg',
    sheetPath: './genshinsheet/1.genshinsheet',
    difficulty: 'hard',
    pcNotes: `[FRW] Y rest(8) S D F D S [DHQ] E rest(12) S - [DGS] W rest(8)
N A A A N [FNQ] E F rest(11) D [FRW] Y rest(8) S D F
G F - [DHQ] E - A rest(9) A M [FN] G H W F rest(4)
[AGHN] rest(5) B [AFHN] rest(7) D N [AN] [NS] [AD] [FNS] [DG] [FX] [AN] X [AN]
- [AN] X - [NS] [DX] F D [AN] S D - [AN] [EN] [CW] [AEN]
T [AEN] [RX] [AS] [TX] - [EY] [AS] [WX] [CW] [DG] -- [DG] [DG] Z [AHN]
- [BQ] [ANQ] Q [ABN] H [HV] [FHR] A V [FH] - [AH] [AD] - Q
[BW] E [BHW] E R - [HW] V N [HW] [HW] - [HW] [EV] [HMRW] T
[QRW] - [EQY] [AN] C [AN] T [ANR] X [AD] - X [AD] [ADNR] R [EH]
- [GH] X B [GH] - [GH] [AE] - [GQ] B Z [GQ] W [GQ] Q
- [EHQ] C N [HQ] [HQ] - [GQ] - [BHW] [BEQ] - [HQRWX] [HQ] X [HNVW]
- [EQ] [RWX] [AN] - [WX] E [RW] [NV] R [NVY] [BRY] - [NSTWY] B X
[NS] [NS] B [NSW] G [BH] X [NTW] [QR] [ETZ] [BN] Z - [BCEHT] [BCR] [EQTZ]
[ABN] [QZ] W [EQ] [EYZ] [EHT] [QT] [EQVY] - Z [FH] V [FH] [DN] G H
- [ADH] N V [FW] [CEG] [HRWX] - [AN] X - [ANW] [AEN] [CRW] [AN] W
[CE] [CR] T C Y [TW] [BN] [BRWY] X [QRY] - [JRTW] F S M T
T T [RWY] [ENST] [ETV] [NVW] - Z [HTWX] - [RW] [RW] C X [HRW] [EQY]
- [AENY] C - [AN] [AN] - [ANQ] R [ANY] - [CN] - X [ADFNS] -
X [ADFNS] - [ADFNSX] X [ADFNS] [DHS] X [ADFNSX] [ADFNS] rest(3) [BDFNS] - [BDFNS] - [BDFNS]
[BDFNS] [NSV] [BDFNS] - [BDFNS] Z - [ABNS] Z [ABNS] rest(3) [BNS] [FHS] - [BNS] [BNS]
- C [DGS] - C [DGS] - [CDGS] [ADN] [ADH] - [ABDS] [ABDS] X - [DFNS]
X [DFNS] - [DFNSX] Z [ADFN] [ADFH] Z [ADFNZ] - [ADFN] [BFNS] - [BFNS] - [BFNS]
[BFNS] - [BFNS] [FHNS] - [BFNS] [BFNS] - [BCDN] [BDN] - C [DHN] B [CDGHN] [ADGHN]
[DGHNQ] [ADGNQ] [ADGHN] [ADGHN] [GHNSX] -- [GHNSX] [GHNSX] [GHNSX] [AGHNX] [FSX] [FHX] [HQX] [QWX] [RWX] [RXY]
[BH] [RWY] G H G - [HV] [HRW] G H G - [HV] [HRW] G H
G [CH] [HRW] G H -- G [CG] [EHT] F G - F [GV] [HRW] F
[FGH] rest(3) [BD] [EGQ] M D B M N [AN] [CFS] [ADN] [GH] C [DG] [NVX]
- [RSWY] [RSWY] - B [NVZ] -- [RSWY] [RSWY] - X V [BN] - [HNRWY] [HNRWY]
- N [NV] - [GHRSWY] [GHRSWY] rest(3) [NS] - [GHSTW] [GHSTW] [CM] -- [AHN] - [ANQ]
[ANQ] [MSW] C [ADE] [HRWX] - [FHW] [NS] [FHNSVX] D [DF] F [BCZ] - H W
H F S N V X [SX] - [CD] [AFNS] - [AN] - [NS] [AD] [FS]
[AN] S D [FS] [FQ] H [HS] [GHS] - [FNS] - [FNS] S B [NX] [GS]
- [AF] [DGNZ] - [DN] Z [DGN] F [ADGZ] [BN] [AZ] S [AD] - [DHZ] [DGN]
[AG] [ADH] -- [NV] [NV] C B N - [CNZ] - [SV] [BD] [FNS] [AN] -
[NS] - D [FS] S D F G H [GQS] - [FHS] -- [AFH] [FGMS] rest(4)
G G G [FHS] [DG] [DG] - S - [GNS] [FS] [FS] - [FNS] - [ADH]
[DH] [EQ] [RW] T Q E Y -- [DG] [CFS] [ADZ] [FSX] - [AN] - [NSV]
[DNV] [FX] [AN] G [AHX] H [AN] H [AHNQ] [GQ] [BGHX] [GH] X [BFN] - [BN]
A N [NX] B [QV] [CQ] [QZ] H [BN] [FZ] [BN] - [BN] Z [BNS] D
F [BFN] G Z H H - [FH] [FH] Z [NRV] E - [WZ] Q H
H G F F G G [FH] W [FHW] - [FHW] rest(4) [RW] E [RW] [EH]
W [VX] W [HW] H G [FX] H H H H G F S [FS] G
F [GS] F G F [GS] [FS] H [VX] -- [VX] F [VX] D [AN] -
[BCF] F [BCG] H W Q W [DG] [AD] [AFNS] - [AN] - [NS] [AD] [FS]
[AN] S D [FS] [FQ] H [HS] [GHS] -- [FNS] [FNS] - S B [NX] [GS]
- [AF] [DGNZ] [DN] Z [DGN] - F [ADGZ] -- [AZ] S [AD] - [DHZ] [DGN]
[AG] - [ADH] - [NV] [NV] C B N - [CNZ] - [SV] [BD] [FNS] [AN]
-- [NS] D [FS] S D F G H [GQS] - [FHS] - [AFH] [FGMS] rest(4)
G G G [FHS] - [DG] [DG] - S - [GNS] [FS] [FS] - [FNS] -
[ADH] [DH] - [HQ] [HW] E Q E T -- [NR] E W Q H C
H G F D [FSX] -- X [FHWX] rest(3) [FMNX] - X [EFHQX] rest(3) [FMSX] -
X [FHRWX] rest(3) [BDNX] - [EGHTX] [EGHTX] [EQ] - [FHSX] - X [HRWXY] rest(3) [BFMX] -
X [FHRWX] rest(3) [GMSX] -- [GHTWX] [GHTWX] [HWY] [EHY] [EHQY] rest(3) Y rest(3) [FVX] N F
N F N F N F N G N F N D N [FX] V N
F N F N F N F N G N F N D N [CFZ] N
N F N F N F N F N G N F N D N [CF]
B N F N F N F N F N G N F N D N
[FX] N F N F N F N F N G N F N D N
F N F N F N F N F N G N F N D N
[FZ] N F N F N F N F N G N F N D N`,
    mobileNotes: `(fa2+fa3+re3) la3 rest(8) re2 mi2 fa2 mi2 re2 (la2+mi2+do3) mi3 rest(12) re2 - (mi2+re2+sol2) re3 rest(8)
la1 do2 do2 do2 la1 (la1+fa2+do3) mi3 fa2 rest(11) mi2 (fa2+fa3+re3) la3 rest(8) re2 mi2 fa2
sol2 fa2 - (la2+mi2+do3) mi3 - do2 rest(9) do2 si1 (la1+fa2) sol2 la2 re3 fa2 rest(4)
(la1+do2+la2+sol2) rest(5) sol1 (la1+do2+fa2+la2) rest(7) mi2 la1 (la1+do2) (la1+re2) (do2+mi2) (la1+fa2+re2) (mi2+sol2) (re1+fa2) (la1+do2) re1 (la1+do2)
- (la1+do2) re1 - (la1+re2) (re1+mi2) fa2 mi2 (la1+do2) re2 mi2 - (la1+do2) (la1+mi3) (mi1+re3) (la1+do2+mi3)
sol3 (la1+do2+mi3) (re1+fa3) (do2+re2) (re1+sol3) - (la3+mi3) (do2+re2) (re1+re3) (mi1+re3) (mi2+sol2) -- (mi2+sol2) (mi2+sol2) do1 (la1+do2+la2)
- (sol1+do3) (la1+do2+do3) do3 (la1+sol1+do2) la2 (fa1+la2) (fa2+la2+fa3) do2 fa1 (fa2+la2) - (do2+la2) (do2+mi2) - do3
(sol1+re3) mi3 (sol1+la2+re3) mi3 fa3 - (la2+re3) fa1 la1 (la2+re3) (la2+re3) - (la2+re3) (fa1+mi3) (si1+la2+fa3+re3) sol3
(do3+fa3+re3) - (do3+la3+mi3) (la1+do2) mi1 (la1+do2) sol3 (la1+do2+fa3) re1 (do2+mi2) - re1 (do2+mi2) (la1+do2+mi2+fa3) fa3 (la2+mi3)
- (la2+sol2) re1 sol1 (la2+sol2) - (la2+sol2) (do2+mi3) - (sol2+do3) sol1 do1 (sol2+do3) re3 (sol2+do3) do3
- (la2+do3+mi3) mi1 la1 (la2+do3) (la2+do3) - (sol2+do3) - (sol1+la2+re3) (sol1+do3+mi3) - (re1+la2+do3+fa3+re3) (la2+do3) re1 (fa1+la1+la2+re3)
- (do3+mi3) (re1+fa3+re3) (la1+do2) - (re1+re3) mi3 (fa3+re3) (fa1+la1) fa3 (fa1+la1+la3) (sol1+fa3+la3) - (la1+re2+la3+re3+sol3) sol1 re1
(la1+re2) (la1+re2) sol1 (la1+re2+re3) sol2 (sol1+la2) re1 (la1+re3+sol3) (do3+fa3) (do1+mi3+sol3) (la1+sol1) do1 - (mi1+sol1+la2+mi3+sol3) (mi1+sol1+fa3) (do1+do3+mi3+sol3)
(la1+sol1+do2) (do1+do3) re3 (do3+mi3) (do1+la3+mi3) (la2+mi3+sol3) (do3+sol3) (fa1+do3+la3+mi3) - do1 (fa2+la2) fa1 (fa2+la2) (la1+mi2) sol2 la2
- (do2+la2+mi2) la1 fa1 (fa2+re3) (mi1+sol2+mi3) (re1+la2+fa3+re3) - (la1+do2) re1 - (la1+do2+re3) (la1+do2+mi3) (mi1+fa3+re3) (la1+do2) re3
(mi1+mi3) (mi1+fa3) sol3 mi1 la3 (re3+sol3) (la1+sol1) (sol1+fa3+la3+re3) re1 (do3+fa3+la3) - (si2+fa3+re3+sol3) fa2 re2 si1 sol3
sol3 sol3 (fa3+la3+re3) (la1+re2+mi3+sol3) (fa1+mi3+sol3) (fa1+la1+re3) - do1 (re1+la2+re3+sol3) - (fa3+re3) (fa3+re3) mi1 re1 (la2+fa3+re3) (do3+la3+mi3)
- (la1+do2+la3+mi3) mi1 - (la1+do2) (la1+do2) - (la1+do2+do3) fa3 (la1+do2+la3) - (la1+mi1) - re1 (la1+do2+fa2+mi2+re2) -
re1 (la1+do2+fa2+mi2+re2) - (la1+re1+do2+fa2+mi2+re2) re1 (la1+do2+fa2+mi2+re2) (la2+mi2+re2) re1 (la1+re1+do2+fa2+mi2+re2) (la1+do2+fa2+mi2+re2) rest(3) (la1+sol1+fa2+mi2+re2) - (la1+sol1+fa2+mi2+re2) - (la1+sol1+fa2+mi2+re2)
(la1+sol1+fa2+mi2+re2) (fa1+la1+re2) (la1+sol1+fa2+mi2+re2) - (la1+sol1+fa2+mi2+re2) do1 - (la1+sol1+do2+re2) do1 (la1+sol1+do2+re2) rest(3) (la1+sol1+re2) (fa2+la2+re2) - (la1+sol1+re2) (la1+sol1+re2)
- mi1 (mi2+re2+sol2) - mi1 (mi2+re2+sol2) - (mi1+mi2+re2+sol2) (la1+do2+mi2) (do2+la2+mi2) - (sol1+do2+mi2+re2) (sol1+do2+mi2+re2) re1 - (la1+fa2+mi2+re2)
re1 (la1+fa2+mi2+re2) - (la1+re1+fa2+mi2+re2) do1 (la1+do2+fa2+mi2) (do2+fa2+la2+mi2) do1 (do1+la1+do2+fa2+mi2) - (la1+do2+fa2+mi2) (la1+sol1+fa2+re2) - (la1+sol1+fa2+re2) - (la1+sol1+fa2+re2)
(la1+sol1+fa2+re2) - (la1+sol1+fa2+re2) (la1+fa2+la2+re2) - (la1+sol1+fa2+re2) (la1+sol1+fa2+re2) - (la1+mi1+sol1+mi2) (la1+sol1+mi2) - mi1 (la1+la2+mi2) sol1 (la1+mi1+la2+mi2+sol2) (la1+do2+la2+mi2+sol2)
(la1+la2+mi2+sol2+do3) (la1+do2+mi2+sol2+do3) (la1+do2+la2+mi2+sol2) (la1+do2+la2+mi2+sol2) (la1+re1+la2+re2+sol2) -- (la1+re1+la2+re2+sol2) (la1+re1+la2+re2+sol2) (la1+re1+la2+re2+sol2) (la1+re1+do2+la2+sol2) (re1+fa2+re2) (re1+fa2+la2) (re1+la2+do3) (re1+do3+re3) (re1+fa3+re3) (re1+fa3+la3)
(sol1+la2) (fa3+la3+re3) sol2 la2 sol2 - (fa1+la2) (la2+fa3+re3) sol2 la2 sol2 - (fa1+la2) (la2+fa3+re3) sol2 la2
sol2 (mi1+la2) (la2+fa3+re3) sol2 la2 -- sol2 (mi1+sol2) (la2+mi3+sol3) fa2 sol2 - fa2 (fa1+sol2) (la2+fa3+re3) fa2
(fa2+la2+sol2) rest(3) (sol1+mi2) (sol2+do3+mi3) si1 mi2 sol1 si1 la1 (la1+do2) (mi1+fa2+re2) (la1+do2+mi2) (la2+sol2) mi1 (mi2+sol2) (fa1+la1+re1)
- (re2+fa3+la3+re3) (re2+fa3+la3+re3) - sol1 (do1+fa1+la1) -- (re2+fa3+la3+re3) (re2+fa3+la3+re3) - re1 fa1 (la1+sol1) - (la1+la2+fa3+la3+re3) (la1+la2+fa3+la3+re3)
- la1 (fa1+la1) - (la2+re2+sol2+fa3+la3+re3) (la2+re2+sol2+fa3+la3+re3) rest(3) (la1+re2) - (la2+re2+sol2+re3+sol3) (la2+re2+sol2+re3+sol3) (mi1+si1) -- (la1+do2+la2) - (la1+do2+do3)
(la1+do2+do3) (si1+re2+re3) mi1 (do2+mi2+mi3) (re1+la2+fa3+re3) - (fa2+la2+re3) (la1+re2) (fa1+la1+re1+fa2+la2+re2) mi2 (fa2+mi2) fa2 (do1+mi1+sol1) - la2 re3
la2 fa2 re2 la1 fa1 re1 (re1+re2) - (mi1+mi2) (la1+do2+fa2+re2) - (la1+do2) - (la1+re2) (do2+mi2) (fa2+re2)
(la1+do2) re2 mi2 (fa2+re2) (fa2+do3) la2 (la2+re2) (la2+re2+sol2) - (la1+fa2+re2) - (la1+fa2+re2) re2 sol1 (la1+re1) (re2+sol2)
- (do2+fa2) (do1+la1+mi2+sol2) - (la1+mi2) do1 (la1+mi2+sol2) fa2 (do1+do2+mi2+sol2) (la1+sol1) (do1+do2) re2 (do2+mi2) - (do1+la2+mi2) (la1+mi2+sol2)
(do2+sol2) (do2+la2+mi2) -- (fa1+la1) (fa1+la1) mi1 sol1 la1 - (do1+la1+mi1) - (fa1+re2) (sol1+mi2) (la1+fa2+re2) (la1+do2) -
(la1+re2) - mi2 (fa2+re2) re2 mi2 fa2 sol2 la2 (re2+sol2+do3) - (fa2+la2+re2) -- (do2+fa2+la2) (si1+fa2+re2+sol2) rest(4)
sol2 sol2 sol2 (fa2+la2+re2) (mi2+sol2) (mi2+sol2) - re2 - (la1+re2+sol2) (fa2+re2) (fa2+re2) - (la1+fa2+re2) - (do2+la2+mi2)
(la2+mi2) (do3+mi3) (fa3+re3) sol3 do3 mi3 la3 -- (mi2+sol2) (mi1+fa2+re2) (do1+do2+mi2) (re1+fa2+re2) - (la1+do2) - (fa1+la1+re2)
(fa1+la1+mi2) (re1+fa2) (la1+do2) sol2 (re1+do2+la2) la2 (la1+do2) la2 (la1+do2+la2+do3) (sol2+do3) (re1+sol1+la2+sol2) (la2+sol2) re1 (la1+sol1+fa2) - (la1+sol1)
do2 la1 (la1+re1) sol1 (fa1+do3) (mi1+do3) (do1+do3) la2 (la1+sol1) (do1+fa2) (la1+sol1) - (la1+sol1) do1 (la1+sol1+re2) mi2
fa2 (la1+sol1+fa2) sol2 do1 la2 la2 - (fa2+la2) (fa2+la2) do1 (fa1+la1+fa3) mi3 - (do1+re3) do3 la2
la2 sol2 fa2 fa2 sol2 sol2 (fa2+la2) re3 (fa2+la2+re3) - (fa2+la2+re3) rest(4) (fa3+re3) mi3 (fa3+re3) (la2+mi3)
re3 (fa1+re1) re3 (la2+re3) la2 sol2 (re1+fa2) la2 la2 la2 la2 sol2 fa2 re2 (fa2+re2) sol2
fa2 (re2+sol2) fa2 sol2 fa2 (re2+sol2) (fa2+re2) la2 (fa1+re1) -- (fa1+re1) fa2 (fa1+re1) mi2 (la1+do2) -
(mi1+sol1+fa2) fa2 (mi1+sol1+sol2) la2 re3 do3 re3 (mi2+sol2) (do2+mi2) (la1+do2+fa2+re2) - (la1+do2) - (la1+re2) (do2+mi2) (fa2+re2)
(la1+do2) re2 mi2 (fa2+re2) (fa2+do3) la2 (la2+re2) (la2+re2+sol2) -- (la1+fa2+re2) (la1+fa2+re2) - re2 sol1 (la1+re1) (re2+sol2)
- (do2+fa2) (do1+la1+mi2+sol2) (la1+mi2) do1 (la1+mi2+sol2) - fa2 (do1+do2+mi2+sol2) -- (do1+do2) re2 (do2+mi2) - (do1+la2+mi2) (la1+mi2+sol2)
(do2+sol2) - (do2+la2+mi2) - (fa1+la1) (fa1+la1) mi1 sol1 la1 - (do1+la1+mi1) - (fa1+re2) (sol1+mi2) (la1+fa2+re2) (la1+do2)
-- (la1+re2) mi2 (fa2+re2) re2 mi2 fa2 sol2 la2 (re2+sol2+do3) - (fa2+la2+re2) - (do2+fa2+la2) (si1+fa2+re2+sol2) rest(4)
sol2 sol2 sol2 (fa2+la2+re2) - (mi2+sol2) (mi2+sol2) - re2 - (la1+re2+sol2) (fa2+re2) (fa2+re2) - (la1+fa2+re2) -
(do2+la2+mi2) (la2+mi2) - (la2+do3) (la2+re3) mi3 do3 mi3 sol3 -- (la1+fa3) mi3 re3 do3 la2 mi1
la2 sol2 fa2 mi2 (re1+fa2+re2) -- re1 (re1+fa2+la2+re3) rest(3) (la1+re1+si1+fa2) - re1 (re1+fa2+la2+do3+mi3) rest(3) (re1+si1+fa2+re2) -
re1 (re1+fa2+la2+fa3+re3) rest(3) (la1+re1+sol1+mi2) - (re1+la2+sol2+mi3+sol3) (re1+la2+sol2+mi3+sol3) (do3+mi3) - (re1+fa2+la2+re2) - re1 (re1+la2+fa3+la3+re3) rest(3) (re1+si1+sol1+fa2) -
re1 (re1+fa2+la2+fa3+re3) rest(3) (re1+si1+re2+sol2) -- (re1+la2+sol2+re3+sol3) (re1+la2+sol2+re3+sol3) (la2+la3+re3) (la2+la3+mi3) (la2+do3+la3+mi3) rest(3) la3 rest(3) (fa1+re1+fa2) la1 fa2
la1 fa2 la1 fa2 la1 fa2 la1 sol2 la1 fa2 la1 mi2 la1 (re1+fa2) fa1 la1
fa2 la1 fa2 la1 fa2 la1 fa2 la1 sol2 la1 fa2 la1 mi2 la1 (do1+mi1+fa2) la1
la1 fa2 la1 fa2 la1 fa2 la1 fa2 la1 sol2 la1 fa2 la1 mi2 la1 (mi1+fa2)
sol1 la1 fa2 la1 fa2 la1 fa2 la1 fa2 la1 sol2 la1 fa2 la1 mi2 la1
(re1+fa2) la1 fa2 la1 fa2 la1 fa2 la1 fa2 la1 sol2 la1 fa2 la1 mi2 la1
fa2 la1 fa2 la1 fa2 la1 fa2 la1 fa2 la1 sol2 la1 fa2 la1 mi2 la1
(do1+fa2) la1 fa2 la1 fa2 la1 fa2 la1 fa2 la1 sol2 la1 fa2 la1 mi2 la1`
  },
  {
    id: '2',
    title: "Wiege",
    artist: "Alien Stage",
    thumbnail: 'https://i.ytimg.com/vi/rrngM9DmDfk/maxresdefault.jpg',
    sheetPath: './genshinsheet/2.genshinsheet',
    difficulty: 'hard',
    pcNotes: `[HRY] - R - R - [DJWY] W - [EHNQY] E Q [EHN] [FW] Q V
[AFN] G [ACHN] rest(3) [AHNX] rest(3) Y rest(7) [BH] [FNS] - [BW] [FNRS] E [HN] [AD]
rest(3) [ADN] H [EX] [NSV] - [WX] [NRSV] E [HZ] [AGS] - V [AN] [HS] W
[NV] - Q [BCW] E H [HVX] G H [BCZ] Q [EX] [NSV] W [HN] S
F B [NS] - N [AD] - [BH] [FNS] - [BW] [FNRS] E [HN] [AD] rest(3)
[ADN] H [EX] [NSV] - [EX] [NSTV] R [QZ] [AGS] - V [AN] [HS] E [NV]
- W [BCE] R [HWY] [VX] T [HQR] [BCZ] E [TWX] [NSV] [RW] Z [NV] -
Z [BX] - V [AN] [GSW] N S [FWY] H [FT] S [NWY] A [FW] H
[FR] A [EQX] V N S F [WX] V N S F - [WXY] B [NT]
S [WYZ] C [BW] A [DQ] G - Z V V [NU] Y [AY] F H
Q E - [ADHZ] C [GN] [CH] [EFHZ] X V [NW] [HS] N V - [HNX]
B [HNX] [SW] [FRX] B [HXY] Q X V N [FHS] - X V N [FHS]
- [CHNZ] [ACQZ] [SW] [CDENZ] [CHNYZ] [EY] [NSVX] [NSVX] W [NSVX] [NSVX] [HY] [NSVX] [NSVX] [SW]
[DENVX] [FNRVX] Q [NVX] [NVX] [HY] [NVX] [NVX] [FR] [BNS] [BNS] [DE] [ADFNR] [ADHNY] W [ENSVX]
[NSVX] W [NSVX] [NSVX] [HY] [NSVX] [NSVX] [SW] [DENVX] [FNRVX] [DE] [NVX] [ANQVX] [DE] [NSVWX] [NVX]
Q [BNSW] [BNS] [BGHNSW] rest(3) [SW] [BDENS] [BFNRS] [HY] [BNS] - [SW] [CDENZ] [CFNRZ] Q [CNZ]
- [DE] [BFNRS] [BHNSY] E [ADN] [ADNQ] W [FNSVX] [NVX] - [FNSVX] [ABDGZ] - [NQSVX] W
[NQSVX] W [HY] [NSVX] [FR] [DENSVX] [FR] [NVX] [NSVWX] - [NVX] [DENVX] [FR] [VX] [VX] [DE]
[BX] [BX] [FR] [ABCGTZ] [ABCFRZ] [DE] [BCSWZ] [BCZ] - [NSVWX] [DENVX] [FR] [NSVX] [GNSTVX] [FR] [NSVWX]
[HNVX] - [JMNVX] [ANQVX] [SW] [VX] [HNVX] [DE] [BX] [BHNX] [FR] [ABCGTZ] [ABCFRZ] [DE] [ABCQZ] [BCZ]
X [NSV] A [DX] [NSV] A [SX] [DNV] F [DX] [NSV] Q W [QVX] H F
[HVX] R Y X V rest(4) N S [FWY] H [FT] S [NWY] A [FW] H
[FR] A [EQX] V N S F [WX] V N S F - [WXY] B [NT]
S [WYZ] C [BW] A [DQ] G - Z V V [NU] Y [AY] F H
Q E - [ADHZ] C [GN] [CH] [EFHZ] X V [NW] [HS] N V - [HNX]
B [HNX] [SW] [FRX] B [HXY] Q X V N [FHS] - X V N [FHS]
- [CHNZ] [ACQZ] [SW] [CDENZ] [CHNYZ] [EX] [FNS] - [WX] [FNS] - [HXY] [AFN] - [WX]
[EFNS] R Q [FNS] - [HY] [FNS] - [FRX] [BNS] - [DE] [ADFNR] [HY] [EX] [FNS]
- [WX] [FNS] - [HXY] [AFN] - [WX] [EFNS] R E [FNS] Q E [FNSW] -
X [BNS] - [GHTWY] rest(3) W [BENS] R Y [BNS] - W [ADEN] R - [ADN]
- [DE] [BFNRS] [HY] E [ADN] Q W [FNS] N [FHS] N - [DNX] rest(3) [DN]
rest(3) [DN] rest(3) [GN] F A [FV] rest(3) [AV] rest(3) [NV] rest(3) [NSV] Q F [DNX]
rest(3) [DN] rest(3) [DHN] rest(3) [FN] D N [AV] rest(3) [AV] rest(3) [NV] rest(3) [NSV] Q
F [ACGN] rest(3) [AG] rest(3) [FHNVX] - C [FV] [AD] Q [FS] [WX] [FSV] N [AFQ]
W N [AGV] H X [FN] S X [NV] [FN] [DNVX] V A - V A
[ANX] - A S Q F [DV] - V [DN] rest(3) [SV] rest(3) V A F
[DNX] rest(3) [DN] rest(3) [DHN] rest(3) [HR] E H [FNQS] rest(4) [FHNS] rest(6) [ANVX]`,
    mobileNotes: `(la2+fa3+la3) - fa3 - fa3 - (mi2+si2+la3+re3) re3 - (la1+la2+do3+la3+mi3) mi3 do3 (la1+la2+mi3) (fa2+re3) do3 fa1
(la1+do2+fa2) sol2 (la1+mi1+do2+la2) rest(3) (la1+re1+do2+la2) rest(3) la3 rest(7) (sol1+la2) (la1+fa2+re2) - (sol1+re3) (la1+fa2+re2+fa3) mi3 (la1+la2) (do2+mi2)
rest(3) (la1+do2+mi2) la2 (re1+mi3) (fa1+la1+re2) - (re1+re3) (fa1+la1+re2+fa3) mi3 (do1+la2) (do2+re2+sol2) - fa1 (la1+do2) (la2+re2) re3
(fa1+la1) - do3 (mi1+sol1+re3) mi3 la2 (fa1+re1+la2) sol2 la2 (do1+mi1+sol1) do3 (re1+mi3) (fa1+la1+re2) re3 (la1+la2) re2
fa2 sol1 (la1+re2) - la1 (do2+mi2) - (sol1+la2) (la1+fa2+re2) - (sol1+re3) (la1+fa2+re2+fa3) mi3 (la1+la2) (do2+mi2) rest(3)
(la1+do2+mi2) la2 (re1+mi3) (fa1+la1+re2) - (re1+mi3) (fa1+la1+re2+sol3) fa3 (do1+do3) (do2+re2+sol2) - fa1 (la1+do2) (la2+re2) mi3 (fa1+la1)
- re3 (mi1+sol1+mi3) fa3 (la2+la3+re3) (fa1+re1) sol3 (la2+do3+fa3) (do1+mi1+sol1) mi3 (re1+re3+sol3) (fa1+la1+re2) (fa3+re3) do1 (fa1+la1) -
do1 (re1+sol1) - fa1 (la1+do2) (re2+sol2+re3) la1 re2 (fa2+la3+re3) la2 (fa2+sol3) re2 (la1+la3+re3) do2 (fa2+re3) la2
(fa2+fa3) do2 (re1+do3+mi3) fa1 la1 re2 fa2 (re1+re3) fa1 la1 re2 fa2 - (re1+la3+re3) sol1 (la1+sol3)
re2 (do1+la3+re3) mi1 (sol1+re3) do2 (mi2+do3) sol2 - do1 fa1 fa1 (la1+si3) la3 (do2+la3) fa2 la2
do3 mi3 - (do1+do2+la2+mi2) mi1 (la1+sol2) (mi1+la2) (do1+fa2+la2+mi3) re1 fa1 (la1+re3) (la2+re2) la1 fa1 - (la1+re1+la2)
sol1 (la1+re1+la2) (re2+re3) (re1+fa2+fa3) sol1 (re1+la2+la3) do3 re1 fa1 la1 (fa2+la2+re2) - re1 fa1 la1 (fa2+la2+re2)
- (do1+la1+mi1+la2) (do1+mi1+do2+do3) (re2+re3) (do1+la1+mi1+mi2+mi3) (do1+la1+mi1+la2+la3) (la3+mi3) (fa1+la1+re1+re2) (fa1+la1+re1+re2) re3 (fa1+la1+re1+re2) (fa1+la1+re1+re2) (la2+la3) (fa1+la1+re1+re2) (fa1+la1+re1+re2) (re2+re3)
(fa1+la1+re1+mi2+mi3) (fa1+la1+re1+fa2+fa3) do3 (fa1+la1+re1) (fa1+la1+re1) (la2+la3) (fa1+la1+re1) (fa1+la1+re1) (fa2+fa3) (la1+sol1+re2) (la1+sol1+re2) (mi2+mi3) (la1+do2+fa2+mi2+fa3) (la1+do2+la2+mi2+la3) re3 (fa1+la1+re1+re2+mi3)
(fa1+la1+re1+re2) re3 (fa1+la1+re1+re2) (fa1+la1+re1+re2) (la2+la3) (fa1+la1+re1+re2) (fa1+la1+re1+re2) (re2+re3) (fa1+la1+re1+mi2+mi3) (fa1+la1+re1+fa2+fa3) (mi2+mi3) (fa1+la1+re1) (fa1+la1+re1+do2+do3) (mi2+mi3) (fa1+la1+re1+re2+re3) (fa1+la1+re1)
do3 (la1+sol1+re2+re3) (la1+sol1+re2) (la1+sol1+la2+re2+sol2+re3) rest(3) (re2+re3) (la1+sol1+mi2+re2+mi3) (la1+sol1+fa2+re2+fa3) (la2+la3) (la1+sol1+re2) - (re2+re3) (do1+la1+mi1+mi2+mi3) (do1+la1+mi1+fa2+fa3) do3 (do1+la1+mi1)
- (mi2+mi3) (la1+sol1+fa2+re2+fa3) (la1+sol1+la2+re2+la3) mi3 (la1+do2+mi2) (la1+do2+mi2+do3) re3 (fa1+la1+re1+fa2+re2) (fa1+la1+re1) - (fa1+la1+re1+fa2+re2) (do1+sol1+do2+mi2+sol2) - (fa1+la1+re1+re2+do3) re3
(fa1+la1+re1+re2+do3) re3 (la2+la3) (fa1+la1+re1+re2) (fa2+fa3) (fa1+la1+re1+mi2+re2+mi3) (fa2+fa3) (fa1+la1+re1) (fa1+la1+re1+re2+re3) - (fa1+la1+re1) (fa1+la1+re1+mi2+mi3) (fa2+fa3) (fa1+re1) (fa1+re1) (mi2+mi3)
(re1+sol1) (re1+sol1) (fa2+fa3) (do1+mi1+sol1+do2+sol2+sol3) (do1+mi1+sol1+do2+fa2+fa3) (mi2+mi3) (do1+mi1+sol1+re2+re3) (do1+mi1+sol1) - (fa1+la1+re1+re2+re3) (fa1+la1+re1+mi2+mi3) (fa2+fa3) (fa1+la1+re1+re2) (fa1+la1+re1+re2+sol2+sol3) (fa2+fa3) (fa1+la1+re1+re2+re3)
(fa1+la1+re1+la2) - (fa1+la1+re1+si1+si2) (fa1+la1+re1+do2+do3) (re2+re3) (fa1+re1) (fa1+la1+re1+la2) (mi2+mi3) (re1+sol1) (la1+re1+sol1+la2) (fa2+fa3) (do1+mi1+sol1+do2+sol2+sol3) (do1+mi1+sol1+do2+fa2+fa3) (mi2+mi3) (do1+mi1+sol1+do2+do3) (do1+mi1+sol1)
re1 (fa1+la1+re2) do2 (re1+mi2) (fa1+la1+re2) do2 (re1+re2) (fa1+la1+mi2) fa2 (re1+mi2) (fa1+la1+re2) do3 re3 (fa1+re1+do3) la2 fa2
(fa1+re1+la2) fa3 la3 re1 fa1 rest(4) la1 re2 (fa2+la3+re3) la2 (fa2+sol3) re2 (la1+la3+re3) do2 (fa2+re3) la2
(fa2+fa3) do2 (re1+do3+mi3) fa1 la1 re2 fa2 (re1+re3) fa1 la1 re2 fa2 - (re1+la3+re3) sol1 (la1+sol3)
re2 (do1+la3+re3) mi1 (sol1+re3) do2 (mi2+do3) sol2 - do1 fa1 fa1 (la1+si3) la3 (do2+la3) fa2 la2
do3 mi3 - (do1+do2+la2+mi2) mi1 (la1+sol2) (mi1+la2) (do1+fa2+la2+mi3) re1 fa1 (la1+re3) (la2+re2) la1 fa1 - (la1+re1+la2)
sol1 (la1+re1+la2) (re2+re3) (re1+fa2+fa3) sol1 (re1+la2+la3) do3 re1 fa1 la1 (fa2+la2+re2) - re1 fa1 la1 (fa2+la2+re2)
- (do1+la1+mi1+la2) (do1+mi1+do2+do3) (re2+re3) (do1+la1+mi1+mi2+mi3) (do1+la1+mi1+la2+la3) (re1+mi3) (la1+fa2+re2) - (re1+re3) (la1+fa2+re2) - (re1+la2+la3) (la1+do2+fa2) - (re1+re3)
(la1+fa2+re2+mi3) fa3 do3 (la1+fa2+re2) - (la2+la3) (la1+fa2+re2) - (re1+fa2+fa3) (la1+sol1+re2) - (mi2+mi3) (la1+do2+fa2+mi2+fa3) (la2+la3) (re1+mi3) (la1+fa2+re2)
- (re1+re3) (la1+fa2+re2) - (re1+la2+la3) (la1+do2+fa2) - (re1+re3) (la1+fa2+re2+mi3) fa3 mi3 (la1+fa2+re2) do3 mi3 (la1+fa2+re2+re3) -
re1 (la1+sol1+re2) - (la2+sol2+la3+re3+sol3) rest(3) re3 (la1+sol1+re2+mi3) fa3 la3 (la1+sol1+re2) - re3 (la1+do2+mi2+mi3) fa3 - (la1+do2+mi2)
- (mi2+mi3) (la1+sol1+fa2+re2+fa3) (la2+la3) mi3 (la1+do2+mi2) do3 re3 (la1+fa2+re2) la1 (fa2+la2+re2) la1 - (la1+re1+mi2) rest(3) (la1+mi2)
rest(3) (la1+mi2) rest(3) (la1+sol2) fa2 do2 (fa1+fa2) rest(3) (fa1+do2) rest(3) (fa1+la1) rest(3) (fa1+la1+re2) do3 fa2 (la1+re1+mi2)
rest(3) (la1+mi2) rest(3) (la1+la2+mi2) rest(3) (la1+fa2) mi2 la1 (fa1+do2) rest(3) (fa1+do2) rest(3) (fa1+la1) rest(3) (fa1+la1+re2) do3
fa2 (la1+mi1+do2+sol2) rest(3) (do2+sol2) rest(3) (fa1+la1+re1+fa2+la2) - mi1 (fa1+fa2) (do2+mi2) do3 (fa2+re2) (re1+re3) (fa1+fa2+re2) la1 (do2+fa2+do3)
re3 la1 (fa1+do2+sol2) la2 re1 (la1+fa2) re2 re1 (fa1+la1) (la1+fa2) (fa1+la1+re1+mi2) fa1 do2 - fa1 do2
(la1+re1+do2) - do2 re2 do3 fa2 (fa1+mi2) - fa1 (la1+mi2) rest(3) (fa1+re2) rest(3) fa1 do2 fa2
(la1+re1+mi2) rest(3) (la1+mi2) rest(3) (la1+la2+mi2) rest(3) (la2+fa3) mi3 la2 (la1+fa2+re2+do3) rest(4) (la1+fa2+la2+re2) rest(6) (fa1+la1+re1+do2)`
  },
  {
    id: '3',
    title: "Se mettre sur son trente-et-un !",
    artist: "Hoyo-MiX",
    thumbnail: 'https://i.ytimg.com/vi/EN79SfbcvIE/maxresdefault.jpg',
    sheetPath: './genshinsheet/3.genshinsheet',
    difficulty: 'medium',
    pcNotes: `[DN] D D D - D D D [FN] F F F - F F F
[GN] G G G - G G G [FN] F F F - D D [CD]
D [DHN] H H H - H H H [FHN] H H H - H E
E E [EZ] [EZ] E [EZ] - E [EZ] E [RZ] [RZ] R [RZ] - R
[RZ] R [EZ] E E [RZ] R [RZ] R [TZ] T rest(8) [CD] - [CE] rest(4)
W Q J W Q J H Q J H Q J [FH] A F A
H Q rest(5) G F - D rest(3) D rest(6) E rest(19) N N - N
N - N D N D N D N D N D N D N A
D D H [HN] D H J Q [CR] [EM] J Q J [HM] D F
S [CD] M A N - N H Q [CE] [VW] Q H G [GV] H
X H Q [EX] [CT] E Q J C H N H Q [CE] [VW] Q
H [HV] [MW] W W W M W [CE] C - N H Q [CE] [VW]
Q H G [GV] H X H Q [EX] [CT] E W E [CQ] W [EN]
H [CH] J [QX] H [CQ] J H N D N D N [DH] [JN] Q
[EX] N R X [NY] [BE] S W B [QS] [WZ] [BE] [UZ] [BE] [VW] A
Q V A M [SW] [EM] [SW] [CE] [DJ] [CE] [DU] [NU] [DY] [NY] D U
[NY] A N [AH] [EX] N X [HN] [BQ] M [BJ] [MW] [WZ] [BG] [JZ] B
Q [CJ] [HN] [CD] N B G S [BF] G J W [BR] R [MT] R
[TZ] A D Z A D G [HZ] G Z [AZ] A D Z A D
G [HZ] G Z M [AZ] A D Z A D G [HZ] G Z G
[HN] H [NQ] H [NW] E Q H N G H [HN] A N D A
N D Q A N N N [NW] A N D A N D W A
N E [HX] N N [BW] S [JS] [GZ] A A [DZ] [AF] [AG] [HM] S
[HS] [CJ] [QS] [SW] [EN] A A N [AH] [AH] [JN] [HS] S H [CJ] [HS]
[JS] [JN] [DH] [DJ] [NQ] D D [AQ] - [HN] - [DN] - [CN] rest(5) N
- N rest(3) C N -- N -- C N A [AQ] D H [NQ] A
A D [HQ] N Q N A [AQ] D H [NQ] A A D [HQ] N
Q N [AH] Q [AE] [NW] E [AQ] H A N [AH] Q [AE] [NT] A
E A N [AH] Q [AE] [NW] E [AQ] H A N [AH] Q [AE] [NT]
[AE] Q H [AH] J [QV] H F S [CD] H J W [EN] Q H
G [AH] Q Q W [CE] [CW] E W J H [CJ] C - C -
N [AD] E [DE] [QV] [DH] D [AD] [DX] [HS] Q [ES] T C [MR] E
[MW] [EN] [AD] E [DE] [VW] [AQ] H [AH] M [SW] W W S E C
M E R W [EM] Q [HN] [DN] H [DH] [QV] [AH] D D [AH] W
M [JS] [FS] R [CE] [MW] Q [MQ] W [EN] Q A H [AD] [QX] [DJ]
[CH] D J [HN] A N A N A N A [AV] N A [FV] N
A F [HV] N A F [FV] F [CD] M D M [CJ] D M D
[CJ] E C [CJ] C [EX] N R X [NY] [BE] M W B [MQ] [WZ]
[BE] [UZ] [BE] E [VW] A Q V A M [SW] [EM] [SW] [CE] [JM] [CE]
[MU] [NU] [DY] [NY] U D Y C A N [AH] [EX] N [EX] [HN] [BQ]
M [BJ] M [WZ] B [WZ] [BG] [JN] D H [HN] D [EX] Q Q [AX]
A [AX] A [AX] A [BE] rest(3) [BE] rest(3) [QZ] rest(7) Z X X C B
N B - [AZ]`,
    mobileNotes: `(la1+mi2) mi2 mi2 mi2 - mi2 mi2 mi2 (la1+fa2) fa2 fa2 fa2 - fa2 fa2 fa2
(la1+sol2) sol2 sol2 sol2 - sol2 sol2 sol2 (la1+fa2) fa2 fa2 fa2 - mi2 mi2 (mi1+mi2)
mi2 (la1+la2+mi2) la2 la2 la2 - la2 la2 la2 (la1+fa2+la2) la2 la2 la2 - la2 mi3
mi3 mi3 (do1+mi3) (do1+mi3) mi3 (do1+mi3) - mi3 (do1+mi3) mi3 (do1+fa3) (do1+fa3) fa3 (do1+fa3) - fa3
(do1+fa3) fa3 (do1+mi3) mi3 mi3 (do1+fa3) fa3 (do1+fa3) fa3 (do1+sol3) sol3 rest(8) (mi1+mi2) - (mi1+mi3) rest(4)
re3 do3 si2 re3 do3 si2 la2 do3 si2 la2 do3 si2 (fa2+la2) do2 fa2 do2
la2 do3 rest(5) sol2 fa2 - mi2 rest(3) mi2 rest(6) mi3 rest(19) la1 la1 - la1
la1 - la1 mi2 la1 mi2 la1 mi2 la1 mi2 la1 mi2 la1 mi2 la1 do2
mi2 mi2 la2 (la1+la2) mi2 la2 si2 do3 (mi1+fa3) (si1+mi3) si2 do3 si2 (si1+la2) mi2 fa2
re2 (mi1+mi2) si1 do2 la1 - la1 la2 do3 (mi1+mi3) (fa1+re3) do3 la2 sol2 (fa1+sol2) la2
re1 la2 do3 (re1+mi3) (mi1+sol3) mi3 do3 si2 mi1 la2 la1 la2 do3 (mi1+mi3) (fa1+re3) do3
la2 (fa1+la2) (si1+re3) re3 re3 re3 si1 re3 (mi1+mi3) mi1 - la1 la2 do3 (mi1+mi3) (fa1+re3)
do3 la2 sol2 (fa1+sol2) la2 re1 la2 do3 (re1+mi3) (mi1+sol3) mi3 re3 mi3 (mi1+do3) re3 (la1+mi3)
la2 (mi1+la2) si2 (re1+do3) la2 (mi1+do3) si2 la2 la1 mi2 la1 mi2 la1 (la2+mi2) (la1+si2) do3
(re1+mi3) la1 fa3 re1 (la1+la3) (sol1+mi3) re2 re3 sol1 (re2+do3) (do1+re3) (sol1+mi3) (do1+si3) (sol1+mi3) (fa1+re3) do2
do3 fa1 do2 si1 (re2+re3) (si1+mi3) (re2+re3) (mi1+mi3) (mi2+si2) (mi1+mi3) (mi2+si3) (la1+si3) (mi2+la3) (la1+la3) mi2 si3
(la1+la3) do2 la1 (do2+la2) (re1+mi3) la1 re1 (la1+la2) (sol1+do3) si1 (sol1+si2) (si1+re3) (do1+re3) (sol1+sol2) (do1+si2) sol1
do3 (mi1+si2) (la1+la2) (mi1+mi2) la1 sol1 sol2 re2 (sol1+fa2) sol2 si2 re3 (sol1+fa3) fa3 (si1+sol3) fa3
(do1+sol3) do2 mi2 do1 do2 mi2 sol2 (do1+la2) sol2 do1 (do1+do2) do2 mi2 do1 do2 mi2
sol2 (do1+la2) sol2 do1 si1 (do1+do2) do2 mi2 do1 do2 mi2 sol2 (do1+la2) sol2 do1 sol2
(la1+la2) la2 (la1+do3) la2 (la1+re3) mi3 do3 la2 la1 sol2 la2 (la1+la2) do2 la1 mi2 do2
la1 mi2 do3 do2 la1 la1 la1 (la1+re3) do2 la1 mi2 do2 la1 mi2 re3 do2
la1 mi3 (re1+la2) la1 la1 (sol1+re3) re2 (re2+si2) (do1+sol2) do2 do2 (do1+mi2) (do2+fa2) (do2+sol2) (si1+la2) re2
(la2+re2) (mi1+si2) (re2+do3) (re2+re3) (la1+mi3) do2 do2 la1 (do2+la2) (do2+la2) (la1+si2) (la2+re2) re2 la2 (mi1+si2) (la2+re2)
(re2+si2) (la1+si2) (la2+mi2) (mi2+si2) (la1+do3) mi2 mi2 (do2+do3) - (la1+la2) - (la1+mi2) - (la1+mi1) rest(5) la1
- la1 rest(3) mi1 la1 -- la1 -- mi1 la1 do2 (do2+do3) mi2 la2 (la1+do3) do2
do2 mi2 (la2+do3) la1 do3 la1 do2 (do2+do3) mi2 la2 (la1+do3) do2 do2 mi2 (la2+do3) la1
do3 la1 (do2+la2) do3 (do2+mi3) (la1+re3) mi3 (do2+do3) la2 do2 la1 (do2+la2) do3 (do2+mi3) (la1+sol3) do2
mi3 do2 la1 (do2+la2) do3 (do2+mi3) (la1+re3) mi3 (do2+do3) la2 do2 la1 (do2+la2) do3 (do2+mi3) (la1+sol3)
(do2+mi3) do3 la2 (do2+la2) si2 (fa1+do3) la2 fa2 re2 (mi1+mi2) la2 si2 re3 (la1+mi3) do3 la2
sol2 (do2+la2) do3 do3 re3 (mi1+mi3) (mi1+re3) mi3 re3 si2 la2 (mi1+si2) mi1 - mi1 -
la1 (do2+mi2) mi3 (mi2+mi3) (fa1+do3) (la2+mi2) mi2 (do2+mi2) (re1+mi2) (la2+re2) do3 (re2+mi3) sol3 mi1 (si1+fa3) mi3
(si1+re3) (la1+mi3) (do2+mi2) mi3 (mi2+mi3) (fa1+re3) (do2+do3) la2 (do2+la2) si1 (re2+re3) re3 re3 re2 mi3 mi1
si1 mi3 fa3 re3 (si1+mi3) do3 (la1+la2) (la1+mi2) la2 (la2+mi2) (fa1+do3) (do2+la2) mi2 mi2 (do2+la2) re3
si1 (re2+si2) (fa2+re2) fa3 (mi1+mi3) (si1+re3) do3 (si1+do3) re3 (la1+mi3) do3 do2 la2 (do2+mi2) (re1+do3) (mi2+si2)
(mi1+la2) mi2 si2 (la1+la2) do2 la1 do2 la1 do2 la1 do2 (fa1+do2) la1 do2 (fa1+fa2) la1
do2 fa2 (fa1+la2) la1 do2 fa2 (fa1+fa2) fa2 (mi1+mi2) si1 mi2 si1 (mi1+si2) mi2 si1 mi2
(mi1+si2) mi3 mi1 (mi1+si2) mi1 (re1+mi3) la1 fa3 re1 (la1+la3) (sol1+mi3) si1 re3 sol1 (si1+do3) (do1+re3)
(sol1+mi3) (do1+si3) (sol1+mi3) mi3 (fa1+re3) do2 do3 fa1 do2 si1 (re2+re3) (si1+mi3) (re2+re3) (mi1+mi3) (si1+si2) (mi1+mi3)
(si1+si3) (la1+si3) (mi2+la3) (la1+la3) si3 mi2 la3 mi1 do2 la1 (do2+la2) (re1+mi3) la1 (re1+mi3) (la1+la2) (sol1+do3)
si1 (sol1+si2) si1 (do1+re3) sol1 (do1+re3) (sol1+sol2) (la1+si2) mi2 la2 (la1+la2) mi2 (re1+mi3) do3 do3 (re1+do2)
do2 (re1+do2) do2 (re1+do2) do2 (sol1+mi3) rest(3) (sol1+mi3) rest(3) (do1+do3) rest(7) do1 re1 re1 mi1 sol1
la1 sol1 - (do1+do2)`
  },
  {
    id: '4',
    title: "Ruler Of My Heart",
    artist: "Alien Stage",
    thumbnail: 'https://i.ytimg.com/vi/VgPo3q01kbg/maxresdefault.jpg',
    sheetPath: './genshinsheet/4.genshinsheet',
    difficulty: 'hard',
    pcNotes: `[AC] D Q - [BC] - [EN] E E E [CEM] rest(3) [BC] - Q -
W - [AEVZ] - E - E - [DN] rest(3) [CJTUW] rest(3) [ES] T - U
W W [ENQ] D rest(4) E S E E E [BD] E - [DG] -- [ET]
[TW] [ADQV] rest(3) T Y [ST] - R - W - [CDSTUW] T -- [BFV] -
[BCD] - [SX] - [CDNZ] - [DQ] - [DQ] - [VZ] - [ADH] - [AH] -
[BGJSX] -- D - B S [ACNZ] rest(3) H - [NV] B D - S -
[ABCD] rest(3) [BC] N M S A M [ADHN] rest(3) [ACDHN] rest(3) N - [ACG] -
N - [MV] S F -- X - V - [CM] S G - M -
B - C - [ADHN] rest(3) [ACDHN] rest(3) N - [ACG] - N - [FMSV] -
S - X - V - [CGS] rest(3) [DGQ] - [DGQ] - [CJ] - [ADH] -
C - [ADHN] - D J E E - [CY] - [NU] - C - J
E U X [QY] V - [JT] - [QY] -- [HR] B - [FJVW] - [DEHQ]
- C - [ADHN] - H J [ANQ] - [BJM] - [HN] - [AFNV] rest(3) Z
- V - [CGJS] rest(3) F - D - [CS] rest(3) Z - [CN] - N
- M - [MZ] - [CN] - [MZ] rest(3) N - M - N - M
- M - N - [AC] rest(3) Z - [CN] - N - M - [MZ]
- [CN] - [MZ] rest(3) N - X - [CH] J Q - J - H
- [CG] - [ADH] - C - [AN] D H [ACDH] - [ADJM] - [ACDJ] -
[ABH] - [ADJV] rest(3) V - [CDJ] - [AHX] - [JS] - [DJM] - [ABH] -
[ACQ] rest(3) C - [AN] D H [ACDH] - [ADJM] - [ACDJ] - [BH] - [JSV]
- [AHX] - V - [ABD] - C - [CS] - M - B - [CQ]
- [DGVW] - Z [DEH] V - [ANV] rest(3) [EV] - [AEHN] - [CEH] X [CGHW]
- W - [CQ] - [DGW] rest(7) C - [ADQ] - [CH] - [HNW] rest(3) [HW]
- [CQ] - [HX] - [DEHZ] - N - [DH] - N - [DHQ] rest(3) [DHWZ]
- X - C - [AV] - N - [AQ] E Y - E - [EN]
- [AQ] - [EJNT] rest(3) [CE] - [BE] - [MQ] - W - Q - [CW]
- [EMQ] rest(3) [BDE] - [CGT] - [BDE] - [CGT] - [BDE] B [GNT] M [GST]
- C - B M [CD] G J E G J E T [CEU] rest(6) Z
N A [CD] S - D - Z - [CS] - [DN] rest(5) [DMX] - [SV]
- [DM] - [DM] - S - [ACG] rest(3) [DNZ] - [CN] M D S -
[DM] - Z - [AC] - [DM] - S - N - [MX] - N -
[CM] - N - M - A rest(5) [CDN] H E W - [CEHN] rest(3) [CW]
- [FJRV] rest(5) [DEV] - [SWX] - [CDE] rest(3) [CSW] - [GQT] rest(3) [EH] - [CEHN]
- [GW] - [CEHN] rest(3) [CHQ] - [EJV] - [HW] - [VX] rest(5) X - M
- B - C - C rest(3) [CHNW] - W rest(3) [BW] rest(3) [QV] - W
- [QVX] rest(5) X - M - B - C - C rest(3) [CHN] - G
- H - [BG] - H - [EV] T [EQY] - [TVX] - T - W
- [WX] - [MQ] - [BW] - C rest(3) C - [AN] D J [CH] -
[JM] - [CJ] - [BH] - [JV] rest(3) X - [AMV] D J H - J
- [BJM] - [CH] - [QZ] rest(3) C - N - [HS] - [CDEN] - S
H A - [DEM] - [DEX] - [SW] rest(3) D - [GX] - M - [BD]
- [CT] - [JTV] - Z [EY] V - [AN] -- [EY] V [EY] A [ENY]
V - [CEJT] - T - [CE] - [BEJM] rest(3) C rest(9) [CEQYZ] - T -
[EQY] - T - [CZ] - Q rest(3) [HY] - [HY] - [CGTZ] - [HY] -
[GT] - [CQZ] rest(3) V - Z - [HV] - N - [DV] - [CD] -
[AN] - [CDGM] - C - S - [CS] - [BM] - [CM] - B -
M - [ABC] rest(3) D - [CG] - [DN] - [AG] - [CD] - [GN] -
[AG] - [CG] - C B M D G J E T J E [EU] -
C rest(4) Z N A [CD] S - D - Z - [CS] - [DN] rest(5)
[DMX] - [SV] - [DM] - [DM] - S - [ACG] rest(3) [DNZ] - [CN] M
D S - [DM] - Z - [AC] - [DM] - S - N - [MX]
- N - [CM] - N - M - A rest(5) [CDEN] - [SW] - [CDEN]
rest(3) [CSW] - [FHRV] rest(5) [FRV] - [FRX] - [CFR] rest(3) [CFR] - [EHY] rest(5) [CHNY]
- [HY] - [CHNY] rest(3) [CHY] - [EGTV] rest(3) [VX] rest(3) [DEJ] - X - M
- B - C - [DH] C N rest(5) [DHY] rest(3) Q rest(3) [BQ] rest(3) [JU]
rest(3) D rest(7) [TVW] rest(3) E rest(3) D rest(7) [BCD] rest(7) D rest(3) C M D
- [DHN] rest(7) [CENS] rest(7) [BD] rest(7) [BEX] rest(7) [AHN] rest(7) [CENS] rest(7) [BDM] rest(7) [CDH]
rest(5) C - [DHN] rest(7) [CENS] rest(7) [BDM] rest(7) [CE] rest(7) [AHN] rest(7) [CENS] rest(5) V
- [BDM] rest(7) C - B M [ACZ] - M rest(5) [CNU] - Y rest(3) [BCT]
- E - [TV] rest(3) [VXY] rest(3) E - X - [MW] - [BQ] - [CH]
Q - W - [CN] rest(4) D [BC] G H - [QV] -- H [VX] -
Q W - E X - [MW] - [BE] T C rest(5) [CNU] - Y rest(3)
[BCT] - E - [VW] rest(3) [VWX] rest(3) Q - X - [MW] - [BQ] -
[CH] rest(3) Y T [CEN] W W Q H G [BCD] G H - [QV] rest(3)
[HVX] - Q - W - X - [EM] - B - C rest(5) [CJN] -
H - J rest(3) [BH] - [JV] rest(3) [HX] - [JV] - H - J rest(3)
H - [CQ] rest(3) [CH] - [JN] - H - J - N - [BH] -
J - H - X - V rest(5) B - M - D - [EQY] rest(3)
[EQUY] - Y - [EQUY] rest(3) [EQY] - [EJTU] rest(3) [EJTY] - U - [EJTY] -
U - [EJT] - Y rest(3) [EGQ] rest(3) [EGQ] - T - [EGQT] - T -
[EGQ] - [DJW] rest(3) [DJW] rest(3) [DJW] rest(3) [DJW] rest(9) [ENT] - C N - A
- N -- C - N - A - B - C N - A -
N [JU] - C - N - [AGT] rest(3) V - C N - A -
N -- C - N - A - [CDQ] - X B - M - B
[DJ] - X - [BG] - M - [EN] T C N - A - N
S - C - N - A - [BD] - C N - A - N
[EJU] - C - N - [AGQT] - V - C N - A - N
S - C - N - A - [CDN] - X B - M - B
B - X - B - M - [NV] - C N - A - N
S - C - N - A - [CEY] - X B - M - B
W - X Q B - [JMU] - [QV] - C - [DM] - X B
- M - B -- X - B - M`,
    mobileNotes: `(do2+mi1) mi2 do3 - (sol1+mi1) - (mi3+la1) mi3 mi3 mi3 (mi1+mi3+si1) rest(3) (sol1+mi1) - do3 -
re3 - (do2+mi3+fa1+do1) - mi3 - mi3 - (mi2+la1) rest(3) (mi1+si2+sol3+si3+re3) rest(3) (mi3+re2) sol3 - si3
re3 re3 (mi3+la1+do3) mi2 rest(4) mi3 re2 mi3 mi3 mi3 (sol1+mi2) mi3 - (mi2+sol2) -- (mi3+sol3)
(sol3+re3) (do2+mi2+do3+fa1) rest(3) sol3 la3 (re2+sol3) - fa3 - re3 - (mi1+mi2+re2+sol3+si3+re3) sol3 -- (sol1+fa2+fa1) -
(sol1+mi1+mi2) - (re2+re1) - (mi1+mi2+la1+do1) - (mi2+do3) - (mi2+do3) - (fa1+do1) - (do2+mi2+la2) - (do2+la2) -
(sol1+sol2+si2+re2+re1) -- mi2 - sol1 re2 (do2+mi1+la1+do1) rest(3) la2 - (la1+fa1) sol1 mi2 - re2 -
(do2+sol1+mi1+mi2) rest(3) (sol1+mi1) la1 si1 re2 do2 si1 (do2+mi2+la2+la1) rest(3) (do2+mi1+mi2+la2+la1) rest(3) la1 - (do2+mi1+sol2) -
la1 - (si1+fa1) re2 fa2 -- re1 - fa1 - (mi1+si1) re2 sol2 - si1 -
sol1 - mi1 - (do2+mi2+la2+la1) rest(3) (do2+mi1+mi2+la2+la1) rest(3) la1 - (do2+mi1+sol2) - la1 - (fa2+si1+re2+fa1) -
re2 - re1 - fa1 - (mi1+sol2+re2) rest(3) (mi2+sol2+do3) - (mi2+sol2+do3) - (mi1+si2) - (do2+mi2+la2) -
mi1 - (do2+mi2+la2+la1) - mi2 si2 mi3 mi3 - (mi1+la3) - (la1+si3) - mi1 - si2
mi3 si3 re1 (do3+la3) fa1 - (si2+sol3) - (do3+la3) -- (la2+fa3) sol1 - (fa2+si2+fa1+re3) - (mi2+mi3+la2+do3)
- mi1 - (do2+mi2+la2+la1) - la2 si2 (do2+la1+do3) - (sol1+si2+si1) - (la2+la1) - (do2+fa2+la1+fa1) rest(3) do1
- fa1 - (mi1+sol2+si2+re2) rest(3) fa2 - mi2 - (mi1+re2) rest(3) do1 - (mi1+la1) - la1
- si1 - (si1+do1) - (mi1+la1) - (si1+do1) rest(3) la1 - si1 - la1 - si1
- si1 - la1 - (do2+mi1) rest(3) do1 - (mi1+la1) - la1 - si1 - (si1+do1)
- (mi1+la1) - (si1+do1) rest(3) la1 - re1 - (mi1+la2) si2 do3 - si2 - la2
- (mi1+sol2) - (do2+mi2+la2) - mi1 - (do2+la1) mi2 la2 (do2+mi1+mi2+la2) - (do2+mi2+si2+si1) - (do2+mi1+mi2+si2) -
(do2+sol1+la2) - (do2+mi2+si2+fa1) rest(3) fa1 - (mi1+mi2+si2) - (do2+la2+re1) - (si2+re2) - (mi2+si2+si1) - (do2+sol1+la2) -
(do2+mi1+do3) rest(3) mi1 - (do2+la1) mi2 la2 (do2+mi1+mi2+la2) - (do2+mi2+si2+si1) - (do2+mi1+mi2+si2) - (sol1+la2) - (si2+re2+fa1)
- (do2+la2+re1) - fa1 - (do2+sol1+mi2) - mi1 - (mi1+re2) - si1 - sol1 - (mi1+do3)
- (mi2+sol2+fa1+re3) - do1 (mi2+mi3+la2) fa1 - (do2+la1+fa1) rest(3) (mi3+fa1) - (do2+mi3+la2+la1) - (mi1+mi3+la2) re1 (mi1+sol2+la2+re3)
- re3 - (mi1+do3) - (mi2+sol2+re3) rest(7) mi1 - (do2+mi2+do3) - (mi1+la2) - (la2+la1+re3) rest(3) (la2+re3)
- (mi1+do3) - (la2+re1) - (mi2+mi3+la2+do1) - la1 - (mi2+la2) - la1 - (mi2+la2+do3) rest(3) (mi2+la2+re3+do1)
- re1 - mi1 - (do2+fa1) - la1 - (do2+do3) mi3 la3 - mi3 - (mi3+la1)
- (do2+do3) - (mi3+si2+la1+sol3) rest(3) (mi1+mi3) - (sol1+mi3) - (si1+do3) - re3 - do3 - (mi1+re3)
- (mi3+si1+do3) rest(3) (sol1+mi2+mi3) - (mi1+sol2+sol3) - (sol1+mi2+mi3) - (mi1+sol2+sol3) - (sol1+mi2+mi3) sol1 (sol2+la1+sol3) si1 (sol2+re2+sol3)
- mi1 - sol1 si1 (mi1+mi2) sol2 si2 mi3 sol2 si2 mi3 sol3 (mi1+mi3+si3) rest(6) do1
la1 do2 (mi1+mi2) re2 - mi2 - do1 - (mi1+re2) - (mi2+la1) rest(5) (mi2+si1+re1) - (re2+fa1)
- (mi2+si1) - (mi2+si1) - re2 - (do2+mi1+sol2) rest(3) (mi2+la1+do1) - (mi1+la1) si1 mi2 re2 -
(mi2+si1) - do1 - (do2+mi1) - (mi2+si1) - re2 - la1 - (si1+re1) - la1 -
(mi1+si1) - la1 - si1 - do2 rest(5) (mi1+mi2+la1) la2 mi3 re3 - (mi1+mi3+la2+la1) rest(3) (mi1+re3)
- (fa2+si2+fa3+fa1) rest(5) (mi2+mi3+fa1) - (re2+re3+re1) - (mi1+mi2+mi3) rest(3) (mi1+re2+re3) - (sol2+do3+sol3) rest(3) (mi3+la2) - (mi1+mi3+la2+la1)
- (sol2+re3) - (mi1+mi3+la2+la1) rest(3) (mi1+la2+do3) - (mi3+si2+fa1) - (la2+re3) - (fa1+re1) rest(5) re1 - si1
- sol1 - mi1 - mi1 rest(3) (mi1+la2+la1+re3) - re3 rest(3) (sol1+re3) rest(3) (do3+fa1) - re3
- (do3+fa1+re1) rest(5) re1 - si1 - sol1 - mi1 - mi1 rest(3) (mi1+la2+la1) - sol2
- la2 - (sol1+sol2) - la2 - (mi3+fa1) sol3 (mi3+do3+la3) - (sol3+fa1+re1) - sol3 - re3
- (re3+re1) - (si1+do3) - (sol1+re3) - mi1 rest(3) mi1 - (do2+la1) mi2 si2 (mi1+la2) -
(si2+si1) - (mi1+si2) - (sol1+la2) - (si2+fa1) rest(3) re1 - (do2+si1+fa1) mi2 si2 la2 - si2
- (sol1+si2+si1) - (mi1+la2) - (do3+do1) rest(3) mi1 - la1 - (la2+re2) - (mi1+mi2+mi3+la1) - re2
la2 do2 - (mi2+mi3+si1) - (mi2+mi3+re1) - (re2+re3) rest(3) mi2 - (sol2+re1) - si1 - (sol1+mi2)
- (mi1+sol3) - (si2+sol3+fa1) - do1 (mi3+la3) fa1 - (do2+la1) -- (mi3+la3) fa1 (mi3+la3) do2 (mi3+la1+la3)
fa1 - (mi1+mi3+si2+sol3) - sol3 - (mi1+mi3) - (sol1+mi3+si2+si1) rest(3) mi1 rest(9) (mi1+mi3+do3+la3+do1) - sol3 -
(mi3+do3+la3) - sol3 - (mi1+do1) - do3 rest(3) (la2+la3) - (la2+la3) - (mi1+sol2+sol3+do1) - (la2+la3) -
(sol2+sol3) - (mi1+do3+do1) rest(3) fa1 - do1 - (la2+fa1) - la1 - (mi2+fa1) - (mi1+mi2) -
(do2+la1) - (mi1+mi2+sol2+si1) - mi1 - re2 - (mi1+re2) - (sol1+si1) - (mi1+si1) - sol1 -
si1 - (do2+sol1+mi1) rest(3) mi2 - (mi1+sol2) - (mi2+la1) - (do2+sol2) - (mi1+mi2) - (sol2+la1) -
(do2+sol2) - (mi1+sol2) - mi1 sol1 si1 mi2 sol2 si2 mi3 sol3 si2 mi3 (mi3+si3) -
mi1 rest(4) do1 la1 do2 (mi1+mi2) re2 - mi2 - do1 - (mi1+re2) - (mi2+la1) rest(5)
(mi2+si1+re1) - (re2+fa1) - (mi2+si1) - (mi2+si1) - re2 - (do2+mi1+sol2) rest(3) (mi2+la1+do1) - (mi1+la1) si1
mi2 re2 - (mi2+si1) - do1 - (do2+mi1) - (mi2+si1) - re2 - la1 - (si1+re1)
- la1 - (mi1+si1) - la1 - si1 - do2 rest(5) (mi1+mi2+mi3+la1) - (re2+re3) - (mi1+mi2+mi3+la1)
rest(3) (mi1+re2+re3) - (fa2+la2+fa3+fa1) rest(5) (fa2+fa3+fa1) - (fa2+fa3+re1) - (mi1+fa2+fa3) rest(3) (mi1+fa2+fa3) - (mi3+la2+la3) rest(5) (mi1+la2+la1+la3)
- (la2+la3) - (mi1+la2+la1+la3) rest(3) (mi1+la2+la3) - (mi3+sol2+sol3+fa1) rest(3) (fa1+re1) rest(3) (mi2+mi3+si2) - re1 - si1
- sol1 - mi1 - (mi2+la2) mi1 la1 rest(5) (mi2+la2+la3) rest(3) do3 rest(3) (sol1+do3) rest(3) (si2+si3)
rest(3) mi2 rest(7) (sol3+fa1+re3) rest(3) mi3 rest(3) mi2 rest(7) (sol1+mi1+mi2) rest(7) mi2 rest(3) mi1 si1 mi2
- (mi2+la2+la1) rest(7) (mi1+mi3+la1+re2) rest(7) (sol1+mi2) rest(7) (sol1+mi3+re1) rest(7) (do2+la2+la1) rest(7) (mi1+mi3+la1+re2) rest(7) (sol1+mi2+si1) rest(7) (mi1+mi2+la2)
rest(5) mi1 - (mi2+la2+la1) rest(7) (mi1+mi3+la1+re2) rest(7) (sol1+mi2+si1) rest(7) (mi1+mi3) rest(7) (do2+la2+la1) rest(7) (mi1+mi3+la1+re2) rest(5) fa1
- (sol1+mi2+si1) rest(7) mi1 - sol1 si1 (do2+mi1+do1) - si1 rest(5) (mi1+la1+si3) - la3 rest(3) (sol1+mi1+sol3)
- mi3 - (sol3+fa1) rest(3) (fa1+re1+la3) rest(3) mi3 - re1 - (si1+re3) - (sol1+do3) - (mi1+la2)
do3 - re3 - (mi1+la1) rest(4) mi2 (sol1+mi1) sol2 la2 - (do3+fa1) -- la2 (fa1+re1) -
do3 re3 - mi3 re1 - (si1+re3) - (sol1+mi3) sol3 mi1 rest(5) (mi1+la1+si3) - la3 rest(3)
(sol1+mi1+sol3) - mi3 - (fa1+re3) rest(3) (fa1+re3+re1) rest(3) do3 - re1 - (si1+re3) - (sol1+do3) -
(mi1+la2) rest(3) la3 sol3 (mi1+mi3+la1) re3 re3 do3 la2 sol2 (sol1+mi1+mi2) sol2 la2 - (do3+fa1) rest(3)
(la2+fa1+re1) - do3 - re3 - re1 - (mi3+si1) - sol1 - mi1 rest(5) (mi1+si2+la1) -
la2 - si2 rest(3) (sol1+la2) - (si2+fa1) rest(3) (la2+re1) - (si2+fa1) - la2 - si2 rest(3)
la2 - (mi1+do3) rest(3) (mi1+la2) - (si2+la1) - la2 - si2 - la1 - (sol1+la2) -
si2 - la2 - re1 - fa1 rest(5) sol1 - si1 - mi2 - (mi3+do3+la3) rest(3)
(mi3+do3+si3+la3) - la3 - (mi3+do3+si3+la3) rest(3) (mi3+do3+la3) - (mi3+si2+sol3+si3) rest(3) (mi3+si2+sol3+la3) - si3 - (mi3+si2+sol3+la3) -
si3 - (mi3+si2+sol3) - la3 rest(3) (mi3+sol2+do3) rest(3) (mi3+sol2+do3) - sol3 - (mi3+sol2+do3+sol3) - sol3 -
(mi3+sol2+do3) - (mi2+si2+re3) rest(3) (mi2+si2+re3) rest(3) (mi2+si2+re3) rest(3) (mi2+si2+re3) rest(9) (mi3+la1+sol3) - mi1 la1 - do2
- la1 -- mi1 - la1 - do2 - sol1 - mi1 la1 - do2 -
la1 (si2+si3) - mi1 - la1 - (do2+sol2+sol3) rest(3) fa1 - mi1 la1 - do2 -
la1 -- mi1 - la1 - do2 - (mi1+mi2+do3) - re1 sol1 - si1 - sol1
(mi2+si2) - re1 - (sol1+sol2) - si1 - (mi3+la1) sol3 mi1 la1 - do2 - la1
re2 - mi1 - la1 - do2 - (sol1+mi2) - mi1 la1 - do2 - la1
(mi3+si2+si3) - mi1 - la1 - (do2+sol2+do3+sol3) - fa1 - mi1 la1 - do2 - la1
re2 - mi1 - la1 - do2 - (mi1+mi2+la1) - re1 sol1 - si1 - sol1
sol1 - re1 - sol1 - si1 - (la1+fa1) - mi1 la1 - do2 - la1
re2 - mi1 - la1 - do2 - (mi1+mi3+la3) - re1 sol1 - si1 - sol1
re3 - re1 do3 sol1 - (si2+si1+si3) - (do3+fa1) - mi1 - (mi2+si1) - re1 sol1
- si1 - sol1 -- re1 - sol1 - si1`
  },
  {
    id: '5',
    title: "CURE",
    artist: "Alien Stage",
    thumbnail: 'https://i.ytimg.com/vi/SV9SwKd6J3w/maxresdefault.jpg',
    sheetPath: './genshinsheet/5.genshinsheet',
    difficulty: 'medium',
    pcNotes: `[GSZ] - B - [AG] B - [GS] - B [AG] - B - [GSZ] B
G A - [BG] [FS] - B Q A - B - [GSZ] - B [AG]
- B - [GS] - B - [AG] B - [GSZ] - B G A -
[BG] - [FS] - B Q A B - [GQZ] - B - [AGQ] - B
[GQS] - B - [AGQ] - B - [GQZ] B W A - [BW] - [HS]
- B H A - [BG] [GZ] - B F A [AB] - [AZ] B A
A - [AB] - Z B - A - B - N - Z B -
V - [GSZ] - B - [AG] B - [GS] - B - [AG] - B
[GSZ] - B G A - [BG] - [FS] B Q A - B - [GSZ]
- B [AG] - B - [GS] - B - [AG] B - [GSZ] - B
H A - [BG] [GS] - B [FHW] A - [BW] [FW] - X H V
- [FNQ] - [FQ] [QZ] - V - [AN] - G - G [FZ] - [GV]
-- [GV] - [AB] - V - [ABGVZ] -- Z - [ABHV] rest(3) [AGZ] - [BV]
Z - [ABCQZ] rest(5) [BFRZ] rest(5) [DEGZ] rest(3) [GQTZ] rest(3) Z - [ABFGR] rest(3) Z [ABQ]
- Z - [GTZ] - [GT] - [GTZ] [ABFR] rest(3) Z - [ABGT] - Z [GQTVZ]
rest(3) V - [ABFGR] rest(5) [AQVZ] rest(3) [BGX] - [BG] [BG] - [AQX] rest(5) [GTX] rest(3)
[GQTZ] rest(3) Z - [ABFGR] rest(3) Z - [ABQ] - Z - [GTZ] [GT] - [GTZ]
- [ABFR] rest(3) Z [AB] - Z - [BHNX] -- [AQ] - [BHNX] - [FR] rest(3)
[BX] -- [GTVZ] rest(3) [AQ] - [VZ] rest(5) [AQX] -- [FVZ] F [FV] F [ABF] F
[FV] F [EVZ] E [FV] F [ABQ] Q [QV] Q [FZ] F [FZ] F [ABFV] F
[FZ] F [WX] W [FX] F [BNQS] Q [QX] Q [FVZ] F [FV] F [ABF] F
[FV] F [EVZ] E [FV] F [ABQ] Q [QV] Q [FZ] F [FZ] F [ABFV] F
[FZ] F [EZ] E [FZ] F [ABFR] [FR] [FRZ] [FR] [VZ] rest(31) [QV] rest(3) T rest(3)
Q - T rest(3) Q Q rest(3) T - Q - Y Q - T -
R - [QV] -- T rest(3) Q - T -- Q - Q rest(3) T -
Q Y - Q - T - R - [BQZ] T - B - T -
B - T B - T - [BQZ] - T B - [BT] - V -
[TZ] rest(3) T [BQZ] - T - B - T - B T - B -
T - [BQZ] - T B -- [BT] - V - T -- T - [AQV]
- T - M - T [AV] - T rest(3) T - [AQV] T S --
[ST] - N - T rest(3) [NT] - [NQV] - T A - [AT] - B
- T - V - [BT] Z rest(3) B - Z - N Z - B
- V - [GSZ] - B [AG] - B - [GS] - B - [AG] B
- [GSZ] - B G A - [BG] [FS] - [BQ] - A - B -
[GSZ] B - [AG] - B - [GS] - B [AG] - B - [GSZ] -
B H A [BG] - [GS] - B - [AFHW] - [BW] [FW] - X H
V - [FNQ] -- [QZ] - V - N - G - G [FZ] - [GV]
rest(3) [GV] - [AB] V - [ABGVZ] rest(3) Z - [ABHV] -- [AGZ] - [BV] -
Z - [ABCQZ] rest(5) [BFRZ] rest(4) [DEGZ] rest(3) [GQTZ] rest(3) Z [ABFGR] rest(3) Z - [ABQ]
- Z [GTZ] - [GT] - [GTZ] - [ABFGR] -- Z - [ABGT] - Z -
[GQTVZ] -- V - [ABFGR] rest(5) [AQVZ] -- [BGX] - [BG] - [BG] - [AQX] rest(5)
[GTX] rest(3) [GQTZ] -- Z - [ABFGR] rest(3) Z - [ABQ] - Z - [GTZ] [GT]
- [GTZ] - [ABFGR] rest(3) Z [AB] - Z - [BHNX] -- [AQ] - [BHNX] -
[FR] rest(3) [BX] -- [GTVZ] rest(3) [AQ] - [VZ] rest(5) [AQX] rest(3) [AQZ] -- Z -
[AB] rest(3) Z - [ABFR] [FRZ] - [DEGZ] - [FR] - [DEZ] - [AB] [ADGQ] --
Z - [AB] - Z - [VZ] rest(3) V - [ABF] rest(3) V [ABFR] - [FRV]
- [DEX] - [FR] - [GTX] [NS] [GT] -- X - [NS] - X Z rest(3)
Z - [AB] -- Z - [ABFR] - [FRZ] - [DEGZ] - [FR] [DEZ] - [AB]
[ADGQ] -- Z - [AB] Z - [NVZ] rest(3) [HN] - [ANQVZ] [FR] - [GT] -
[FNRVZ] rest(3) [DEGZ] rest(3) Z - [ABDG] rest(3) A [DEGQT] rest(3) [EQT] rest(11) T -- [AFGQT]
rest(5) R rest(5) Q rest(3) [AGQST] - T T - R rest(3) G - [ST] rest(3)
[QTV] - B - A - [FR] rest(3) A - [GQ] - A - [GNTX] --
[GT] -- [GT] - Q -- [GTX] rest(3) [GQTZ] rest(3) Z [ABFGR] rest(3) Z - [ABQ]
- Z [GTZ] - [GT] - [GTZ] - [ABFGR] -- Z - [AB] - Z -
[BHNX] -- [AQ] -- [BHNX] - [FR] rest(3) [BX] rest(3) [GTVZ] rest(3) [AQ] - [VZ] rest(5)
[GTX] rest(3) [GQTZ] rest(3) Z - [ABFGR] rest(3) Z [ABQ] - Z - [GTZ] - [GT]
- [GTZ] [ABFGR] rest(3) Z - [ABGT] - Z [GQTVZ] rest(3) V - [ABFGR] rest(5) [AQVZ]
rest(3) [BGX] - [BG] [BG] - [AQX] rest(5) [GTX] rest(3) [GQTZ] rest(3) Z - [ABFGR] rest(3)
Z - [ABQ] - Z - [GTZ] [GT] - [GTZ] - [ABFGR] rest(3) Z [AB] -
Z - [BHNX] -- [AQ] - [BHNX] - [FR] rest(3) [BX] -- [GTVZ] rest(5) [AQVZ] rest(5)
[AQX] rest(3) [AQVZ] -- B rest(3) Z - B -- Z - Z rest(3) B -
Z N - Z - B - V - Z rest(3) B rest(3) V - B
rest(3) Z - Z rest(3) B Z - N - Z - B - V`,
    mobileNotes: `(sol2+re2+do1) - sol1 - (do2+sol2) sol1 - (sol2+re2) - sol1 (do2+sol2) - sol1 - (sol2+re2+do1) sol1
sol2 do2 - (sol1+sol2) (fa2+re2) - sol1 do3 do2 - sol1 - (sol2+re2+do1) - sol1 (do2+sol2)
- sol1 - (sol2+re2) - sol1 - (do2+sol2) sol1 - (sol2+re2+do1) - sol1 sol2 do2 -
(sol1+sol2) - (fa2+re2) - sol1 do3 do2 sol1 - (sol2+do3+do1) - sol1 - (do2+sol2+do3) - sol1
(sol2+do3+re2) - sol1 - (do2+sol2+do3) - sol1 - (sol2+do3+do1) sol1 re3 do2 - (sol1+re3) - (la2+re2)
- sol1 la2 do2 - (sol1+sol2) (sol2+do1) - sol1 fa2 do2 (do2+sol1) - (do2+do1) sol1 do2
do2 - (do2+sol1) - do1 sol1 - do2 - sol1 - la1 - do1 sol1 -
fa1 - (sol2+re2+do1) - sol1 - (do2+sol2) sol1 - (sol2+re2) - sol1 - (do2+sol2) - sol1
(sol2+re2+do1) - sol1 sol2 do2 - (sol1+sol2) - (fa2+re2) sol1 do3 do2 - sol1 - (sol2+re2+do1)
- sol1 (do2+sol2) - sol1 - (sol2+re2) - sol1 - (do2+sol2) sol1 - (sol2+re2+do1) - sol1
la2 do2 - (sol1+sol2) (sol2+re2) - sol1 (fa2+la2+re3) do2 - (sol1+re3) (fa2+re3) - re1 la2 fa1
- (fa2+la1+do3) - (fa2+do3) (do3+do1) - fa1 - (do2+la1) - sol2 - sol2 (fa2+do1) - (sol2+fa1)
-- (sol2+fa1) - (do2+sol1) - fa1 - (do2+sol1+sol2+fa1+do1) -- do1 - (do2+sol1+la2+fa1) rest(3) (do2+sol2+do1) - (sol1+fa1)
do1 - (do2+sol1+mi1+do3+do1) rest(5) (sol1+fa2+fa3+do1) rest(5) (mi2+mi3+sol2+do1) rest(3) (sol2+do3+sol3+do1) rest(3) do1 - (do2+sol1+fa2+sol2+fa3) rest(3) do1 (do2+sol1+do3)
- do1 - (sol2+sol3+do1) - (sol2+sol3) - (sol2+sol3+do1) (do2+sol1+fa2+fa3) rest(3) do1 - (do2+sol1+sol2+sol3) - do1 (sol2+do3+sol3+fa1+do1)
rest(3) fa1 - (do2+sol1+fa2+sol2+fa3) rest(5) (do2+do3+fa1+do1) rest(3) (sol1+sol2+re1) - (sol1+sol2) (sol1+sol2) - (do2+do3+re1) rest(5) (sol2+sol3+re1) rest(3)
(sol2+do3+sol3+do1) rest(3) do1 - (do2+sol1+fa2+sol2+fa3) rest(3) do1 - (do2+sol1+do3) - do1 - (sol2+sol3+do1) (sol2+sol3) - (sol2+sol3+do1)
- (do2+sol1+fa2+fa3) rest(3) do1 (do2+sol1) - do1 - (sol1+la2+la1+re1) -- (do2+do3) - (sol1+la2+la1+re1) - (fa2+fa3) rest(3)
(sol1+re1) -- (sol2+sol3+fa1+do1) rest(3) (do2+do3) - (fa1+do1) rest(5) (do2+do3+re1) -- (fa2+fa1+do1) fa2 (fa2+fa1) fa2 (do2+sol1+fa2) fa2
(fa2+fa1) fa2 (mi3+fa1+do1) mi3 (fa2+fa1) fa2 (do2+sol1+do3) do3 (do3+fa1) do3 (fa2+do1) fa2 (fa2+do1) fa2 (do2+sol1+fa2+fa1) fa2
(fa2+do1) fa2 (re3+re1) re3 (fa2+re1) fa2 (sol1+la1+do3+re2) do3 (do3+re1) do3 (fa2+fa1+do1) fa2 (fa2+fa1) fa2 (do2+sol1+fa2) fa2
(fa2+fa1) fa2 (mi3+fa1+do1) mi3 (fa2+fa1) fa2 (do2+sol1+do3) do3 (do3+fa1) do3 (fa2+do1) fa2 (fa2+do1) fa2 (do2+sol1+fa2+fa1) fa2
(fa2+do1) fa2 (mi3+do1) mi3 (fa2+do1) fa2 (do2+sol1+fa2+fa3) (fa2+fa3) (fa2+fa3+do1) (fa2+fa3) (fa1+do1) rest(31) (do3+fa1) rest(3) sol3 rest(3)
do3 - sol3 rest(3) do3 do3 rest(3) sol3 - do3 - la3 do3 - sol3 -
fa3 - (do3+fa1) -- sol3 rest(3) do3 - sol3 -- do3 - do3 rest(3) sol3 -
do3 la3 - do3 - sol3 - fa3 - (sol1+do3+do1) sol3 - sol1 - sol3 -
sol1 - sol3 sol1 - sol3 - (sol1+do3+do1) - sol3 sol1 - (sol1+sol3) - fa1 -
(sol3+do1) rest(3) sol3 (sol1+do3+do1) - sol3 - sol1 - sol3 - sol1 sol3 - sol1 -
sol3 - (sol1+do3+do1) - sol3 sol1 -- (sol1+sol3) - fa1 - sol3 -- sol3 - (do2+do3+fa1)
- sol3 - si1 - sol3 (do2+fa1) - sol3 rest(3) sol3 - (do2+do3+fa1) sol3 re2 --
(re2+sol3) - la1 - sol3 rest(3) (la1+sol3) - (la1+do3+fa1) - sol3 do2 - (do2+sol3) - sol1
- sol3 - fa1 - (sol1+sol3) do1 rest(3) sol1 - do1 - la1 do1 - sol1
- fa1 - (sol2+re2+do1) - sol1 (do2+sol2) - sol1 - (sol2+re2) - sol1 - (do2+sol2) sol1
- (sol2+re2+do1) - sol1 sol2 do2 - (sol1+sol2) (fa2+re2) - (sol1+do3) - do2 - sol1 -
(sol2+re2+do1) sol1 - (do2+sol2) - sol1 - (sol2+re2) - sol1 (do2+sol2) - sol1 - (sol2+re2+do1) -
sol1 la2 do2 (sol1+sol2) - (sol2+re2) - sol1 - (do2+fa2+la2+re3) - (sol1+re3) (fa2+re3) - re1 la2
fa1 - (fa2+la1+do3) -- (do3+do1) - fa1 - la1 - sol2 - sol2 (fa2+do1) - (sol2+fa1)
rest(3) (sol2+fa1) - (do2+sol1) fa1 - (do2+sol1+sol2+fa1+do1) rest(3) do1 - (do2+sol1+la2+fa1) -- (do2+sol2+do1) - (sol1+fa1) -
do1 - (do2+sol1+mi1+do3+do1) rest(5) (sol1+fa2+fa3+do1) rest(4) (mi2+mi3+sol2+do1) rest(3) (sol2+do3+sol3+do1) rest(3) do1 (do2+sol1+fa2+sol2+fa3) rest(3) do1 - (do2+sol1+do3)
- do1 (sol2+sol3+do1) - (sol2+sol3) - (sol2+sol3+do1) - (do2+sol1+fa2+sol2+fa3) -- do1 - (do2+sol1+sol2+sol3) - do1 -
(sol2+do3+sol3+fa1+do1) -- fa1 - (do2+sol1+fa2+sol2+fa3) rest(5) (do2+do3+fa1+do1) -- (sol1+sol2+re1) - (sol1+sol2) - (sol1+sol2) - (do2+do3+re1) rest(5)
(sol2+sol3+re1) rest(3) (sol2+do3+sol3+do1) -- do1 - (do2+sol1+fa2+sol2+fa3) rest(3) do1 - (do2+sol1+do3) - do1 - (sol2+sol3+do1) (sol2+sol3)
- (sol2+sol3+do1) - (do2+sol1+fa2+sol2+fa3) rest(3) do1 (do2+sol1) - do1 - (sol1+la2+la1+re1) -- (do2+do3) - (sol1+la2+la1+re1) -
(fa2+fa3) rest(3) (sol1+re1) -- (sol2+sol3+fa1+do1) rest(3) (do2+do3) - (fa1+do1) rest(5) (do2+do3+re1) rest(3) (do2+do3+do1) -- do1 -
(do2+sol1) rest(3) do1 - (do2+sol1+fa2+fa3) (fa2+fa3+do1) - (mi2+mi3+sol2+do1) - (fa2+fa3) - (mi2+mi3+do1) - (do2+sol1) (do2+mi2+sol2+do3) --
do1 - (do2+sol1) - do1 - (fa1+do1) rest(3) fa1 - (do2+sol1+fa2) rest(3) fa1 (do2+sol1+fa2+fa3) - (fa2+fa3+fa1)
- (mi2+mi3+re1) - (fa2+fa3) - (sol2+sol3+re1) (la1+re2) (sol2+sol3) -- re1 - (la1+re2) - re1 do1 rest(3)
do1 - (do2+sol1) -- do1 - (do2+sol1+fa2+fa3) - (fa2+fa3+do1) - (mi2+mi3+sol2+do1) - (fa2+fa3) (mi2+mi3+do1) - (do2+sol1)
(do2+mi2+sol2+do3) -- do1 - (do2+sol1) do1 - (la1+fa1+do1) rest(3) (la2+la1) - (do2+la1+do3+fa1+do1) (fa2+fa3) - (sol2+sol3) -
(fa2+la1+fa3+fa1+do1) rest(3) (mi2+mi3+sol2+do1) rest(3) do1 - (do2+sol1+mi2+sol2) rest(3) do2 (mi2+mi3+sol2+do3+sol3) rest(3) (mi3+do3+sol3) rest(11) sol3 -- (do2+fa2+sol2+do3+sol3)
rest(5) fa3 rest(5) do3 rest(3) (do2+sol2+do3+re2+sol3) - sol3 sol3 - fa3 rest(3) sol2 - (re2+sol3) rest(3)
(do3+sol3+fa1) - sol1 - do2 - (fa2+fa3) rest(3) do2 - (sol2+do3) - do2 - (sol2+la1+sol3+re1) --
(sol2+sol3) -- (sol2+sol3) - do3 -- (sol2+sol3+re1) rest(3) (sol2+do3+sol3+do1) rest(3) do1 (do2+sol1+fa2+sol2+fa3) rest(3) do1 - (do2+sol1+do3)
- do1 (sol2+sol3+do1) - (sol2+sol3) - (sol2+sol3+do1) - (do2+sol1+fa2+sol2+fa3) -- do1 - (do2+sol1) - do1 -
(sol1+la2+la1+re1) -- (do2+do3) -- (sol1+la2+la1+re1) - (fa2+fa3) rest(3) (sol1+re1) rest(3) (sol2+sol3+fa1+do1) rest(3) (do2+do3) - (fa1+do1) rest(5)
(sol2+sol3+re1) rest(3) (sol2+do3+sol3+do1) rest(3) do1 - (do2+sol1+fa2+sol2+fa3) rest(3) do1 (do2+sol1+do3) - do1 - (sol2+sol3+do1) - (sol2+sol3)
- (sol2+sol3+do1) (do2+sol1+fa2+sol2+fa3) rest(3) do1 - (do2+sol1+sol2+sol3) - do1 (sol2+do3+sol3+fa1+do1) rest(3) fa1 - (do2+sol1+fa2+sol2+fa3) rest(5) (do2+do3+fa1+do1)
rest(3) (sol1+sol2+re1) - (sol1+sol2) (sol1+sol2) - (do2+do3+re1) rest(5) (sol2+sol3+re1) rest(3) (sol2+do3+sol3+do1) rest(3) do1 - (do2+sol1+fa2+sol2+fa3) rest(3)
do1 - (do2+sol1+do3) - do1 - (sol2+sol3+do1) (sol2+sol3) - (sol2+sol3+do1) - (do2+sol1+fa2+sol2+fa3) rest(3) do1 (do2+sol1) -
do1 - (sol1+la2+la1+re1) -- (do2+do3) - (sol1+la2+la1+re1) - (fa2+fa3) rest(3) (sol1+re1) -- (sol2+sol3+fa1+do1) rest(5) (do2+do3+fa1+do1) rest(5)
(do2+do3+re1) rest(3) (do2+do3+fa1+do1) -- sol1 rest(3) do1 - sol1 -- do1 - do1 rest(3) sol1 -
do1 la1 - do1 - sol1 - fa1 - do1 rest(3) sol1 rest(3) fa1 - sol1
rest(3) do1 - do1 rest(3) sol1 do1 - la1 - do1 - sol1 - fa1`
  },
  {
    id: '6',
    title: "La vaguelette",
    artist: "Hoyo-Mix",
    thumbnail: 'https://i.ytimg.com/vi/kglEsR7bqAY/maxresdefault.jpg',
    sheetPath: './genshinsheet/6.genshinsheet',
    difficulty: 'medium',
    pcNotes: `[JN] Q W T [BG] J Q T [GV] H Q E rest(8) [DX] F G
Q X S D F [CQ] rest(6) J rest(6) [CJ] -- J -- J -- J
C Q -- Q -- Q -- Q C W -- W -- W -- W
C Q -- Q -- Q -- Q C [QX] -- [QX] -- [QX] -- [QX]
A [MW] -- [MW] -- [CE] -- [CE] -- [EN] -- A -- D H [AJ]
Q [EN] -- [AW] -- D -- [AQ] -- [BW] -- M -- S G [HM]
J [CW] -- [BQ] -- S -- [BJ] -- [QV] -- N -- A F [GN]
H [CQ] Q [JN] -- [AH] -- N J [JN] -- M -- [AH] -- A
-- [NS] -- S -- [HN] J Q W [EN] -- M N -- D M
H [EV] -- N [SW] rest(4) [NQ] -- [BW] -- M S -- G [BH] J
[CW] -- B [EM] -- S [BJ] -- [QV] -- N A -- T [RV] E
[EX] -- [MW] -- [AW] -- S Q [CE] M D H J D H J
[CE] rest(14) [DX] F W D F W D F [AW] D F Q [MS] D
J S [NS] D J S D J S D [BJ] S D J [AB] D
H A [HV] rest(6) [GV] rest(6) [FV] rest(6) [DV] -- C -- [WX] rest(6) [QX] rest(6)
[JX] rest(6) [HX] rest(6) [CH] M D H J D H J [CE] rest(6) C rest(6)
[CH] -- C S D S D H [CJ] rest(6) [CJ] -- [CJ] -- [EN] --
H N J -- [NQ] -- [BJ] E W [BQ] J -- [BH] -- [HV] rest(4)
[GV] G -- V -- V W Q [JV] H -- [GV] -- [CG] rest(4) [CQ]
Q -- C -- N -- T N R -- [EN] -- [EX] rest(4) [HX] H
-- X -- [CH] -- J -- [CQ] -- W -- [EN] -- A N --
[HN] [DJ] Q [EV] -- [NW] [DW] -- D [NQ] -- [BW] -- B M --
[GS] [BJ] W [RZ] -- [BE] [EM] -- [MT] B -- [QV] -- N A --
M B -- X H [JN] Q [CQ] -- N J [CJ] rest(12) H [AH] --
G E Q G E Q [AR] Q G R Q G R Q [AE] rest(14)
[JN] Q W T [BJ] Q W T [HV] J Q E rest(8) [DX] F G
W [DZ] F G Q [SV] D F Q F rest(14) [BQ] -- S F --
Q rest(4) [BJ] rest(22) [GZ]`,
    mobileNotes: `(si2+la1) do3 re3 sol3 (sol1+sol2) si2 do3 sol3 (sol2+fa1) la2 do3 mi3 rest(8) (mi2+re1) fa2 sol2
do3 re1 re2 mi2 fa2 (mi1+do3) rest(6) si2 rest(6) (mi1+si2) -- si2 -- si2 -- si2
mi1 do3 -- do3 -- do3 -- do3 mi1 re3 -- re3 -- re3 -- re3
mi1 do3 -- do3 -- do3 -- do3 mi1 (do3+re1) -- (do3+re1) -- (do3+re1) -- (do3+re1)
do2 (si1+re3) -- (si1+re3) -- (mi1+mi3) -- (mi1+mi3) -- (mi3+la1) -- do2 -- mi2 la2 (do2+si2)
do3 (mi3+la1) -- (do2+re3) -- mi2 -- (do2+do3) -- (sol1+re3) -- si1 -- re2 sol2 (la2+si1)
si2 (mi1+re3) -- (sol1+do3) -- re2 -- (sol1+si2) -- (do3+fa1) -- la1 -- do2 fa2 (sol2+la1)
la2 (mi1+do3) do3 (si2+la1) -- (do2+la2) -- la1 si2 (si2+la1) -- si1 -- (do2+la2) -- do2
-- (la1+re2) -- re2 -- (la2+la1) si2 do3 re3 (mi3+la1) -- si1 la1 -- mi2 si1
la2 (mi3+fa1) -- la1 (re2+re3) rest(4) (la1+do3) -- (sol1+re3) -- si1 re2 -- sol2 (sol1+la2) si2
(mi1+re3) -- sol1 (mi3+si1) -- re2 (sol1+si2) -- (do3+fa1) -- la1 do2 -- sol3 (fa3+fa1) mi3
(mi3+re1) -- (si1+re3) -- (do2+re3) -- re2 do3 (mi1+mi3) si1 mi2 la2 si2 mi2 la2 si2
(mi1+mi3) rest(14) (mi2+re1) fa2 re3 mi2 fa2 re3 mi2 fa2 (do2+re3) mi2 fa2 do3 (si1+re2) mi2
si2 re2 (la1+re2) mi2 si2 re2 mi2 si2 re2 mi2 (sol1+si2) re2 mi2 si2 (do2+sol1) mi2
la2 do2 (la2+fa1) rest(6) (sol2+fa1) rest(6) (fa2+fa1) rest(6) (mi2+fa1) -- mi1 -- (re3+re1) rest(6) (do3+re1) rest(6)
(si2+re1) rest(6) (la2+re1) rest(6) (mi1+la2) si1 mi2 la2 si2 mi2 la2 si2 (mi1+mi3) rest(6) mi1 rest(6)
(mi1+la2) -- mi1 re2 mi2 re2 mi2 la2 (mi1+si2) rest(6) (mi1+si2) -- (mi1+si2) -- (mi3+la1) --
la2 la1 si2 -- (la1+do3) -- (sol1+si2) mi3 re3 (sol1+do3) si2 -- (sol1+la2) -- (la2+fa1) rest(4)
(sol2+fa1) sol2 -- fa1 -- fa1 re3 do3 (si2+fa1) la2 -- (sol2+fa1) -- (mi1+sol2) rest(4) (mi1+do3)
do3 -- mi1 -- la1 -- sol3 la1 fa3 -- (mi3+la1) -- (mi3+re1) rest(4) (la2+re1) la2
-- re1 -- (mi1+la2) -- si2 -- (mi1+do3) -- re3 -- (mi3+la1) -- do2 la1 --
(la2+la1) (mi2+si2) do3 (mi3+fa1) -- (la1+re3) (mi2+re3) -- mi2 (la1+do3) -- (sol1+re3) -- sol1 si1 --
(sol2+re2) (sol1+si2) re3 (fa3+do1) -- (sol1+mi3) (mi3+si1) -- (si1+sol3) sol1 -- (do3+fa1) -- la1 do2 --
si1 sol1 -- re1 la2 (si2+la1) do3 (mi1+do3) -- la1 si2 (mi1+si2) rest(12) la2 (do2+la2) --
sol2 mi3 do3 sol2 mi3 do3 (do2+fa3) do3 sol2 fa3 do3 sol2 fa3 do3 (do2+mi3) rest(14)
(si2+la1) do3 re3 sol3 (sol1+si2) do3 re3 sol3 (la2+fa1) si2 do3 mi3 rest(8) (mi2+re1) fa2 sol2
re3 (mi2+do1) fa2 sol2 do3 (re2+fa1) mi2 fa2 do3 fa2 rest(14) (sol1+do3) -- re2 fa2 --
do3 rest(4) (sol1+si2) rest(22) (sol2+do1)`
  },
];

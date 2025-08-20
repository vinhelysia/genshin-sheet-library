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
    title: 'KARMA',
    artist: 'Alien Stage',
    thumbnail: 'https://i3.ytimg.com/vi/dR1xVmGTUkE/maxresdefault.jpg',
    sheetPath: '/genshinsheet/1.genshinsheet',
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
    title: 'Wiege',
    artist: 'Alien Stage',
    thumbnail: 'https://i3.ytimg.com/vi/eYj-4CgYyGY/maxresdefault.jpg',
    sheetPath: '/genshinsheet/2.genshinsheet',
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
  }
];
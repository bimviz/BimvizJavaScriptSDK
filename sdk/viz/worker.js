var I2MM="KeyL";I2MM+="is";I2MM+="tDict";var T2MM="D";T2MM+="3";var H2MM="1.6";H2MM+=".";H2MM+="7";var BIMVIZ;BIMVIZ={'\x52\x45\x56\x49\x53\x49\x4f\x4e':H2MM};BIMVIZ["WORKDEFINE"]={'\x53\x74\x61\x72\x74':1,'\x43\x6c\x6f\x73\x65':2,'\x4c\x6f\x61\x64\x54\x72\x65\x65\x4e\x6f\x64\x65\x4d\x65\x73\x68':3,'\x50\x69\x63\x6b\x42\x79\x52\x61\x79':4,'\x4c\x6f\x61\x64\x54\x72\x65\x65':6,'\x47\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x44\x61\x74\x61':5,'\x4c\x6f\x61\x64\x46\x69\x6c\x65':8,'\x47\x65\x74\x50\x69\x63\x6b\x65\x64\x44\x61\x74\x61':7};BIMVIZ["NETDEFINE"]={};BIMVIZ["UI"]={};function doDisposeObject3DOnly(H4P){if(H4P!==null){for(var h4P=0;h4P<H4P["children"]["length"];h4P++){doDisposeObject3DOnly(H4P["children"][h4P]);}if(H4P["geometry"]){H4P["geometry"]["dispose"]();H4P["geometry"]=undefined;}if(H4P["material"]){var a6P="mat";a6P+="er";a6P+="ial";H4P[a6P]=undefined;}}H4P=undefined;}BIMVIZ["D3"]={};BIMVIZ["ELEMENT"]={};BIMVIZ["ELEMENT"]["STATUS"]={};BIMVIZ[T2MM]["UniqueDict"]=function(){var i4P="d";i4P+="i";i4P+="ct";this[i4P]=new Array();this["length"]=0;};BIMVIZ["D3"]["UniqueDict"]["prototype"]={'\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72':BIMVIZ["D3"]["UniqueDict"],'\x6c\x69\x73\x74':function(){var J4P="dic";J4P+="t";var C4P;C4P=[];for(var x4P in this[J4P]){var R4P="pu";R4P+="s";R4P+="h";if(!this["dict"]["hasOwnProperty"](x4P))continue;C4P[R4P](x4P);}return C4P;},'\x67\x65\x74':function(W0P){var n0P;n0P=this["dict"][W0P];return n0P;},'\x73\x65\x74':function(H0P,m0P){var S0P;S0P=this["dict"][H0P];if(S0P){var z4P="dic";z4P+="t";this[z4P][H0P]=m0P;}else{this["dict"][H0P]=m0P;this["length"]++;}},'\x61\x64\x64':function(A0P,a0P){var Y4P="dic";Y4P+="t";var l0P;l0P=this[Y4P][A0P];if(!l0P){var f4P="len";f4P+="gth";var g4P="dic";g4P+="t";this[g4P][A0P]=a0P;this[f4P]++;}},'\x72\x65\x6d\x6f\x76\x65':function(K0P){var D4P;D4P=this["dict"][K0P];if(D4P){var d4P="d";d4P+="ict";delete this[d4P][K0P];this["length"]--;}},'\x63\x6c\x65\x61\x72':function(){var e4P="di";e4P+="ct";this[e4P]=new Array();this["length"]=0;}};function doDisposeObject3D(X4P){var F4P;if(X4P!==null){var K4P="geometr";K4P+="y";for(var G4P=0;G4P<X4P["children"]["length"];G4P++){doDisposeObject3D(X4P["children"][G4P]);}if(X4P[K4P]){var V4P="geom";V4P+="etr";V4P+="y";var q4P="d";q4P+="ispose";X4P["geometry"][q4P]();X4P[V4P]=undefined;}if(X4P["material"]){var D6P="isA";D6P+="r";D6P+="ray";if(Array[D6P](X4P["material"])){for(var G4P=0;G4P<X4P["material"]["length"];G4P++){var u6P="ma";u6P+="terial";var b6P="materia";b6P+="l";F4P=X4P[b6P][G4P];if(F4P["map"]){var t6P="ma";t6P+="p";var A6P="m";A6P+="ap";F4P[A6P]["dispose"]();F4P[t6P]=undefined;}if(F4P["dispose"]){var B6P="dispo";B6P+="s";B6P+="e";F4P[B6P]();}F4P=undefined;X4P[u6P][G4P]=undefined;}}else{var P6P="di";P6P+="spose";var L6P="materia";L6P+="l";if(X4P[L6P]["map"]){var O6P="m";O6P+="ap";X4P["material"][O6P]["dispose"]();X4P["material"]["map"]=undefined;}if(X4P["material"][P6P]){X4P["material"]["dispose"]();}}X4P["material"]=undefined;}}X4P=undefined;}BIMVIZ["D3"]["KeyListDict"]=function(){this["dict"]=new Array();};BIMVIZ["D3"]["KeyListDict"]["prototype"]={'\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72':BIMVIZ["D3"][I2MM],'\x61\x64\x64':function(l4P,B4P){var t4P;t4P=this["dict"][l4P];if(!t4P){t4P=[];this["dict"][l4P]=t4P;}t4P["push"](B4P);},'\x67\x65\x74':function(j4P){var L4P;L4P=this["dict"][j4P];return L4P;}};;;var J8V2g={'C50':function(j,U){return j>U;},'p70':function(j,U){return j!==U;},'d9W':function(j,U){return j*U;},'o4g':function(j,U){return j-U;},'C9W':function(j,U){return j===U;},'U0g':function(j,U){return j*U;},'W8w':function(j,U){return j*U;},'r3w':function(j,U){return j-U;},'b3W':function(j,U){return j*U;},'x3w':function(j,U){return j===U;},'L9v':function(j,U){return j*U;},'x4W':function(j,U){return j*U;},'F4g':function(j,U,Q){return j*U*Q;},'U20':function(j,U,Q){return j*U*Q;},'F2W':function(j,U){return j-U;},'V3lb':"matrixWorld",'I8g':function(j,U){return j/U;},'T00':function(j,U){return j<U;},'p9v':function(j,U){return j*U;},'P6w':function(j,U){return j-U;},'U3W':function(j,U){return j*U;},'m40':function(j,U){return j-U;},'G6w':function(j,U){return j*U;},'K5g':function(j,U){return j*U;},'a4W':function(j,U){return j*U;},'X5w':function(j,U){return j-U;},'m3g':function(j,U){return j===U;},'X4w':function(j,U){return j*U;},'W5g':function(j,U){return j*U;},'E4W':function(j,U){return j*U;},'G5w':function(j,U){return j===U;},'B2v':function(j,U){return j*U;},'L7lb':"lengthSq",'a30':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'d1w':function(j,U){return j*U;},'q8W':function(j,U){return j*U;},'E8w':function(j,U){return j<U;},'J7bb':4,'c7W':function(j,U){return j*U;},'x5lb':13,'o9lb':"getInverse",'J3w':function(j,U){return j*U;},'I1w':function(j,U){return j*U;},'F1W':function(j,U){return j-U;},'s1w':function(j,U){return j*U;},'A5bb':"dot",'g7lb':true,'o8g':function(j,U){return j*U;},'z7g':function(j,U){return j>U;},'t0w':function(j,U){return j*U;},'A00':function(j,U){return j*U;},'w7W':function(j,U){return j*U;},'t8w':function(j,U){return j*U;},'V3g':function(j,U){return j-U;},'g2v':function(j,U){return j*U;},'B8g':function(j,U){return j>U;},'D80':function(j,U){return j*U;},'k60':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'B6lb':"sub",'J5g':function(j,U){return j*U;},'T7bb':1,'I9W':function(j,U){return j-U;},'N8w':function(j,U){return j===U;},'L0w':function(j,U){return j===U;},'S0W':function(j,U){return j===U;},'G7bb':3,'E10':function(j,U){return j*U;},'q5lb':"multiplyScalar",'H2W':function(j,U){return j*U;},'d6lb':"applyQuaternion",'V7lb':1.0,'l8lb':"makeEmpty",'K9w':function(j,U){return j*U;},'h9W':function(j,U){return j*U;},'R5g':function(j,U){return j===U;},'o50':function(j,U){return j<=U;},'Z9v':function(j,U){return j*U;},'t9w':function(j,U){return j*U;},'k3lb':"ceil",'M9w':function(j,U){return j/U;},'x8w':function(j,U){return j<U;},'B2lb':"onChangeCallback",'v1W':function(j,U){return j*U;},'C1w':function(j,U){return j*U;},'q3W':function(j,U){return j*U;},'t3w':function(j,U){return j-U;},'V2v':function(j,U){return j*U;},'C7bb':8,'S8W':function(j,U){return j*U;},'W5W':function(j,U){return j*U;},'e5w':function(j,U){return j-U;},'R9w':function(j,U){return j/U;},'y5g':function(j,U){return j*U;},'R3g':function(j,U){return j-U;},'C2v':function(j,U){return j*U;},'M4W':function(j,U){return j===U;},'Z5g':function(j,U){return j*U;},'n7bb':5,'h8W':function(j,U){return j*U;},'s8W':function(j,U){return j*U;},'q0g':function(j,U){return j*U;},'k00':function(j,U){return j*U;},'J1g':function(j,U,Q){return j*U*Q;},'R0w':function(j,U){return j===U;},'m2w':function(j,U){return j===U;},'T5w':function(j,U){return j===U;},'P6lb':"fromArray",'n1lb':"warn",'l0lb':"elements",'e6v':function(j,U,Q){return j-U+Q;},'t27b':"Box3",'Q8lb':"sqrt",'O4g':function(j,U,Q){return j*U*Q;},'w6w':function(j,U){return j/U;},'e27b':"subVectors",'O40':function(j,U,Q){return j*U/Q;},'F3g':function(j,U){return j-U;},'m50':function(j,U){return j<U;},'o7w':function(j,U){return j/U;},'K6W':function(j,U){return j-U;},'P1g':function(j,U){return j===U;},'U50':function(j,U){return j<U;},'G30':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'Y40':function(j,U){return j===U;},'B50':function(j,U){return j<=U;},'b7w':function(j,U){return j*U;},'p9w':function(j,U){return j<U;},'o8lb':false,'G80':function(j,U){return j*U;},'M8w':function(j,U){return j/U;},'t30':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'V8W':function(j,U){return j*U;},'L5W':function(j,U){return j*U;},'D1W':function(j,U){return j*U;},'t10':function(j,U){return j*U;},'J70':function(j,U){return j<U;},'g7w':function(j,U){return j-U;},'C40':function(j,U){return j*U;},'E6g':function(j,U){return j/U;},'s60':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'E5g':function(j,U){return j!==U;},'R4lb':"max",'d2w':function(j,U){return j!==U;},'T7g':function(j,U){return j*U;},'z1W':function(j,U){return j*U;},'M6W':function(j,U){return j*U;},'L10':function(j,U){return j*U;},'z4w':function(j,U){return j*U;},'F5bb':"add",'v7W':function(j,U){return j*U;},'r9v':function(j,U){return j>=U;},'e00':function(j,U){return j*U;},'a5W':function(j,U){return j*U;},'U8W':function(j,U){return j*U;},'S0lb':"z",'e80':function(j,U){return j*U;},'s9W':function(j,U){return j-U;},'S7w':function(j,U){return j*U;},'w5w':function(j,U){return j*U;},'b8g':function(j,U){return j/U;},'o20':function(j,U){return j===U;},'b60':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'E5W':function(j,U){return j*U;},'W9v':function(j,U){return j<=U;},'m2v':function(j,U){return j*U;},'a0lb':"multiplyMatrices",'R6g':function(j,U){return j!==U;},'f4w':function(j,U){return j*U;},'C0g':function(j,U){return j*U;},'E9w':function(j,U){return j*U;},'P2W':function(j,U){return j-U;},'m60':function(j,U){return j*U;},'V9W':function(j,U){return j*U;},'h50':function(j,U){return j>U;},'C7w':function(j,U){return j*U;},'u4g':function(j,U){return j===U;},'u3W':function(j,U){return j*U;},'c1W':function(j,U){return j*U;},'i5g':function(j,U){return j*U;},'Y9v':function(j,U){return j!==U;},'a1g':function(j,U){return j-U;},'Q2w':function(j,U){return j*U;},'c6w':function(j,U){return j*U;},'Y10':function(j,U){return j*U;},'i3w':function(j,U){return j!==U;},'X1lb':"J6g",'I2w':function(j,U){return j*U;},'H1W':function(j,U){return j*U;},'K70':function(j,U){return j<U;},'Q0bb':"min",'m8W':function(j,U){return j*U;},'z6v':function(j,U){return j===U;},'E3w':function(j,U){return j*U;},'m7w':function(j,U){return j*U;},'Q60':function(j,U){return j*U;},'g50':function(j,U){return j/U;},'w00':function(j,U){return j*U;},'F7g':function(j,U){return j/U;},'i30':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'L4W':function(j,U){return j-U;},'g27b':"isEmpty",'U0W':function(j,U){return j*U;},'N40':function(j,U){return j/U;},'h2v':function(j,U){return j*U;},'s7bb':'index is out of range: ','J4lb':'XYZ','f6w':function(j,U){return j*U;},'B9W':function(j,U){return j*U;},'l7W':function(j,U){return j*U;},'d3W':function(j,U){return j*U;},'C30':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'r0w':function(j,U){return j===U;},'R10':function(j,U){return j-U;},'K6g':function(j,U){return j===U;},'R5W':function(j,U){return j*U;},'f1lb':"copy",'Z97b':"atan2",'S9W':function(j,U){return j*U;},'s8g':function(j,U){return j*U;},'W6g':function(j,U){return j===U;},'n1w':function(j,U){return j*U;},'j2w':function(j,U){return j*U;},'j0W':function(j,U){return j*U;},'d0g':function(j,U){return j*U;},'C8g':function(j,U){return j>U;},'Y3w':function(j,U){return j!==U;},'E1g':function(j,U,Q){return j*U*Q;},'q40':function(j,U){return j-U;},'E70':function(j,U){return j<U;},'w7g':function(j,U){return j===U;},'o9W':function(j,U){return j*U;},'v6v':function(j,U){return j===U;},'D5w':function(j,U){return j*U;},'N3w':function(j,U){return j*U;},'p20':function(j,U,Q){return j*U*Q;},'g40':function(j,U){return j/U;},'b0W':function(j,U){return j*U;},'T80':function(j,U){return j-U;},'B7w':function(j,U){return j!==U;},'s2w':function(j,U){return j*U;},'t4W':function(j,U){return j===U;},'z2W':function(j,U){return j*U;},'G4w':function(j,U){return j*U;},'P4w':function(j,U){return j*U;},'M9lb':0.5,'Q1w':function(j,U){return j*U;},'H67b':"_w",'M5g':function(j,U){return j/U;},'o0W':function(j,U){return j===U;},'b40':function(j,U,Q){return j*U*Q;},'l3g':function(j,U,Q){return j*U*Q;},'o3W':function(j,U){return j-U;},'b8W':function(j,U){return j*U;},'q0W':function(j,U){return j*U;},'n8g':function(j,U){return j*U;},'k5w':function(j,U){return j*U;},'P7W':function(j,U){return j*U;},'L7bb':6,'y70':function(j,U){return j===U;},'c7g':function(j,U){return j>U;},'n50':function(j,U){return j<U;},'S0g':function(j,U,Q,G){return j-U-Q-G;},'t97b':"floor",'x0w':function(j,U){return j*U;},'S6v':function(j,U){return j*U;},'Q8W':function(j,U){return j*U;},'Z6W':function(j,U){return j*U;},'Y6g':function(j,U){return j===U;},'z2lb':"crossVectors",'U2w':function(j,U){return j*U;},'Z9w':function(j,U){return j>=U;},'C8W':function(j,U){return j*U;},'t1g':function(j,U,Q){return j*U*Q;},'x5g':function(j,U){return j*U;},'H6w':function(j,U){return j-U;},'y5W':function(j,U){return j*U;},'a0w':function(j,U){return j*U;},'H7W':function(j,U){return j*U;},'b2v':function(j,U){return j*U;},'G6v':function(j,U){return j===U;},'Z10':function(j,U){return j*U;},'t2lb':"Euler",'i8w':function(j,U){return j===U;},'A1W':function(j,U){return j*U;},'x5W':function(j,U){return j*U;},'f5w':function(j,U){return j*U;},'a5g':function(j,U){return j*U;},'l80':function(j,U){return j/U;},'J9v':function(j,U){return j*U;},'d0W':function(j,U){return j<U;},'y9w':function(j,U){return j*U;},'H7bb':"_z",'c8bb':"Vector3",'Y9w':function(j,U){return j*U;},'f1g':function(j,U,Q){return j*U*Q;},'A0g':function(j,U){return j*U;},'e0lb':"itemSize",'R3w':function(j,U){return j*U;},'m1w':function(j,U){return j*U;},'W70':function(j,U){return j<U;},'q1w':function(j,U){return j*U;},'q50':function(j,U){return j>U;},'S50':function(j,U){return j<=U;},'Y6W':function(j,U){return j*U;},'i70':function(j,U){return j!==U;},'O80':function(j,U){return j!==U;},'N3g':function(j,U,Q){return j*U*Q;},'x4g':function(j,U,Q){return j*U*Q;},'c5w':function(j,U){return j*U;},'r9w':function(j,U){return j*U;},'M70':function(j,U){return j!==U;},'t6g':function(j,U){return j===U;},'u20':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'N5W':function(j,U){return j*U;},'f6v':function(j,U){return j===U;},'T4g':function(j,U,Q){return j*U*Q;},'D00':function(j,U){return j>U;},'e67b':"_x",'x10':function(j,U){return j-U;},'y3w':function(j,U){return j/U;},'g3g':function(j,U,Q){return j*U*Q;},'D5lb':11,'U1g':function(j,U,Q){return j*U*Q;},'U90':function(j,U,Q){return j*U*Q;},'Q9W':function(j,U){return j*U;},'b2w':function(j,U){return j===U;},'W2lb':'assign','V7w':function(j,U){return j-U;},'V0W':function(j,U){return j<U;},'D7g':function(j,U){return j<U;},'P30':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'C3W':function(j,U){return j*U;},'x6g':function(j,U){return j/U;},'k1W':function(j,U){return j*U;},'w1g':function(j,U,Q){return j*U*Q;},'Q3W':function(j,U){return j*U;},'C0W':function(j,U){return j*U;},'N20':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'G00':function(j,U){return j>U;},'G20':function(j,U,Q){return j*U*Q;},'X6w':function(j,U){return j*U;},'L5g':function(j,U){return j*U;},'p90':function(j,U,Q){return j*U*Q;},'U27b':"setFromMatrixColumn",'f1W':function(j,U){return j-U;},'W6W':function(j,U){return j*U;},'d8g':function(j,U){return j*U;},'p4W':function(j,U){return j-U;},'O2W':function(j,U){return j*U;},'u8g':function(j,U){return j*U;},'n0W':function(j,U){return j*U;},'P5w':function(j,U){return j*U;},'I7w':function(j,U){return j-U;},'c5lb':14,'V3W':function(j,U){return j*U;},'B4g':function(j,U,Q){return j*U*Q;},'B5lb':10,'P1W':function(j,U){return j*U;},'r10':function(j,U){return j*U;},'L6W':function(j,U){return j-U;},'h7w':function(j,U){return j*U;},'t6W':function(j,U){return j*U;},'m7lb':'YXZ','a3w':function(j,U){return j===U;},'e2W':function(j,U){return j*U;},'L4g':function(j,U,Q){return j*U*Q;},'Y5W':function(j,U){return j*U;},'v00':function(j,U){return j<U;},'j3g':function(j,U){return j/U;},'l6v':function(j,U){return j-U;},'q2w':function(j,U){return j===U;},'K10':function(j,U){return j*U;},'L6g':function(j,U){return j===U;},'q60':function(j,U){return j*U;},'M40':function(j,U){return j/U;},'g2w':function(j,U){return j*U;},'S1w':function(j,U){return j*U;},'y6W':function(j,U){return j*U;},'a70':function(j,U){return j!==U;},'m8lb':'ZYX','A8lb':"set",'b1w':function(j,U){return j*U;},'B1w':function(j,U){return j*U;},'F6w':function(j,U){return j*U;},'l90':function(j,U,Q){return j*U*Q;},'k7W':function(j,U){return j*U;},'X1W':function(j,U){return j*U;},'s5lb':12,'k2W':function(j,U){return j*U;},'a6g':function(j,U){return j/U;},'F7W':function(j,U){return j*U;},'x8lb':"array",'I8W':function(j,U){return j*U;},'a6W':function(j,U){return j*U;},'q4lb':"distanceToSquared",'A6w':function(j,U){return j===U;},'M3w':function(j,U){return j*U;},'S8g':function(j,U){return j>U;},'X00':function(j,U){return j>U;},'h0g':function(j,U){return j*U;},'B3W':function(j,U){return j-U;},'R7bb':'XZY','T4w':function(j,U){return j*U;},'L70':function(j,U){return j<U;},'L8w':function(j,U){return j*U;},'p3w':function(j,U){return j*U;},'N10':function(j,U){return j*U;},'d6v':function(j,U){return j*U;},'K3w':function(j,U){return j===U;},'N9v':function(j,U){return j!==U;},'T6w':function(j,U){return j*U;},'s1g':function(j,U,Q){return j*U*Q;},'b9W':function(j,U){return j===U;},'G1W':function(j,U){return j*U;},'j2v':function(j,U){return j/U;},'y4g':function(j,U,Q){return j*U*Q;},'W7bb':9,'X6v':function(j,U){return j-U;},'D27b':"divideScalar",'p8w':function(j,U){return j*U;},'Z70':function(j,U){return j<U;},'n8W':function(j,U){return j*U;},'r5g':function(j,U){return j*U;},'K5W':function(j,U){return j*U;},'g9W':function(j,U){return j*U;},'F5w':function(j,U){return j/U;},'U8g':function(j,U){return j!==U;},'d50':function(j,U){return j<=U;},'f7W':function(j,U){return j*U;},'P7g':function(j,U){return j/U;},'x90':function(j,U,Q){return j*U*Q;},'N9w':function(j,U){return j*U;},'E60':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'W0w':function(j,U){return j===U;},'a10':function(j,U){return j*U;},'N70':function(j,U){return j instanceof U;},'H6v':function(j,U){return j===U;},'c20':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'g1w':function(j,U){return j/U;},'d8W':function(j,U){return j*U;},'W3w':function(j,U){return j-U;},'J6g':function(j,U){return j===U;},'D3g':function(j,U,Q){return j*U*Q;},'a8w':function(j,U){return j<U;},'I50':function(j,U){return j/U;},'I0W':function(j,U){return j/U;},'e1W':function(j,U){return j*U;},'x9w':function(j,U){return j*U;},'m0W':function(j,U){return j*U;},'u50':function(j,U){return j<=U;},'O90':function(j,U,Q){return j*U*Q;},'o2w':function(j,U){return j===U;},'f7bb':7,'M5W':function(j,U){return j*U;},'n20':function(j,U,Q){return j*U*Q;},'l4w':function(j,U){return j*U;},'f7g':function(j,U){return j*U;},'U7w':function(j,U){return j*U;},'g8W':function(j,U){return j*U;},'W10':function(j,U){return j*U;},'q9W':function(j,U){return j*U;},'g8g':function(j,U){return j/U;},'p10':function(j,U){return j*U;},'A80':function(j,U){return j===U;},'w4w':function(j,U){return j*U;},'W5bb':"clamp",'u7w':function(j,U){return j*U;},'R9v':function(j,U){return j*U;},'M10':function(j,U){return j*U;},'H80':function(j,U){return j*U;},'O7W':function(j,U){return j*U;},'q0lb':"x",'O5w':function(j,U){return j*U;},'I2v':function(j,U){return j/U;},'u1w':function(j,U){return j*U;},'G90':function(j,U,Q){return j*U*Q;},'r8w':function(j,U){return j*U;},'J9w':function(j,U){return j-U;},'R8w':function(j,U){return j*U;},'Q2v':function(j,U){return j<U;},'e7g':function(j,U){return j/U;},'L9w':function(j,U){return j<U;},'L3w':function(j,U){return j!==U;},'U97b':"radius",'t5W':function(j,U){return j*U;},'G3lb':"order",'k1g':function(j,U){return j-U;},'S4g':function(j,U){return j-U;},'A7W':function(j,U){return j*U;},'n0lb':"defineProperty",'K40':function(j,U){return j/U;},'Q8g':function(j,U){return j/U;},'u9W':function(j,U){return j*U;},'Y60':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'p6W':function(j,U){return j*U;},'j0g':function(j,U){return j*U;},'G2W':function(j,U){return j*U;},'z5w':function(j,U){return j-U;},'j1w':function(j,U){return j*U;},'r6g':function(j,U){return j!==U;},'C60':function(j,U){return j===U;},'e1g':function(j,U){return j-U;},'i10':function(j,U){return j*U;},'s0W':function(j,U){return j===U;},'F6v':function(j,U){return j*U;},'b27b':"sin",'l6w':function(j,U){return j*U;},'o1w':function(j,U){return j*U;},'v4w':function(j,U){return j*U;},'T2W':function(j,U){return j*U;},'G7W':function(j,U){return j*U;},'X27b':"center",'k4w':function(j,U){return j*U;},'o90':function(j,U,Q){return j*U*Q;},'k7g':function(j,U){return j*U;},'p5W':function(j,U){return j*U;},'c2W':function(j,U){return j*U;},'t9v':function(j,U){return j*U;},'p1g':function(j,U){return j===U;},'X80':function(j,U){return j/U;},'y7bb':"_y",'F80':function(j,U){return j/U;},'r6W':function(j,U){return j===U;},'c4w':function(j,U){return j*U;},'V50':function(j,U){return j/U;},'j9W':function(j,U){return j*U;},'Q50':function(j,U){return j<U;},'Z3w':function(j,U){return j*U;},'A97b':"abs",'N6g':function(j,U){return j!==U;},'d7bb':"Quaternion",'K9v':function(j,U){return j-U;},'v6w':function(j,U){return j*U;},'L1lb':"normalize",'j50':function(j,U){return j<U;},'B8W':function(j,U){return j*U;},'N0w':function(j,U){return j/U;},'T1W':function(j,U){return j*U;},'z4g':function(j,U){return j===U;},'z00':function(j,U){return j>U;},'L3g':function(j,U,Q){return j*U*Q;},'J0lb':"expandByPoint",'d7w':function(j,U){return j*U;},'N4W':function(j,U){return j!==U;},'C0bb':"toArray",'u0g':function(j,U){return j*U;},'h1w':function(j,U){return j*U;},'T7W':function(j,U){return j*U;},'m0g':function(j,U){return j*U;},'p0w':function(j,U){return j===U;},'B2w':function(j,U){return j!==U;},'s3W':function(j,U){return j===U;},'i4W':function(j,U){return j-U;},'f00':function(j,U){return j>U;},'e6w':function(j,U){return j>=U;},'R90':function(j,U,Q){return j*U*Q;},'E0w':function(j,U){return j*U;},'G7g':function(j,U){return j/U;},'b0g':function(j,U){return j*U;},'E6W':function(j,U){return j*U;},'W90':function(j,U,Q){return j*U*Q;},'H27b':"addVectors",'Q7w':function(j,U){return j*U;},'D7W':function(j,U){return j*U;},'W4W':function(j,U){return j-U;},'V8g':function(j,U){return j*U;},'n2w':function(j,U){return j===U;},'U2v':function(j,U){return j<U;},'P00':function(j,U){return j*U;},'M3g':function(j,U){return j===U;},'h4g':function(j,U){return j-U;},'O0g':function(j,U){return j*U;},'c0g':function(j,U){return j===U;},'q4g':function(j,U,Q){return j*U*Q;},'o0g':function(j,U){return j*U;},'m8g':function(j,U){return j*U;},'I3W':function(j,U){return j*U;},'y0w':function(j,U){return j*U;},'r70':function(j,U){return j>U;},'Y4W':function(j,U){return j===U;},'X7W':function(j,U){return j*U;},'C2w':function(j,U){return j===U;},'n2v':function(j,U){return j*U;},'n0g':function(j,U){return j*U;},'O7g':function(j,U){return j*U;},'J8w':function(j,U){return j*U;},'E9v':function(j,U){return j===U;},'p7bb':0,'U3g':function(j,U){return j/U;},'Y8w':function(j,U){return j*U;},'F00':function(j,U){return j===U;},'z6w':function(j,U){return j*U;},'O6w':function(j,U){return j*U;},'u2v':function(j,U){return j*U;},'j8W':function(j,U){return j*U;},'y0bb':'ZXY','K8w':function(j,U){return j/U;},'X7g':function(j,U){return j/U;},'Z4W':function(j,U){return j-U;},'h8lb':"projectionMatrix",'y4W':function(j,U){return j*U;},'U40':function(j,U){return j*U;},'j40':function(j,U){return j*U;},'r4W':function(j,U){return j===U;},'S2w':function(j,U){return j!==U;},'n40':function(j,U){return j*U;},'T6v':function(j,U){return j===U;},'p5g':function(j,U){return j*U;},'B30':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'n90':function(j,U,Q){return j*U*Q;},'g3W':function(j,U){return j*U;},'k80':function(j,U){return j*U;},'e4w':function(j,U){return j*U;},'Y5g':function(j,U){return j*U;},'q7w':function(j,U){return j*U;},'h3W':function(j,U){return j*U;},'n7w':function(j,U){return j*U;},'l2W':function(j,U){return j*U;},'o8W':function(j,U){return j*U;},'Q40':function(j,U){return j*U;},'E8bb':"applyMatrix4",'x70':function(j,U){return j instanceof U;},'l7g':function(j,U){return j*U;},'i5W':function(j,U){return j*U;},'k90':function(j,U,Q){return j*U*Q;},'k6w':function(j,U){return j>U;},'D0g':function(j,U){return j===U;},'P2Bb':(function(K2Bb){return (function(O2Bb,I2Bb){return (function(V2Bb){return {d2Bb:V2Bb,A2Bb:V2Bb,};})(function(k2Bb){var x2Bb,S2Bb=0;for(var a2Bb=O2Bb;S2Bb<k2Bb["length"];S2Bb++){var c2Bb=I2Bb(k2Bb,S2Bb);x2Bb=S2Bb===0?c2Bb:x2Bb^c2Bb;}return x2Bb?a2Bb:!a2Bb;});})((function(D2Bb,w2Bb,N2Bb,s2Bb){var B2Bb=33;return D2Bb(K2Bb,B2Bb)-s2Bb(w2Bb,N2Bb)>B2Bb;})(parseInt,Date,(function(w2Bb){return (''+w2Bb)["substring"](1,(w2Bb+'')["length"]-1);})('_getTime2'),function(w2Bb,N2Bb){return new w2Bb()[N2Bb]();}),function(k2Bb,S2Bb){var M2Bb=parseInt(k2Bb["charAt"](S2Bb),16)["toString"](2);return M2Bb["charAt"](M2Bb["length"]-1);});})('54ikrlsgl'),'l00':function(j,U){return j<=U;},'m3W':function(j,U){return j===U;},'J10':function(j,U){return j*U;},'v0lb':"w",'m9W':function(j,U){return j*U;},'H4w':function(j,U){return j*U;},'V2w':function(j,U){return j*U;},'V1w':function(j,U){return j*U;},'z80':function(j,U){return j-U;},'S3W':function(j,U){return j*U;},'a5lb':15,'J5W':function(j,U){return j*U;},'f80':function(j,U){return j*U;},'s2v':function(j,U){return j*U;},'z7W':function(j,U){return j*U;},'B0W':function(j,U){return j===U;},'v80':function(j,U){return j/U;},'R4W':function(j,U){return j===U;},'b1g':function(j,U,Q){return j*U*Q;},'J0w':function(j,U){return j===U;},'M6g':function(j,U){return j!==U;},'u0W':function(j,U){return j===U;},'W20':function(j,U,Q){return j*U*Q;},'a9v':function(j,U){return j/U;},'M9v':function(j,U){return j*U;},'R70':function(j,U){return j<U;},'A4w':function(j,U){return j*U;},'l5w':function(j,U){return j-U;},'Y70':function(j,U){return j>U;},'O4w':function(j,U){return j*U;},'v5w':function(j,U){return j-U;},'Z7bb':2,'w2W':function(j,U){return j*U;},'x40':function(j,U,Q){return j*U/Q;},'Z8w':function(j,U){return j*U;},'g90':function(j,U,Q){return j*U*Q;},'i9w':function(j,U){return j*U;},'t70':function(j,U){return j>U;},'S2v':function(j,U){return j-U;},'U9W':function(j,U){return j*U;},'a0bb':"Math",'n9W':function(j,U){return j*U;},'j7w':function(j,U){return j*U;},'Q0W':function(j,U){return j*U;},'T9lb':"round",'q2v':function(j,U){return j*U;},'Z1g':function(j,U){return j-U;},'o3g':function(j,U,Q){return j*U*Q;},'K0w':function(j,U){return j/U;},'D4w':function(j,U){return j*U;},'W3lb':"assign",'d2v':function(j,U){return j-U;},'U1w':function(j,U){return j*U;},'A2W':function(j,U){return j*U;},'X2W':function(j,U){return j*U;},'f2W':function(j,U){return j*U;},'I3g':function(j,U){return j-U;},'B90':function(j,U,Q){return j*U*Q;},'c00':function(j,U){return j*U;},'u2w':function(j,U){return j!==U;},'o2v':function(j,U){return j<U;},'u8W':function(j,U){return j*U;},'j3W':function(j,U){return j-U;},'q8g':function(j,U){return j*U;},'d4g':function(j,U){return j-U;},'i0w':function(j,U){return j===U;},'O00':function(j,U){return j*U;},'Q0g':function(j,U){return j*U;},'Q3g':function(j,U){return j/U;},'w1W':function(j,U){return j*U;},'Z5W':function(j,U){return j*U;},'N6W':function(j,U){return j*U;},'g20':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'n60':function(j,U){return j*U;},'I4lb':"cos",'N5g':function(j,U){return j*U;},'A5w':function(j,U){return j*U;},'e9lb':"Vector2",'l1W':function(j,U){return j*U;},'M0w':function(j,U){return j/U;},'V1lb':'YZX','K4W':function(j,U){return j*U;},'r0lb':"y",'t40':function(j,U){return j===U;},'h2w':function(j,U){return j===U;},'y8w':function(j,U){return j===U;},'i9v':function(j,U){return j>U;},'c80':function(j,U){return j<U;},'s7w':function(j,U){return j-U;},'g0W':function(j,U,Q){return j*U*Q;},'Y0w':function(j,U){return j>U;},'t5g':function(j,U){return j*U;},'w80':function(j,U){return j*U;},'F4w':function(j,U){return j*U;},'D6w':function(j,U){return j/U;},'q3g':function(j,U,Q){return j*U*Q;},'A7g':function(j,U){return j*U;},'R6W':function(j,U){return j*U;},'H00':function(j,U){return j<U;},'x6W':function(j,U){return j*U;},'R40':function(j,U){return j<U;},'O1W':function(j,U){return j*U;},'e7W':function(j,U){return j*U;},'H5w':function(j,U){return j===U;},'v7g':function(j,U){return j/U;},'P80':function(j,U){return j*U;},'x9v':function(j,U){return j-U;},'a9w':function(j,U){return j*U;},'q3lb':"Matrix4",'s50':function(j,U){return j<=U;},'D2W':function(j,U){return j===U;},'v2W':function(j,U){return j===U;},'b50':function(j,U){return j<U;},'D9lb':"applyProjection",'h8g':function(j,U){return j/U;},'y10':function(j,U){return j/U;},'r5W':function(j,U){return j*U;},'i6W':function(j,U){return j-U;},'y9v':function(j,U){return j*U;},'h0W':function(j,U){return j===U;},'l20':function(j,U,Q){return j*U*Q;},'J4W':function(j,U){return j-U;},'n3W':function(j,U){return j*U;},'J6W':function(j,U){return j*U;},'H7g':function(j,U){return j/U;},'W9w':function(j,U){return j*U;},'Z0w':function(j,U){return j===U;},'g4g':function(j,U,Q){return j*U*Q;}};J8V2g.a6Bb=function(b){while(b)return J8V2g.P2Bb.A2Bb(b);};J8V2g.I6Bb=function(n){while(n)return J8V2g.P2Bb.A2Bb(n);};J8V2g.D6Bb=function(c){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(c);};J8V2g.K6Bb=function(a){if(J8V2g&&a)return J8V2g.P2Bb.A2Bb(a);};J8V2g.B6Bb=function(k){while(k)return J8V2g.P2Bb.d2Bb(k);};J8V2g.N6Bb=function(c){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(c);};J8V2g.S6Bb=function(a){while(a)return J8V2g.P2Bb.d2Bb(a);};J8V2g.P6Bb=function(f){while(f)return J8V2g.P2Bb.A2Bb(f);};J8V2g.R6Bb=function(f){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(f);};J8V2g.e6Bb=function(g){while(g)return J8V2g.P2Bb.d2Bb(g);};J8V2g.Y6Bb=function(j){while(j)return J8V2g.P2Bb.d2Bb(j);};J8V2g.X6Bb=function(g){while(g)return J8V2g.P2Bb.A2Bb(g);};J8V2g.t6Bb=function(m){while(m)return J8V2g.P2Bb.A2Bb(m);};J8V2g.h6Bb=function(e){while(e)return J8V2g.P2Bb.A2Bb(e);};J8V2g.l6Bb=function(l){if(J8V2g&&l)return J8V2g.P2Bb.d2Bb(l);};J8V2g.r6Bb=function(i){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(i);};J8V2g.b6Bb=function(f){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(f);};J8V2g.W6Bb=function(d){while(d)return J8V2g.P2Bb.A2Bb(d);};J8V2g.C6Bb=function(d){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(d);};J8V2g.L6Bb=function(m){if(J8V2g&&m)return J8V2g.P2Bb.A2Bb(m);};J8V2g.n6Bb=function(b){while(b)return J8V2g.P2Bb.d2Bb(b);};J8V2g.H6Bb=function(a){while(a)return J8V2g.P2Bb.d2Bb(a);};J8V2g.J6Bb=function(k){while(k)return J8V2g.P2Bb.d2Bb(k);};J8V2g.m6Bb=function(b){while(b)return J8V2g.P2Bb.A2Bb(b);};J8V2g.p6Bb=function(f){if(J8V2g&&f)return J8V2g.P2Bb.A2Bb(f);};J8V2g.i6Bb=function(l){while(l)return J8V2g.P2Bb.A2Bb(l);};J8V2g.U6Bb=function(k){if(J8V2g&&k)return J8V2g.P2Bb.A2Bb(k);};J8V2g.j6Bb=function(m){while(m)return J8V2g.P2Bb.A2Bb(m);};J8V2g.g2Bb=function(j){while(j)return J8V2g.P2Bb.A2Bb(j);};var THREE=J8V2g.g2Bb("efc")?{}:"Texture Loaded:";if(J8V2g[J8V2g.X1lb](Object[J8V2g.W3lb],undefined)){J8V2g.q6Bb=function(d){if(J8V2g&&d)return J8V2g.P2Bb.d2Bb(d);};J8V2g.Z6Bb=function(e){if(J8V2g&&e)return J8V2g.P2Bb.d2Bb(e);};Object[J8V2g.n0lb](Object,J8V2g.W2lb,{writable:J8V2g.g7lb,configurable:J8V2g.g7lb,value:function(U){J8V2g.G6Bb=function(c){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(c);};J8V2g.T6Bb=function(h){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(h);};J8V2g.Q6Bb=function(c){while(c)return J8V2g.P2Bb.A2Bb(c);};J8V2g.z6Bb=function(e){if(J8V2g&&e)return J8V2g.P2Bb.d2Bb(e);};J8V2g.v6Bb=function(g){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(g);};J8V2g.y6Bb=function(l){if(J8V2g&&l)return J8V2g.P2Bb.A2Bb(l);};'use strict';var Q=J8V2g.j6Bb("d6b")?"contentLen":"enumerable",G=J8V2g.y6Bb("64")?'MeshDistanceMaterial':"M6g",T=J8V2g.v6Bb("462")?"ShadowMaterial":"getOwnPropertyDescriptor",J=J8V2g.U6Bb("4825")?"R6g":'RingoJS',n=J8V2g.i6Bb("28bd")?"UnsignedShort565Type":"keys",W=J8V2g.z6Bb("bc84")?"Y6g":'os.version',H=J8V2g.Q6Bb("7623")?"s+":"t6g",f=J8V2g.G6Bb("1b")?'seagreen':"r6g",C=J8V2g.p6Bb("e83e")?"Cannot convert first argument to object":"DOLLY",F=J8V2g.T6Bb("1112")?null:"vertexTextures",e=J8V2g.m6Bb("b2")?"W6g":'thistle',o=J8V2g.Z6Bb("a1")?"L6g":"vVisibility *= 1.0 - visibility.g / 9.0;";if(J8V2g[o](U,undefined)||J8V2g[e](U,F)){throw  new TypeError(C);}var u=J8V2g.q6Bb("22")?"UnsignedByteType":Object(U);for(var R=J8V2g.T7bb,d=arguments.length;J8V2g[f](R,d);++R){var D=arguments[R];if(J8V2g[H](D,undefined)||J8V2g[W](D,F))continue;D=Object(D);var M=Object[n](D);for(var O=J8V2g.p7bb,k=M.length;J8V2g[J](O,k);++O){var N=M[O],B=Object[T](D,N);if(J8V2g[G](B,undefined)&&B[Q]){var K=function(j){u[N]=j[N];};K(D);}}}return u;}});}THREE[J8V2g.d7bb]=J8V2g.J6Bb("b86")?function(j,U,Q,G){J8V2g.f6Bb=function(k){if(J8V2g&&k)return J8V2g.P2Bb.A2Bb(k);};var T=J8V2g.H6Bb("4741")?'"><i class="fa fa-check-square"></i></a>':"N6g";this[J8V2g.e67b]=J8V2g.L6Bb("8764")?j||J8V2g.p7bb:'TorusKnotGeometry';this[J8V2g.y7bb]=J8V2g.f6Bb("e6")?'fuchsia':U||J8V2g.p7bb;this[J8V2g.H7bb]=Q||J8V2g.p7bb;this[J8V2g.H67b]=J8V2g.n6Bb("2bc4")?(J8V2g[T](G,undefined))?G:J8V2g.T7bb:"IFCSITE";}:'Sprite';THREE.Quaternion.prototype=J8V2g.C6Bb("dc")?{constructor:THREE[J8V2g.d7bb],get x(){return this[J8V2g.e67b];},set x(value){this[J8V2g.e67b]=value;this[J8V2g.B2lb]();},get y(){return this[J8V2g.y7bb];},set y(value){this[J8V2g.y7bb]=J8V2g.W6Bb("7334")?value:"_weightNext";this[J8V2g.B2lb]();},get z(){return this[J8V2g.H7bb];},set z(value){this[J8V2g.H7bb]=value;this[J8V2g.B2lb]();},get w(){return this[J8V2g.H67b];},set w(value){this[J8V2g.H67b]=value;this[J8V2g.B2lb]();},set:function(j,U,Q,G){J8V2g.F6Bb=function(h){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(h);};this[J8V2g.e67b]=j;this[J8V2g.y7bb]=U;this[J8V2g.H7bb]=J8V2g.F6Bb("75cd")?Q:"interpolant";this[J8V2g.H67b]=G;this[J8V2g.B2lb]();return this;},clone:function(){return new this.constructor(this[J8V2g.e67b],this[J8V2g.y7bb],this[J8V2g.H7bb],this[J8V2g.H67b]);},copy:function(j){this[J8V2g.e67b]=J8V2g.b6Bb("7d")?267:j[J8V2g.q0lb];this[J8V2g.y7bb]=J8V2g.r6Bb("de5")?"#if DIFFUSE_TEXTURE == 1":j[J8V2g.r0lb];this[J8V2g.H7bb]=j[J8V2g.S0lb];this[J8V2g.H67b]=j[J8V2g.v0lb];this[J8V2g.B2lb]();return this;},setFromEuler:function(j,U){J8V2g.c6Bb=function(f){if(J8V2g&&f)return J8V2g.P2Bb.d2Bb(f);};J8V2g.x6Bb=function(f){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(f);};J8V2g.s6Bb=function(h){if(J8V2g&&h)return J8V2g.P2Bb.A2Bb(h);};J8V2g.w6Bb=function(k){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(k);};J8V2g.k6Bb=function(l){if(J8V2g&&l)return J8V2g.P2Bb.A2Bb(l);};J8V2g.M6Bb=function(k){while(k)return J8V2g.P2Bb.A2Bb(k);};J8V2g.d6Bb=function(j){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(j);};J8V2g.u6Bb=function(f){while(f)return J8V2g.P2Bb.d2Bb(f);};J8V2g.o6Bb=function(b){if(J8V2g&&b)return J8V2g.P2Bb.d2Bb(b);};var Q="U8g",G="g4g",T=J8V2g.l6Bb("3ec")?"O4g":'lineDistance',J="x4g",n=J8V2g.h6Bb("e4")?'points':"B4g",W=J8V2g.x6Bb("8a1")?"S4g":'OpenBSD',H="d4g",f=J8V2g.t6Bb("7f")?'Nintendo':"u4g",C=J8V2g.X6Bb("eb4")?"o4g":"Sketch",F="h4g",e="F4g",o="L4g",u=J8V2g.o6Bb("dc")?"q4g":"SMAANeighborhoodBlendingVS( vUv );",R=J8V2g.c6Bb("53")?'THREE.Audio: this Audio has no playback control.':"T4g",d="z4g",D=J8V2g.I6Bb("14")?"y4g":'SpriteMaterial',M=J8V2g.Y6Bb("d4")?"E1g":")",O="a1g",k=J8V2g.a6Bb("8a")?'THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.':"s1g",N=J8V2g.e6Bb("6a")?1025:"w1g",B="k1g",K=J8V2g.u6Bb("a323")?'THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( \'WEBGL_compressed_texture_s3tc\' ).':"P1g",I="e1g",v9="t1g",j9="b1g",Z9=J8V2g.R6Bb("62e")?"pickeddata":"f1g",A=J8V2g.P6Bb("7ee")?"J1g":'o',y9=J8V2g.d6Bb("53")?"vec3 Uncharted2Tonemap(vec3 x)":"Z1g",V="p1g",i9="U1g",U9="g3g",z9="V3g",q9="I3g",J9="D3g",m9="N3g",f9=J8V2g.M6Bb("2db")?'void main() {':"M3g",T9=J8V2g.k6Bb("7533")?"vec3 curr = Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);":"R3g",G9="o3g",F9="l3g",C9="F3g",l9=J8V2g.S6Bb("7be")?3004:"L3g",H9=J8V2g.N6Bb("16f")?"dlist":"q3g",t9=J8V2g.w6Bb("bc8a")?"m3g":'THREE.EffectComposer relies on THREE.ShaderPass',Y9="Q3g",n9="U3g",L9=J8V2g.B6Bb("e21")?"j3g":'4.0',P9="E6g",w9=J8V2g.K6Bb("3e")?"a6g":"t = abs( C - Cright );",N9=J8V2g.D6Bb("11")?'bindMatrixInverse':"x6g",d9='THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.',M9=J8V2g.s6Bb("ed")?"K6g":'(';if(J8V2g[M9](j instanceof THREE[J8V2g.t2lb],J8V2g.o8lb)){throw  new Error(d9);}var s9=Math[J8V2g.I4lb](J8V2g[N9](j[J8V2g.e67b],J8V2g.Z7bb)),k9=Math[J8V2g.I4lb](J8V2g[w9](j[J8V2g.y7bb],J8V2g.Z7bb)),u9=Math[J8V2g.I4lb](J8V2g[P9](j[J8V2g.H7bb],J8V2g.Z7bb)),B9=Math[J8V2g.b27b](J8V2g[L9](j[J8V2g.e67b],J8V2g.Z7bb)),S9=Math[J8V2g.b27b](J8V2g[n9](j[J8V2g.y7bb],J8V2g.Z7bb)),K9=Math[J8V2g.b27b](J8V2g[Y9](j[J8V2g.H7bb],J8V2g.Z7bb)),g9=j[J8V2g.G3lb];if(J8V2g[t9](g9,J8V2g.J4lb)){this[J8V2g.e67b]=J8V2g[H9](B9,k9,u9)+J8V2g[l9](s9,S9,K9);this[J8V2g.y7bb]=J8V2g[C9](s9*S9*u9,B9*k9*K9);this[J8V2g.H7bb]=J8V2g[F9](s9,k9,K9)+J8V2g[G9](B9,S9,u9);this[J8V2g.H67b]=J8V2g[T9](s9*k9*u9,B9*S9*K9);}else if(J8V2g[f9](g9,J8V2g.m7lb)){this[J8V2g.e67b]=J8V2g[m9](B9,k9,u9)+J8V2g[J9](s9,S9,K9);this[J8V2g.y7bb]=J8V2g[q9](s9*S9*u9,B9*k9*K9);this[J8V2g.H7bb]=J8V2g[z9](s9*k9*K9,B9*S9*u9);this[J8V2g.H67b]=J8V2g[U9](s9,k9,u9)+J8V2g[i9](B9,S9,K9);}else if(J8V2g[V](g9,J8V2g.y0bb)){this[J8V2g.e67b]=J8V2g[y9](B9*k9*u9,s9*S9*K9);this[J8V2g.y7bb]=J8V2g[A](s9,S9,u9)+J8V2g[Z9](B9,k9,K9);this[J8V2g.H7bb]=J8V2g[j9](s9,k9,K9)+J8V2g[v9](B9,S9,u9);this[J8V2g.H67b]=J8V2g[I](s9*k9*u9,B9*S9*K9);}else if(J8V2g[K](g9,J8V2g.m8lb)){this[J8V2g.e67b]=J8V2g[B](B9*k9*u9,s9*S9*K9);this[J8V2g.y7bb]=J8V2g[N](s9,S9,u9)+J8V2g[k](B9,k9,K9);this[J8V2g.H7bb]=J8V2g[O](s9*k9*K9,B9*S9*u9);this[J8V2g.H67b]=J8V2g[M](s9,k9,u9)+J8V2g[D](B9,S9,K9);}else if(J8V2g[d](g9,J8V2g.V1lb)){this[J8V2g.e67b]=J8V2g[R](B9,k9,u9)+J8V2g[u](s9,S9,K9);this[J8V2g.y7bb]=J8V2g[o](s9,S9,u9)+J8V2g[e](B9,k9,K9);this[J8V2g.H7bb]=J8V2g[F](s9*k9*K9,B9*S9*u9);this[J8V2g.H67b]=J8V2g[C](s9*k9*u9,B9*S9*K9);}else if(J8V2g[f](g9,J8V2g.R7bb)){this[J8V2g.e67b]=J8V2g[H](B9*k9*u9,s9*S9*K9);this[J8V2g.y7bb]=J8V2g[W](s9*S9*u9,B9*k9*K9);this[J8V2g.H7bb]=J8V2g[n](s9,k9,K9)+J8V2g[J](B9,S9,u9);this[J8V2g.H67b]=J8V2g[T](s9,k9,u9)+J8V2g[G](B9,S9,K9);}if(J8V2g[Q](U,J8V2g.o8lb))this[J8V2g.B2lb]();return this;},setFromAxisAngle:function(j,U){var Q="n8g",G="q8g",T="m8g",J="Q8g",n=J8V2g[J](U,J8V2g.Z7bb),W=Math[J8V2g.b27b](n);this[J8V2g.e67b]=J8V2g[T](j[J8V2g.q0lb],W);this[J8V2g.y7bb]=J8V2g[G](j[J8V2g.r0lb],W);this[J8V2g.H7bb]=J8V2g[Q](j[J8V2g.S0lb],W);this[J8V2g.H67b]=Math[J8V2g.I4lb](n);this[J8V2g.B2lb]();return this;},setFromRotationMatrix:function(j){var U="k7g",Q="P7g",G="e7g",T="X7g",J="l7g",n="F7g",W="f7g",H="H7g",f="G7g",C="T7g",F="z7g",e="v7g",o="g8g",u="V8g",R="I8g",d=2.0,D="s8g",M="B8g",O="S8g",k="d8g",N="u8g",B="o8g",K=0.25,I="h8g",v9="b8g",j9="C8g",Z9=j[J8V2g.l0lb],A=Z9[J8V2g.p7bb],y9=Z9[J8V2g.J7bb],V=Z9[J8V2g.C7bb],i9=Z9[J8V2g.T7bb],U9=Z9[J8V2g.n7bb],z9=Z9[J8V2g.W7bb],q9=Z9[J8V2g.Z7bb],J9=Z9[J8V2g.L7bb],m9=Z9[J8V2g.B5lb],f9=A+U9+m9,T9;if(J8V2g[j9](f9,J8V2g.p7bb)){T9=J8V2g[v9](J8V2g.M9lb,Math[J8V2g.Q8lb](f9+J8V2g.V7lb));this[J8V2g.H67b]=J8V2g[I](K,T9);this[J8V2g.e67b]=J8V2g[B]((J9-z9),T9);this[J8V2g.y7bb]=J8V2g[N]((V-q9),T9);this[J8V2g.H7bb]=J8V2g[k]((i9-y9),T9);}else if(J8V2g[O](A,U9)&&J8V2g[M](A,m9)){T9=J8V2g[D](d,Math[J8V2g.Q8lb](J8V2g.V7lb+A-U9-m9));this[J8V2g.H67b]=J8V2g[R]((J9-z9),T9);this[J8V2g.e67b]=J8V2g[u](K,T9);this[J8V2g.y7bb]=J8V2g[o]((y9+i9),T9);this[J8V2g.H7bb]=J8V2g[e]((V+q9),T9);}else if(J8V2g[F](U9,m9)){T9=J8V2g[C](d,Math[J8V2g.Q8lb](J8V2g.V7lb+U9-A-m9));this[J8V2g.H67b]=J8V2g[f]((V-q9),T9);this[J8V2g.e67b]=J8V2g[H]((y9+i9),T9);this[J8V2g.y7bb]=J8V2g[W](K,T9);this[J8V2g.H7bb]=J8V2g[n]((z9+J9),T9);}else{T9=J8V2g[J](d,Math[J8V2g.Q8lb](J8V2g.V7lb+m9-A-U9));this[J8V2g.H67b]=J8V2g[T]((i9-y9),T9);this[J8V2g.e67b]=J8V2g[G]((V+q9),T9);this[J8V2g.y7bb]=J8V2g[Q]((z9+J9),T9);this[J8V2g.H7bb]=J8V2g[U](K,T9);}this[J8V2g.B2lb]();return this;},setFromUnitVectors:function(){var J=0.000001,n,W,H=J;return function(j,U){var Q="c7g",G="D7g",T="w7g";if(J8V2g[T](n,undefined))n=new THREE[J8V2g.c8bb]();W=j[J8V2g.A5bb](U)+J8V2g.T7bb;if(J8V2g[G](W,H)){W=J8V2g.p7bb;if(J8V2g[Q](Math[J8V2g.A97b](j[J8V2g.q0lb]),Math[J8V2g.A97b](j[J8V2g.S0lb]))){n[J8V2g.A8lb](-j[J8V2g.r0lb],j[J8V2g.q0lb],J8V2g.p7bb);}else{n[J8V2g.A8lb](J8V2g.p7bb,-j[J8V2g.S0lb],j[J8V2g.r0lb]);}}else{n[J8V2g.z2lb](j,U);}this[J8V2g.e67b]=n[J8V2g.q0lb];this[J8V2g.y7bb]=n[J8V2g.r0lb];this[J8V2g.H7bb]=n[J8V2g.S0lb];this[J8V2g.H67b]=W;this[J8V2g.L1lb]();return this;};}(),inverse:function(){var j="conjugate";this[j]()[J8V2g.L1lb]();return this;},conjugate:function(){this[J8V2g.e67b]*=-J8V2g.T7bb;this[J8V2g.y7bb]*=-J8V2g.T7bb;this[J8V2g.H7bb]*=-J8V2g.T7bb;this[J8V2g.B2lb]();return this;},dot:function(j){var U="i5g",Q="y5g",G="A7g",T="O7g";return J8V2g[T](this[J8V2g.e67b],j[J8V2g.e67b])+J8V2g[G](this[J8V2g.y7bb],j[J8V2g.y7bb])+J8V2g[Q](this[J8V2g.H7bb],j[J8V2g.H7bb])+J8V2g[U](this[J8V2g.H67b],j[J8V2g.H67b]);},lengthSq:function(){var j="L5g",U="J5g",Q="Z5g",G="p5g";return J8V2g[G](this[J8V2g.e67b],this[J8V2g.e67b])+J8V2g[Q](this[J8V2g.y7bb],this[J8V2g.y7bb])+J8V2g[U](this[J8V2g.H7bb],this[J8V2g.H7bb])+J8V2g[j](this[J8V2g.H67b],this[J8V2g.H67b]);},length:function(){var j="Y5g",U="t5g",Q="r5g",G="W5g";return Math[J8V2g.Q8lb](J8V2g[G](this[J8V2g.e67b],this[J8V2g.e67b])+J8V2g[Q](this[J8V2g.y7bb],this[J8V2g.y7bb])+J8V2g[U](this[J8V2g.H7bb],this[J8V2g.H7bb])+J8V2g[j](this[J8V2g.H67b],this[J8V2g.H67b]));},normalize:function(){var j="a5g",U="x5g",Q="K5g",G="N5g",T="M5g",J="R5g",n=this.length();if(J8V2g[J](n,J8V2g.p7bb)){this[J8V2g.e67b]=J8V2g.p7bb;this[J8V2g.y7bb]=J8V2g.p7bb;this[J8V2g.H7bb]=J8V2g.p7bb;this[J8V2g.H67b]=J8V2g.T7bb;}else{n=J8V2g[T](J8V2g.T7bb,n);this[J8V2g.e67b]=J8V2g[G](this[J8V2g.e67b],n);this[J8V2g.y7bb]=J8V2g[Q](this[J8V2g.y7bb],n);this[J8V2g.H7bb]=J8V2g[U](this[J8V2g.H7bb],n);this[J8V2g.H67b]=J8V2g[j](this[J8V2g.H67b],n);}this[J8V2g.B2lb]();return this;},multiply:function(j,U){var Q="multiplyQuaternions",G='THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.',T="E5g";if(J8V2g[T](U,undefined)){console[J8V2g.n1lb](G);return this[Q](j,U);}return this[Q](this,j);},multiplyQuaternions:function(j,U){var Q="S0g",G="d0g",T="u0g",J="o0g",n="h0g",W="b0g",H="C0g",f="n0g",C="q0g",F="m0g",e="Q0g",o="U0g",u="j0g",R=j[J8V2g.e67b],d=j[J8V2g.y7bb],D=j[J8V2g.H7bb],M=j[J8V2g.H67b],O=U[J8V2g.e67b],k=U[J8V2g.y7bb],N=U[J8V2g.H7bb],B=U[J8V2g.H67b];this[J8V2g.e67b]=J8V2g[u](R,B)+J8V2g[o](M,O)+J8V2g[e](d,N)-J8V2g[F](D,k);this[J8V2g.y7bb]=J8V2g[C](d,B)+J8V2g[f](M,k)+J8V2g[H](D,O)-J8V2g[W](R,N);this[J8V2g.H7bb]=J8V2g[n](D,B)+J8V2g[J](M,N)+J8V2g[T](R,k)-J8V2g[G](d,O);this[J8V2g.H67b]=J8V2g[Q](M*B,R*O,d*k,D*N);this[J8V2g.B2lb]();return this;},slerp:function(j,U){var Q="Q2w",G="U2w",T="j2w",J="E9w",n="a9w",W="x9w",H="K9w",f="N9w",C="M9w",F="R9w",e="Y9w",o="t9w",u="r9w",R="W9w",d=0.001,D="L9w",M="J9w",O="Z9w",k="p9w",N="i9w",B="y9w",K="A0g",I="O0g",v9="c0g",j9="D0g";if(J8V2g[j9](U,J8V2g.p7bb))return this;if(J8V2g[v9](U,J8V2g.T7bb))return this[J8V2g.f1lb](j);var Z9=this[J8V2g.e67b],A=this[J8V2g.y7bb],y9=this[J8V2g.H7bb],V=this[J8V2g.H67b],i9=J8V2g[I](V,j[J8V2g.H67b])+J8V2g[K](Z9,j[J8V2g.e67b])+J8V2g[B](A,j[J8V2g.y7bb])+J8V2g[N](y9,j[J8V2g.H7bb]);if(J8V2g[k](i9,J8V2g.p7bb)){this[J8V2g.H67b]=-j[J8V2g.H67b];this[J8V2g.e67b]=-j[J8V2g.e67b];this[J8V2g.y7bb]=-j[J8V2g.y7bb];this[J8V2g.H7bb]=-j[J8V2g.H7bb];i9=-i9;}else{this[J8V2g.f1lb](j);}if(J8V2g[O](i9,J8V2g.V7lb)){this[J8V2g.H67b]=V;this[J8V2g.e67b]=Z9;this[J8V2g.y7bb]=A;this[J8V2g.H7bb]=y9;return this;}var U9=Math[J8V2g.Q8lb](J8V2g[M](J8V2g.V7lb,i9*i9));if(J8V2g[D](Math[J8V2g.A97b](U9),d)){this[J8V2g.H67b]=J8V2g[R](J8V2g.M9lb,(V+this[J8V2g.H67b]));this[J8V2g.e67b]=J8V2g[u](J8V2g.M9lb,(Z9+this[J8V2g.e67b]));this[J8V2g.y7bb]=J8V2g[o](J8V2g.M9lb,(A+this[J8V2g.y7bb]));this[J8V2g.H7bb]=J8V2g[e](J8V2g.M9lb,(y9+this[J8V2g.H7bb]));return this;}var z9=Math[J8V2g.Z97b](U9,i9),q9=J8V2g[F](Math[J8V2g.b27b]((J8V2g.T7bb-U)*z9),U9),J9=J8V2g[C](Math[J8V2g.b27b](U*z9),U9);this[J8V2g.H67b]=(J8V2g[f](V,q9)+J8V2g[H](this[J8V2g.H67b],J9));this[J8V2g.e67b]=(J8V2g[W](Z9,q9)+J8V2g[n](this[J8V2g.e67b],J9));this[J8V2g.y7bb]=(J8V2g[J](A,q9)+J8V2g[T](this[J8V2g.y7bb],J9));this[J8V2g.H7bb]=(J8V2g[G](y9,q9)+J8V2g[Q](this[J8V2g.H7bb],J9));this[J8V2g.B2lb]();return this;},equals:function(j){var U="C2w",Q="n2w",G="q2w",T="m2w";return (J8V2g[T](j[J8V2g.e67b],this[J8V2g.e67b]))&&(J8V2g[G](j[J8V2g.y7bb],this[J8V2g.y7bb]))&&(J8V2g[Q](j[J8V2g.H7bb],this[J8V2g.H7bb]))&&(J8V2g[U](j[J8V2g.H67b],this[J8V2g.H67b]));},fromArray:function(j,U){var Q="b2w";if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;this[J8V2g.e67b]=j[U];this[J8V2g.y7bb]=j[U+J8V2g.T7bb];this[J8V2g.H7bb]=j[U+J8V2g.Z7bb];this[J8V2g.H67b]=j[U+J8V2g.G7bb];this[J8V2g.B2lb]();return this;},toArray:function(j,U){var Q="o2w",G="h2w";if(J8V2g[G](j,undefined))j=[];if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;j[U]=this[J8V2g.e67b];j[U+J8V2g.T7bb]=this[J8V2g.y7bb];j[U+J8V2g.Z7bb]=this[J8V2g.H7bb];j[U+J8V2g.G7bb]=this[J8V2g.H67b];return j;},onChange:function(j){this[J8V2g.B2lb]=j;return this;},onChangeCallback:function(){}}:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n";Object[J8V2g.W3lb](THREE[J8V2g.d7bb],{slerp:function(j,U,Q,G){var T="slerp";return Q[J8V2g.f1lb](j)[T](U,G);},slerpFlat:function(Q,G,T,J,n,W,H){var f="y3w",C="A6w",F="O6w",e="c6w",o="EPSILON",u="k6w",R="P6w",d="e6w",D="X6w",M="l6w",O="F6w",k="f6w",N="H6w",B="B2w",K="S2w",I="d2w",v9="u2w",j9=function(j){Q[G]=j;},Z9=function(j){Q[G+J8V2g.Z7bb]=j;},A=function(j){Q[G+J8V2g.G7bb]=j;},y9=function(j){Q[G+J8V2g.T7bb]=j;},V=T[J+J8V2g.p7bb],i9=T[J+J8V2g.T7bb],U9=T[J+J8V2g.Z7bb],z9=T[J+J8V2g.G7bb],q9=n[W+J8V2g.p7bb],J9=n[W+J8V2g.T7bb],m9=n[W+J8V2g.Z7bb],f9=n[W+J8V2g.G7bb];if(J8V2g[v9](z9,f9)||J8V2g[I](V,q9)||J8V2g[K](i9,J9)||J8V2g[B](U9,m9)){var T9=function(){var j="I2w",U="s2w";z9=J8V2g[U](z9,l9)+J8V2g[j](f9,N9);},G9=function(){var j="G6w";var U="T6w";V=J8V2g[U](V,l9)+J8V2g[j](q9,N9);},F9=function(){var j="z6w";var U="v6w";i9=J8V2g[U](i9,l9)+J8V2g[j](J9,N9);},C9=function(){var j="g2w";var U="V2w";U9=J8V2g[U](U9,l9)+J8V2g[j](m9,N9);};var l9=J8V2g[N](J8V2g.T7bb,H),H9=J8V2g[k](V,q9)+J8V2g[O](i9,J9)+J8V2g[M](U9,m9)+J8V2g[D](z9,f9),t9=(J8V2g[d](H9,J8V2g.p7bb)?J8V2g.T7bb:-J8V2g.T7bb),Y9=J8V2g[R](J8V2g.T7bb,H9*H9);if(J8V2g[u](Y9,Number[o])){var n9=function(){var j="D6w";l9=J8V2g[j](Math[J8V2g.b27b](l9*w9),P9);},L9=function(){var j="w6w";H=J8V2g[j](Math[J8V2g.b27b](H*w9),P9);};var P9=Math[J8V2g.Q8lb](Y9),w9=Math[J8V2g.Z97b](P9,J8V2g[e](H9,t9));n9();L9();}var N9=J8V2g[F](H,t9);G9();F9();C9();T9();if(J8V2g[C](l9,J8V2g.T7bb-H)){var d9=J8V2g[f](J8V2g.T7bb,Math[J8V2g.Q8lb](V*V+i9*i9+U9*U9+z9*z9));V*=d9;i9*=d9;U9*=d9;z9*=d9;}}j9(V);y9(i9);Z9(U9);A(z9);}});THREE[J8V2g.c8bb]=function(j,U,Q){this[J8V2g.q0lb]=j||J8V2g.p7bb;this[J8V2g.r0lb]=U||J8V2g.p7bb;this[J8V2g.S0lb]=Q||J8V2g.p7bb;};THREE.Vector3.prototype={constructor:THREE[J8V2g.c8bb],set:function(j,U,Q){this[J8V2g.q0lb]=j;this[J8V2g.r0lb]=U;this[J8V2g.S0lb]=Q;return this;},setScalar:function(j){this[J8V2g.q0lb]=j;this[J8V2g.r0lb]=j;this[J8V2g.S0lb]=j;return this;},setX:function(j){this[J8V2g.q0lb]=j;return this;},setY:function(j){this[J8V2g.r0lb]=j;return this;},setZ:function(j){this[J8V2g.S0lb]=j;return this;},setComponent:function(j,U){switch(j){case J8V2g.p7bb:this[J8V2g.q0lb]=U;break;case J8V2g.T7bb:this[J8V2g.r0lb]=U;break;case J8V2g.Z7bb:this[J8V2g.S0lb]=U;break;default:throw  new Error(J8V2g.s7bb+j);}},getComponent:function(j){switch(j){case J8V2g.p7bb:return this[J8V2g.q0lb];case J8V2g.T7bb:return this[J8V2g.r0lb];case J8V2g.Z7bb:return this[J8V2g.S0lb];default:throw  new Error(J8V2g.s7bb+j);}},clone:function(){return new this.constructor(this[J8V2g.q0lb],this[J8V2g.r0lb],this[J8V2g.S0lb]);},copy:function(j){this[J8V2g.q0lb]=j[J8V2g.q0lb];this[J8V2g.r0lb]=j[J8V2g.r0lb];this[J8V2g.S0lb]=j[J8V2g.S0lb];return this;},add:function(j,U){var Q='THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.',G="i3w";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.H27b](j,U);}this[J8V2g.q0lb]+=j[J8V2g.q0lb];this[J8V2g.r0lb]+=j[J8V2g.r0lb];this[J8V2g.S0lb]+=j[J8V2g.S0lb];return this;},addScalar:function(j){this[J8V2g.q0lb]+=j;this[J8V2g.r0lb]+=j;this[J8V2g.S0lb]+=j;return this;},addVectors:function(j,U){this[J8V2g.q0lb]=j[J8V2g.q0lb]+U[J8V2g.q0lb];this[J8V2g.r0lb]=j[J8V2g.r0lb]+U[J8V2g.r0lb];this[J8V2g.S0lb]=j[J8V2g.S0lb]+U[J8V2g.S0lb];return this;},addScaledVector:function(j,U){var Q="J3w",G="Z3w",T="p3w";this[J8V2g.q0lb]+=J8V2g[T](j[J8V2g.q0lb],U);this[J8V2g.r0lb]+=J8V2g[G](j[J8V2g.r0lb],U);this[J8V2g.S0lb]+=J8V2g[Q](j[J8V2g.S0lb],U);return this;},sub:function(j,U){var Q='THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.',G="L3w";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.e27b](j,U);}this[J8V2g.q0lb]-=j[J8V2g.q0lb];this[J8V2g.r0lb]-=j[J8V2g.r0lb];this[J8V2g.S0lb]-=j[J8V2g.S0lb];return this;},subScalar:function(j){this[J8V2g.q0lb]-=j;this[J8V2g.r0lb]-=j;this[J8V2g.S0lb]-=j;return this;},subVectors:function(j,U){var Q="t3w",G="r3w",T="W3w";this[J8V2g.q0lb]=J8V2g[T](j[J8V2g.q0lb],U[J8V2g.q0lb]);this[J8V2g.r0lb]=J8V2g[G](j[J8V2g.r0lb],U[J8V2g.r0lb]);this[J8V2g.S0lb]=J8V2g[Q](j[J8V2g.S0lb],U[J8V2g.S0lb]);return this;},multiply:function(j,U){var Q="multiplyVectors",G='THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.',T="Y3w";if(J8V2g[T](U,undefined)){console[J8V2g.n1lb](G);return this[Q](j,U);}this[J8V2g.q0lb]*=j[J8V2g.q0lb];this[J8V2g.r0lb]*=j[J8V2g.r0lb];this[J8V2g.S0lb]*=j[J8V2g.S0lb];return this;},multiplyScalar:function(j){if(isFinite(j)){this[J8V2g.q0lb]*=j;this[J8V2g.r0lb]*=j;this[J8V2g.S0lb]*=j;}else{this[J8V2g.q0lb]=J8V2g.p7bb;this[J8V2g.r0lb]=J8V2g.p7bb;this[J8V2g.S0lb]=J8V2g.p7bb;}return this;},multiplyVectors:function(j,U){var Q="N3w",G="M3w",T="R3w";this[J8V2g.q0lb]=J8V2g[T](j[J8V2g.q0lb],U[J8V2g.q0lb]);this[J8V2g.r0lb]=J8V2g[G](j[J8V2g.r0lb],U[J8V2g.r0lb]);this[J8V2g.S0lb]=J8V2g[Q](j[J8V2g.S0lb],U[J8V2g.S0lb]);return this;},applyEuler:function(){var J;return function n(j){var U="setFromEuler",Q="x3w",G='THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.',T="K3w";if(J8V2g[T](j instanceof THREE[J8V2g.t2lb],J8V2g.o8lb)){console.error(G);}if(J8V2g[Q](J,undefined))J=new THREE[J8V2g.d7bb]();this[J8V2g.d6lb](J[U](j));return this;};}(),applyAxisAngle:function(){var T;return function J(j,U){var Q="setFromAxisAngle",G="a3w";if(J8V2g[G](T,undefined))T=new THREE[J8V2g.d7bb]();this[J8V2g.d6lb](T[Q](j,U));return this;};}(),applyMatrix3:function(j){var U="b1w",Q="C1w",G="n1w",T="q1w",J="m1w",n="Q1w",W="U1w",H="j1w",f="E3w",C=this[J8V2g.q0lb],F=this[J8V2g.r0lb],e=this[J8V2g.S0lb],o=j[J8V2g.l0lb];this[J8V2g.q0lb]=J8V2g[f](o[J8V2g.p7bb],C)+J8V2g[H](o[J8V2g.G7bb],F)+J8V2g[W](o[J8V2g.L7bb],e);this[J8V2g.r0lb]=J8V2g[n](o[J8V2g.T7bb],C)+J8V2g[J](o[J8V2g.J7bb],F)+J8V2g[T](o[J8V2g.f7bb],e);this[J8V2g.S0lb]=J8V2g[G](o[J8V2g.Z7bb],C)+J8V2g[Q](o[J8V2g.n7bb],F)+J8V2g[U](o[J8V2g.C7bb],e);return this;},applyMatrix4:function(j){var U="V1w",Q="I1w",G="s1w",T="B1w",J="S1w",n="d1w",W="u1w",H="o1w",f="h1w",C=this[J8V2g.q0lb],F=this[J8V2g.r0lb],e=this[J8V2g.S0lb],o=j[J8V2g.l0lb];this[J8V2g.q0lb]=J8V2g[f](o[J8V2g.p7bb],C)+J8V2g[H](o[J8V2g.J7bb],F)+J8V2g[W](o[J8V2g.C7bb],e)+o[J8V2g.s5lb];this[J8V2g.r0lb]=J8V2g[n](o[J8V2g.T7bb],C)+J8V2g[J](o[J8V2g.n7bb],F)+J8V2g[T](o[J8V2g.W7bb],e)+o[J8V2g.x5lb];this[J8V2g.S0lb]=J8V2g[G](o[J8V2g.Z7bb],C)+J8V2g[Q](o[J8V2g.L7bb],F)+J8V2g[U](o[J8V2g.B5lb],e)+o[J8V2g.c5lb];return this;},applyProjection:function(j){var U="T4w",Q="z4w",G="v4w",T="g1w",J=this[J8V2g.q0lb],n=this[J8V2g.r0lb],W=this[J8V2g.S0lb],H=j[J8V2g.l0lb],f=J8V2g[T](J8V2g.T7bb,(H[J8V2g.G7bb]*J+H[J8V2g.f7bb]*n+H[J8V2g.D5lb]*W+H[J8V2g.a5lb]));this[J8V2g.q0lb]=J8V2g[G]((H[J8V2g.p7bb]*J+H[J8V2g.J7bb]*n+H[J8V2g.C7bb]*W+H[J8V2g.s5lb]),f);this[J8V2g.r0lb]=J8V2g[Q]((H[J8V2g.T7bb]*J+H[J8V2g.n7bb]*n+H[J8V2g.W7bb]*W+H[J8V2g.x5lb]),f);this[J8V2g.S0lb]=J8V2g[U]((H[J8V2g.Z7bb]*J+H[J8V2g.L7bb]*n+H[J8V2g.B5lb]*W+H[J8V2g.c5lb]),f);return this;},applyQuaternion:function(j){var U="A4w",Q="O4w",G="c4w",T="D4w",J="w4w",n="k4w",W="P4w",H="e4w",f="X4w",C="l4w",F="F4w",e="f4w",o="H4w",u="G4w",R=this[J8V2g.q0lb],d=this[J8V2g.r0lb],D=this[J8V2g.S0lb],M=j[J8V2g.q0lb],O=j[J8V2g.r0lb],k=j[J8V2g.S0lb],N=j[J8V2g.v0lb],B=J8V2g[u](N,R)+J8V2g[o](O,D)-J8V2g[e](k,d),K=J8V2g[F](N,d)+J8V2g[C](k,R)-J8V2g[f](M,D),I=J8V2g[H](N,D)+J8V2g[W](M,d)-J8V2g[n](O,R),v9=-M*R-J8V2g[J](O,d)-J8V2g[T](k,D);this[J8V2g.q0lb]=J8V2g[G](B,N)+v9*-M+K*-k-I*-O;this[J8V2g.r0lb]=J8V2g[Q](K,N)+v9*-O+I*-M-B*-k;this[J8V2g.S0lb]=J8V2g[U](I,N)+v9*-k+B*-O-K*-M;return this;},project:function(){var Q;return function G(j){var U="y8w";if(J8V2g[U](Q,undefined))Q=new THREE[J8V2g.q3lb]();Q[J8V2g.a0lb](j[J8V2g.h8lb],Q[J8V2g.o9lb](j[J8V2g.V3lb]));return this[J8V2g.D9lb](Q);};}(),unproject:function(){var Q;return function G(j){var U="i8w";if(J8V2g[U](Q,undefined))Q=new THREE[J8V2g.q3lb]();Q[J8V2g.a0lb](j[J8V2g.V3lb],Q[J8V2g.o9lb](j[J8V2g.h8lb]));return this[J8V2g.D9lb](Q);};}(),transformDirection:function(j){var U="R8w",Q="Y8w",G="t8w",T="r8w",J="W8w",n="L8w",W="J8w",H="Z8w",f="p8w",C=this[J8V2g.q0lb],F=this[J8V2g.r0lb],e=this[J8V2g.S0lb],o=j[J8V2g.l0lb];this[J8V2g.q0lb]=J8V2g[f](o[J8V2g.p7bb],C)+J8V2g[H](o[J8V2g.J7bb],F)+J8V2g[W](o[J8V2g.C7bb],e);this[J8V2g.r0lb]=J8V2g[n](o[J8V2g.T7bb],C)+J8V2g[J](o[J8V2g.n7bb],F)+J8V2g[T](o[J8V2g.W7bb],e);this[J8V2g.S0lb]=J8V2g[G](o[J8V2g.Z7bb],C)+J8V2g[Q](o[J8V2g.L7bb],F)+J8V2g[U](o[J8V2g.B5lb],e);this[J8V2g.L1lb]();return this;},divide:function(j){this[J8V2g.q0lb]/=j[J8V2g.q0lb];this[J8V2g.r0lb]/=j[J8V2g.r0lb];this[J8V2g.S0lb]/=j[J8V2g.S0lb];return this;},divideScalar:function(j){var U="M8w";return this[J8V2g.q5lb](J8V2g[U](J8V2g.T7bb,j));},min:function(j){this[J8V2g.q0lb]=Math[J8V2g.Q0bb](this[J8V2g.q0lb],j[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.Q0bb](this[J8V2g.r0lb],j[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.Q0bb](this[J8V2g.S0lb],j[J8V2g.S0lb]);return this;},max:function(j){this[J8V2g.q0lb]=Math[J8V2g.R4lb](this[J8V2g.q0lb],j[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.R4lb](this[J8V2g.r0lb],j[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.R4lb](this[J8V2g.S0lb],j[J8V2g.S0lb]);return this;},clamp:function(j,U){this[J8V2g.q0lb]=Math[J8V2g.R4lb](j[J8V2g.q0lb],Math[J8V2g.Q0bb](U[J8V2g.q0lb],this[J8V2g.q0lb]));this[J8V2g.r0lb]=Math[J8V2g.R4lb](j[J8V2g.r0lb],Math[J8V2g.Q0bb](U[J8V2g.r0lb],this[J8V2g.r0lb]));this[J8V2g.S0lb]=Math[J8V2g.R4lb](j[J8V2g.S0lb],Math[J8V2g.Q0bb](U[J8V2g.S0lb],this[J8V2g.S0lb]));return this;},clampScalar:function(){var G,T;return function J(j,U){var Q="N8w";if(J8V2g[Q](G,undefined)){G=new THREE[J8V2g.c8bb]();T=new THREE[J8V2g.c8bb]();}G[J8V2g.A8lb](j,j,j);T[J8V2g.A8lb](U,U,U);return this[J8V2g.W5bb](G,T);};}(),clampLength:function(j,U){var Q="K8w",G=this.length();this[J8V2g.q5lb](J8V2g[Q](Math[J8V2g.R4lb](j,Math[J8V2g.Q0bb](U,G)),G));return this;},floor:function(){this[J8V2g.q0lb]=Math[J8V2g.t97b](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.t97b](this[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.t97b](this[J8V2g.S0lb]);return this;},ceil:function(){this[J8V2g.q0lb]=Math[J8V2g.k3lb](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.k3lb](this[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.k3lb](this[J8V2g.S0lb]);return this;},round:function(){this[J8V2g.q0lb]=Math[J8V2g.T9lb](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.T9lb](this[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.T9lb](this[J8V2g.S0lb]);return this;},roundToZero:function(){var j="E8w",U="a8w",Q="x8w";this[J8V2g.q0lb]=(J8V2g[Q](this[J8V2g.q0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.q0lb]):Math[J8V2g.t97b](this[J8V2g.q0lb]);this[J8V2g.r0lb]=(J8V2g[U](this[J8V2g.r0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.r0lb]):Math[J8V2g.t97b](this[J8V2g.r0lb]);this[J8V2g.S0lb]=(J8V2g[j](this[J8V2g.S0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.S0lb]):Math[J8V2g.t97b](this[J8V2g.S0lb]);return this;},negate:function(){this[J8V2g.q0lb]=-this[J8V2g.q0lb];this[J8V2g.r0lb]=-this[J8V2g.r0lb];this[J8V2g.S0lb]=-this[J8V2g.S0lb];return this;},dot:function(j){var U="Q7w",Q="U7w",G="j7w";return J8V2g[G](this[J8V2g.q0lb],j[J8V2g.q0lb])+J8V2g[Q](this[J8V2g.r0lb],j[J8V2g.r0lb])+J8V2g[U](this[J8V2g.S0lb],j[J8V2g.S0lb]);},lengthSq:function(){var j="n7w",U="q7w",Q="m7w";return J8V2g[Q](this[J8V2g.q0lb],this[J8V2g.q0lb])+J8V2g[U](this[J8V2g.r0lb],this[J8V2g.r0lb])+J8V2g[j](this[J8V2g.S0lb],this[J8V2g.S0lb]);},length:function(){var j="h7w",U="b7w",Q="C7w";return Math[J8V2g.Q8lb](J8V2g[Q](this[J8V2g.q0lb],this[J8V2g.q0lb])+J8V2g[U](this[J8V2g.r0lb],this[J8V2g.r0lb])+J8V2g[j](this[J8V2g.S0lb],this[J8V2g.S0lb]));},lengthManhattan:function(){return Math[J8V2g.A97b](this[J8V2g.q0lb])+Math[J8V2g.A97b](this[J8V2g.r0lb])+Math[J8V2g.A97b](this[J8V2g.S0lb]);},normalize:function(){return this[J8V2g.D27b](this.length());},setLength:function(j){var U="o7w";return this[J8V2g.q5lb](J8V2g[U](j,this.length()));},lerp:function(j,U){var Q="S7w",G="d7w",T="u7w";this[J8V2g.q0lb]+=J8V2g[T]((j[J8V2g.q0lb]-this[J8V2g.q0lb]),U);this[J8V2g.r0lb]+=J8V2g[G]((j[J8V2g.r0lb]-this[J8V2g.r0lb]),U);this[J8V2g.S0lb]+=J8V2g[Q]((j[J8V2g.S0lb]-this[J8V2g.S0lb]),U);return this;},lerpVectors:function(j,U,Q){this[J8V2g.e27b](U,j)[J8V2g.q5lb](Q)[J8V2g.F5bb](j);return this;},cross:function(j,U){var Q="V7w",G="I7w",T="s7w",J='THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.',n="B7w";if(J8V2g[n](U,undefined)){console[J8V2g.n1lb](J);return this[J8V2g.z2lb](j,U);}var W=this[J8V2g.q0lb],H=this[J8V2g.r0lb],f=this[J8V2g.S0lb];this[J8V2g.q0lb]=J8V2g[T](H*j[J8V2g.S0lb],f*j[J8V2g.r0lb]);this[J8V2g.r0lb]=J8V2g[G](f*j[J8V2g.q0lb],W*j[J8V2g.S0lb]);this[J8V2g.S0lb]=J8V2g[Q](W*j[J8V2g.r0lb],H*j[J8V2g.q0lb]);return this;},crossVectors:function(j,U){var Q="z5w",G="v5w",T="g7w",J=j[J8V2g.q0lb],n=j[J8V2g.r0lb],W=j[J8V2g.S0lb],H=U[J8V2g.q0lb],f=U[J8V2g.r0lb],C=U[J8V2g.S0lb];this[J8V2g.q0lb]=J8V2g[T](n*C,W*f);this[J8V2g.r0lb]=J8V2g[G](W*H,J*C);this[J8V2g.S0lb]=J8V2g[Q](J*f,n*H);return this;},projectOnVector:function(){var Q,G;return function T(j){var U="T5w";if(J8V2g[U](Q,undefined))Q=new THREE[J8V2g.c8bb]();Q[J8V2g.f1lb](j)[J8V2g.L1lb]();G=this[J8V2g.A5bb](Q);return this[J8V2g.f1lb](Q)[J8V2g.q5lb](G);};}(),projectOnPlane:function(){var G;return function T(j){var U="projectOnVector",Q="G5w";if(J8V2g[Q](G,undefined))G=new THREE[J8V2g.c8bb]();G[J8V2g.f1lb](this)[U](j);return this[J8V2g.B6lb](G);};}(),reflect:function(){var G;return function T(j){var U="f5w",Q="H5w";if(J8V2g[Q](G,undefined))G=new THREE[J8V2g.c8bb]();return this[J8V2g.B6lb](G[J8V2g.f1lb](j)[J8V2g.q5lb](J8V2g[U](J8V2g.Z7bb,this[J8V2g.A5bb](j))));};}(),angleTo:function(j){var U="acos",Q="F5w",G=J8V2g[Q](this[J8V2g.A5bb](j),(Math[J8V2g.Q8lb](this[J8V2g.L7lb]()*j[J8V2g.L7lb]())));return Math[U](THREE[J8V2g.a0bb][J8V2g.W5bb](G,-J8V2g.T7bb,J8V2g.T7bb));},distanceTo:function(j){return Math[J8V2g.Q8lb](this[J8V2g.q4lb](j));},distanceToSquared:function(j){var U="w5w",Q="k5w",G="P5w",T="e5w",J="X5w",n="l5w",W=J8V2g[n](this[J8V2g.q0lb],j[J8V2g.q0lb]),H=J8V2g[J](this[J8V2g.r0lb],j[J8V2g.r0lb]),f=J8V2g[T](this[J8V2g.S0lb],j[J8V2g.S0lb]);return J8V2g[G](W,W)+J8V2g[Q](H,H)+J8V2g[U](f,f);},setFromSpherical:function(j){var U="A5w",Q="O5w",G="theta",T="c5w",J="phi",n="D5w",W=J8V2g[n](Math[J8V2g.b27b](j[J]),j[J8V2g.U97b]);this[J8V2g.q0lb]=J8V2g[T](W,Math[J8V2g.b27b](j[G]));this[J8V2g.r0lb]=J8V2g[Q](Math[J8V2g.I4lb](j[J]),j[J8V2g.U97b]);this[J8V2g.S0lb]=J8V2g[U](W,Math[J8V2g.I4lb](j[G]));return this;},setFromMatrixPosition:function(j){return this[J8V2g.U27b](j,J8V2g.G7bb);},setFromMatrixScale:function(j){var U=this[J8V2g.U27b](j,J8V2g.p7bb).length(),Q=this[J8V2g.U27b](j,J8V2g.T7bb).length(),G=this[J8V2g.U27b](j,J8V2g.Z7bb).length();this[J8V2g.q0lb]=U;this[J8V2g.r0lb]=Q;this[J8V2g.S0lb]=G;return this;},setFromMatrixColumn:function(j,U){var Q="y0w",G='THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).',T='number';if(typeof j===T){console[J8V2g.n1lb](G);j=arguments[J8V2g.T7bb];U=arguments[J8V2g.p7bb];}return this[J8V2g.P6lb](j[J8V2g.l0lb],J8V2g[Q](U,J8V2g.J7bb));},equals:function(j){var U="Z0w",Q="p0w",G="i0w";return ((J8V2g[G](j[J8V2g.q0lb],this[J8V2g.q0lb]))&&(J8V2g[Q](j[J8V2g.r0lb],this[J8V2g.r0lb]))&&(J8V2g[U](j[J8V2g.S0lb],this[J8V2g.S0lb])));},fromArray:function(j,U){var Q="J0w";if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;this[J8V2g.q0lb]=j[U];this[J8V2g.r0lb]=j[U+J8V2g.T7bb];this[J8V2g.S0lb]=j[U+J8V2g.Z7bb];return this;},toArray:function(j,U){var Q="W0w",G="L0w";if(J8V2g[G](j,undefined))j=[];if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;j[U]=this[J8V2g.q0lb];j[U+J8V2g.T7bb]=this[J8V2g.r0lb];j[U+J8V2g.Z7bb]=this[J8V2g.S0lb];return j;},fromAttribute:function(j,U,Q){var G="t0w",T="r0w";if(J8V2g[T](Q,undefined))Q=J8V2g.p7bb;U=J8V2g[G](U,j[J8V2g.e0lb])+Q;this[J8V2g.q0lb]=j[J8V2g.x8lb][U];this[J8V2g.r0lb]=j[J8V2g.x8lb][U+J8V2g.T7bb];this[J8V2g.S0lb]=j[J8V2g.x8lb][U+J8V2g.Z7bb];return this;}};THREE[J8V2g.q3lb]=function(){var j='THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.',U="Y0w";this[J8V2g.l0lb]=new Float32Array([J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb]);if(J8V2g[U](arguments.length,J8V2g.p7bb)){console.error(j);}};THREE.Matrix4.prototype={constructor:THREE[J8V2g.q3lb],set:function(j,U,Q,G,T,J,n,W,H,f,C,F,e,o,u,R){var d=this[J8V2g.l0lb];d[J8V2g.p7bb]=j;d[J8V2g.J7bb]=U;d[J8V2g.C7bb]=Q;d[J8V2g.s5lb]=G;d[J8V2g.T7bb]=T;d[J8V2g.n7bb]=J;d[J8V2g.W7bb]=n;d[J8V2g.x5lb]=W;d[J8V2g.Z7bb]=H;d[J8V2g.L7bb]=f;d[J8V2g.B5lb]=C;d[J8V2g.c5lb]=F;d[J8V2g.G7bb]=e;d[J8V2g.f7bb]=o;d[J8V2g.D5lb]=u;d[J8V2g.a5lb]=R;return this;},identity:function(){this[J8V2g.A8lb](J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},clone:function(){return new THREE[J8V2g.q3lb]()[J8V2g.P6lb](this[J8V2g.l0lb]);},copy:function(j){this[J8V2g.l0lb][J8V2g.A8lb](j[J8V2g.l0lb]);return this;},copyPosition:function(j){var U=this[J8V2g.l0lb],Q=j[J8V2g.l0lb];U[J8V2g.s5lb]=Q[J8V2g.s5lb];U[J8V2g.x5lb]=Q[J8V2g.x5lb];U[J8V2g.c5lb]=Q[J8V2g.c5lb];return this;},extractBasis:function(j,U,Q){j[J8V2g.U27b](this,J8V2g.p7bb);U[J8V2g.U27b](this,J8V2g.T7bb);Q[J8V2g.U27b](this,J8V2g.Z7bb);return this;},makeBasis:function(j,U,Q){this[J8V2g.A8lb](j[J8V2g.q0lb],U[J8V2g.q0lb],Q[J8V2g.q0lb],J8V2g.p7bb,j[J8V2g.r0lb],U[J8V2g.r0lb],Q[J8V2g.r0lb],J8V2g.p7bb,j[J8V2g.S0lb],U[J8V2g.S0lb],Q[J8V2g.S0lb],J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},extractRotation:function(){var O;return function(j){var U="n9W",Q="q9W",G="m9W",T="Q9W",J="U9W",n="j9W",W="E0w",H="a0w",f="x0w",C="K0w",F="N0w",e="M0w",o="R0w";if(J8V2g[o](O,undefined))O=new THREE[J8V2g.c8bb]();var u=this[J8V2g.l0lb],R=j[J8V2g.l0lb],d=J8V2g[e](J8V2g.T7bb,O[J8V2g.U27b](j,J8V2g.p7bb).length()),D=J8V2g[F](J8V2g.T7bb,O[J8V2g.U27b](j,J8V2g.T7bb).length()),M=J8V2g[C](J8V2g.T7bb,O[J8V2g.U27b](j,J8V2g.Z7bb).length());u[J8V2g.p7bb]=J8V2g[f](R[J8V2g.p7bb],d);u[J8V2g.T7bb]=J8V2g[H](R[J8V2g.T7bb],d);u[J8V2g.Z7bb]=J8V2g[W](R[J8V2g.Z7bb],d);u[J8V2g.J7bb]=J8V2g[n](R[J8V2g.J7bb],D);u[J8V2g.n7bb]=J8V2g[J](R[J8V2g.n7bb],D);u[J8V2g.L7bb]=J8V2g[T](R[J8V2g.L7bb],D);u[J8V2g.C7bb]=J8V2g[G](R[J8V2g.C7bb],M);u[J8V2g.W7bb]=J8V2g[Q](R[J8V2g.W7bb],M);u[J8V2g.B5lb]=J8V2g[U](R[J8V2g.B5lb],M);return this;};}(),makeRotationFromEuler:function(j){var U="X1W",Q="l1W",G="F1W",T="f1W",J="H1W",n="G1W",W="T1W",H="z1W",f="v1W",C="g3W",F="V3W",e="I3W",o="s3W",u="B3W",R="S3W",d="d3W",D="u3W",M="o3W",O="h3W",k="b3W",N="C3W",B="n3W",K="q3W",I="m3W",v9="Q3W",j9="U3W",Z9="j3W",A="E6W",y9="a6W",V="x6W",i9="K6W",U9="N6W",z9="M6W",q9="R6W",J9="Y6W",m9="t6W",f9="r6W",T9="W6W",G9="L6W",F9="J6W",C9="Z6W",l9="p6W",H9="i6W",t9="y6W",Y9="A2W",n9="O2W",L9="c2W",P9="D2W",w9="w2W",N9="k2W",d9="P2W",M9="e2W",s9="X2W",k9="l2W",u9="F2W",B9="f2W",S9="H2W",K9="G2W",g9="T2W",I9="z2W",V9="v2W",A9="g9W",L2="V9W",q2="I9W",p2="s9W",e2="B9W",u2="S9W",n2="d9W",z2="u9W",w2="o9W",y2="h9W",k2="b9W",B2='THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.',G2="C9W";if(J8V2g[G2](j instanceof THREE[J8V2g.t2lb],J8V2g.o8lb)){console.error(B2);}var U2=this[J8V2g.l0lb],E9=j[J8V2g.q0lb],R2=j[J8V2g.r0lb],T2=j[J8V2g.S0lb],Q2=Math[J8V2g.I4lb](E9),O9=Math[J8V2g.b27b](E9),W2=Math[J8V2g.I4lb](R2),i2=Math[J8V2g.b27b](R2),j2=Math[J8V2g.I4lb](T2),t2=Math[J8V2g.b27b](T2);if(J8V2g[k2](j[J8V2g.G3lb],J8V2g.J4lb)){var Z2=J8V2g[y2](Q2,j2),c2=J8V2g[w2](Q2,t2),S2=J8V2g[z2](O9,j2),F2=J8V2g[n2](O9,t2);U2[J8V2g.p7bb]=J8V2g[u2](W2,j2);U2[J8V2g.J7bb]=-W2*t2;U2[J8V2g.C7bb]=i2;U2[J8V2g.T7bb]=c2+J8V2g[e2](S2,i2);U2[J8V2g.n7bb]=J8V2g[p2](Z2,F2*i2);U2[J8V2g.W7bb]=-O9*W2;U2[J8V2g.Z7bb]=J8V2g[q2](F2,Z2*i2);U2[J8V2g.L7bb]=S2+J8V2g[L2](c2,i2);U2[J8V2g.B5lb]=J8V2g[A9](Q2,W2);}else if(J8V2g[V9](j[J8V2g.G3lb],J8V2g.m7lb)){var l2=J8V2g[I9](W2,j2),E2=J8V2g[g9](W2,t2),J2=J8V2g[K9](i2,j2),f2=J8V2g[S9](i2,t2);U2[J8V2g.p7bb]=l2+J8V2g[B9](f2,O9);U2[J8V2g.J7bb]=J8V2g[u9](J2*O9,E2);U2[J8V2g.C7bb]=J8V2g[k9](Q2,i2);U2[J8V2g.T7bb]=J8V2g[s9](Q2,t2);U2[J8V2g.n7bb]=J8V2g[M9](Q2,j2);U2[J8V2g.W7bb]=-O9;U2[J8V2g.Z7bb]=J8V2g[d9](E2*O9,J2);U2[J8V2g.L7bb]=f2+J8V2g[N9](l2,O9);U2[J8V2g.B5lb]=J8V2g[w9](Q2,W2);}else if(J8V2g[P9](j[J8V2g.G3lb],J8V2g.y0bb)){var l2=J8V2g[L9](W2,j2),E2=J8V2g[n9](W2,t2),J2=J8V2g[Y9](i2,j2),f2=J8V2g[t9](i2,t2);U2[J8V2g.p7bb]=J8V2g[H9](l2,f2*O9);U2[J8V2g.J7bb]=-Q2*t2;U2[J8V2g.C7bb]=J2+J8V2g[l9](E2,O9);U2[J8V2g.T7bb]=E2+J8V2g[C9](J2,O9);U2[J8V2g.n7bb]=J8V2g[F9](Q2,j2);U2[J8V2g.W7bb]=J8V2g[G9](f2,l2*O9);U2[J8V2g.Z7bb]=-Q2*i2;U2[J8V2g.L7bb]=O9;U2[J8V2g.B5lb]=J8V2g[T9](Q2,W2);}else if(J8V2g[f9](j[J8V2g.G3lb],J8V2g.m8lb)){var Z2=J8V2g[m9](Q2,j2),c2=J8V2g[J9](Q2,t2),S2=J8V2g[q9](O9,j2),F2=J8V2g[z9](O9,t2);U2[J8V2g.p7bb]=J8V2g[U9](W2,j2);U2[J8V2g.J7bb]=J8V2g[i9](S2*i2,c2);U2[J8V2g.C7bb]=J8V2g[V](Z2,i2)+F2;U2[J8V2g.T7bb]=J8V2g[y9](W2,t2);U2[J8V2g.n7bb]=J8V2g[A](F2,i2)+Z2;U2[J8V2g.W7bb]=J8V2g[Z9](c2*i2,S2);U2[J8V2g.Z7bb]=-i2;U2[J8V2g.L7bb]=J8V2g[j9](O9,W2);U2[J8V2g.B5lb]=J8V2g[v9](Q2,W2);}else if(J8V2g[I](j[J8V2g.G3lb],J8V2g.V1lb)){var S6=J8V2g[K](Q2,W2),X6=J8V2g[B](Q2,i2),U6=J8V2g[N](O9,W2),b6=J8V2g[k](O9,i2);U2[J8V2g.p7bb]=J8V2g[O](W2,j2);U2[J8V2g.J7bb]=J8V2g[M](b6,S6*t2);U2[J8V2g.C7bb]=J8V2g[D](U6,t2)+X6;U2[J8V2g.T7bb]=t2;U2[J8V2g.n7bb]=J8V2g[d](Q2,j2);U2[J8V2g.W7bb]=-O9*j2;U2[J8V2g.Z7bb]=-i2*j2;U2[J8V2g.L7bb]=J8V2g[R](X6,t2)+U6;U2[J8V2g.B5lb]=J8V2g[u](S6,b6*t2);}else if(J8V2g[o](j[J8V2g.G3lb],J8V2g.R7bb)){var S6=J8V2g[e](Q2,W2),X6=J8V2g[F](Q2,i2),U6=J8V2g[C](O9,W2),b6=J8V2g[f](O9,i2);U2[J8V2g.p7bb]=J8V2g[H](W2,j2);U2[J8V2g.J7bb]=-t2;U2[J8V2g.C7bb]=J8V2g[W](i2,j2);U2[J8V2g.T7bb]=J8V2g[n](S6,t2)+b6;U2[J8V2g.n7bb]=J8V2g[J](Q2,j2);U2[J8V2g.W7bb]=J8V2g[T](X6*t2,U6);U2[J8V2g.Z7bb]=J8V2g[G](U6*t2,X6);U2[J8V2g.L7bb]=J8V2g[Q](O9,j2);U2[J8V2g.B5lb]=J8V2g[U](b6,t2)+S6;}U2[J8V2g.G7bb]=J8V2g.p7bb;U2[J8V2g.f7bb]=J8V2g.p7bb;U2[J8V2g.D5lb]=J8V2g.p7bb;U2[J8V2g.s5lb]=J8V2g.p7bb;U2[J8V2g.x5lb]=J8V2g.p7bb;U2[J8V2g.c5lb]=J8V2g.p7bb;U2[J8V2g.a5lb]=J8V2g.T7bb;return this;},makeRotationFromQuaternion:function(j){var U="W4W",Q="L4W",G="J4W",T="Z4W",J="p4W",n="i4W",W="y4W",H="A1W",f="O1W",C="c1W",F="D1W",e="w1W",o="k1W",u="P1W",R="e1W",d=this[J8V2g.l0lb],D=j[J8V2g.q0lb],M=j[J8V2g.r0lb],O=j[J8V2g.S0lb],k=j[J8V2g.v0lb],N=D+D,B=M+M,K=O+O,I=J8V2g[R](D,N),v9=J8V2g[u](D,B),j9=J8V2g[o](D,K),Z9=J8V2g[e](M,B),A=J8V2g[F](M,K),y9=J8V2g[C](O,K),V=J8V2g[f](k,N),i9=J8V2g[H](k,B),U9=J8V2g[W](k,K);d[J8V2g.p7bb]=J8V2g[n](J8V2g.T7bb,(Z9+y9));d[J8V2g.J7bb]=J8V2g[J](v9,U9);d[J8V2g.C7bb]=j9+i9;d[J8V2g.T7bb]=v9+U9;d[J8V2g.n7bb]=J8V2g[T](J8V2g.T7bb,(I+y9));d[J8V2g.W7bb]=J8V2g[G](A,V);d[J8V2g.Z7bb]=J8V2g[Q](j9,i9);d[J8V2g.L7bb]=A+V;d[J8V2g.B5lb]=J8V2g[U](J8V2g.T7bb,(I+Z9));d[J8V2g.G7bb]=J8V2g.p7bb;d[J8V2g.f7bb]=J8V2g.p7bb;d[J8V2g.D5lb]=J8V2g.p7bb;d[J8V2g.s5lb]=J8V2g.p7bb;d[J8V2g.x5lb]=J8V2g.p7bb;d[J8V2g.c5lb]=J8V2g.p7bb;d[J8V2g.a5lb]=J8V2g.T7bb;return this;},lookAt:function(){var C,F,e;return function(j,U,Q){var G=0.0001,T="M4W",J="R4W",n="Y4W",W="t4W",H="r4W";if(J8V2g[H](C,undefined))C=new THREE[J8V2g.c8bb]();if(J8V2g[W](F,undefined))F=new THREE[J8V2g.c8bb]();if(J8V2g[n](e,undefined))e=new THREE[J8V2g.c8bb]();var f=this[J8V2g.l0lb];e[J8V2g.e27b](j,U)[J8V2g.L1lb]();if(J8V2g[J](e[J8V2g.L7lb](),J8V2g.p7bb)){e[J8V2g.S0lb]=J8V2g.T7bb;}C[J8V2g.z2lb](Q,e)[J8V2g.L1lb]();if(J8V2g[T](C[J8V2g.L7lb](),J8V2g.p7bb)){e[J8V2g.q0lb]+=G;C[J8V2g.z2lb](Q,e)[J8V2g.L1lb]();}F[J8V2g.z2lb](e,C);f[J8V2g.p7bb]=C[J8V2g.q0lb];f[J8V2g.J7bb]=F[J8V2g.q0lb];f[J8V2g.C7bb]=e[J8V2g.q0lb];f[J8V2g.T7bb]=C[J8V2g.r0lb];f[J8V2g.n7bb]=F[J8V2g.r0lb];f[J8V2g.W7bb]=e[J8V2g.r0lb];f[J8V2g.Z7bb]=C[J8V2g.S0lb];f[J8V2g.L7bb]=F[J8V2g.S0lb];f[J8V2g.B5lb]=e[J8V2g.S0lb];return this;};}(),multiply:function(j,U){var Q='THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.',G="N4W";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.a0lb](j,U);}return this[J8V2g.a0lb](this,j);},premultiply:function(j){return this[J8V2g.a0lb](j,this);},multiplyMatrices:function(j,U){var Q="b0W",G="C0W",T="n0W",J="q0W",n="m0W",W="Q0W",H="U0W",f="j0W",C="E5W",F="a5W",e="x5W",o="K5W",u="N5W",R="M5W",d="R5W",D="Y5W",M="t5W",O="r5W",k="W5W",N="L5W",B="J5W",K="Z5W",I="p5W",v9="i5W",j9="y5W",Z9="A7W",A="O7W",y9="c7W",V="D7W",i9="w7W",U9="k7W",z9="P7W",q9="e7W",J9="X7W",m9="l7W",f9="F7W",T9="f7W",G9="H7W",F9="G7W",C9="T7W",l9="z7W",H9="v7W",t9="g8W",Y9="V8W",n9="I8W",L9="s8W",P9="B8W",w9="S8W",N9="d8W",d9="u8W",M9="o8W",s9="h8W",k9="b8W",u9="C8W",B9="n8W",S9="q8W",K9="m8W",g9="Q8W",I9="U8W",V9="j8W",A9="E4W",L2="a4W",q2="x4W",p2="K4W",e2=j[J8V2g.l0lb],u2=U[J8V2g.l0lb],n2=this[J8V2g.l0lb],z2=e2[J8V2g.p7bb],w2=e2[J8V2g.J7bb],y2=e2[J8V2g.C7bb],k2=e2[J8V2g.s5lb],B2=e2[J8V2g.T7bb],G2=e2[J8V2g.n7bb],U2=e2[J8V2g.W7bb],E9=e2[J8V2g.x5lb],R2=e2[J8V2g.Z7bb],T2=e2[J8V2g.L7bb],Q2=e2[J8V2g.B5lb],O9=e2[J8V2g.c5lb],W2=e2[J8V2g.G7bb],i2=e2[J8V2g.f7bb],j2=e2[J8V2g.D5lb],t2=e2[J8V2g.a5lb],Z2=u2[J8V2g.p7bb],c2=u2[J8V2g.J7bb],S2=u2[J8V2g.C7bb],F2=u2[J8V2g.s5lb],l2=u2[J8V2g.T7bb],E2=u2[J8V2g.n7bb],J2=u2[J8V2g.W7bb],f2=u2[J8V2g.x5lb],S6=u2[J8V2g.Z7bb],X6=u2[J8V2g.L7bb],U6=u2[J8V2g.B5lb],b6=u2[J8V2g.c5lb],Q6=u2[J8V2g.G7bb],U3=u2[J8V2g.f7bb],y6=u2[J8V2g.D5lb],b2=u2[J8V2g.a5lb];n2[J8V2g.p7bb]=J8V2g[p2](z2,Z2)+J8V2g[q2](w2,l2)+J8V2g[L2](y2,S6)+J8V2g[A9](k2,Q6);n2[J8V2g.J7bb]=J8V2g[V9](z2,c2)+J8V2g[I9](w2,E2)+J8V2g[g9](y2,X6)+J8V2g[K9](k2,U3);n2[J8V2g.C7bb]=J8V2g[S9](z2,S2)+J8V2g[B9](w2,J2)+J8V2g[u9](y2,U6)+J8V2g[k9](k2,y6);n2[J8V2g.s5lb]=J8V2g[s9](z2,F2)+J8V2g[M9](w2,f2)+J8V2g[d9](y2,b6)+J8V2g[N9](k2,b2);n2[J8V2g.T7bb]=J8V2g[w9](B2,Z2)+J8V2g[P9](G2,l2)+J8V2g[L9](U2,S6)+J8V2g[n9](E9,Q6);n2[J8V2g.n7bb]=J8V2g[Y9](B2,c2)+J8V2g[t9](G2,E2)+J8V2g[H9](U2,X6)+J8V2g[l9](E9,U3);n2[J8V2g.W7bb]=J8V2g[C9](B2,S2)+J8V2g[F9](G2,J2)+J8V2g[G9](U2,U6)+J8V2g[T9](E9,y6);n2[J8V2g.x5lb]=J8V2g[f9](B2,F2)+J8V2g[m9](G2,f2)+J8V2g[J9](U2,b6)+J8V2g[q9](E9,b2);n2[J8V2g.Z7bb]=J8V2g[z9](R2,Z2)+J8V2g[U9](T2,l2)+J8V2g[i9](Q2,S6)+J8V2g[V](O9,Q6);n2[J8V2g.L7bb]=J8V2g[y9](R2,c2)+J8V2g[A](T2,E2)+J8V2g[Z9](Q2,X6)+J8V2g[j9](O9,U3);n2[J8V2g.B5lb]=J8V2g[v9](R2,S2)+J8V2g[I](T2,J2)+J8V2g[K](Q2,U6)+J8V2g[B](O9,y6);n2[J8V2g.c5lb]=J8V2g[N](R2,F2)+J8V2g[k](T2,f2)+J8V2g[O](Q2,b6)+J8V2g[M](O9,b2);n2[J8V2g.G7bb]=J8V2g[D](W2,Z2)+J8V2g[d](i2,l2)+J8V2g[R](j2,S6)+J8V2g[u](t2,Q6);n2[J8V2g.f7bb]=J8V2g[o](W2,c2)+J8V2g[e](i2,E2)+J8V2g[F](j2,X6)+J8V2g[C](t2,U3);n2[J8V2g.D5lb]=J8V2g[f](W2,S2)+J8V2g[H](i2,J2)+J8V2g[W](j2,U6)+J8V2g[n](t2,y6);n2[J8V2g.a5lb]=J8V2g[J](W2,F2)+J8V2g[T](i2,f2)+J8V2g[G](j2,b6)+J8V2g[Q](t2,b2);return this;},multiplyToArray:function(j,U,Q){var G=this[J8V2g.l0lb];this[J8V2g.a0lb](j,U);Q[J8V2g.p7bb]=G[J8V2g.p7bb];Q[J8V2g.T7bb]=G[J8V2g.T7bb];Q[J8V2g.Z7bb]=G[J8V2g.Z7bb];Q[J8V2g.G7bb]=G[J8V2g.G7bb];Q[J8V2g.J7bb]=G[J8V2g.J7bb];Q[J8V2g.n7bb]=G[J8V2g.n7bb];Q[J8V2g.L7bb]=G[J8V2g.L7bb];Q[J8V2g.f7bb]=G[J8V2g.f7bb];Q[J8V2g.C7bb]=G[J8V2g.C7bb];Q[J8V2g.W7bb]=G[J8V2g.W7bb];Q[J8V2g.B5lb]=G[J8V2g.B5lb];Q[J8V2g.D5lb]=G[J8V2g.D5lb];Q[J8V2g.s5lb]=G[J8V2g.s5lb];Q[J8V2g.x5lb]=G[J8V2g.x5lb];Q[J8V2g.c5lb]=G[J8V2g.c5lb];Q[J8V2g.a5lb]=G[J8V2g.a5lb];return this;},multiplyScalar:function(j){var U=this[J8V2g.l0lb];U[J8V2g.p7bb]*=j;U[J8V2g.J7bb]*=j;U[J8V2g.C7bb]*=j;U[J8V2g.s5lb]*=j;U[J8V2g.T7bb]*=j;U[J8V2g.n7bb]*=j;U[J8V2g.W7bb]*=j;U[J8V2g.x5lb]*=j;U[J8V2g.Z7bb]*=j;U[J8V2g.L7bb]*=j;U[J8V2g.B5lb]*=j;U[J8V2g.c5lb]*=j;U[J8V2g.G7bb]*=j;U[J8V2g.f7bb]*=j;U[J8V2g.D5lb]*=j;U[J8V2g.a5lb]*=j;return this;},applyToVector3Array:function(){var f;return function(j,U,Q){var G="d0W",T="u0W",J="o0W",n="h0W";if(J8V2g[n](f,undefined))f=new THREE[J8V2g.c8bb]();if(J8V2g[J](U,undefined))U=J8V2g.p7bb;if(J8V2g[T](Q,undefined))Q=j.length;for(var W=J8V2g.p7bb,H=U;J8V2g[G](W,Q);W+=J8V2g.G7bb,H+=J8V2g.G7bb){f[J8V2g.P6lb](j,H);f[J8V2g.E8bb](this);f[J8V2g.C0bb](j,H);}return j;};}(),applyToBuffer:function(){var u;return function R(j,U,Q){var G="setXYZ",T="getZ",J="getY",n="getX",W="V0W",H="I0W",f="s0W",C="B0W",F="S0W";if(J8V2g[F](u,undefined))u=new THREE[J8V2g.c8bb]();if(J8V2g[C](U,undefined))U=J8V2g.p7bb;if(J8V2g[f](Q,undefined))Q=J8V2g[H](j.length,j[J8V2g.e0lb]);for(var e=J8V2g.p7bb,o=U;J8V2g[W](e,Q);e++,o++){u[J8V2g.q0lb]=j[n](o);u[J8V2g.r0lb]=j[J](o);u[J8V2g.S0lb]=j[T](o);u[J8V2g.E8bb](this);j[G](u[J8V2g.q0lb],u[J8V2g.r0lb],u[J8V2g.S0lb]);}return j;};}(),determinant:function(){var j="l20",U="W20",Q="n20",G="G20",T="p20",J="U20",n="g90",W="O90",H="x90",f="B90",C="k90",F="R90",e="o90",o="l90",u="W90",R="n90",d="G90",D="p90",M="U90",O="g0W",k=this[J8V2g.l0lb],N=k[J8V2g.p7bb],B=k[J8V2g.J7bb],K=k[J8V2g.C7bb],I=k[J8V2g.s5lb],v9=k[J8V2g.T7bb],j9=k[J8V2g.n7bb],Z9=k[J8V2g.W7bb],A=k[J8V2g.x5lb],y9=k[J8V2g.Z7bb],V=k[J8V2g.L7bb],i9=k[J8V2g.B5lb],U9=k[J8V2g.c5lb],z9=k[J8V2g.G7bb],q9=k[J8V2g.f7bb],J9=k[J8V2g.D5lb],m9=k[J8V2g.a5lb];return (z9*(+I*Z9*V-J8V2g[O](K,A,V)-J8V2g[M](I,j9,i9)+J8V2g[D](B,A,i9)+J8V2g[d](K,j9,U9)-J8V2g[R](B,Z9,U9))+q9*(+N*Z9*U9-J8V2g[u](N,A,i9)+J8V2g[o](I,v9,i9)-J8V2g[e](K,v9,U9)+J8V2g[F](K,A,y9)-J8V2g[C](I,Z9,y9))+J9*(+N*A*V-J8V2g[f](N,j9,U9)-J8V2g[H](I,v9,V)+J8V2g[W](B,v9,U9)+J8V2g[n](I,j9,y9)-J8V2g[J](B,A,y9))+m9*(-K*j9*y9-J8V2g[T](N,Z9,V)+J8V2g[G](N,j9,i9)+J8V2g[Q](K,v9,V)-J8V2g[U](B,v9,i9)+J8V2g[j](B,Z9,y9)));},transpose:function(){var j=this[J8V2g.l0lb],U;U=j[J8V2g.T7bb];j[J8V2g.T7bb]=j[J8V2g.J7bb];j[J8V2g.J7bb]=U;U=j[J8V2g.Z7bb];j[J8V2g.Z7bb]=j[J8V2g.C7bb];j[J8V2g.C7bb]=U;U=j[J8V2g.L7bb];j[J8V2g.L7bb]=j[J8V2g.W7bb];j[J8V2g.W7bb]=U;U=j[J8V2g.G7bb];j[J8V2g.G7bb]=j[J8V2g.s5lb];j[J8V2g.s5lb]=U;U=j[J8V2g.f7bb];j[J8V2g.f7bb]=j[J8V2g.x5lb];j[J8V2g.x5lb]=U;U=j[J8V2g.D5lb];j[J8V2g.D5lb]=j[J8V2g.c5lb];j[J8V2g.c5lb]=U;return this;},flattenToArrayOffset:function(j,U){var Q="- just use .toArray instead.",G="THREE.Matrix3: .flattenToArrayOffset is deprecated ";console[J8V2g.n1lb](G+Q);return this[J8V2g.C0bb](j,U);},getPosition:function(){var Q;return function(){var j='THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.',U="o20";if(J8V2g[U](Q,undefined))Q=new THREE[J8V2g.c8bb]();console[J8V2g.n1lb](j);return Q[J8V2g.U27b](this,J8V2g.G7bb);};}(),setPosition:function(j){var U=this[J8V2g.l0lb];U[J8V2g.s5lb]=j[J8V2g.q0lb];U[J8V2g.x5lb]=j[J8V2g.r0lb];U[J8V2g.c5lb]=j[J8V2g.S0lb];return this;},getInverse:function(j,U){var Q="y10",G="a30",T="B30",J="P30",n="t30",W="C30",H="G30",f="i30",C="E60",F="s60",e="k60",o="Y60",u="b60",R="identity",d="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0",D="C60",M="n60",O="q60",k="m60",N="Q60",B="g20",K="c20",I="N20",v9="u20",j9=this[J8V2g.l0lb],Z9=j[J8V2g.l0lb],A=Z9[J8V2g.p7bb],y9=Z9[J8V2g.T7bb],V=Z9[J8V2g.Z7bb],i9=Z9[J8V2g.G7bb],U9=Z9[J8V2g.J7bb],z9=Z9[J8V2g.n7bb],q9=Z9[J8V2g.L7bb],J9=Z9[J8V2g.f7bb],m9=Z9[J8V2g.C7bb],f9=Z9[J8V2g.W7bb],T9=Z9[J8V2g.B5lb],G9=Z9[J8V2g.D5lb],F9=Z9[J8V2g.s5lb],C9=Z9[J8V2g.x5lb],l9=Z9[J8V2g.c5lb],H9=Z9[J8V2g.a5lb],t9=J8V2g[v9](f9*l9*J9,C9*T9*J9,C9*q9*G9,z9*l9*G9,f9*q9*H9,z9*T9*H9),Y9=J8V2g[I](F9*T9*J9,m9*l9*J9,F9*q9*G9,U9*l9*G9,m9*q9*H9,U9*T9*H9),n9=J8V2g[K](m9*C9*J9,F9*f9*J9,F9*z9*G9,U9*C9*G9,m9*z9*H9,U9*f9*H9),L9=J8V2g[B](F9*f9*q9,m9*C9*q9,F9*z9*T9,U9*C9*T9,m9*z9*l9,U9*f9*l9),P9=J8V2g[N](A,t9)+J8V2g[k](y9,Y9)+J8V2g[O](V,n9)+J8V2g[M](i9,L9);if(J8V2g[D](P9,J8V2g.p7bb)){var w9=d;if(U||J8V2g.o8lb){throw  new Error(w9);}else{console[J8V2g.n1lb](w9);}return this[R]();}j9[J8V2g.p7bb]=t9;j9[J8V2g.T7bb]=J8V2g[u](C9*T9*i9,f9*l9*i9,C9*V*G9,y9*l9*G9,f9*V*H9,y9*T9*H9);j9[J8V2g.Z7bb]=J8V2g[o](z9*l9*i9,C9*q9*i9,C9*V*J9,y9*l9*J9,z9*V*H9,y9*q9*H9);j9[J8V2g.G7bb]=J8V2g[e](f9*q9*i9,z9*T9*i9,f9*V*J9,y9*T9*J9,z9*V*G9,y9*q9*G9);j9[J8V2g.J7bb]=Y9;j9[J8V2g.n7bb]=J8V2g[F](m9*l9*i9,F9*T9*i9,F9*V*G9,A*l9*G9,m9*V*H9,A*T9*H9);j9[J8V2g.L7bb]=J8V2g[C](F9*q9*i9,U9*l9*i9,F9*V*J9,A*l9*J9,U9*V*H9,A*q9*H9);j9[J8V2g.f7bb]=J8V2g[f](U9*T9*i9,m9*q9*i9,m9*V*J9,A*T9*J9,U9*V*G9,A*q9*G9);j9[J8V2g.C7bb]=n9;j9[J8V2g.W7bb]=J8V2g[H](F9*f9*i9,m9*C9*i9,F9*y9*G9,A*C9*G9,m9*y9*H9,A*f9*H9);j9[J8V2g.B5lb]=J8V2g[W](U9*C9*i9,F9*z9*i9,F9*y9*J9,A*C9*J9,U9*y9*H9,A*z9*H9);j9[J8V2g.D5lb]=J8V2g[n](m9*z9*i9,U9*f9*i9,m9*y9*J9,A*f9*J9,U9*y9*G9,A*z9*G9);j9[J8V2g.s5lb]=L9;j9[J8V2g.x5lb]=J8V2g[J](m9*C9*V,F9*f9*V,F9*y9*T9,A*C9*T9,m9*y9*l9,A*f9*l9);j9[J8V2g.c5lb]=J8V2g[T](F9*z9*V,U9*C9*V,F9*y9*q9,A*C9*q9,U9*y9*l9,A*z9*l9);j9[J8V2g.a5lb]=J8V2g[G](U9*f9*V,m9*z9*V,m9*y9*q9,A*f9*q9,U9*y9*T9,A*z9*T9);return this[J8V2g.q5lb](J8V2g[Q](J8V2g.T7bb,P9));},scale:function(j){var U=this[J8V2g.l0lb],Q=j[J8V2g.q0lb],G=j[J8V2g.r0lb],T=j[J8V2g.S0lb];U[J8V2g.p7bb]*=Q;U[J8V2g.J7bb]*=G;U[J8V2g.C7bb]*=T;U[J8V2g.T7bb]*=Q;U[J8V2g.n7bb]*=G;U[J8V2g.W7bb]*=T;U[J8V2g.Z7bb]*=Q;U[J8V2g.L7bb]*=G;U[J8V2g.B5lb]*=T;U[J8V2g.G7bb]*=Q;U[J8V2g.f7bb]*=G;U[J8V2g.D5lb]*=T;return this;},getMaxScaleOnAxis:function(){var j="Y10",U="t10",Q="r10",G="W10",T="L10",J="J10",n="Z10",W="p10",H="i10",f=this[J8V2g.l0lb],C=J8V2g[H](f[J8V2g.p7bb],f[J8V2g.p7bb])+J8V2g[W](f[J8V2g.T7bb],f[J8V2g.T7bb])+J8V2g[n](f[J8V2g.Z7bb],f[J8V2g.Z7bb]),F=J8V2g[J](f[J8V2g.J7bb],f[J8V2g.J7bb])+J8V2g[T](f[J8V2g.n7bb],f[J8V2g.n7bb])+J8V2g[G](f[J8V2g.L7bb],f[J8V2g.L7bb]),e=J8V2g[Q](f[J8V2g.C7bb],f[J8V2g.C7bb])+J8V2g[U](f[J8V2g.W7bb],f[J8V2g.W7bb])+J8V2g[j](f[J8V2g.B5lb],f[J8V2g.B5lb]);return Math[J8V2g.Q8lb](Math[J8V2g.R4lb](C,F,e));},makeTranslation:function(j,U,Q){this[J8V2g.A8lb](J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,j,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,Q,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeRotationX:function(j){var U=Math[J8V2g.I4lb](j),Q=Math[J8V2g.b27b](j);this[J8V2g.A8lb](J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,U,-Q,J8V2g.p7bb,J8V2g.p7bb,Q,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeRotationY:function(j){var U=Math[J8V2g.I4lb](j),Q=Math[J8V2g.b27b](j);this[J8V2g.A8lb](U,J8V2g.p7bb,Q,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,-Q,J8V2g.p7bb,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeRotationZ:function(j){var U=Math[J8V2g.I4lb](j),Q=Math[J8V2g.b27b](j);this[J8V2g.A8lb](U,-Q,J8V2g.p7bb,J8V2g.p7bb,Q,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeRotationAxis:function(j,U){var Q="b40",G="C40",T="n40",J="q40",n="m40",W="Q40",H="U40",f="j40",C="E10",F="a10",e="x10",o="K10",u="N10",R="M10",d="R10",D=Math[J8V2g.I4lb](U),M=Math[J8V2g.b27b](U),O=J8V2g[d](J8V2g.T7bb,D),k=j[J8V2g.q0lb],N=j[J8V2g.r0lb],B=j[J8V2g.S0lb],K=J8V2g[R](O,k),I=J8V2g[u](O,N);this[J8V2g.A8lb](J8V2g[o](K,k)+D,J8V2g[e](K*N,M*B),J8V2g[F](K,B)+J8V2g[C](M,N),J8V2g.p7bb,J8V2g[f](K,N)+J8V2g[H](M,B),J8V2g[W](I,N)+D,J8V2g[n](I*B,M*k),J8V2g.p7bb,J8V2g[J](K*B,M*N),J8V2g[T](I,B)+J8V2g[G](M,k),J8V2g[Q](O,B,B)+D,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeScale:function(j,U,Q){this[J8V2g.A8lb](j,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,Q,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},compose:function(j,U,Q){var G="setPosition",T="makeRotationFromQuaternion";this[T](U);this.scale(Q);this[G](j);return this;},decompose:function(){var O,k;return function(j,U,Q){var G="setFromRotationMatrix",T="K40",J="N40",n="M40",W="R40",H="determinant",f="Y40",C="t40";if(J8V2g[C](O,undefined))O=new THREE[J8V2g.c8bb]();if(J8V2g[f](k,undefined))k=new THREE[J8V2g.q3lb]();var F=this[J8V2g.l0lb],e=O[J8V2g.A8lb](F[J8V2g.p7bb],F[J8V2g.T7bb],F[J8V2g.Z7bb]).length(),o=O[J8V2g.A8lb](F[J8V2g.J7bb],F[J8V2g.n7bb],F[J8V2g.L7bb]).length(),u=O[J8V2g.A8lb](F[J8V2g.C7bb],F[J8V2g.W7bb],F[J8V2g.B5lb]).length(),R=this[H]();if(J8V2g[W](R,J8V2g.p7bb)){e=-e;}j[J8V2g.q0lb]=F[J8V2g.s5lb];j[J8V2g.r0lb]=F[J8V2g.x5lb];j[J8V2g.S0lb]=F[J8V2g.c5lb];k[J8V2g.l0lb][J8V2g.A8lb](this[J8V2g.l0lb]);var d=J8V2g[n](J8V2g.T7bb,e),D=J8V2g[J](J8V2g.T7bb,o),M=J8V2g[T](J8V2g.T7bb,u);k[J8V2g.l0lb][J8V2g.p7bb]*=d;k[J8V2g.l0lb][J8V2g.T7bb]*=d;k[J8V2g.l0lb][J8V2g.Z7bb]*=d;k[J8V2g.l0lb][J8V2g.J7bb]*=D;k[J8V2g.l0lb][J8V2g.n7bb]*=D;k[J8V2g.l0lb][J8V2g.L7bb]*=D;k[J8V2g.l0lb][J8V2g.C7bb]*=M;k[J8V2g.l0lb][J8V2g.W7bb]*=M;k[J8V2g.l0lb][J8V2g.B5lb]*=M;U[G](k);Q[J8V2g.q0lb]=e;Q[J8V2g.r0lb]=o;Q[J8V2g.S0lb]=u;return this;};}(),makeFrustum:function(j,U,Q,G,T,J){var n="T80",W="z80",H="v80",f="g40",C="O40",F="x40",e=this[J8V2g.l0lb],o=J8V2g[F](J8V2g.Z7bb,T,(U-j)),u=J8V2g[C](J8V2g.Z7bb,T,(G-Q)),R=J8V2g[f]((U+j),(U-j)),d=J8V2g[H]((G+Q),(G-Q)),D=-(J+T)/(J8V2g[W](J,T)),M=-J8V2g.Z7bb*J*T/(J8V2g[n](J,T));e[J8V2g.p7bb]=o;e[J8V2g.J7bb]=J8V2g.p7bb;e[J8V2g.C7bb]=R;e[J8V2g.s5lb]=J8V2g.p7bb;e[J8V2g.T7bb]=J8V2g.p7bb;e[J8V2g.n7bb]=u;e[J8V2g.W7bb]=d;e[J8V2g.x5lb]=J8V2g.p7bb;e[J8V2g.Z7bb]=J8V2g.p7bb;e[J8V2g.L7bb]=J8V2g.p7bb;e[J8V2g.B5lb]=D;e[J8V2g.c5lb]=M;e[J8V2g.G7bb]=J8V2g.p7bb;e[J8V2g.f7bb]=J8V2g.p7bb;e[J8V2g.D5lb]=-J8V2g.T7bb;e[J8V2g.a5lb]=J8V2g.p7bb;return this;},makePerspective:function(j,U,Q,G){var T="makeFrustum",J="f80",n="H80",W="DEG2RAD",H="tan",f="G80",C=J8V2g[f](Q,Math[H](THREE[J8V2g.a0bb][W]*j*J8V2g.M9lb)),F=-C,e=J8V2g[n](F,U),o=J8V2g[J](C,U);return this[T](e,o,F,C,Q,G);},makeOrthographic:function(j,U,Q,G,T,J){var n="D80",W="w80",H="k80",f="P80",C="e80",F="X80",e="l80",o="F80",u=this[J8V2g.l0lb],R=J8V2g[o](J8V2g.V7lb,(U-j)),d=J8V2g[e](J8V2g.V7lb,(Q-G)),D=J8V2g[F](J8V2g.V7lb,(J-T)),M=J8V2g[C]((U+j),R),O=J8V2g[f]((Q+G),d),k=J8V2g[H]((J+T),D);u[J8V2g.p7bb]=J8V2g[W](J8V2g.Z7bb,R);u[J8V2g.J7bb]=J8V2g.p7bb;u[J8V2g.C7bb]=J8V2g.p7bb;u[J8V2g.s5lb]=-M;u[J8V2g.T7bb]=J8V2g.p7bb;u[J8V2g.n7bb]=J8V2g[n](J8V2g.Z7bb,d);u[J8V2g.W7bb]=J8V2g.p7bb;u[J8V2g.x5lb]=-O;u[J8V2g.Z7bb]=J8V2g.p7bb;u[J8V2g.L7bb]=J8V2g.p7bb;u[J8V2g.B5lb]=-J8V2g.Z7bb*D;u[J8V2g.c5lb]=-k;u[J8V2g.G7bb]=J8V2g.p7bb;u[J8V2g.f7bb]=J8V2g.p7bb;u[J8V2g.D5lb]=J8V2g.p7bb;u[J8V2g.a5lb]=J8V2g.T7bb;return this;},equals:function(j){var U="O80",Q=16,G="c80",T=this[J8V2g.l0lb],J=j[J8V2g.l0lb];for(var n=J8V2g.p7bb;J8V2g[G](n,Q);n++){if(J8V2g[U](T[n],J[n]))return J8V2g.o8lb;}return J8V2g.g7lb;},fromArray:function(j){this[J8V2g.l0lb][J8V2g.A8lb](j);return this;},toArray:function(j,U){var Q="y70",G="A80";if(J8V2g[G](j,undefined))j=[];if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;var T=this[J8V2g.l0lb];j[U]=T[J8V2g.p7bb];j[U+J8V2g.T7bb]=T[J8V2g.T7bb];j[U+J8V2g.Z7bb]=T[J8V2g.Z7bb];j[U+J8V2g.G7bb]=T[J8V2g.G7bb];j[U+J8V2g.J7bb]=T[J8V2g.J7bb];j[U+J8V2g.n7bb]=T[J8V2g.n7bb];j[U+J8V2g.L7bb]=T[J8V2g.L7bb];j[U+J8V2g.f7bb]=T[J8V2g.f7bb];j[U+J8V2g.C7bb]=T[J8V2g.C7bb];j[U+J8V2g.W7bb]=T[J8V2g.W7bb];j[U+J8V2g.B5lb]=T[J8V2g.B5lb];j[U+J8V2g.D5lb]=T[J8V2g.D5lb];j[U+J8V2g.s5lb]=T[J8V2g.s5lb];j[U+J8V2g.x5lb]=T[J8V2g.x5lb];j[U+J8V2g.c5lb]=T[J8V2g.c5lb];j[U+J8V2g.a5lb]=T[J8V2g.a5lb];return j;}};THREE[J8V2g.t27b]=function(j,U){var Q="p70",G="i70";this[J8V2g.Q0bb]=(J8V2g[G](j,undefined))?j:new THREE[J8V2g.c8bb](+Infinity,+Infinity,+Infinity);this[J8V2g.R4lb]=(J8V2g[Q](U,undefined))?U:new THREE[J8V2g.c8bb](-Infinity,-Infinity,-Infinity);};THREE.Box3.prototype={constructor:THREE[J8V2g.t27b],set:function(j,U){this[J8V2g.Q0bb][J8V2g.f1lb](j);this[J8V2g.R4lb][J8V2g.f1lb](U);return this;},setFromArray:function(j){var U="Y70",Q="t70",G="r70",T="W70",J="L70",n="J70",W="Z70",H=+Infinity,f=+Infinity,C=+Infinity,F=-Infinity,e=-Infinity,o=-Infinity;for(var u=J8V2g.p7bb,R=j.length;J8V2g[W](u,R);u+=J8V2g.G7bb){var d=j[u],D=j[u+J8V2g.T7bb],M=j[u+J8V2g.Z7bb];if(J8V2g[n](d,H))H=d;if(J8V2g[J](D,f))f=D;if(J8V2g[T](M,C))C=M;if(J8V2g[G](d,F))F=d;if(J8V2g[Q](D,e))e=D;if(J8V2g[U](M,o))o=M;}this[J8V2g.Q0bb][J8V2g.A8lb](H,f,C);this[J8V2g.R4lb][J8V2g.A8lb](F,e,o);},setFromPoints:function(j){var U="R70";this[J8V2g.l8lb]();for(var Q=J8V2g.p7bb,G=j.length;J8V2g[U](Q,G);Q++){this[J8V2g.J0lb](j[Q]);}return this;},setFromCenterAndSize:function(){var G=new THREE[J8V2g.c8bb]();return function(j,U){var Q=G[J8V2g.f1lb](U)[J8V2g.q5lb](J8V2g.M9lb);this[J8V2g.Q0bb][J8V2g.f1lb](j)[J8V2g.B6lb](Q);this[J8V2g.R4lb][J8V2g.f1lb](j)[J8V2g.F5bb](Q);return this;};}(),setFromObject:function(){var B=new THREE[J8V2g.c8bb]();return function(M){var O="traverse",k="updateMatrixWorld",N=this;M[k](J8V2g.g7lb);this[J8V2g.l8lb]();M[O](function(j){var U="E70",Q='position',G="attributes",T="a70",J="BufferGeometry",n="x70",W="K70",H="vertices",f="Geometry",C="N70",F="M70",e="geometry",o=j[e];if(J8V2g[F](o,undefined)){if(J8V2g[C](o,THREE[f])){var u=o[H];for(var R=J8V2g.p7bb,d=u.length;J8V2g[W](R,d);R++){B[J8V2g.f1lb](u[R]);B[J8V2g.E8bb](j[J8V2g.V3lb]);N[J8V2g.J0lb](B);}}else if(J8V2g[n](o,THREE[J])&&J8V2g[T](o[G][Q],undefined)){var D=o[G][Q][J8V2g.x8lb];for(var R=J8V2g.p7bb,d=D.length;J8V2g[U](R,d);R+=J8V2g.G7bb){B[J8V2g.P6lb](D,R);B[J8V2g.E8bb](j[J8V2g.V3lb]);N[J8V2g.J0lb](B);}}}});return this;};}(),clone:function(){return new this.constructor()[J8V2g.f1lb](this);},copy:function(j){this[J8V2g.Q0bb][J8V2g.f1lb](j[J8V2g.Q0bb]);this[J8V2g.R4lb][J8V2g.f1lb](j[J8V2g.R4lb]);return this;},makeEmpty:function(){this[J8V2g.Q0bb][J8V2g.q0lb]=this[J8V2g.Q0bb][J8V2g.r0lb]=this[J8V2g.Q0bb][J8V2g.S0lb]=+Infinity;this[J8V2g.R4lb][J8V2g.q0lb]=this[J8V2g.R4lb][J8V2g.r0lb]=this[J8V2g.R4lb][J8V2g.S0lb]=-Infinity;return this;},isEmpty:function(){var j="Q50",U="U50",Q="j50";return (J8V2g[Q](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb]))||(J8V2g[U](this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb]))||(J8V2g[j](this[J8V2g.R4lb][J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb]));},center:function(j){var U=j||new THREE[J8V2g.c8bb]();return U[J8V2g.H27b](this[J8V2g.Q0bb],this[J8V2g.R4lb])[J8V2g.q5lb](J8V2g.M9lb);},size:function(j){var U=j||new THREE[J8V2g.c8bb]();return U[J8V2g.e27b](this[J8V2g.R4lb],this[J8V2g.Q0bb]);},expandByPoint:function(j){this[J8V2g.Q0bb][J8V2g.Q0bb](j);this[J8V2g.R4lb][J8V2g.R4lb](j);return this;},expandByVector:function(j){this[J8V2g.Q0bb][J8V2g.B6lb](j);this[J8V2g.R4lb][J8V2g.F5bb](j);return this;},expandByScalar:function(j){var U="addScalar";this[J8V2g.Q0bb][U](-j);this[J8V2g.R4lb][U](j);return this;},containsPoint:function(j){var U="h50",Q="b50",G="C50",T="n50",J="q50",n="m50";if(J8V2g[n](j[J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb])||J8V2g[J](j[J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb])||J8V2g[T](j[J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb])||J8V2g[G](j[J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb])||J8V2g[Q](j[J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb])||J8V2g[U](j[J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb])){return J8V2g.o8lb;}return J8V2g.g7lb;},containsBox:function(j){var U="s50",Q="B50",G="S50",T="d50",J="u50",n="o50";if((J8V2g[n](this[J8V2g.Q0bb][J8V2g.q0lb],j[J8V2g.Q0bb][J8V2g.q0lb]))&&(J8V2g[J](j[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb]))&&(J8V2g[T](this[J8V2g.Q0bb][J8V2g.r0lb],j[J8V2g.Q0bb][J8V2g.r0lb]))&&(J8V2g[G](j[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb]))&&(J8V2g[Q](this[J8V2g.Q0bb][J8V2g.S0lb],j[J8V2g.Q0bb][J8V2g.S0lb]))&&(J8V2g[U](j[J8V2g.R4lb][J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb]))){return J8V2g.g7lb;}return J8V2g.o8lb;},getParameter:function(j,U){var Q="g50",G="V50",T="I50",J=U||new THREE[J8V2g.c8bb]();return J[J8V2g.A8lb](J8V2g[T]((j[J8V2g.q0lb]-this[J8V2g.Q0bb][J8V2g.q0lb]),(this[J8V2g.R4lb][J8V2g.q0lb]-this[J8V2g.Q0bb][J8V2g.q0lb])),J8V2g[G]((j[J8V2g.r0lb]-this[J8V2g.Q0bb][J8V2g.r0lb]),(this[J8V2g.R4lb][J8V2g.r0lb]-this[J8V2g.Q0bb][J8V2g.r0lb])),J8V2g[Q]((j[J8V2g.S0lb]-this[J8V2g.Q0bb][J8V2g.S0lb]),(this[J8V2g.R4lb][J8V2g.S0lb]-this[J8V2g.Q0bb][J8V2g.S0lb])));},intersectsBox:function(j){var U="f00",Q="H00",G="G00",T="T00",J="z00",n="v00";if(J8V2g[n](j[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb])||J8V2g[J](j[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb])||J8V2g[T](j[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb])||J8V2g[G](j[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb])||J8V2g[Q](j[J8V2g.R4lb][J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb])||J8V2g[U](j[J8V2g.Q0bb][J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb])){return J8V2g.o8lb;}return J8V2g.g7lb;},intersectsSphere:(function(){var T;return function J(j){var U="l00",Q="clampPoint",G="F00";if(J8V2g[G](T,undefined))T=new THREE[J8V2g.c8bb]();this[Q](j[J8V2g.X27b],T);return J8V2g[U](T[J8V2g.q4lb](j[J8V2g.X27b]),(j[J8V2g.U97b]*j[J8V2g.U97b]));};})(),intersectsPlane:function(j){var U="r9v",Q="constant",G="W9v",T="L9v",J="J9v",n="Z9v",W="p9v",H="i9v",f="y9v",C="A00",F="O00",e="c00",o="D00",u="w00",R="k00",d="P00",D="e00",M="normal",O="X00",k,N;if(J8V2g[O](j[M][J8V2g.q0lb],J8V2g.p7bb)){k=J8V2g[D](j[M][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb]);N=J8V2g[d](j[M][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb]);}else{k=J8V2g[R](j[M][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb]);N=J8V2g[u](j[M][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb]);}if(J8V2g[o](j[M][J8V2g.r0lb],J8V2g.p7bb)){k+=J8V2g[e](j[M][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb]);N+=J8V2g[F](j[M][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb]);}else{k+=J8V2g[C](j[M][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb]);N+=J8V2g[f](j[M][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb]);}if(J8V2g[H](j[M][J8V2g.S0lb],J8V2g.p7bb)){k+=J8V2g[W](j[M][J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb]);N+=J8V2g[n](j[M][J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb]);}else{k+=J8V2g[J](j[M][J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb]);N+=J8V2g[T](j[M][J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb]);}return (J8V2g[G](k,j[Q])&&J8V2g[U](N,j[Q]));},clampPoint:function(j,U){var Q=U||new THREE[J8V2g.c8bb]();return Q[J8V2g.f1lb](j)[J8V2g.W5bb](this[J8V2g.Q0bb],this[J8V2g.R4lb]);},distanceToPoint:function(){var Q=new THREE[J8V2g.c8bb]();return function(j){var U=Q[J8V2g.f1lb](j)[J8V2g.W5bb](this[J8V2g.Q0bb],this[J8V2g.R4lb]);return U[J8V2g.B6lb](j).length();};}(),getBoundingSphere:function(){var J=new THREE[J8V2g.c8bb]();return function(j){var U="size",Q="t9v",G="Sphere",T=j||new THREE[G]();T[J8V2g.X27b]=this[J8V2g.X27b]();T[J8V2g.U97b]=J8V2g[Q](this[U](J).length(),J8V2g.M9lb);return T;};}(),intersect:function(j){this[J8V2g.Q0bb][J8V2g.R4lb](j[J8V2g.Q0bb]);this[J8V2g.R4lb][J8V2g.Q0bb](j[J8V2g.R4lb]);if(this[J8V2g.g27b]())this[J8V2g.l8lb]();return this;},union:function(j){this[J8V2g.Q0bb][J8V2g.Q0bb](j[J8V2g.Q0bb]);this[J8V2g.R4lb][J8V2g.R4lb](j[J8V2g.R4lb]);return this;},applyMatrix4:function(){var Q=[new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb]()];return function(j){var U="setFromPoints";if(this[J8V2g.g27b]())return this;Q[J8V2g.p7bb][J8V2g.A8lb](this[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.T7bb][J8V2g.A8lb](this[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.Z7bb][J8V2g.A8lb](this[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.G7bb][J8V2g.A8lb](this[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.J7bb][J8V2g.A8lb](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.n7bb][J8V2g.A8lb](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.L7bb][J8V2g.A8lb](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.f7bb][J8V2g.A8lb](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.S0lb])[J8V2g.E8bb](j);this[U](Q);return this;};}(),translate:function(j){this[J8V2g.Q0bb][J8V2g.F5bb](j);this[J8V2g.R4lb][J8V2g.F5bb](j);return this;},equals:function(j){var U="equals";return j[J8V2g.Q0bb][U](this[J8V2g.Q0bb])&&j[J8V2g.R4lb][U](this[J8V2g.R4lb]);}};THREE[J8V2g.e9lb]=function(j,U){this[J8V2g.q0lb]=j||J8V2g.p7bb;this[J8V2g.r0lb]=U||J8V2g.p7bb;};THREE.Vector2.prototype={constructor:THREE[J8V2g.e9lb],get width(){return this[J8V2g.q0lb];},set width(value){this[J8V2g.q0lb]=value;},get height(){return this[J8V2g.r0lb];},set height(value){this[J8V2g.r0lb]=value;},set:function(j,U){this[J8V2g.q0lb]=j;this[J8V2g.r0lb]=U;return this;},setScalar:function(j){this[J8V2g.q0lb]=j;this[J8V2g.r0lb]=j;return this;},setX:function(j){this[J8V2g.q0lb]=j;return this;},setY:function(j){this[J8V2g.r0lb]=j;return this;},setComponent:function(j,U){switch(j){case J8V2g.p7bb:this[J8V2g.q0lb]=U;break;case J8V2g.T7bb:this[J8V2g.r0lb]=U;break;default:throw  new Error(J8V2g.s7bb+j);}},getComponent:function(j){switch(j){case J8V2g.p7bb:return this[J8V2g.q0lb];case J8V2g.T7bb:return this[J8V2g.r0lb];default:throw  new Error(J8V2g.s7bb+j);}},clone:function(){return new this.constructor(this[J8V2g.q0lb],this[J8V2g.r0lb]);},copy:function(j){this[J8V2g.q0lb]=j[J8V2g.q0lb];this[J8V2g.r0lb]=j[J8V2g.r0lb];return this;},add:function(j,U){var Q='THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.',G="Y9v";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.H27b](j,U);}this[J8V2g.q0lb]+=j[J8V2g.q0lb];this[J8V2g.r0lb]+=j[J8V2g.r0lb];return this;},addScalar:function(j){this[J8V2g.q0lb]+=j;this[J8V2g.r0lb]+=j;return this;},addVectors:function(j,U){this[J8V2g.q0lb]=j[J8V2g.q0lb]+U[J8V2g.q0lb];this[J8V2g.r0lb]=j[J8V2g.r0lb]+U[J8V2g.r0lb];return this;},addScaledVector:function(j,U){var Q="M9v",G="R9v";this[J8V2g.q0lb]+=J8V2g[G](j[J8V2g.q0lb],U);this[J8V2g.r0lb]+=J8V2g[Q](j[J8V2g.r0lb],U);return this;},sub:function(j,U){var Q='THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.',G="N9v";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.e27b](j,U);}this[J8V2g.q0lb]-=j[J8V2g.q0lb];this[J8V2g.r0lb]-=j[J8V2g.r0lb];return this;},subScalar:function(j){this[J8V2g.q0lb]-=j;this[J8V2g.r0lb]-=j;return this;},subVectors:function(j,U){var Q="x9v",G="K9v";this[J8V2g.q0lb]=J8V2g[G](j[J8V2g.q0lb],U[J8V2g.q0lb]);this[J8V2g.r0lb]=J8V2g[Q](j[J8V2g.r0lb],U[J8V2g.r0lb]);return this;},multiply:function(j){this[J8V2g.q0lb]*=j[J8V2g.q0lb];this[J8V2g.r0lb]*=j[J8V2g.r0lb];return this;},multiplyScalar:function(j){if(isFinite(j)){this[J8V2g.q0lb]*=j;this[J8V2g.r0lb]*=j;}else{this[J8V2g.q0lb]=J8V2g.p7bb;this[J8V2g.r0lb]=J8V2g.p7bb;}return this;},divide:function(j){this[J8V2g.q0lb]/=j[J8V2g.q0lb];this[J8V2g.r0lb]/=j[J8V2g.r0lb];return this;},divideScalar:function(j){var U="a9v";return this[J8V2g.q5lb](J8V2g[U](J8V2g.T7bb,j));},min:function(j){this[J8V2g.q0lb]=Math[J8V2g.Q0bb](this[J8V2g.q0lb],j[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.Q0bb](this[J8V2g.r0lb],j[J8V2g.r0lb]);return this;},max:function(j){this[J8V2g.q0lb]=Math[J8V2g.R4lb](this[J8V2g.q0lb],j[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.R4lb](this[J8V2g.r0lb],j[J8V2g.r0lb]);return this;},clamp:function(j,U){this[J8V2g.q0lb]=Math[J8V2g.R4lb](j[J8V2g.q0lb],Math[J8V2g.Q0bb](U[J8V2g.q0lb],this[J8V2g.q0lb]));this[J8V2g.r0lb]=Math[J8V2g.R4lb](j[J8V2g.r0lb],Math[J8V2g.Q0bb](U[J8V2g.r0lb],this[J8V2g.r0lb]));return this;},clampScalar:function(){var G,T;return function J(j,U){var Q="E9v";if(J8V2g[Q](G,undefined)){G=new THREE[J8V2g.e9lb]();T=new THREE[J8V2g.e9lb]();}G[J8V2g.A8lb](j,j);T[J8V2g.A8lb](U,U);return this[J8V2g.W5bb](G,T);};}(),clampLength:function(j,U){var Q="j2v",G=this.length();this[J8V2g.q5lb](J8V2g[Q](Math[J8V2g.R4lb](j,Math[J8V2g.Q0bb](U,G)),G));return this;},floor:function(){this[J8V2g.q0lb]=Math[J8V2g.t97b](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.t97b](this[J8V2g.r0lb]);return this;},ceil:function(){this[J8V2g.q0lb]=Math[J8V2g.k3lb](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.k3lb](this[J8V2g.r0lb]);return this;},round:function(){this[J8V2g.q0lb]=Math[J8V2g.T9lb](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.T9lb](this[J8V2g.r0lb]);return this;},roundToZero:function(){var j="Q2v",U="U2v";this[J8V2g.q0lb]=(J8V2g[U](this[J8V2g.q0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.q0lb]):Math[J8V2g.t97b](this[J8V2g.q0lb]);this[J8V2g.r0lb]=(J8V2g[j](this[J8V2g.r0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.r0lb]):Math[J8V2g.t97b](this[J8V2g.r0lb]);return this;},negate:function(){this[J8V2g.q0lb]=-this[J8V2g.q0lb];this[J8V2g.r0lb]=-this[J8V2g.r0lb];return this;},dot:function(j){var U="q2v",Q="m2v";return J8V2g[Q](this[J8V2g.q0lb],j[J8V2g.q0lb])+J8V2g[U](this[J8V2g.r0lb],j[J8V2g.r0lb]);},lengthSq:function(){var j="C2v",U="n2v";return J8V2g[U](this[J8V2g.q0lb],this[J8V2g.q0lb])+J8V2g[j](this[J8V2g.r0lb],this[J8V2g.r0lb]);},length:function(){var j="h2v",U="b2v";return Math[J8V2g.Q8lb](J8V2g[U](this[J8V2g.q0lb],this[J8V2g.q0lb])+J8V2g[j](this[J8V2g.r0lb],this[J8V2g.r0lb]));},lengthManhattan:function(){return Math[J8V2g.A97b](this[J8V2g.q0lb])+Math[J8V2g.A97b](this[J8V2g.r0lb]);},normalize:function(){return this[J8V2g.D27b](this.length());},angle:function(){var j="PI",U="u2v",Q="o2v",G=Math[J8V2g.Z97b](this[J8V2g.r0lb],this[J8V2g.q0lb]);if(J8V2g[Q](G,J8V2g.p7bb))G+=J8V2g[U](J8V2g.Z7bb,Math[j]);return G;},distanceTo:function(j){return Math[J8V2g.Q8lb](this[J8V2g.q4lb](j));},distanceToSquared:function(j){var U="s2v",Q="B2v",G="S2v",T="d2v",J=J8V2g[T](this[J8V2g.q0lb],j[J8V2g.q0lb]),n=J8V2g[G](this[J8V2g.r0lb],j[J8V2g.r0lb]);return J8V2g[Q](J,J)+J8V2g[U](n,n);},setLength:function(j){var U="I2v";return this[J8V2g.q5lb](J8V2g[U](j,this.length()));},lerp:function(j,U){var Q="g2v",G="V2v";this[J8V2g.q0lb]+=J8V2g[G]((j[J8V2g.q0lb]-this[J8V2g.q0lb]),U);this[J8V2g.r0lb]+=J8V2g[Q]((j[J8V2g.r0lb]-this[J8V2g.r0lb]),U);return this;},lerpVectors:function(j,U,Q){this[J8V2g.e27b](U,j)[J8V2g.q5lb](Q)[J8V2g.F5bb](j);return this;},equals:function(j){var U="z6v",Q="v6v";return ((J8V2g[Q](j[J8V2g.q0lb],this[J8V2g.q0lb]))&&(J8V2g[U](j[J8V2g.r0lb],this[J8V2g.r0lb])));},fromArray:function(j,U){var Q="T6v";if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;this[J8V2g.q0lb]=j[U];this[J8V2g.r0lb]=j[U+J8V2g.T7bb];return this;},toArray:function(j,U){var Q="H6v",G="G6v";if(J8V2g[G](j,undefined))j=[];if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;j[U]=this[J8V2g.q0lb];j[U+J8V2g.T7bb]=this[J8V2g.r0lb];return j;},fromAttribute:function(j,U,Q){var G="F6v",T="f6v";if(J8V2g[T](Q,undefined))Q=J8V2g.p7bb;U=J8V2g[G](U,j[J8V2g.e0lb])+Q;this[J8V2g.q0lb]=j[J8V2g.x8lb][U];this[J8V2g.r0lb]=j[J8V2g.x8lb][U+J8V2g.T7bb];return this;},rotateAround:function(j,U){var Q="S6v",G="d6v",T="e6v",J="X6v",n="l6v",W=Math[J8V2g.I4lb](U),H=Math[J8V2g.b27b](U),f=J8V2g[n](this[J8V2g.q0lb],j[J8V2g.q0lb]),C=J8V2g[J](this[J8V2g.r0lb],j[J8V2g.r0lb]);this[J8V2g.q0lb]=J8V2g[T](f*W,C*H,j[J8V2g.q0lb]);this[J8V2g.r0lb]=J8V2g[G](f,H)+J8V2g[Q](C,W)+j[J8V2g.r0lb];return this;}};// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.

/**
 * @fileoverview Global |this| required for resolving indexes in node.
 * @suppress {globalThis}
 */
(function(global) {
  'use strict';

  // If we're in node require encoding-indexes and attach it to the global.
  if (typeof module !== "undefined" && module.exports &&
    !global["encoding-indexes"]) {
    global["encoding-indexes"] =
      require("./encoding-indexes.js")["encoding-indexes"];
  }

  //
  // Utilities
  //

  /**
   * @param {number} a The number to test.
   * @param {number} min The minimum value in the range, inclusive.
   * @param {number} max The maximum value in the range, inclusive.
   * @return {boolean} True if a >= min and a <= max.
   */
  function inRange(a, min, max) {
    return min <= a && a <= max;
  }

  /**
   * @param {!Array.<*>} array The array to check.
   * @param {*} item The item to look for in the array.
   * @return {boolean} True if the item appears in the array.
   */
  function includes(array, item) {
    return array.indexOf(item) !== -1;
  }

  var floor = Math.floor;

  /**
   * @param {*} o
   * @return {Object}
   */
  function ToDictionary(o) {
    if (o === undefined) return {};
    if (o === Object(o)) return o;
    throw TypeError('Could not convert argument to dictionary');
  }

  /**
   * @param {string} string Input string of UTF-16 code units.
   * @return {!Array.<number>} Code points.
   */
  function stringToCodePoints(string) {
    // https://heycam.github.io/webidl/#dfn-obtain-unicode

    // 1. Let S be the DOMString value.
    var s = String(string);

    // 2. Let n be the length of S.
    var n = s.length;

    // 3. Initialize i to 0.
    var i = 0;

    // 4. Initialize U to be an empty sequence of Unicode characters.
    var u = [];

    // 5. While i < n:
    while (i < n) {

      // 1. Let c be the code unit in S at index i.
      var c = s.charCodeAt(i);

      // 2. Depending on the value of c:

      // c < 0xD800 or c > 0xDFFF
      if (c < 0xD800 || c > 0xDFFF) {
        // Append to U the Unicode character with code point c.
        u.push(c);
      }

      // 0xDC00 ≤ c ≤ 0xDFFF
      else if (0xDC00 <= c && c <= 0xDFFF) {
        // Append to U a U+FFFD REPLACEMENT CHARACTER.
        u.push(0xFFFD);
      }

      // 0xD800 ≤ c ≤ 0xDBFF
      else if (0xD800 <= c && c <= 0xDBFF) {
        // 1. If i = n−1, then append to U a U+FFFD REPLACEMENT
        // CHARACTER.
        if (i === n - 1) {
          u.push(0xFFFD);
        }
        // 2. Otherwise, i < n−1:
        else {
          // 1. Let d be the code unit in S at index i+1.
          var d = s.charCodeAt(i + 1);

          // 2. If 0xDC00 ≤ d ≤ 0xDFFF, then:
          if (0xDC00 <= d && d <= 0xDFFF) {
            // 1. Let a be c & 0x3FF.
            var a = c & 0x3FF;

            // 2. Let b be d & 0x3FF.
            var b = d & 0x3FF;

            // 3. Append to U the Unicode character with code point
            // 2^16+2^10*a+b.
            u.push(0x10000 + (a << 10) + b);

            // 4. Set i to i+1.
            i += 1;
          }

          // 3. Otherwise, d < 0xDC00 or d > 0xDFFF. Append to U a
          // U+FFFD REPLACEMENT CHARACTER.
          else  {
            u.push(0xFFFD);
          }
        }
      }

      // 3. Set i to i+1.
      i += 1;
    }

    // 6. Return U.
    return u;
  }

  /**
   * @param {!Array.<number>} code_points Array of code points.
   * @return {string} string String of UTF-16 code units.
   */
  function codePointsToString(code_points) {
    var s = '';
    for (var i = 0; i < code_points.length; ++i) {
      var cp = code_points[i];
      if (cp <= 0xFFFF) {
        s += String.fromCharCode(cp);
      } else {
        cp -= 0x10000;
        s += String.fromCharCode((cp >> 10) + 0xD800,
                                 (cp & 0x3FF) + 0xDC00);
      }
    }
    return s;
  }


  //
  // Implementation of Encoding specification
  // https://encoding.spec.whatwg.org/
  //

  //
  // 4. Terminology
  //

  /**
   * An ASCII byte is a byte in the range 0x00 to 0x7F, inclusive.
   * @param {number} a The number to test.
   * @return {boolean} True if a is in the range 0x00 to 0x7F, inclusive.
   */
  function isASCIIByte(a) {
    return 0x00 <= a && a <= 0x7F;
  }

  /**
   * An ASCII code point is a code point in the range U+0000 to
   * U+007F, inclusive.
   */
  var isASCIICodePoint = isASCIIByte;


  /**
   * End-of-stream is a special token that signifies no more tokens
   * are in the stream.
   * @const
   */ var end_of_stream = -1;

  /**
   * A stream represents an ordered sequence of tokens.
   *
   * @constructor
   * @param {!(Array.<number>|Uint8Array)} tokens Array of tokens that provide
   * the stream.
   */
  function Stream(tokens) {
    /** @type {!Array.<number>} */
    this.tokens = [].slice.call(tokens);
    // Reversed as push/pop is more efficient than shift/unshift.
    this.tokens.reverse();
  }

  Stream.prototype = {
    /**
     * @return {boolean} True if end-of-stream has been hit.
     */
    endOfStream: function() {
      return !this.tokens.length;
    },

    /**
     * When a token is read from a stream, the first token in the
     * stream must be returned and subsequently removed, and
     * end-of-stream must be returned otherwise.
     *
     * @return {number} Get the next token from the stream, or
     * end_of_stream.
     */
     read: function() {
      if (!this.tokens.length)
        return end_of_stream;
       return this.tokens.pop();
     },

    /**
     * When one or more tokens are prepended to a stream, those tokens
     * must be inserted, in given order, before the first token in the
     * stream.
     *
     * @param {(number|!Array.<number>)} token The token(s) to prepend to the
     * stream.
     */
    prepend: function(token) {
      if (Array.isArray(token)) {
        var tokens = /**@type {!Array.<number>}*/(token);
        while (tokens.length)
          this.tokens.push(tokens.pop());
      } else {
        this.tokens.push(token);
      }
    },

    /**
     * When one or more tokens are pushed to a stream, those tokens
     * must be inserted, in given order, after the last token in the
     * stream.
     *
     * @param {(number|!Array.<number>)} token The tokens(s) to push to the
     * stream.
     */
    push: function(token) {
      if (Array.isArray(token)) {
        var tokens = /**@type {!Array.<number>}*/(token);
        while (tokens.length)
          this.tokens.unshift(tokens.shift());
      } else {
        this.tokens.unshift(token);
      }
    }
  };

  //
  // 5. Encodings
  //

  // 5.1 Encoders and decoders

  /** @const */
  var finished = -1;

  /**
   * @param {boolean} fatal If true, decoding errors raise an exception.
   * @param {number=} opt_code_point Override the standard fallback code point.
   * @return {number} The code point to insert on a decoding error.
   */
  function decoderError(fatal, opt_code_point) {
    if (fatal)
      throw TypeError('Decoder error');
    return opt_code_point || 0xFFFD;
  }

  /**
   * @param {number} code_point The code point that could not be encoded.
   * @return {number} Always throws, no value is actually returned.
   */
  function encoderError(code_point) {
    throw TypeError('The code point ' + code_point + ' could not be encoded.');
  }

  /** @interface */
  function Decoder() {}
  Decoder.prototype = {
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point, or |finished|.
     */
    handler: function(stream, bite) {}
  };

  /** @interface */
  function Encoder() {}
  Encoder.prototype = {
    /**
     * @param {Stream} stream The stream of code points being encoded.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit, or |finished|.
     */
    handler: function(stream, code_point) {}
  };

  // 5.2 Names and labels

  // TODO: Define @typedef for Encoding: {name:string,labels:Array.<string>}
  // https://github.com/google/closure-compiler/issues/247

  /**
   * @param {string} label The encoding label.
   * @return {?{name:string,labels:Array.<string>}}
   */
  function getEncoding(label) {
    // 1. Remove any leading and trailing ASCII whitespace from label.
    label = String(label).trim().toLowerCase();

    // 2. If label is an ASCII case-insensitive match for any of the
    // labels listed in the table below, return the corresponding
    // encoding, and failure otherwise.
    if (Object.prototype.hasOwnProperty.call(label_to_encoding, label)) {
      return label_to_encoding[label];
    }
    return null;
  }

  /**
   * Encodings table: https://encoding.spec.whatwg.org/encodings.json
   * @const
   * @type {!Array.<{
   *          heading: string,
   *          encodings: Array.<{name:string,labels:Array.<string>}>
   *        }>}
   */
  var encodings = [
    {
      "encodings": [
        {
          "labels": [
            "unicode-1-1-utf-8",
            "utf-8",
            "utf8"
          ],
          "name": "UTF-8"
        }
      ],
      "heading": "The Encoding"
    },
    {
      "encodings": [
        {
          "labels": [
            "866",
            "cp866",
            "csibm866",
            "ibm866"
          ],
          "name": "IBM866"
        },
        {
          "labels": [
            "csisolatin2",
            "iso-8859-2",
            "iso-ir-101",
            "iso8859-2",
            "iso88592",
            "iso_8859-2",
            "iso_8859-2:1987",
            "l2",
            "latin2"
          ],
          "name": "ISO-8859-2"
        },
        {
          "labels": [
            "csisolatin3",
            "iso-8859-3",
            "iso-ir-109",
            "iso8859-3",
            "iso88593",
            "iso_8859-3",
            "iso_8859-3:1988",
            "l3",
            "latin3"
          ],
          "name": "ISO-8859-3"
        },
        {
          "labels": [
            "csisolatin4",
            "iso-8859-4",
            "iso-ir-110",
            "iso8859-4",
            "iso88594",
            "iso_8859-4",
            "iso_8859-4:1988",
            "l4",
            "latin4"
          ],
          "name": "ISO-8859-4"
        },
        {
          "labels": [
            "csisolatincyrillic",
            "cyrillic",
            "iso-8859-5",
            "iso-ir-144",
            "iso8859-5",
            "iso88595",
            "iso_8859-5",
            "iso_8859-5:1988"
          ],
          "name": "ISO-8859-5"
        },
        {
          "labels": [
            "arabic",
            "asmo-708",
            "csiso88596e",
            "csiso88596i",
            "csisolatinarabic",
            "ecma-114",
            "iso-8859-6",
            "iso-8859-6-e",
            "iso-8859-6-i",
            "iso-ir-127",
            "iso8859-6",
            "iso88596",
            "iso_8859-6",
            "iso_8859-6:1987"
          ],
          "name": "ISO-8859-6"
        },
        {
          "labels": [
            "csisolatingreek",
            "ecma-118",
            "elot_928",
            "greek",
            "greek8",
            "iso-8859-7",
            "iso-ir-126",
            "iso8859-7",
            "iso88597",
            "iso_8859-7",
            "iso_8859-7:1987",
            "sun_eu_greek"
          ],
          "name": "ISO-8859-7"
        },
        {
          "labels": [
            "csiso88598e",
            "csisolatinhebrew",
            "hebrew",
            "iso-8859-8",
            "iso-8859-8-e",
            "iso-ir-138",
            "iso8859-8",
            "iso88598",
            "iso_8859-8",
            "iso_8859-8:1988",
            "visual"
          ],
          "name": "ISO-8859-8"
        },
        {
          "labels": [
            "csiso88598i",
            "iso-8859-8-i",
            "logical"
          ],
          "name": "ISO-8859-8-I"
        },
        {
          "labels": [
            "csisolatin6",
            "iso-8859-10",
            "iso-ir-157",
            "iso8859-10",
            "iso885910",
            "l6",
            "latin6"
          ],
          "name": "ISO-8859-10"
        },
        {
          "labels": [
            "iso-8859-13",
            "iso8859-13",
            "iso885913"
          ],
          "name": "ISO-8859-13"
        },
        {
          "labels": [
            "iso-8859-14",
            "iso8859-14",
            "iso885914"
          ],
          "name": "ISO-8859-14"
        },
        {
          "labels": [
            "csisolatin9",
            "iso-8859-15",
            "iso8859-15",
            "iso885915",
            "iso_8859-15",
            "l9"
          ],
          "name": "ISO-8859-15"
        },
        {
          "labels": [
            "iso-8859-16"
          ],
          "name": "ISO-8859-16"
        },
        {
          "labels": [
            "cskoi8r",
            "koi",
            "koi8",
            "koi8-r",
            "koi8_r"
          ],
          "name": "KOI8-R"
        },
        {
          "labels": [
            "koi8-ru",
            "koi8-u"
          ],
          "name": "KOI8-U"
        },
        {
          "labels": [
            "csmacintosh",
            "mac",
            "macintosh",
            "x-mac-roman"
          ],
          "name": "macintosh"
        },
        {
          "labels": [
            "dos-874",
            "iso-8859-11",
            "iso8859-11",
            "iso885911",
            "tis-620",
            "windows-874"
          ],
          "name": "windows-874"
        },
        {
          "labels": [
            "cp1250",
            "windows-1250",
            "x-cp1250"
          ],
          "name": "windows-1250"
        },
        {
          "labels": [
            "cp1251",
            "windows-1251",
            "x-cp1251"
          ],
          "name": "windows-1251"
        },
        {
          "labels": [
            "ansi_x3.4-1968",
            "ascii",
            "cp1252",
            "cp819",
            "csisolatin1",
            "ibm819",
            "iso-8859-1",
            "iso-ir-100",
            "iso8859-1",
            "iso88591",
            "iso_8859-1",
            "iso_8859-1:1987",
            "l1",
            "latin1",
            "us-ascii",
            "windows-1252",
            "x-cp1252"
          ],
          "name": "windows-1252"
        },
        {
          "labels": [
            "cp1253",
            "windows-1253",
            "x-cp1253"
          ],
          "name": "windows-1253"
        },
        {
          "labels": [
            "cp1254",
            "csisolatin5",
            "iso-8859-9",
            "iso-ir-148",
            "iso8859-9",
            "iso88599",
            "iso_8859-9",
            "iso_8859-9:1989",
            "l5",
            "latin5",
            "windows-1254",
            "x-cp1254"
          ],
          "name": "windows-1254"
        },
        {
          "labels": [
            "cp1255",
            "windows-1255",
            "x-cp1255"
          ],
          "name": "windows-1255"
        },
        {
          "labels": [
            "cp1256",
            "windows-1256",
            "x-cp1256"
          ],
          "name": "windows-1256"
        },
        {
          "labels": [
            "cp1257",
            "windows-1257",
            "x-cp1257"
          ],
          "name": "windows-1257"
        },
        {
          "labels": [
            "cp1258",
            "windows-1258",
            "x-cp1258"
          ],
          "name": "windows-1258"
        },
        {
          "labels": [
            "x-mac-cyrillic",
            "x-mac-ukrainian"
          ],
          "name": "x-mac-cyrillic"
        }
      ],
      "heading": "Legacy single-byte encodings"
    },
    {
      "encodings": [
        {
          "labels": [
            "chinese",
            "csgb2312",
            "csiso58gb231280",
            "gb2312",
            "gb_2312",
            "gb_2312-80",
            "gbk",
            "iso-ir-58",
            "x-gbk"
          ],
          "name": "GBK"
        },
        {
          "labels": [
            "gb18030"
          ],
          "name": "gb18030"
        }
      ],
      "heading": "Legacy multi-byte Chinese (simplified) encodings"
    },
    {
      "encodings": [
        {
          "labels": [
            "big5",
            "big5-hkscs",
            "cn-big5",
            "csbig5",
            "x-x-big5"
          ],
          "name": "Big5"
        }
      ],
      "heading": "Legacy multi-byte Chinese (traditional) encodings"
    },
    {
      "encodings": [
        {
          "labels": [
            "cseucpkdfmtjapanese",
            "euc-jp",
            "x-euc-jp"
          ],
          "name": "EUC-JP"
        },
        {
          "labels": [
            "csiso2022jp",
            "iso-2022-jp"
          ],
          "name": "ISO-2022-JP"
        },
        {
          "labels": [
            "csshiftjis",
            "ms932",
            "ms_kanji",
            "shift-jis",
            "shift_jis",
            "sjis",
            "windows-31j",
            "x-sjis"
          ],
          "name": "Shift_JIS"
        }
      ],
      "heading": "Legacy multi-byte Japanese encodings"
    },
    {
      "encodings": [
        {
          "labels": [
            "cseuckr",
            "csksc56011987",
            "euc-kr",
            "iso-ir-149",
            "korean",
            "ks_c_5601-1987",
            "ks_c_5601-1989",
            "ksc5601",
            "ksc_5601",
            "windows-949"
          ],
          "name": "EUC-KR"
        }
      ],
      "heading": "Legacy multi-byte Korean encodings"
    },
    {
      "encodings": [
        {
          "labels": [
            "csiso2022kr",
            "hz-gb-2312",
            "iso-2022-cn",
            "iso-2022-cn-ext",
            "iso-2022-kr"
          ],
          "name": "replacement"
        },
        {
          "labels": [
            "utf-16be"
          ],
          "name": "UTF-16BE"
        },
        {
          "labels": [
            "utf-16",
            "utf-16le"
          ],
          "name": "UTF-16LE"
        },
        {
          "labels": [
            "x-user-defined"
          ],
          "name": "x-user-defined"
        }
      ],
      "heading": "Legacy miscellaneous encodings"
    }
  ];

  // Label to encoding registry.
  /** @type {Object.<string,{name:string,labels:Array.<string>}>} */
  var label_to_encoding = {};
  encodings.forEach(function(category) {
    category.encodings.forEach(function(encoding) {
      encoding.labels.forEach(function(label) {
        label_to_encoding[label] = encoding;
      });
    });
  });

  // Registry of of encoder/decoder factories, by encoding name.
  /** @type {Object.<string, function({fatal:boolean}): Encoder>} */
  var encoders = {};
  /** @type {Object.<string, function({fatal:boolean}): Decoder>} */
  var decoders = {};

  //
  // 6. Indexes
  //

  /**
   * @param {number} pointer The |pointer| to search for.
   * @param {(!Array.<?number>|undefined)} index The |index| to search within.
   * @return {?number} The code point corresponding to |pointer| in |index|,
   *     or null if |code point| is not in |index|.
   */
  function indexCodePointFor(pointer, index) {
    if (!index) return null;
    return index[pointer] || null;
  }

  /**
   * @param {number} code_point The |code point| to search for.
   * @param {!Array.<?number>} index The |index| to search within.
   * @return {?number} The first pointer corresponding to |code point| in
   *     |index|, or null if |code point| is not in |index|.
   */
  function indexPointerFor(code_point, index) {
    var pointer = index.indexOf(code_point);
    return pointer === -1 ? null : pointer;
  }

  /**
   * @param {string} name Name of the index.
   * @return {(!Array.<number>|!Array.<Array.<number>>)}
   *  */
  function index(name) {
    if (!('encoding-indexes' in global)) {
      throw Error("Indexes missing." +
                  " Did you forget to include encoding-indexes.js first?");
    }
    return global['encoding-indexes'][name];
  }

  /**
   * @param {number} pointer The |pointer| to search for in the gb18030 index.
   * @return {?number} The code point corresponding to |pointer| in |index|,
   *     or null if |code point| is not in the gb18030 index.
   */
  function indexGB18030RangesCodePointFor(pointer) {
    // 1. If pointer is greater than 39419 and less than 189000, or
    // pointer is greater than 1237575, return null.
    if ((pointer > 39419 && pointer < 189000) || (pointer > 1237575))
      return null;

    // 2. If pointer is 7457, return code point U+E7C7.
    if (pointer === 7457) return 0xE7C7;

    // 3. Let offset be the last pointer in index gb18030 ranges that
    // is equal to or less than pointer and let code point offset be
    // its corresponding code point.
    var offset = 0;
    var code_point_offset = 0;
    var idx = index('gb18030-ranges');
    var i;
    for (i = 0; i < idx.length; ++i) {
      /** @type {!Array.<number>} */
      var entry = idx[i];
      if (entry[0] <= pointer) {
        offset = entry[0];
        code_point_offset = entry[1];
      } else {
        break;
      }
    }

    // 4. Return a code point whose value is code point offset +
    // pointer − offset.
    return code_point_offset + pointer - offset;
  }

  /**
   * @param {number} code_point The |code point| to locate in the gb18030 index.
   * @return {number} The first pointer corresponding to |code point| in the
   *     gb18030 index.
   */
  function indexGB18030RangesPointerFor(code_point) {
    // 1. If code point is U+E7C7, return pointer 7457.
    if (code_point === 0xE7C7) return 7457;

    // 2. Let offset be the last code point in index gb18030 ranges
    // that is equal to or less than code point and let pointer offset
    // be its corresponding pointer.
    var offset = 0;
    var pointer_offset = 0;
    var idx = index('gb18030-ranges');
    var i;
    for (i = 0; i < idx.length; ++i) {
      /** @type {!Array.<number>} */
      var entry = idx[i];
      if (entry[1] <= code_point) {
        offset = entry[1];
        pointer_offset = entry[0];
      } else {
        break;
      }
    }

    // 3. Return a pointer whose value is pointer offset + code point
    // − offset.
    return pointer_offset + code_point - offset;
  }

  /**
   * @param {number} code_point The |code_point| to search for in the Shift_JIS
   *     index.
   * @return {?number} The code point corresponding to |pointer| in |index|,
   *     or null if |code point| is not in the Shift_JIS index.
   */
  function indexShiftJISPointerFor(code_point) {
    // 1. Let index be index jis0208 excluding all entries whose
    // pointer is in the range 8272 to 8835, inclusive.
    shift_jis_index = shift_jis_index ||
      index('jis0208').map(function(code_point, pointer) {
        return inRange(pointer, 8272, 8835) ? null : code_point;
      });
    var index_ = shift_jis_index;

    // 2. Return the index pointer for code point in index.
    return index_.indexOf(code_point);
  }
  var shift_jis_index;

  /**
   * @param {number} code_point The |code_point| to search for in the big5
   *     index.
   * @return {?number} The code point corresponding to |pointer| in |index|,
   *     or null if |code point| is not in the big5 index.
   */
  function indexBig5PointerFor(code_point) {
    // 1. Let index be index Big5 excluding all entries whose pointer
    big5_index_no_hkscs = big5_index_no_hkscs ||
      index('big5').map(function(code_point, pointer) {
        return (pointer < (0xA1 - 0x81) * 157) ? null : code_point;
      });
    var index_ = big5_index_no_hkscs;

    // 2. If code point is U+2550, U+255E, U+2561, U+256A, U+5341, or
    // U+5345, return the last pointer corresponding to code point in
    // index.
    if (code_point === 0x2550 || code_point === 0x255E ||
        code_point === 0x2561 || code_point === 0x256A ||
        code_point === 0x5341 || code_point === 0x5345) {
      return index_.lastIndexOf(code_point);
    }

    // 3. Return the index pointer for code point in index.
    return indexPointerFor(code_point, index_);
  }
  var big5_index_no_hkscs;

  //
  // 8. API
  //

  /** @const */ var DEFAULT_ENCODING = 'utf-8';

  // 8.1 Interface TextDecoder

  /**
   * @constructor
   * @param {string=} label The label of the encoding;
   *     defaults to 'utf-8'.
   * @param {Object=} options
   */
  function TextDecoder(label, options) {
    // Web IDL conventions
    if (!(this instanceof TextDecoder))
      throw TypeError('Called as a function. Did you forget \'new\'?');
    label = label !== undefined ? String(label) : DEFAULT_ENCODING;
    options = ToDictionary(options);

    // A TextDecoder object has an associated encoding, decoder,
    // stream, ignore BOM flag (initially unset), BOM seen flag
    // (initially unset), error mode (initially replacement), and do
    // not flush flag (initially unset).

    /** @private */
    this._encoding = null;
    /** @private @type {?Decoder} */
    this._decoder = null;
    /** @private @type {boolean} */
    this._ignoreBOM = false;
    /** @private @type {boolean} */
    this._BOMseen = false;
    /** @private @type {string} */
    this._error_mode = 'replacement';
    /** @private @type {boolean} */
    this._do_not_flush = false;


    // 1. Let encoding be the result of getting an encoding from
    // label.
    var encoding = getEncoding(label);

    // 2. If encoding is failure or replacement, throw a RangeError.
    if (encoding === null || encoding.name === 'replacement')
      throw RangeError('Unknown encoding: ' + label);
    if (!decoders[encoding.name]) {
      throw Error('Decoder not present.' +
                  ' Did you forget to include encoding-indexes.js first?');
    }

    // 3. Let dec be a new TextDecoder object.
    var dec = this;

    // 4. Set dec's encoding to encoding.
    dec._encoding = encoding;

    // 5. If options's fatal member is true, set dec's error mode to
    // fatal.
    if (Boolean(options['fatal']))
      dec._error_mode = 'fatal';

    // 6. If options's ignoreBOM member is true, set dec's ignore BOM
    // flag.
    if (Boolean(options['ignoreBOM']))
      dec._ignoreBOM = true;

    // For pre-ES5 runtimes:
    if (!Object.defineProperty) {
      this.encoding = dec._encoding.name.toLowerCase();
      this.fatal = dec._error_mode === 'fatal';
      this.ignoreBOM = dec._ignoreBOM;
    }

    // 7. Return dec.
    return dec;
  }

  if (Object.defineProperty) {
    // The encoding attribute's getter must return encoding's name.
    Object.defineProperty(TextDecoder.prototype, 'encoding', {
      /** @this {TextDecoder} */
      get: function() { return this._encoding.name.toLowerCase(); }
    });

    // The fatal attribute's getter must return true if error mode
    // is fatal, and false otherwise.
    Object.defineProperty(TextDecoder.prototype, 'fatal', {
      /** @this {TextDecoder} */
      get: function() { return this._error_mode === 'fatal'; }
    });

    // The ignoreBOM attribute's getter must return true if ignore
    // BOM flag is set, and false otherwise.
    Object.defineProperty(TextDecoder.prototype, 'ignoreBOM', {
      /** @this {TextDecoder} */
      get: function() { return this._ignoreBOM; }
    });
  }

  /**
   * @param {BufferSource=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */
  TextDecoder.prototype.decode = function decode(input, options) {
    var bytes;
    if (typeof input === 'object' && input instanceof ArrayBuffer) {
      bytes = new Uint8Array(input);
    } else if (typeof input === 'object' && 'buffer' in input &&
               input.buffer instanceof ArrayBuffer) {
      bytes = new Uint8Array(input.buffer,
                             input.byteOffset,
                             input.byteLength);
    } else {
      bytes = new Uint8Array(0);
    }

    options = ToDictionary(options);

    // 1. If the do not flush flag is unset, set decoder to a new
    // encoding's decoder, set stream to a new stream, and unset the
    // BOM seen flag.
    if (!this._do_not_flush) {
      this._decoder = decoders[this._encoding.name]({
        fatal: this._error_mode === 'fatal'});
      this._BOMseen = false;
    }

    // 2. If options's stream is true, set the do not flush flag, and
    // unset the do not flush flag otherwise.
    this._do_not_flush = Boolean(options['stream']);

    // 3. If input is given, push a copy of input to stream.
    // TODO: Align with spec algorithm - maintain stream on instance.
    var input_stream = new Stream(bytes);

    // 4. Let output be a new stream.
    var output = [];

    /** @type {?(number|!Array.<number>)} */
    var result;

    // 5. While true:
    while (true) {
      // 1. Let token be the result of reading from stream.
      var token = input_stream.read();

      // 2. If token is end-of-stream and the do not flush flag is
      // set, return output, serialized.
      // TODO: Align with spec algorithm.
      if (token === end_of_stream)
        break;

      // 3. Otherwise, run these subsubsteps:

      // 1. Let result be the result of processing token for decoder,
      // stream, output, and error mode.
      result = this._decoder.handler(input_stream, token);

      // 2. If result is finished, return output, serialized.
      if (result === finished)
        break;

      if (result !== null) {
        if (Array.isArray(result))
          output.push.apply(output, /**@type {!Array.<number>}*/(result));
        else
          output.push(result);
      }

      // 3. Otherwise, if result is error, throw a TypeError.
      // (Thrown in handler)

      // 4. Otherwise, do nothing.
    }
    // TODO: Align with spec algorithm.
    if (!this._do_not_flush) {
      do {
        result = this._decoder.handler(input_stream, input_stream.read());
        if (result === finished)
          break;
        if (result === null)
          continue;
        if (Array.isArray(result))
          output.push.apply(output, /**@type {!Array.<number>}*/(result));
        else
          output.push(result);
      } while (!input_stream.endOfStream());
      this._decoder = null;
    }

    // A TextDecoder object also has an associated serialize stream
    // algorithm...
    /**
     * @param {!Array.<number>} stream
     * @return {string}
     * @this {TextDecoder}
     */
    function serializeStream(stream) {
      // 1. Let token be the result of reading from stream.
      // (Done in-place on array, rather than as a stream)

      // 2. If encoding is UTF-8, UTF-16BE, or UTF-16LE, and ignore
      // BOM flag and BOM seen flag are unset, run these subsubsteps:
      if (includes(['UTF-8', 'UTF-16LE', 'UTF-16BE'], this._encoding.name) &&
          !this._ignoreBOM && !this._BOMseen) {
        if (stream.length > 0 && stream[0] === 0xFEFF) {
          // 1. If token is U+FEFF, set BOM seen flag.
          this._BOMseen = true;
          stream.shift();
        } else if (stream.length > 0) {
          // 2. Otherwise, if token is not end-of-stream, set BOM seen
          // flag and append token to stream.
          this._BOMseen = true;
        } else {
          // 3. Otherwise, if token is not end-of-stream, append token
          // to output.
          // (no-op)
        }
      }
      // 4. Otherwise, return output.
      return codePointsToString(stream);
    }

    return serializeStream.call(this, output);
  };

  // 8.2 Interface TextEncoder

  /**
   * @constructor
   * @param {string=} label The label of the encoding. NONSTANDARD.
   * @param {Object=} options NONSTANDARD.
   */
  function TextEncoder(label, options) {
    // Web IDL conventions
    if (!(this instanceof TextEncoder))
      throw TypeError('Called as a function. Did you forget \'new\'?');
    options = ToDictionary(options);

    // A TextEncoder object has an associated encoding and encoder.

    /** @private */
    this._encoding = null;
    /** @private @type {?Encoder} */
    this._encoder = null;

    // Non-standard
    /** @private @type {boolean} */
    this._do_not_flush = false;
    /** @private @type {string} */
    this._fatal = Boolean(options['fatal']) ? 'fatal' : 'replacement';

    // 1. Let enc be a new TextEncoder object.
    var enc = this;

    // 2. Set enc's encoding to UTF-8's encoder.
    if (Boolean(options['NONSTANDARD_allowLegacyEncoding'])) {
      // NONSTANDARD behavior.
      label = label !== undefined ? String(label) : DEFAULT_ENCODING;
      var encoding = getEncoding(label);
      if (encoding === null || encoding.name === 'replacement')
        throw RangeError('Unknown encoding: ' + label);
      if (!encoders[encoding.name]) {
        throw Error('Encoder not present.' +
                    ' Did you forget to include encoding-indexes.js first?');
      }
      enc._encoding = encoding;
    } else {
      // Standard behavior.
      enc._encoding = getEncoding('utf-8');

      if (label !== undefined && 'console' in global) {
        console.warn('TextEncoder constructor called with encoding label, '
                     + 'which is ignored.');
      }
    }

    // For pre-ES5 runtimes:
    if (!Object.defineProperty)
      this.encoding = enc._encoding.name.toLowerCase();

    // 3. Return enc.
    return enc;
  }

  if (Object.defineProperty) {
    // The encoding attribute's getter must return encoding's name.
    Object.defineProperty(TextEncoder.prototype, 'encoding', {
      /** @this {TextEncoder} */
      get: function() { return this._encoding.name.toLowerCase(); }
    });
  }

  /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {!Uint8Array} Encoded bytes, as a Uint8Array.
   */
  TextEncoder.prototype.encode = function encode(opt_string, options) {
    opt_string = opt_string === undefined ? '' : String(opt_string);
    options = ToDictionary(options);

    // NOTE: This option is nonstandard. None of the encodings
    // permitted for encoding (i.e. UTF-8, UTF-16) are stateful when
    // the input is a USVString so streaming is not necessary.
    if (!this._do_not_flush)
      this._encoder = encoders[this._encoding.name]({
        fatal: this._fatal === 'fatal'});
    this._do_not_flush = Boolean(options['stream']);

    // 1. Convert input to a stream.
    var input = new Stream(stringToCodePoints(opt_string));

    // 2. Let output be a new stream
    var output = [];

    /** @type {?(number|!Array.<number>)} */
    var result;
    // 3. While true, run these substeps:
    while (true) {
      // 1. Let token be the result of reading from input.
      var token = input.read();
      if (token === end_of_stream)
        break;
      // 2. Let result be the result of processing token for encoder,
      // input, output.
      result = this._encoder.handler(input, token);
      if (result === finished)
        break;
      if (Array.isArray(result))
        output.push.apply(output, /**@type {!Array.<number>}*/(result));
      else
        output.push(result);
    }
    // TODO: Align with spec algorithm.
    if (!this._do_not_flush) {
      while (true) {
        result = this._encoder.handler(input, input.read());
        if (result === finished)
          break;
        if (Array.isArray(result))
          output.push.apply(output, /**@type {!Array.<number>}*/(result));
        else
          output.push(result);
      }
      this._encoder = null;
    }
    // 3. If result is finished, convert output into a byte sequence,
    // and then return a Uint8Array object wrapping an ArrayBuffer
    // containing output.
    return new Uint8Array(output);
  };


  //
  // 9. The encoding
  //

  // 9.1 utf-8

  // 9.1.1 utf-8 decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function UTF8Decoder(options) {
    var fatal = options.fatal;

    // utf-8's decoder's has an associated utf-8 code point, utf-8
    // bytes seen, and utf-8 bytes needed (all initially 0), a utf-8
    // lower boundary (initially 0x80), and a utf-8 upper boundary
    // (initially 0xBF).
    var /** @type {number} */ utf8_code_point = 0,
        /** @type {number} */ utf8_bytes_seen = 0,
        /** @type {number} */ utf8_bytes_needed = 0,
        /** @type {number} */ utf8_lower_boundary = 0x80,
        /** @type {number} */ utf8_upper_boundary = 0xBF;

    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream and utf-8 bytes needed is not 0,
      // set utf-8 bytes needed to 0 and return error.
      if (bite === end_of_stream && utf8_bytes_needed !== 0) {
        utf8_bytes_needed = 0;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream, return finished.
      if (bite === end_of_stream)
        return finished;

      // 3. If utf-8 bytes needed is 0, based on byte:
      if (utf8_bytes_needed === 0) {

        // 0x00 to 0x7F
        if (inRange(bite, 0x00, 0x7F)) {
          // Return a code point whose value is byte.
          return bite;
        }

        // 0xC2 to 0xDF
        else if (inRange(bite, 0xC2, 0xDF)) {
          // 1. Set utf-8 bytes needed to 1.
          utf8_bytes_needed = 1;

          // 2. Set UTF-8 code point to byte & 0x1F.
          utf8_code_point = bite & 0x1F;
        }

        // 0xE0 to 0xEF
        else if (inRange(bite, 0xE0, 0xEF)) {
          // 1. If byte is 0xE0, set utf-8 lower boundary to 0xA0.
          if (bite === 0xE0)
            utf8_lower_boundary = 0xA0;
          // 2. If byte is 0xED, set utf-8 upper boundary to 0x9F.
          if (bite === 0xED)
            utf8_upper_boundary = 0x9F;
          // 3. Set utf-8 bytes needed to 2.
          utf8_bytes_needed = 2;
          // 4. Set UTF-8 code point to byte & 0xF.
          utf8_code_point = bite & 0xF;
        }

        // 0xF0 to 0xF4
        else if (inRange(bite, 0xF0, 0xF4)) {
          // 1. If byte is 0xF0, set utf-8 lower boundary to 0x90.
          if (bite === 0xF0)
            utf8_lower_boundary = 0x90;
          // 2. If byte is 0xF4, set utf-8 upper boundary to 0x8F.
          if (bite === 0xF4)
            utf8_upper_boundary = 0x8F;
          // 3. Set utf-8 bytes needed to 3.
          utf8_bytes_needed = 3;
          // 4. Set UTF-8 code point to byte & 0x7.
          utf8_code_point = bite & 0x7;
        }

        // Otherwise
        else {
          // Return error.
          return decoderError(fatal);
        }

        // Return continue.
        return null;
      }

      // 4. If byte is not in the range utf-8 lower boundary to utf-8
      // upper boundary, inclusive, run these substeps:
      if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {

        // 1. Set utf-8 code point, utf-8 bytes needed, and utf-8
        // bytes seen to 0, set utf-8 lower boundary to 0x80, and set
        // utf-8 upper boundary to 0xBF.
        utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
        utf8_lower_boundary = 0x80;
        utf8_upper_boundary = 0xBF;

        // 2. Prepend byte to stream.
        stream.prepend(bite);

        // 3. Return error.
        return decoderError(fatal);
      }

      // 5. Set utf-8 lower boundary to 0x80 and utf-8 upper boundary
      // to 0xBF.
      utf8_lower_boundary = 0x80;
      utf8_upper_boundary = 0xBF;

      // 6. Set UTF-8 code point to (UTF-8 code point << 6) | (byte &
      // 0x3F)
      utf8_code_point = (utf8_code_point << 6) | (bite & 0x3F);

      // 7. Increase utf-8 bytes seen by one.
      utf8_bytes_seen += 1;

      // 8. If utf-8 bytes seen is not equal to utf-8 bytes needed,
      // continue.
      if (utf8_bytes_seen !== utf8_bytes_needed)
        return null;

      // 9. Let code point be utf-8 code point.
      var code_point = utf8_code_point;

      // 10. Set utf-8 code point, utf-8 bytes needed, and utf-8 bytes
      // seen to 0.
      utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;

      // 11. Return a code point whose value is code point.
      return code_point;
    };
  }

  // 9.1.2 utf-8 encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function UTF8Encoder(options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
        return code_point;

      // 3. Set count and offset based on the range code point is in:
      var count, offset;
      // U+0080 to U+07FF, inclusive:
      if (inRange(code_point, 0x0080, 0x07FF)) {
        // 1 and 0xC0
        count = 1;
        offset = 0xC0;
      }
      // U+0800 to U+FFFF, inclusive:
      else if (inRange(code_point, 0x0800, 0xFFFF)) {
        // 2 and 0xE0
        count = 2;
        offset = 0xE0;
      }
      // U+10000 to U+10FFFF, inclusive:
      else if (inRange(code_point, 0x10000, 0x10FFFF)) {
        // 3 and 0xF0
        count = 3;
        offset = 0xF0;
      }

      // 4. Let bytes be a byte sequence whose first byte is (code
      // point >> (6 × count)) + offset.
      var bytes = [(code_point >> (6 * count)) + offset];

      // 5. Run these substeps while count is greater than 0:
      while (count > 0) {

        // 1. Set temp to code point >> (6 × (count − 1)).
        var temp = code_point >> (6 * (count - 1));

        // 2. Append to bytes 0x80 | (temp & 0x3F).
        bytes.push(0x80 | (temp & 0x3F));

        // 3. Decrease count by one.
        count -= 1;
      }

      // 6. Return bytes bytes, in order.
      return bytes;
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['UTF-8'] = function(options) {
    return new UTF8Encoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['UTF-8'] = function(options) {
    return new UTF8Decoder(options);
  };

  //
  // 10. Legacy single-byte encodings
  //

  // 10.1 single-byte decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {!Array.<number>} index The encoding index.
   * @param {{fatal: boolean}} options
   */
  function SingleByteDecoder(index, options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream, return finished.
      if (bite === end_of_stream)
        return finished;

      // 2. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
        return bite;

      // 3. Let code point be the index code point for byte − 0x80 in
      // index single-byte.
      var code_point = index[bite - 0x80];

      // 4. If code point is null, return error.
      if (code_point === null)
        return decoderError(fatal);

      // 5. Return a code point whose value is code point.
      return code_point;
    };
  }

  // 10.2 single-byte encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {!Array.<?number>} index The encoding index.
   * @param {{fatal: boolean}} options
   */
  function SingleByteEncoder(index, options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
        return code_point;

      // 3. Let pointer be the index pointer for code point in index
      // single-byte.
      var pointer = indexPointerFor(code_point, index);

      // 4. If pointer is null, return error with code point.
      if (pointer === null)
        encoderError(code_point);

      // 5. Return a byte whose value is pointer + 0x80.
      return pointer + 0x80;
    };
  }

  (function() {
    if (!('encoding-indexes' in global))
      return;
    encodings.forEach(function(category) {
      if (category.heading !== 'Legacy single-byte encodings')
        return;
      category.encodings.forEach(function(encoding) {
        var name = encoding.name;
        var idx = index(name.toLowerCase());
        /** @param {{fatal: boolean}} options */
        decoders[name] = function(options) {
          return new SingleByteDecoder(idx, options);
        };
        /** @param {{fatal: boolean}} options */
        encoders[name] = function(options) {
          return new SingleByteEncoder(idx, options);
        };
      });
    });
  }());

  //
  // 11. Legacy multi-byte Chinese (simplified) encodings
  //

  // 11.1 gbk

  // 11.1.1 gbk decoder
  // gbk's decoder is gb18030's decoder.
  /** @param {{fatal: boolean}} options */
  decoders['GBK'] = function(options) {
    return new GB18030Decoder(options);
  };

  // 11.1.2 gbk encoder
  // gbk's encoder is gb18030's encoder with its gbk flag set.
  /** @param {{fatal: boolean}} options */
  encoders['GBK'] = function(options) {
    return new GB18030Encoder(options, true);
  };

  // 11.2 gb18030

  // 11.2.1 gb18030 decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function GB18030Decoder(options) {
    var fatal = options.fatal;
    // gb18030's decoder has an associated gb18030 first, gb18030
    // second, and gb18030 third (all initially 0x00).
    var /** @type {number} */ gb18030_first = 0x00,
        /** @type {number} */ gb18030_second = 0x00,
        /** @type {number} */ gb18030_third = 0x00;
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream and gb18030 first, gb18030
      // second, and gb18030 third are 0x00, return finished.
      if (bite === end_of_stream && gb18030_first === 0x00 &&
          gb18030_second === 0x00 && gb18030_third === 0x00) {
        return finished;
      }
      // 2. If byte is end-of-stream, and gb18030 first, gb18030
      // second, or gb18030 third is not 0x00, set gb18030 first,
      // gb18030 second, and gb18030 third to 0x00, and return error.
      if (bite === end_of_stream &&
          (gb18030_first !== 0x00 || gb18030_second !== 0x00 ||
           gb18030_third !== 0x00)) {
        gb18030_first = 0x00;
        gb18030_second = 0x00;
        gb18030_third = 0x00;
        decoderError(fatal);
      }
      var code_point;
      // 3. If gb18030 third is not 0x00, run these substeps:
      if (gb18030_third !== 0x00) {
        // 1. Let code point be null.
        code_point = null;
        // 2. If byte is in the range 0x30 to 0x39, inclusive, set
        // code point to the index gb18030 ranges code point for
        // (((gb18030 first − 0x81) × 10 + gb18030 second − 0x30) ×
        // 126 + gb18030 third − 0x81) × 10 + byte − 0x30.
        if (inRange(bite, 0x30, 0x39)) {
          code_point = indexGB18030RangesCodePointFor(
              (((gb18030_first - 0x81) * 10 + gb18030_second - 0x30) * 126 +
               gb18030_third - 0x81) * 10 + bite - 0x30);
        }

        // 3. Let buffer be a byte sequence consisting of gb18030
        // second, gb18030 third, and byte, in order.
        var buffer = [gb18030_second, gb18030_third, bite];

        // 4. Set gb18030 first, gb18030 second, and gb18030 third to
        // 0x00.
        gb18030_first = 0x00;
        gb18030_second = 0x00;
        gb18030_third = 0x00;

        // 5. If code point is null, prepend buffer to stream and
        // return error.
        if (code_point === null) {
          stream.prepend(buffer);
          return decoderError(fatal);
        }

        // 6. Return a code point whose value is code point.
        return code_point;
      }

      // 4. If gb18030 second is not 0x00, run these substeps:
      if (gb18030_second !== 0x00) {

        // 1. If byte is in the range 0x81 to 0xFE, inclusive, set
        // gb18030 third to byte and return continue.
        if (inRange(bite, 0x81, 0xFE)) {
          gb18030_third = bite;
          return null;
        }

        // 2. Prepend gb18030 second followed by byte to stream, set
        // gb18030 first and gb18030 second to 0x00, and return error.
        stream.prepend([gb18030_second, bite]);
        gb18030_first = 0x00;
        gb18030_second = 0x00;
        return decoderError(fatal);
      }

      // 5. If gb18030 first is not 0x00, run these substeps:
      if (gb18030_first !== 0x00) {

        // 1. If byte is in the range 0x30 to 0x39, inclusive, set
        // gb18030 second to byte and return continue.
        if (inRange(bite, 0x30, 0x39)) {
          gb18030_second = bite;
          return null;
        }

        // 2. Let lead be gb18030 first, let pointer be null, and set
        // gb18030 first to 0x00.
        var lead = gb18030_first;
        var pointer = null;
        gb18030_first = 0x00;

        // 3. Let offset be 0x40 if byte is less than 0x7F and 0x41
        // otherwise.
        var offset = bite < 0x7F ? 0x40 : 0x41;

        // 4. If byte is in the range 0x40 to 0x7E, inclusive, or 0x80
        // to 0xFE, inclusive, set pointer to (lead − 0x81) × 190 +
        // (byte − offset).
        if (inRange(bite, 0x40, 0x7E) || inRange(bite, 0x80, 0xFE))
          pointer = (lead - 0x81) * 190 + (bite - offset);

        // 5. Let code point be null if pointer is null and the index
        // code point for pointer in index gb18030 otherwise.
        code_point = pointer === null ? null :
            indexCodePointFor(pointer, index('gb18030'));

        // 6. If code point is null and byte is an ASCII byte, prepend
        // byte to stream.
        if (code_point === null && isASCIIByte(bite))
          stream.prepend(bite);

        // 7. If code point is null, return error.
        if (code_point === null)
          return decoderError(fatal);

        // 8. Return a code point whose value is code point.
        return code_point;
      }

      // 6. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
        return bite;

      // 7. If byte is 0x80, return code point U+20AC.
      if (bite === 0x80)
        return 0x20AC;

      // 8. If byte is in the range 0x81 to 0xFE, inclusive, set
      // gb18030 first to byte and return continue.
      if (inRange(bite, 0x81, 0xFE)) {
        gb18030_first = bite;
        return null;
      }

      // 9. Return error.
      return decoderError(fatal);
    };
  }

  // 11.2.2 gb18030 encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   * @param {boolean=} gbk_flag
   */
  function GB18030Encoder(options, gbk_flag) {
    var fatal = options.fatal;
    // gb18030's decoder has an associated gbk flag (initially unset).
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
        return code_point;

      // 3. If code point is U+E5E5, return error with code point.
      if (code_point === 0xE5E5)
        return encoderError(code_point);

      // 4. If the gbk flag is set and code point is U+20AC, return
      // byte 0x80.
      if (gbk_flag && code_point === 0x20AC)
        return 0x80;

      // 5. Let pointer be the index pointer for code point in index
      // gb18030.
      var pointer = indexPointerFor(code_point, index('gb18030'));

      // 6. If pointer is not null, run these substeps:
      if (pointer !== null) {

        // 1. Let lead be floor(pointer / 190) + 0x81.
        var lead = floor(pointer / 190) + 0x81;

        // 2. Let trail be pointer % 190.
        var trail = pointer % 190;

        // 3. Let offset be 0x40 if trail is less than 0x3F and 0x41 otherwise.
        var offset = trail < 0x3F ? 0x40 : 0x41;

        // 4. Return two bytes whose values are lead and trail + offset.
        return [lead, trail + offset];
      }

      // 7. If gbk flag is set, return error with code point.
      if (gbk_flag)
        return encoderError(code_point);

      // 8. Set pointer to the index gb18030 ranges pointer for code
      // point.
      pointer = indexGB18030RangesPointerFor(code_point);

      // 9. Let byte1 be floor(pointer / 10 / 126 / 10).
      var byte1 = floor(pointer / 10 / 126 / 10);

      // 10. Set pointer to pointer − byte1 × 10 × 126 × 10.
      pointer = pointer - byte1 * 10 * 126 * 10;

      // 11. Let byte2 be floor(pointer / 10 / 126).
      var byte2 = floor(pointer / 10 / 126);

      // 12. Set pointer to pointer − byte2 × 10 × 126.
      pointer = pointer - byte2 * 10 * 126;

      // 13. Let byte3 be floor(pointer / 10).
      var byte3 = floor(pointer / 10);

      // 14. Let byte4 be pointer − byte3 × 10.
      var byte4 = pointer - byte3 * 10;

      // 15. Return four bytes whose values are byte1 + 0x81, byte2 +
      // 0x30, byte3 + 0x81, byte4 + 0x30.
      return [byte1 + 0x81,
              byte2 + 0x30,
              byte3 + 0x81,
              byte4 + 0x30];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['gb18030'] = function(options) {
    return new GB18030Encoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['gb18030'] = function(options) {
    return new GB18030Decoder(options);
  };


  //
  // 12. Legacy multi-byte Chinese (traditional) encodings
  //

  // 12.1 Big5

  // 12.1.1 Big5 decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function Big5Decoder(options) {
    var fatal = options.fatal;
    // Big5's decoder has an associated Big5 lead (initially 0x00).
    var /** @type {number} */ Big5_lead = 0x00;

    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream and Big5 lead is not 0x00, set
      // Big5 lead to 0x00 and return error.
      if (bite === end_of_stream && Big5_lead !== 0x00) {
        Big5_lead = 0x00;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and Big5 lead is 0x00, return
      // finished.
      if (bite === end_of_stream && Big5_lead === 0x00)
        return finished;

      // 3. If Big5 lead is not 0x00, let lead be Big5 lead, let
      // pointer be null, set Big5 lead to 0x00, and then run these
      // substeps:
      if (Big5_lead !== 0x00) {
        var lead = Big5_lead;
        var pointer = null;
        Big5_lead = 0x00;

        // 1. Let offset be 0x40 if byte is less than 0x7F and 0x62
        // otherwise.
        var offset = bite < 0x7F ? 0x40 : 0x62;

        // 2. If byte is in the range 0x40 to 0x7E, inclusive, or 0xA1
        // to 0xFE, inclusive, set pointer to (lead − 0x81) × 157 +
        // (byte − offset).
        if (inRange(bite, 0x40, 0x7E) || inRange(bite, 0xA1, 0xFE))
          pointer = (lead - 0x81) * 157 + (bite - offset);

        // 3. If there is a row in the table below whose first column
        // is pointer, return the two code points listed in its second
        // column
        // Pointer | Code points
        // --------+--------------
        // 1133    | U+00CA U+0304
        // 1135    | U+00CA U+030C
        // 1164    | U+00EA U+0304
        // 1166    | U+00EA U+030C
        switch (pointer) {
          case 1133: return [0x00CA, 0x0304];
          case 1135: return [0x00CA, 0x030C];
          case 1164: return [0x00EA, 0x0304];
          case 1166: return [0x00EA, 0x030C];
        }

        // 4. Let code point be null if pointer is null and the index
        // code point for pointer in index Big5 otherwise.
        var code_point = (pointer === null) ? null :
            indexCodePointFor(pointer, index('big5'));

        // 5. If code point is null and byte is an ASCII byte, prepend
        // byte to stream.
        if (code_point === null && isASCIIByte(bite))
          stream.prepend(bite);

        // 6. If code point is null, return error.
        if (code_point === null)
          return decoderError(fatal);

        // 7. Return a code point whose value is code point.
        return code_point;
      }

      // 4. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
        return bite;

      // 5. If byte is in the range 0x81 to 0xFE, inclusive, set Big5
      // lead to byte and return continue.
      if (inRange(bite, 0x81, 0xFE)) {
        Big5_lead = bite;
        return null;
      }

      // 6. Return error.
      return decoderError(fatal);
    };
  }

  // 12.1.2 Big5 encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function Big5Encoder(options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
        return code_point;

      // 3. Let pointer be the index Big5 pointer for code point.
      var pointer = indexBig5PointerFor(code_point);

      // 4. If pointer is null, return error with code point.
      if (pointer === null)
        return encoderError(code_point);

      // 5. Let lead be floor(pointer / 157) + 0x81.
      var lead = floor(pointer / 157) + 0x81;

      // 6. If lead is less than 0xA1, return error with code point.
      if (lead < 0xA1)
        return encoderError(code_point);

      // 7. Let trail be pointer % 157.
      var trail = pointer % 157;

      // 8. Let offset be 0x40 if trail is less than 0x3F and 0x62
      // otherwise.
      var offset = trail < 0x3F ? 0x40 : 0x62;

      // Return two bytes whose values are lead and trail + offset.
      return [lead, trail + offset];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['Big5'] = function(options) {
    return new Big5Encoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['Big5'] = function(options) {
    return new Big5Decoder(options);
  };


  //
  // 13. Legacy multi-byte Japanese encodings
  //

  // 13.1 euc-jp

  // 13.1.1 euc-jp decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function EUCJPDecoder(options) {
    var fatal = options.fatal;

    // euc-jp's decoder has an associated euc-jp jis0212 flag
    // (initially unset) and euc-jp lead (initially 0x00).
    var /** @type {boolean} */ eucjp_jis0212_flag = false,
        /** @type {number} */ eucjp_lead = 0x00;

    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream and euc-jp lead is not 0x00, set
      // euc-jp lead to 0x00, and return error.
      if (bite === end_of_stream && eucjp_lead !== 0x00) {
        eucjp_lead = 0x00;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and euc-jp lead is 0x00, return
      // finished.
      if (bite === end_of_stream && eucjp_lead === 0x00)
        return finished;

      // 3. If euc-jp lead is 0x8E and byte is in the range 0xA1 to
      // 0xDF, inclusive, set euc-jp lead to 0x00 and return a code
      // point whose value is 0xFF61 − 0xA1 + byte.
      if (eucjp_lead === 0x8E && inRange(bite, 0xA1, 0xDF)) {
        eucjp_lead = 0x00;
        return 0xFF61 - 0xA1 + bite;
      }

      // 4. If euc-jp lead is 0x8F and byte is in the range 0xA1 to
      // 0xFE, inclusive, set the euc-jp jis0212 flag, set euc-jp lead
      // to byte, and return continue.
      if (eucjp_lead === 0x8F && inRange(bite, 0xA1, 0xFE)) {
        eucjp_jis0212_flag = true;
        eucjp_lead = bite;
        return null;
      }

      // 5. If euc-jp lead is not 0x00, let lead be euc-jp lead, set
      // euc-jp lead to 0x00, and run these substeps:
      if (eucjp_lead !== 0x00) {
        var lead = eucjp_lead;
        eucjp_lead = 0x00;

        // 1. Let code point be null.
        var code_point = null;

        // 2. If lead and byte are both in the range 0xA1 to 0xFE,
        // inclusive, set code point to the index code point for (lead
        // − 0xA1) × 94 + byte − 0xA1 in index jis0208 if the euc-jp
        // jis0212 flag is unset and in index jis0212 otherwise.
        if (inRange(lead, 0xA1, 0xFE) && inRange(bite, 0xA1, 0xFE)) {
          code_point = indexCodePointFor(
            (lead - 0xA1) * 94 + (bite - 0xA1),
            index(!eucjp_jis0212_flag ? 'jis0208' : 'jis0212'));
        }

        // 3. Unset the euc-jp jis0212 flag.
        eucjp_jis0212_flag = false;

        // 4. If byte is not in the range 0xA1 to 0xFE, inclusive,
        // prepend byte to stream.
        if (!inRange(bite, 0xA1, 0xFE))
          stream.prepend(bite);

        // 5. If code point is null, return error.
        if (code_point === null)
          return decoderError(fatal);

        // 6. Return a code point whose value is code point.
        return code_point;
      }

      // 6. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
        return bite;

      // 7. If byte is 0x8E, 0x8F, or in the range 0xA1 to 0xFE,
      // inclusive, set euc-jp lead to byte and return continue.
      if (bite === 0x8E || bite === 0x8F || inRange(bite, 0xA1, 0xFE)) {
        eucjp_lead = bite;
        return null;
      }

      // 8. Return error.
      return decoderError(fatal);
    };
  }

  // 13.1.2 euc-jp encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function EUCJPEncoder(options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
        return code_point;

      // 3. If code point is U+00A5, return byte 0x5C.
      if (code_point === 0x00A5)
        return 0x5C;

      // 4. If code point is U+203E, return byte 0x7E.
      if (code_point === 0x203E)
        return 0x7E;

      // 5. If code point is in the range U+FF61 to U+FF9F, inclusive,
      // return two bytes whose values are 0x8E and code point −
      // 0xFF61 + 0xA1.
      if (inRange(code_point, 0xFF61, 0xFF9F))
        return [0x8E, code_point - 0xFF61 + 0xA1];

      // 6. If code point is U+2212, set it to U+FF0D.
      if (code_point === 0x2212)
        code_point = 0xFF0D;

      // 7. Let pointer be the index pointer for code point in index
      // jis0208.
      var pointer = indexPointerFor(code_point, index('jis0208'));

      // 8. If pointer is null, return error with code point.
      if (pointer === null)
        return encoderError(code_point);

      // 9. Let lead be floor(pointer / 94) + 0xA1.
      var lead = floor(pointer / 94) + 0xA1;

      // 10. Let trail be pointer % 94 + 0xA1.
      var trail = pointer % 94 + 0xA1;

      // 11. Return two bytes whose values are lead and trail.
      return [lead, trail];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['EUC-JP'] = function(options) {
    return new EUCJPEncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['EUC-JP'] = function(options) {
    return new EUCJPDecoder(options);
  };

  // 13.2 iso-2022-jp

  // 13.2.1 iso-2022-jp decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function ISO2022JPDecoder(options) {
    var fatal = options.fatal;
    /** @enum */
    var states = {
      ASCII: 0,
      Roman: 1,
      Katakana: 2,
      LeadByte: 3,
      TrailByte: 4,
      EscapeStart: 5,
      Escape: 6
    };
    // iso-2022-jp's decoder has an associated iso-2022-jp decoder
    // state (initially ASCII), iso-2022-jp decoder output state
    // (initially ASCII), iso-2022-jp lead (initially 0x00), and
    // iso-2022-jp output flag (initially unset).
    var /** @type {number} */ iso2022jp_decoder_state = states.ASCII,
        /** @type {number} */ iso2022jp_decoder_output_state = states.ASCII,
        /** @type {number} */ iso2022jp_lead = 0x00,
        /** @type {boolean} */ iso2022jp_output_flag = false;
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // switching on iso-2022-jp decoder state:
      switch (iso2022jp_decoder_state) {
      default:
      case states.ASCII:
        // ASCII
        // Based on byte:

        // 0x1B
        if (bite === 0x1B) {
          // Set iso-2022-jp decoder state to escape start and return
          // continue.
          iso2022jp_decoder_state = states.EscapeStart;
          return null;
        }

        // 0x00 to 0x7F, excluding 0x0E, 0x0F, and 0x1B
        if (inRange(bite, 0x00, 0x7F) && bite !== 0x0E
            && bite !== 0x0F && bite !== 0x1B) {
          // Unset the iso-2022-jp output flag and return a code point
          // whose value is byte.
          iso2022jp_output_flag = false;
          return bite;
        }

        // end-of-stream
        if (bite === end_of_stream) {
          // Return finished.
          return finished;
        }

        // Otherwise
        // Unset the iso-2022-jp output flag and return error.
        iso2022jp_output_flag = false;
        return decoderError(fatal);

      case states.Roman:
        // Roman
        // Based on byte:

        // 0x1B
        if (bite === 0x1B) {
          // Set iso-2022-jp decoder state to escape start and return
          // continue.
          iso2022jp_decoder_state = states.EscapeStart;
          return null;
        }

        // 0x5C
        if (bite === 0x5C) {
          // Unset the iso-2022-jp output flag and return code point
          // U+00A5.
          iso2022jp_output_flag = false;
          return 0x00A5;
        }

        // 0x7E
        if (bite === 0x7E) {
          // Unset the iso-2022-jp output flag and return code point
          // U+203E.
          iso2022jp_output_flag = false;
          return 0x203E;
        }

        // 0x00 to 0x7F, excluding 0x0E, 0x0F, 0x1B, 0x5C, and 0x7E
        if (inRange(bite, 0x00, 0x7F) && bite !== 0x0E && bite !== 0x0F
            && bite !== 0x1B && bite !== 0x5C && bite !== 0x7E) {
          // Unset the iso-2022-jp output flag and return a code point
          // whose value is byte.
          iso2022jp_output_flag = false;
          return bite;
        }

        // end-of-stream
        if (bite === end_of_stream) {
          // Return finished.
          return finished;
        }

        // Otherwise
        // Unset the iso-2022-jp output flag and return error.
        iso2022jp_output_flag = false;
        return decoderError(fatal);

      case states.Katakana:
        // Katakana
        // Based on byte:

        // 0x1B
        if (bite === 0x1B) {
          // Set iso-2022-jp decoder state to escape start and return
          // continue.
          iso2022jp_decoder_state = states.EscapeStart;
          return null;
        }

        // 0x21 to 0x5F
        if (inRange(bite, 0x21, 0x5F)) {
          // Unset the iso-2022-jp output flag and return a code point
          // whose value is 0xFF61 − 0x21 + byte.
          iso2022jp_output_flag = false;
          return 0xFF61 - 0x21 + bite;
        }

        // end-of-stream
        if (bite === end_of_stream) {
          // Return finished.
          return finished;
        }

        // Otherwise
        // Unset the iso-2022-jp output flag and return error.
        iso2022jp_output_flag = false;
        return decoderError(fatal);

      case states.LeadByte:
        // Lead byte
        // Based on byte:

        // 0x1B
        if (bite === 0x1B) {
          // Set iso-2022-jp decoder state to escape start and return
          // continue.
          iso2022jp_decoder_state = states.EscapeStart;
          return null;
        }

        // 0x21 to 0x7E
        if (inRange(bite, 0x21, 0x7E)) {
          // Unset the iso-2022-jp output flag, set iso-2022-jp lead
          // to byte, iso-2022-jp decoder state to trail byte, and
          // return continue.
          iso2022jp_output_flag = false;
          iso2022jp_lead = bite;
          iso2022jp_decoder_state = states.TrailByte;
          return null;
        }

        // end-of-stream
        if (bite === end_of_stream) {
          // Return finished.
          return finished;
        }

        // Otherwise
        // Unset the iso-2022-jp output flag and return error.
        iso2022jp_output_flag = false;
        return decoderError(fatal);

      case states.TrailByte:
        // Trail byte
        // Based on byte:

        // 0x1B
        if (bite === 0x1B) {
          // Set iso-2022-jp decoder state to escape start and return
          // continue.
          iso2022jp_decoder_state = states.EscapeStart;
          return decoderError(fatal);
        }

        // 0x21 to 0x7E
        if (inRange(bite, 0x21, 0x7E)) {
          // 1. Set the iso-2022-jp decoder state to lead byte.
          iso2022jp_decoder_state = states.LeadByte;

          // 2. Let pointer be (iso-2022-jp lead − 0x21) × 94 + byte − 0x21.
          var pointer = (iso2022jp_lead - 0x21) * 94 + bite - 0x21;

          // 3. Let code point be the index code point for pointer in
          // index jis0208.
          var code_point = indexCodePointFor(pointer, index('jis0208'));

          // 4. If code point is null, return error.
          if (code_point === null)
            return decoderError(fatal);

          // 5. Return a code point whose value is code point.
          return code_point;
        }

        // end-of-stream
        if (bite === end_of_stream) {
          // Set the iso-2022-jp decoder state to lead byte, prepend
          // byte to stream, and return error.
          iso2022jp_decoder_state = states.LeadByte;
          stream.prepend(bite);
          return decoderError(fatal);
        }

        // Otherwise
        // Set iso-2022-jp decoder state to lead byte and return
        // error.
        iso2022jp_decoder_state = states.LeadByte;
        return decoderError(fatal);

      case states.EscapeStart:
        // Escape start

        // 1. If byte is either 0x24 or 0x28, set iso-2022-jp lead to
        // byte, iso-2022-jp decoder state to escape, and return
        // continue.
        if (bite === 0x24 || bite === 0x28) {
          iso2022jp_lead = bite;
          iso2022jp_decoder_state = states.Escape;
          return null;
        }

        // 2. Prepend byte to stream.
        stream.prepend(bite);

        // 3. Unset the iso-2022-jp output flag, set iso-2022-jp
        // decoder state to iso-2022-jp decoder output state, and
        // return error.
        iso2022jp_output_flag = false;
        iso2022jp_decoder_state = iso2022jp_decoder_output_state;
        return decoderError(fatal);

      case states.Escape:
        // Escape

        // 1. Let lead be iso-2022-jp lead and set iso-2022-jp lead to
        // 0x00.
        var lead = iso2022jp_lead;
        iso2022jp_lead = 0x00;

        // 2. Let state be null.
        var state = null;

        // 3. If lead is 0x28 and byte is 0x42, set state to ASCII.
        if (lead === 0x28 && bite === 0x42)
          state = states.ASCII;

        // 4. If lead is 0x28 and byte is 0x4A, set state to Roman.
        if (lead === 0x28 && bite === 0x4A)
          state = states.Roman;

        // 5. If lead is 0x28 and byte is 0x49, set state to Katakana.
        if (lead === 0x28 && bite === 0x49)
          state = states.Katakana;

        // 6. If lead is 0x24 and byte is either 0x40 or 0x42, set
        // state to lead byte.
        if (lead === 0x24 && (bite === 0x40 || bite === 0x42))
          state = states.LeadByte;

        // 7. If state is non-null, run these substeps:
        if (state !== null) {
          // 1. Set iso-2022-jp decoder state and iso-2022-jp decoder
          // output state to states.
          iso2022jp_decoder_state = iso2022jp_decoder_state = state;

          // 2. Let output flag be the iso-2022-jp output flag.
          var output_flag = iso2022jp_output_flag;

          // 3. Set the iso-2022-jp output flag.
          iso2022jp_output_flag = true;

          // 4. Return continue, if output flag is unset, and error
          // otherwise.
          return !output_flag ? null : decoderError(fatal);
        }

        // 8. Prepend lead and byte to stream.
        stream.prepend([lead, bite]);

        // 9. Unset the iso-2022-jp output flag, set iso-2022-jp
        // decoder state to iso-2022-jp decoder output state and
        // return error.
        iso2022jp_output_flag = false;
        iso2022jp_decoder_state = iso2022jp_decoder_output_state;
        return decoderError(fatal);
      }
    };
  }

  // 13.2.2 iso-2022-jp encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function ISO2022JPEncoder(options) {
    var fatal = options.fatal;
    // iso-2022-jp's encoder has an associated iso-2022-jp encoder
    // state which is one of ASCII, Roman, and jis0208 (initially
    // ASCII).
    /** @enum */
    var states = {
      ASCII: 0,
      Roman: 1,
      jis0208: 2
    };
    var /** @type {number} */ iso2022jp_state = states.ASCII;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream and iso-2022-jp encoder
      // state is not ASCII, prepend code point to stream, set
      // iso-2022-jp encoder state to ASCII, and return three bytes
      // 0x1B 0x28 0x42.
      if (code_point === end_of_stream &&
          iso2022jp_state !== states.ASCII) {
        stream.prepend(code_point);
        iso2022jp_state = states.ASCII;
        return [0x1B, 0x28, 0x42];
      }

      // 2. If code point is end-of-stream and iso-2022-jp encoder
      // state is ASCII, return finished.
      if (code_point === end_of_stream && iso2022jp_state === states.ASCII)
        return finished;

      // 3. If ISO-2022-JP encoder state is ASCII or Roman, and code
      // point is U+000E, U+000F, or U+001B, return error with U+FFFD.
      if ((iso2022jp_state === states.ASCII ||
           iso2022jp_state === states.Roman) &&
          (code_point === 0x000E || code_point === 0x000F ||
           code_point === 0x001B)) {
        return encoderError(0xFFFD);
      }

      // 4. If iso-2022-jp encoder state is ASCII and code point is an
      // ASCII code point, return a byte whose value is code point.
      if (iso2022jp_state === states.ASCII &&
          isASCIICodePoint(code_point))
        return code_point;

      // 5. If iso-2022-jp encoder state is Roman and code point is an
      // ASCII code point, excluding U+005C and U+007E, or is U+00A5
      // or U+203E, run these substeps:
      if (iso2022jp_state === states.Roman &&
          ((isASCIICodePoint(code_point) &&
           code_point !== 0x005C && code_point !== 0x007E) ||
          (code_point == 0x00A5 || code_point == 0x203E))) {

        // 1. If code point is an ASCII code point, return a byte
        // whose value is code point.
        if (isASCIICodePoint(code_point))
          return code_point;

        // 2. If code point is U+00A5, return byte 0x5C.
        if (code_point === 0x00A5)
          return 0x5C;

        // 3. If code point is U+203E, return byte 0x7E.
        if (code_point === 0x203E)
          return 0x7E;
      }

      // 6. If code point is an ASCII code point, and iso-2022-jp
      // encoder state is not ASCII, prepend code point to stream, set
      // iso-2022-jp encoder state to ASCII, and return three bytes
      // 0x1B 0x28 0x42.
      if (isASCIICodePoint(code_point) &&
          iso2022jp_state !== states.ASCII) {
        stream.prepend(code_point);
        iso2022jp_state = states.ASCII;
        return [0x1B, 0x28, 0x42];
      }

      // 7. If code point is either U+00A5 or U+203E, and iso-2022-jp
      // encoder state is not Roman, prepend code point to stream, set
      // iso-2022-jp encoder state to Roman, and return three bytes
      // 0x1B 0x28 0x4A.
      if ((code_point === 0x00A5 || code_point === 0x203E) &&
          iso2022jp_state !== states.Roman) {
        stream.prepend(code_point);
        iso2022jp_state = states.Roman;
        return [0x1B, 0x28, 0x4A];
      }

      // 8. If code point is U+2212, set it to U+FF0D.
      if (code_point === 0x2212)
        code_point = 0xFF0D;

      // 9. Let pointer be the index pointer for code point in index
      // jis0208.
      var pointer = indexPointerFor(code_point, index('jis0208'));

      // 10. If pointer is null, return error with code point.
      if (pointer === null)
        return encoderError(code_point);

      // 11. If iso-2022-jp encoder state is not jis0208, prepend code
      // point to stream, set iso-2022-jp encoder state to jis0208,
      // and return three bytes 0x1B 0x24 0x42.
      if (iso2022jp_state !== states.jis0208) {
        stream.prepend(code_point);
        iso2022jp_state = states.jis0208;
        return [0x1B, 0x24, 0x42];
      }

      // 12. Let lead be floor(pointer / 94) + 0x21.
      var lead = floor(pointer / 94) + 0x21;

      // 13. Let trail be pointer % 94 + 0x21.
      var trail = pointer % 94 + 0x21;

      // 14. Return two bytes whose values are lead and trail.
      return [lead, trail];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['ISO-2022-JP'] = function(options) {
    return new ISO2022JPEncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['ISO-2022-JP'] = function(options) {
    return new ISO2022JPDecoder(options);
  };

  // 13.3 Shift_JIS

  // 13.3.1 Shift_JIS decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function ShiftJISDecoder(options) {
    var fatal = options.fatal;
    // Shift_JIS's decoder has an associated Shift_JIS lead (initially
    // 0x00).
    var /** @type {number} */ Shift_JIS_lead = 0x00;
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream and Shift_JIS lead is not 0x00,
      // set Shift_JIS lead to 0x00 and return error.
      if (bite === end_of_stream && Shift_JIS_lead !== 0x00) {
        Shift_JIS_lead = 0x00;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and Shift_JIS lead is 0x00,
      // return finished.
      if (bite === end_of_stream && Shift_JIS_lead === 0x00)
        return finished;

      // 3. If Shift_JIS lead is not 0x00, let lead be Shift_JIS lead,
      // let pointer be null, set Shift_JIS lead to 0x00, and then run
      // these substeps:
      if (Shift_JIS_lead !== 0x00) {
        var lead = Shift_JIS_lead;
        var pointer = null;
        Shift_JIS_lead = 0x00;

        // 1. Let offset be 0x40, if byte is less than 0x7F, and 0x41
        // otherwise.
        var offset = (bite < 0x7F) ? 0x40 : 0x41;

        // 2. Let lead offset be 0x81, if lead is less than 0xA0, and
        // 0xC1 otherwise.
        var lead_offset = (lead < 0xA0) ? 0x81 : 0xC1;

        // 3. If byte is in the range 0x40 to 0x7E, inclusive, or 0x80
        // to 0xFC, inclusive, set pointer to (lead − lead offset) ×
        // 188 + byte − offset.
        if (inRange(bite, 0x40, 0x7E) || inRange(bite, 0x80, 0xFC))
          pointer = (lead - lead_offset) * 188 + bite - offset;

        // 4. If pointer is in the range 8836 to 10715, inclusive,
        // return a code point whose value is 0xE000 − 8836 + pointer.
        if (inRange(pointer, 8836, 10715))
          return 0xE000 - 8836 + pointer;

        // 5. Let code point be null, if pointer is null, and the
        // index code point for pointer in index jis0208 otherwise.
        var code_point = (pointer === null) ? null :
              indexCodePointFor(pointer, index('jis0208'));

        // 6. If code point is null and byte is an ASCII byte, prepend
        // byte to stream.
        if (code_point === null && isASCIIByte(bite))
          stream.prepend(bite);

        // 7. If code point is null, return error.
        if (code_point === null)
          return decoderError(fatal);

        // 8. Return a code point whose value is code point.
        return code_point;
      }

      // 4. If byte is an ASCII byte or 0x80, return a code point
      // whose value is byte.
      if (isASCIIByte(bite) || bite === 0x80)
        return bite;

      // 5. If byte is in the range 0xA1 to 0xDF, inclusive, return a
      // code point whose value is 0xFF61 − 0xA1 + byte.
      if (inRange(bite, 0xA1, 0xDF))
        return 0xFF61 - 0xA1 + bite;

      // 6. If byte is in the range 0x81 to 0x9F, inclusive, or 0xE0
      // to 0xFC, inclusive, set Shift_JIS lead to byte and return
      // continue.
      if (inRange(bite, 0x81, 0x9F) || inRange(bite, 0xE0, 0xFC)) {
        Shift_JIS_lead = bite;
        return null;
      }

      // 7. Return error.
      return decoderError(fatal);
    };
  }

  // 13.3.2 Shift_JIS encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function ShiftJISEncoder(options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is an ASCII code point or U+0080, return a
      // byte whose value is code point.
      if (isASCIICodePoint(code_point) || code_point === 0x0080)
        return code_point;

      // 3. If code point is U+00A5, return byte 0x5C.
      if (code_point === 0x00A5)
        return 0x5C;

      // 4. If code point is U+203E, return byte 0x7E.
      if (code_point === 0x203E)
        return 0x7E;

      // 5. If code point is in the range U+FF61 to U+FF9F, inclusive,
      // return a byte whose value is code point − 0xFF61 + 0xA1.
      if (inRange(code_point, 0xFF61, 0xFF9F))
        return code_point - 0xFF61 + 0xA1;

      // 6. If code point is U+2212, set it to U+FF0D.
      if (code_point === 0x2212)
        code_point = 0xFF0D;

      // 7. Let pointer be the index Shift_JIS pointer for code point.
      var pointer = indexShiftJISPointerFor(code_point);

      // 8. If pointer is null, return error with code point.
      if (pointer === null)
        return encoderError(code_point);

      // 9. Let lead be floor(pointer / 188).
      var lead = floor(pointer / 188);

      // 10. Let lead offset be 0x81, if lead is less than 0x1F, and
      // 0xC1 otherwise.
      var lead_offset = (lead < 0x1F) ? 0x81 : 0xC1;

      // 11. Let trail be pointer % 188.
      var trail = pointer % 188;

      // 12. Let offset be 0x40, if trail is less than 0x3F, and 0x41
      // otherwise.
      var offset = (trail < 0x3F) ? 0x40 : 0x41;

      // 13. Return two bytes whose values are lead + lead offset and
      // trail + offset.
      return [lead + lead_offset, trail + offset];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['Shift_JIS'] = function(options) {
    return new ShiftJISEncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['Shift_JIS'] = function(options) {
    return new ShiftJISDecoder(options);
  };

  //
  // 14. Legacy multi-byte Korean encodings
  //

  // 14.1 euc-kr

  // 14.1.1 euc-kr decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function EUCKRDecoder(options) {
    var fatal = options.fatal;

    // euc-kr's decoder has an associated euc-kr lead (initially 0x00).
    var /** @type {number} */ euckr_lead = 0x00;
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream and euc-kr lead is not 0x00, set
      // euc-kr lead to 0x00 and return error.
      if (bite === end_of_stream && euckr_lead !== 0) {
        euckr_lead = 0x00;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and euc-kr lead is 0x00, return
      // finished.
      if (bite === end_of_stream && euckr_lead === 0)
        return finished;

      // 3. If euc-kr lead is not 0x00, let lead be euc-kr lead, let
      // pointer be null, set euc-kr lead to 0x00, and then run these
      // substeps:
      if (euckr_lead !== 0x00) {
        var lead = euckr_lead;
        var pointer = null;
        euckr_lead = 0x00;

        // 1. If byte is in the range 0x41 to 0xFE, inclusive, set
        // pointer to (lead − 0x81) × 190 + (byte − 0x41).
        if (inRange(bite, 0x41, 0xFE))
          pointer = (lead - 0x81) * 190 + (bite - 0x41);

        // 2. Let code point be null, if pointer is null, and the
        // index code point for pointer in index euc-kr otherwise.
        var code_point = (pointer === null)
              ? null : indexCodePointFor(pointer, index('euc-kr'));

        // 3. If code point is null and byte is an ASCII byte, prepend
        // byte to stream.
        if (pointer === null && isASCIIByte(bite))
          stream.prepend(bite);

        // 4. If code point is null, return error.
        if (code_point === null)
          return decoderError(fatal);

        // 5. Return a code point whose value is code point.
        return code_point;
      }

      // 4. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
        return bite;

      // 5. If byte is in the range 0x81 to 0xFE, inclusive, set
      // euc-kr lead to byte and return continue.
      if (inRange(bite, 0x81, 0xFE)) {
        euckr_lead = bite;
        return null;
      }

      // 6. Return error.
      return decoderError(fatal);
    };
  }

  // 14.1.2 euc-kr encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function EUCKREncoder(options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
        return code_point;

      // 3. Let pointer be the index pointer for code point in index
      // euc-kr.
      var pointer = indexPointerFor(code_point, index('euc-kr'));

      // 4. If pointer is null, return error with code point.
      if (pointer === null)
        return encoderError(code_point);

      // 5. Let lead be floor(pointer / 190) + 0x81.
      var lead = floor(pointer / 190) + 0x81;

      // 6. Let trail be pointer % 190 + 0x41.
      var trail = (pointer % 190) + 0x41;

      // 7. Return two bytes whose values are lead and trail.
      return [lead, trail];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['EUC-KR'] = function(options) {
    return new EUCKREncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['EUC-KR'] = function(options) {
    return new EUCKRDecoder(options);
  };


  //
  // 15. Legacy miscellaneous encodings
  //

  // 15.1 replacement

  // Not needed - API throws RangeError

  // 15.2 Common infrastructure for utf-16be and utf-16le

  /**
   * @param {number} code_unit
   * @param {boolean} utf16be
   * @return {!Array.<number>} bytes
   */
  function convertCodeUnitToBytes(code_unit, utf16be) {
    // 1. Let byte1 be code unit >> 8.
    var byte1 = code_unit >> 8;

    // 2. Let byte2 be code unit & 0x00FF.
    var byte2 = code_unit & 0x00FF;

    // 3. Then return the bytes in order:
        // utf-16be flag is set: byte1, then byte2.
    if (utf16be)
      return [byte1, byte2];
    // utf-16be flag is unset: byte2, then byte1.
    return [byte2, byte1];
  }

  // 15.2.1 shared utf-16 decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {boolean} utf16_be True if big-endian, false if little-endian.
   * @param {{fatal: boolean}} options
   */
  function UTF16Decoder(utf16_be, options) {
    var fatal = options.fatal;
    var /** @type {?number} */ utf16_lead_byte = null,
        /** @type {?number} */ utf16_lead_surrogate = null;
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream and either utf-16 lead byte or
      // utf-16 lead surrogate is not null, set utf-16 lead byte and
      // utf-16 lead surrogate to null, and return error.
      if (bite === end_of_stream && (utf16_lead_byte !== null ||
                                utf16_lead_surrogate !== null)) {
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and utf-16 lead byte and utf-16
      // lead surrogate are null, return finished.
      if (bite === end_of_stream && utf16_lead_byte === null &&
          utf16_lead_surrogate === null) {
        return finished;
      }

      // 3. If utf-16 lead byte is null, set utf-16 lead byte to byte
      // and return continue.
      if (utf16_lead_byte === null) {
        utf16_lead_byte = bite;
        return null;
      }

      // 4. Let code unit be the result of:
      var code_unit;
      if (utf16_be) {
        // utf-16be decoder flag is set
        //   (utf-16 lead byte << 8) + byte.
        code_unit = (utf16_lead_byte << 8) + bite;
      } else {
        // utf-16be decoder flag is unset
        //   (byte << 8) + utf-16 lead byte.
        code_unit = (bite << 8) + utf16_lead_byte;
      }
      // Then set utf-16 lead byte to null.
      utf16_lead_byte = null;

      // 5. If utf-16 lead surrogate is not null, let lead surrogate
      // be utf-16 lead surrogate, set utf-16 lead surrogate to null,
      // and then run these substeps:
      if (utf16_lead_surrogate !== null) {
        var lead_surrogate = utf16_lead_surrogate;
        utf16_lead_surrogate = null;

        // 1. If code unit is in the range U+DC00 to U+DFFF,
        // inclusive, return a code point whose value is 0x10000 +
        // ((lead surrogate − 0xD800) << 10) + (code unit − 0xDC00).
        if (inRange(code_unit, 0xDC00, 0xDFFF)) {
          return 0x10000 + (lead_surrogate - 0xD800) * 0x400 +
              (code_unit - 0xDC00);
        }

        // 2. Prepend the sequence resulting of converting code unit
        // to bytes using utf-16be decoder flag to stream and return
        // error.
        stream.prepend(convertCodeUnitToBytes(code_unit, utf16_be));
        return decoderError(fatal);
      }

      // 6. If code unit is in the range U+D800 to U+DBFF, inclusive,
      // set utf-16 lead surrogate to code unit and return continue.
      if (inRange(code_unit, 0xD800, 0xDBFF)) {
        utf16_lead_surrogate = code_unit;
        return null;
      }

      // 7. If code unit is in the range U+DC00 to U+DFFF, inclusive,
      // return error.
      if (inRange(code_unit, 0xDC00, 0xDFFF))
        return decoderError(fatal);

      // 8. Return code point code unit.
      return code_unit;
    };
  }

  // 15.2.2 shared utf-16 encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {boolean} utf16_be True if big-endian, false if little-endian.
   * @param {{fatal: boolean}} options
   */
  function UTF16Encoder(utf16_be, options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is in the range U+0000 to U+FFFF, inclusive,
      // return the sequence resulting of converting code point to
      // bytes using utf-16be encoder flag.
      if (inRange(code_point, 0x0000, 0xFFFF))
        return convertCodeUnitToBytes(code_point, utf16_be);

      // 3. Let lead be ((code point − 0x10000) >> 10) + 0xD800,
      // converted to bytes using utf-16be encoder flag.
      var lead = convertCodeUnitToBytes(
        ((code_point - 0x10000) >> 10) + 0xD800, utf16_be);

      // 4. Let trail be ((code point − 0x10000) & 0x3FF) + 0xDC00,
      // converted to bytes using utf-16be encoder flag.
      var trail = convertCodeUnitToBytes(
        ((code_point - 0x10000) & 0x3FF) + 0xDC00, utf16_be);

      // 5. Return a byte sequence of lead followed by trail.
      return lead.concat(trail);
    };
  }

  // 15.3 utf-16be
  // 15.3.1 utf-16be decoder
  /** @param {{fatal: boolean}} options */
  encoders['UTF-16BE'] = function(options) {
    return new UTF16Encoder(true, options);
  };
  // 15.3.2 utf-16be encoder
  /** @param {{fatal: boolean}} options */
  decoders['UTF-16BE'] = function(options) {
    return new UTF16Decoder(true, options);
  };

  // 15.4 utf-16le
  // 15.4.1 utf-16le decoder
  /** @param {{fatal: boolean}} options */
  encoders['UTF-16LE'] = function(options) {
    return new UTF16Encoder(false, options);
  };
  // 15.4.2 utf-16le encoder
  /** @param {{fatal: boolean}} options */
  decoders['UTF-16LE'] = function(options) {
    return new UTF16Decoder(false, options);
  };

  // 15.5 x-user-defined

  // 15.5.1 x-user-defined decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function XUserDefinedDecoder(options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    this.handler = function(stream, bite) {
      // 1. If byte is end-of-stream, return finished.
      if (bite === end_of_stream)
        return finished;

      // 2. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
        return bite;

      // 3. Return a code point whose value is 0xF780 + byte − 0x80.
      return 0xF780 + bite - 0x80;
    };
  }

  // 15.5.2 x-user-defined encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function XUserDefinedEncoder(options) {
    var fatal = options.fatal;
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function(stream, code_point) {
      // 1.If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
        return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
        return code_point;

      // 3. If code point is in the range U+F780 to U+F7FF, inclusive,
      // return a byte whose value is code point − 0xF780 + 0x80.
      if (inRange(code_point, 0xF780, 0xF7FF))
        return code_point - 0xF780 + 0x80;

      // 4. Return error with code point.
      return encoderError(code_point);
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['x-user-defined'] = function(options) {
    return new XUserDefinedEncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['x-user-defined'] = function(options) {
    return new XUserDefinedDecoder(options);
  };

  if (!global['TextEncoder'])
    global['TextEncoder'] = TextEncoder;
  if (!global['TextDecoder'])
    global['TextDecoder'] = TextDecoder;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      TextEncoder: global['TextEncoder'],
      TextDecoder: global['TextDecoder'],
      EncodingIndexes: global["encoding-indexes"]
    };
  }

// For strict environments where `this` inside the global scope
// is `undefined`, take a pure object instead
}(this || {}));"use strict";

/*\
|*|
|*|  :: Number.isInteger() polyfill ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
|*|
\*/

if (!Number.isInteger) {
    Number.isInteger = function isInteger(nVal) {
        return typeof nVal === "number" && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
    };
}

/*\
|*|
|*|  StringView - Mozilla Developer Network - revision #6
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/StringView
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
\*/

function StringView(vInput, sEncoding /* optional (default: UTF-8) */, nOffset /* optional */, nLength /* optional */) {

    var fTAView, aWhole, aRaw, fPutOutptCode, fGetOutptChrSize, nInptLen, nStartIdx = isFinite(nOffset) ? nOffset : 0, nTranscrType = 15;

    if (sEncoding) { this.encoding = sEncoding.toString(); }

    encSwitch: switch (this.encoding) {
        case "UTF-8":
            fPutOutptCode = StringView.putUTF8CharCode;
            fGetOutptChrSize = StringView.getUTF8CharLength;
            fTAView = Uint8Array;
            break encSwitch;
        case "UTF-16":
            fPutOutptCode = StringView.putUTF16CharCode;
            fGetOutptChrSize = StringView.getUTF16CharLength;
            fTAView = Uint16Array;
            break encSwitch;
        case "UTF-32":
            fTAView = Uint32Array;
            nTranscrType &= 14;
            break encSwitch;
        default:
            /* case "ASCII", or case "BinaryString" or unknown cases */
            fTAView = Uint8Array;
            nTranscrType &= 14;
    }

    typeSwitch: switch (typeof vInput) {
        case "string":
            /* the input argument is a primitive string: a new buffer will be created. */
            nTranscrType &= 7;
            break typeSwitch;
        case "object":
            classSwitch: switch (vInput.constructor) {
                case StringView:
                    /* the input argument is a stringView: a new buffer will be created. */
                    nTranscrType &= 3;
                    break typeSwitch;
                case String:
                    /* the input argument is an objectified string: a new buffer will be created. */
                    nTranscrType &= 7;
                    break typeSwitch;
                case ArrayBuffer:
                    /* the input argument is an arrayBuffer: the buffer will be shared. */
                    aWhole = new fTAView(vInput);
                    nInptLen = this.encoding === "UTF-32" ?
                        vInput.byteLength >>> 2
                      : this.encoding === "UTF-16" ?
                        vInput.byteLength >>> 1
                      :
                        vInput.byteLength;
                    aRaw = nStartIdx === 0 && (!isFinite(nLength) || nLength === nInptLen) ?
                        aWhole
                      : new fTAView(vInput, nStartIdx, !isFinite(nLength) ? nInptLen - nStartIdx : nLength);

                    break typeSwitch;
                case Uint32Array:
                case Uint16Array:
                case Uint8Array:
                    /* the input argument is a typedArray: the buffer, and possibly the array itself, will be shared. */
                    fTAView = vInput.constructor;
                    nInptLen = vInput.length;
                    aWhole = vInput.byteOffset === 0 && vInput.length === (
                      fTAView === Uint32Array ?
                        vInput.buffer.byteLength >>> 2
                      : fTAView === Uint16Array ?
                        vInput.buffer.byteLength >>> 1
                      :
                        vInput.buffer.byteLength
                    ) ? vInput : new fTAView(vInput.buffer);
                    aRaw = nStartIdx === 0 && (!isFinite(nLength) || nLength === nInptLen) ?
                        vInput
                      : vInput.subarray(nStartIdx, isFinite(nLength) ? nStartIdx + nLength : nInptLen);

                    break typeSwitch;
                default:
                    /* the input argument is an array or another serializable object: a new typedArray will be created. */
                    aWhole = new fTAView(vInput);
                    nInptLen = aWhole.length;
                    aRaw = nStartIdx === 0 && (!isFinite(nLength) || nLength === nInptLen) ?
                        aWhole
                      : aWhole.subarray(nStartIdx, isFinite(nLength) ? nStartIdx + nLength : nInptLen);
            }
            break typeSwitch;
        default:
            /* the input argument is a number, a boolean or a function: a new typedArray will be created. */
            aWhole = aRaw = new fTAView(Number(vInput) || 0);

    }

    if (nTranscrType < 8) {

        var vSource, nOutptLen, nCharStart, nCharEnd, nEndIdx, fGetInptChrSize, fGetInptChrCode;

        if (nTranscrType & 4) { /* input is string */

            vSource = vInput;
            nOutptLen = nInptLen = vSource.length;
            nTranscrType ^= this.encoding === "UTF-32" ? 0 : 2;
            /* ...or...: nTranscrType ^= Number(this.encoding !== "UTF-32") << 1; */
            nStartIdx = nCharStart = nOffset ? Math.max((nOutptLen + nOffset) % nOutptLen, 0) : 0;
            nEndIdx = nCharEnd = (Number.isInteger(nLength) ? Math.min(Math.max(nLength, 0) + nStartIdx, nOutptLen) : nOutptLen) - 1;

        } else { /* input is stringView */

            vSource = vInput.rawData;
            nInptLen = vInput.makeIndex();
            nStartIdx = nCharStart = nOffset ? Math.max((nInptLen + nOffset) % nInptLen, 0) : 0;
            nOutptLen = Number.isInteger(nLength) ? Math.min(Math.max(nLength, 0), nInptLen - nCharStart) : nInptLen;
            nEndIdx = nCharEnd = nOutptLen + nCharStart;

            if (vInput.encoding === "UTF-8") {
                fGetInptChrSize = StringView.getUTF8CharLength;
                fGetInptChrCode = StringView.loadUTF8CharCode;
            } else if (vInput.encoding === "UTF-16") {
                fGetInptChrSize = StringView.getUTF16CharLength;
                fGetInptChrCode = StringView.loadUTF16CharCode;
            } else {
                nTranscrType &= 1;
            }

        }

        if (nOutptLen === 0 || nTranscrType < 4 && vSource.encoding === this.encoding && nCharStart === 0 && nOutptLen === nInptLen) {

            /* the encoding is the same, the length too and the offset is 0... or the input is empty! */

            nTranscrType = 7;

        }

        conversionSwitch: switch (nTranscrType) {

            case 0:

                /* both the source and the new StringView have a fixed-length encoding... */

                aWhole = new fTAView(nOutptLen);
                for (var nOutptIdx = 0; nOutptIdx < nOutptLen; aWhole[nOutptIdx] = vSource[nStartIdx + nOutptIdx++]);
                break conversionSwitch;

            case 1:

                /* the source has a fixed-length encoding but the new StringView has a variable-length encoding... */

                /* mapping... */

                nOutptLen = 0;

                for (var nInptIdx = nStartIdx; nInptIdx < nEndIdx; nInptIdx++) {
                    nOutptLen += fGetOutptChrSize(vSource[nInptIdx]);
                }

                aWhole = new fTAView(nOutptLen);

                /* transcription of the source... */

                for (var nInptIdx = nStartIdx, nOutptIdx = 0; nOutptIdx < nOutptLen; nInptIdx++) {
                    nOutptIdx = fPutOutptCode(aWhole, vSource[nInptIdx], nOutptIdx);
                }

                break conversionSwitch;

            case 2:

                /* the source has a variable-length encoding but the new StringView has a fixed-length encoding... */

                /* mapping... */

                nStartIdx = 0;

                var nChrCode;

                for (nChrIdx = 0; nChrIdx < nCharStart; nChrIdx++) {
                    nChrCode = fGetInptChrCode(vSource, nStartIdx);
                    nStartIdx += fGetInptChrSize(nChrCode);
                }

                aWhole = new fTAView(nOutptLen);

                /* transcription of the source... */

                for (var nInptIdx = nStartIdx, nOutptIdx = 0; nOutptIdx < nOutptLen; nInptIdx += fGetInptChrSize(nChrCode), nOutptIdx++) {
                    nChrCode = fGetInptChrCode(vSource, nInptIdx);
                    aWhole[nOutptIdx] = nChrCode;
                }

                break conversionSwitch;

            case 3:

                /* both the source and the new StringView have a variable-length encoding... */

                /* mapping... */

                nOutptLen = 0;

                var nChrCode;

                for (var nChrIdx = 0, nInptIdx = 0; nChrIdx < nCharEnd; nInptIdx += fGetInptChrSize(nChrCode)) {
                    nChrCode = fGetInptChrCode(vSource, nInptIdx);
                    if (nChrIdx === nCharStart) { nStartIdx = nInptIdx; }
                    if (++nChrIdx > nCharStart) { nOutptLen += fGetOutptChrSize(nChrCode); }
                }

                aWhole = new fTAView(nOutptLen);

                /* transcription... */

                for (var nInptIdx = nStartIdx, nOutptIdx = 0; nOutptIdx < nOutptLen; nInptIdx += fGetInptChrSize(nChrCode)) {
                    nChrCode = fGetInptChrCode(vSource, nInptIdx);
                    nOutptIdx = fPutOutptCode(aWhole, nChrCode, nOutptIdx);
                }

                break conversionSwitch;

            case 4:

                /* DOMString to ASCII or BinaryString or other unknown encodings */

                aWhole = new fTAView(nOutptLen);

                /* transcription... */

                for (var nIdx = 0; nIdx < nOutptLen; nIdx++) {
                    aWhole[nIdx] = vSource.charCodeAt(nIdx) & 0xff;
                }

                break conversionSwitch;

            case 5:

                /* DOMString to UTF-8 or to UTF-16 */

                /* mapping... */

                nOutptLen = 0;

                for (var nMapIdx = 0; nMapIdx < nInptLen; nMapIdx++) {
                    if (nMapIdx === nCharStart) { nStartIdx = nOutptLen; }
                    nOutptLen += fGetOutptChrSize(vSource.charCodeAt(nMapIdx));
                    if (nMapIdx === nCharEnd) { nEndIdx = nOutptLen; }
                }

                aWhole = new fTAView(nOutptLen);

                /* transcription... */

                for (var nOutptIdx = 0, nChrIdx = 0; nOutptIdx < nOutptLen; nChrIdx++) {
                    nOutptIdx = fPutOutptCode(aWhole, vSource.charCodeAt(nChrIdx), nOutptIdx);
                }

                break conversionSwitch;

            case 6:

                /* DOMString to UTF-32 */

                aWhole = new fTAView(nOutptLen);

                /* transcription... */

                for (var nIdx = 0; nIdx < nOutptLen; nIdx++) {
                    aWhole[nIdx] = vSource.charCodeAt(nIdx);
                }

                break conversionSwitch;

            case 7:

                aWhole = new fTAView(nOutptLen ? vSource : 0);
                break conversionSwitch;

        }

        aRaw = nTranscrType > 3 && (nStartIdx > 0 || nEndIdx < aWhole.length - 1) ? aWhole.subarray(nStartIdx, nEndIdx) : aWhole;

    }

    this.buffer = aWhole.buffer;
    this.bufferView = aWhole;
    this.rawData = aRaw;

    Object.freeze(this);

}

/* CONSTRUCTOR'S METHODS */

StringView.loadUTF8CharCode = function (aChars, nIdx) {

    var nLen = aChars.length, nPart = aChars[nIdx];

    return nPart > 251 && nPart < 254 && nIdx + 5 < nLen ?
        /* (nPart - 252 << 32) is not possible in ECMAScript! So...: */
        /* six bytes */ (nPart - 252) * 1073741824 + (aChars[nIdx + 1] - 128 << 24) + (aChars[nIdx + 2] - 128 << 18) + (aChars[nIdx + 3] - 128 << 12) + (aChars[nIdx + 4] - 128 << 6) + aChars[nIdx + 5] - 128
      : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ?
        /* five bytes */ (nPart - 248 << 24) + (aChars[nIdx + 1] - 128 << 18) + (aChars[nIdx + 2] - 128 << 12) + (aChars[nIdx + 3] - 128 << 6) + aChars[nIdx + 4] - 128
      : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ?
        /* four bytes */(nPart - 240 << 18) + (aChars[nIdx + 1] - 128 << 12) + (aChars[nIdx + 2] - 128 << 6) + aChars[nIdx + 3] - 128
      : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ?
        /* three bytes */ (nPart - 224 << 12) + (aChars[nIdx + 1] - 128 << 6) + aChars[nIdx + 2] - 128
      : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ?
        /* two bytes */ (nPart - 192 << 6) + aChars[nIdx + 1] - 128
      :
        /* one byte */ nPart;

};

StringView.putUTF8CharCode = function (aTarget, nChar, nPutAt) {

    var nIdx = nPutAt;

    if (nChar < 0x80 /* 128 */) {
        /* one byte */
        aTarget[nIdx++] = nChar;
    } else if (nChar < 0x800 /* 2048 */) {
        /* two bytes */
        aTarget[nIdx++] = 0xc0 /* 192 */ + (nChar >>> 6);
        aTarget[nIdx++] = 0x80 /* 128 */ + (nChar & 0x3f /* 63 */);
    } else if (nChar < 0x10000 /* 65536 */) {
        /* three bytes */
        aTarget[nIdx++] = 0xe0 /* 224 */ + (nChar >>> 12);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 6) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + (nChar & 0x3f /* 63 */);
    } else if (nChar < 0x200000 /* 2097152 */) {
        /* four bytes */
        aTarget[nIdx++] = 0xf0 /* 240 */ + (nChar >>> 18);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 12) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 6) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + (nChar & 0x3f /* 63 */);
    } else if (nChar < 0x4000000 /* 67108864 */) {
        /* five bytes */
        aTarget[nIdx++] = 0xf8 /* 248 */ + (nChar >>> 24);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 18) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 12) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 6) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + (nChar & 0x3f /* 63 */);
    } else /* if (nChar <= 0x7fffffff) */ { /* 2147483647 */
        /* six bytes */
        aTarget[nIdx++] = 0xfc /* 252 */ + /* (nChar >>> 32) is not possible in ECMAScript! So...: */ (nChar / 1073741824);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 24) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 18) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 12) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + ((nChar >>> 6) & 0x3f /* 63 */);
        aTarget[nIdx++] = 0x80 /* 128 */ + (nChar & 0x3f /* 63 */);
    }

    return nIdx;

};

StringView.getUTF8CharLength = function (nChar) {
    return nChar < 0x80 ? 1 : nChar < 0x800 ? 2 : nChar < 0x10000 ? 3 : nChar < 0x200000 ? 4 : nChar < 0x4000000 ? 5 : 6;
};

StringView.loadUTF16CharCode = function (aChars, nIdx) {

    /* UTF-16 to DOMString decoding algorithm */
    var nFrstChr = aChars[nIdx];

    return nFrstChr > 0xD7BF /* 55231 */ && nIdx + 1 < aChars.length ?
      (nFrstChr - 0xD800 /* 55296 */ << 10) + aChars[nIdx + 1] + 0x2400 /* 9216 */
      : nFrstChr;

};

StringView.putUTF16CharCode = function (aTarget, nChar, nPutAt) {

    var nIdx = nPutAt;

    if (nChar < 0x10000 /* 65536 */) {
        /* one element */
        aTarget[nIdx++] = nChar;
    } else {
        /* two elements */
        aTarget[nIdx++] = 0xD7C0 /* 55232 */ + (nChar >>> 10);
        aTarget[nIdx++] = 0xDC00 /* 56320 */ + (nChar & 0x3FF /* 1023 */);
    }

    return nIdx;

};

StringView.getUTF16CharLength = function (nChar) {
    return nChar < 0x10000 ? 1 : 2;
};

/* Array of bytes to base64 string decoding */

StringView.b64ToUint6 = function (nChr) {

    return nChr > 64 && nChr < 91 ?
        nChr - 65
      : nChr > 96 && nChr < 123 ?
        nChr - 71
      : nChr > 47 && nChr < 58 ?
        nChr + 4
      : nChr === 43 ?
        62
      : nChr === 47 ?
        63
      :
        0;

};

StringView.uint6ToB64 = function (nUint6) {

    return nUint6 < 26 ?
        nUint6 + 65
      : nUint6 < 52 ?
        nUint6 + 71
      : nUint6 < 62 ?
        nUint6 - 4
      : nUint6 === 62 ?
        43
      : nUint6 === 63 ?
        47
      :
        65;

};

/* Base64 string to array encoding */

StringView.bytesToBase64 = function (aBytes) {

    var sB64Enc = "";

    for (var nMod3, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
        nMod3 = nIdx % 3;
        if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
        nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
        if (nMod3 === 2 || aBytes.length - nIdx === 1) {
            sB64Enc += String.fromCharCode(StringView.uint6ToB64(nUint24 >>> 18 & 63), StringView.uint6ToB64(nUint24 >>> 12 & 63), StringView.uint6ToB64(nUint24 >>> 6 & 63), StringView.uint6ToB64(nUint24 & 63));
            nUint24 = 0;
        }
    }

    return sB64Enc.replace(/A(?=A$|$)/g, "=");

};


StringView.base64ToBytes = function (sBase64, nBlockBytes) {

    var
      sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
      nOutLen = nBlockBytes ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockBytes) * nBlockBytes : nInLen * 3 + 1 >>> 2, aBytes = new Uint8Array(nOutLen);

    for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
        nMod4 = nInIdx & 3;
        nUint24 |= StringView.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
        if (nMod4 === 3 || nInLen - nInIdx === 1) {
            for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
            }
            nUint24 = 0;
        }
    }

    return aBytes;

};

StringView.makeFromBase64 = function (sB64Inpt, sEncoding, nByteOffset, nLength) {

    return new StringView(sEncoding === "UTF-16" || sEncoding === "UTF-32" ? StringView.base64ToBytes(sB64Inpt, sEncoding === "UTF-16" ? 2 : 4).buffer : StringView.base64ToBytes(sB64Inpt), sEncoding, nByteOffset, nLength);

};

/* DEFAULT VALUES */

StringView.prototype.encoding = "UTF-8"; /* Default encoding... */

/* INSTANCES' METHODS */

StringView.prototype.makeIndex = function (nChrLength, nStartFrom) {

    var

      aTarget = this.rawData, nChrEnd, nRawLength = aTarget.length,
      nStartIdx = nStartFrom || 0, nIdxEnd = nStartIdx, nStopAtChr = isNaN(nChrLength) ? Infinity : nChrLength;

    if (nChrLength + 1 > aTarget.length) { throw new RangeError("StringView.prototype.makeIndex - The offset can\'t be major than the length of the array - 1."); }

    switch (this.encoding) {

        case "UTF-8":

            var nPart;

            for (nChrEnd = 0; nIdxEnd < nRawLength && nChrEnd < nStopAtChr; nChrEnd++) {
                nPart = aTarget[nIdxEnd];
                nIdxEnd += nPart > 251 && nPart < 254 && nIdxEnd + 5 < nRawLength ? 6
                  : nPart > 247 && nPart < 252 && nIdxEnd + 4 < nRawLength ? 5
                  : nPart > 239 && nPart < 248 && nIdxEnd + 3 < nRawLength ? 4
                  : nPart > 223 && nPart < 240 && nIdxEnd + 2 < nRawLength ? 3
                  : nPart > 191 && nPart < 224 && nIdxEnd + 1 < nRawLength ? 2
                  : 1;
            }

            break;

        case "UTF-16":

            for (nChrEnd = nStartIdx; nIdxEnd < nRawLength && nChrEnd < nStopAtChr; nChrEnd++) {
                nIdxEnd += aTarget[nIdxEnd] > 0xD7BF /* 55231 */ && nIdxEnd + 1 < aTarget.length ? 2 : 1;
            }

            break;

        default:

            nIdxEnd = nChrEnd = isFinite(nChrLength) ? nChrLength : nRawLength - 1;

    }

    if (nChrLength) { return nIdxEnd; }

    return nChrEnd;

};

StringView.prototype.toBase64 = function (bWholeBuffer) {

    return StringView.bytesToBase64(
      bWholeBuffer ?
        (
          this.bufferView.constructor === Uint8Array ?
            this.bufferView
          :
            new Uint8Array(this.buffer)
        )
      : this.rawData.constructor === Uint8Array ?
        this.rawData
      :
        new Uint8Array(this.buffer, this.rawData.byteOffset, this.rawData.length << (this.rawData.constructor === Uint16Array ? 1 : 2))
      );

};

StringView.prototype.subview = function (nCharOffset /* optional */, nCharLength /* optional */) {

    var

      nChrLen, nCharStart, nStrLen, bVariableLen = this.encoding === "UTF-8" || this.encoding === "UTF-16",
      nStartOffset = nCharOffset, nStringLength, nRawLen = this.rawData.length;

    if (nRawLen === 0) {
        return new StringView(this.buffer, this.encoding);
    }

    nStringLength = bVariableLen ? this.makeIndex() : nRawLen;
    nCharStart = nCharOffset ? Math.max((nStringLength + nCharOffset) % nStringLength, 0) : 0;
    nStrLen = Number.isInteger(nCharLength) ? Math.max(nCharLength, 0) + nCharStart > nStringLength ? nStringLength - nCharStart : nCharLength : nStringLength;

    if (nCharStart === 0 && nStrLen === nStringLength) { return this; }

    if (bVariableLen) {
        nStartOffset = this.makeIndex(nCharStart);
        nChrLen = this.makeIndex(nStrLen, nStartOffset) - nStartOffset;
    } else {
        nStartOffset = nCharStart;
        nChrLen = nStrLen - nCharStart;
    }

    if (this.encoding === "UTF-16") {
        nStartOffset <<= 1;
    } else if (this.encoding === "UTF-32") {
        nStartOffset <<= 2;
    }

    return new StringView(this.buffer, this.encoding, nStartOffset, nChrLen);

};

StringView.prototype.forEachChar = function (fCallback, oThat, nChrOffset, nChrLen) {

    var aSource = this.rawData, nRawEnd, nRawIdx;

    if (this.encoding === "UTF-8" || this.encoding === "UTF-16") {

        var fGetInptChrSize, fGetInptChrCode;

        if (this.encoding === "UTF-8") {
            fGetInptChrSize = StringView.getUTF8CharLength;
            fGetInptChrCode = StringView.loadUTF8CharCode;
        } else if (this.encoding === "UTF-16") {
            fGetInptChrSize = StringView.getUTF16CharLength;
            fGetInptChrCode = StringView.loadUTF16CharCode;
        }

        nRawIdx = isFinite(nChrOffset) ? this.makeIndex(nChrOffset) : 0;
        nRawEnd = isFinite(nChrLen) ? this.makeIndex(nChrLen, nRawIdx) : aSource.length;

        for (var nChrCode, nChrIdx = 0; nRawIdx < nRawEnd; nChrIdx++) {
            nChrCode = fGetInptChrCode(aSource, nRawIdx);
            fCallback.call(oThat || null, nChrCode, nChrIdx, nRawIdx, aSource);
            nRawIdx += fGetInptChrSize(nChrCode);
        }

    } else {

        nRawIdx = isFinite(nChrOffset) ? nChrOffset : 0;
        nRawEnd = isFinite(nChrLen) ? nChrLen + nRawIdx : aSource.length;

        for (nRawIdx; nRawIdx < nRawEnd; nRawIdx++) {
            fCallback.call(oThat || null, aSource[nRawIdx], nRawIdx, nRawIdx, aSource);
        }

    }

};

StringView.prototype.valueOf = StringView.prototype.toString = function () {

    if (this.encoding !== "UTF-8" && this.encoding !== "UTF-16") {
        /* ASCII, UTF-32 or BinaryString to DOMString */
        return String.fromCharCode.apply(null, this.rawData);
    }

    var fGetCode, fGetIncr, sView = "";

    if (this.encoding === "UTF-8") {
        fGetIncr = StringView.getUTF8CharLength;
        fGetCode = StringView.loadUTF8CharCode;
    } else if (this.encoding === "UTF-16") {
        fGetIncr = StringView.getUTF16CharLength;
        fGetCode = StringView.loadUTF16CharCode;
    }

    for (var nChr, nLen = this.rawData.length, nIdx = 0; nIdx < nLen; nIdx += fGetIncr(nChr)) {
        nChr = fGetCode(this.rawData, nIdx);
        sView += String.fromCharCode(nChr);
    }

    return sView;

};/**
  DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
  It's like a file-like DataView on steroids.

  @param {ArrayBuffer} arrayBuffer ArrayBuffer to read from.
  @param {?Number} byteOffset Offset from arrayBuffer beginning for the DataStream.
  @param {?Boolean} endianness DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN (the default).
  */
DataStream = function (arrayBuffer, byteOffset, endianness) {
    this._byteOffset = byteOffset || 0;
    if (arrayBuffer instanceof ArrayBuffer) {
        this.buffer = arrayBuffer;
    } else if (typeof arrayBuffer == "object") {
        this.dataView = arrayBuffer;
        if (byteOffset) {
            this._byteOffset += byteOffset;
        }
    } else {
        this.buffer = new ArrayBuffer(arrayBuffer || 1);
    }
    this.position = 0;
    this.endianness = endianness == null ? DataStream.LITTLE_ENDIAN : endianness;
};
DataStream.prototype = {};

/* Fix for Opera 12 not defining BYTES_PER_ELEMENT in typed array prototypes. */
if (Uint8Array.prototype.BYTES_PER_ELEMENT === undefined) {
    Uint8Array.prototype.BYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT;
    Int8Array.prototype.BYTES_PER_ELEMENT = Int8Array.BYTES_PER_ELEMENT;
    Uint8ClampedArray.prototype.BYTES_PER_ELEMENT = Uint8ClampedArray.BYTES_PER_ELEMENT;
    Uint16Array.prototype.BYTES_PER_ELEMENT = Uint16Array.BYTES_PER_ELEMENT;
    Int16Array.prototype.BYTES_PER_ELEMENT = Int16Array.BYTES_PER_ELEMENT;
    Uint32Array.prototype.BYTES_PER_ELEMENT = Uint32Array.BYTES_PER_ELEMENT;
    Int32Array.prototype.BYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT;
    Float64Array.prototype.BYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT;
}

/**
  Saves the DataStream contents to the given filename.
  Uses Chrome's anchor download property to initiate download.

  @param {string} filename Filename to save as.
  @return {null}
  */
DataStream.prototype.save = function (filename) {
    var blob = new Blob(this.buffer);
    var URL = (window.webkitURL || window.URL);
    if (URL && URL.createObjectURL) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', filename);
        a.click();
        URL.revokeObjectURL(url);
    } else {
        throw ("DataStream.save: Can't create object URL.");
    }
};

/**
  Big-endian const to use as default endianness.
  @type {boolean}
  */
DataStream.BIG_ENDIAN = false;

/**
  Little-endian const to use as default endianness.
  @type {boolean}
  */
DataStream.LITTLE_ENDIAN = true;

/**
  Whether to extend DataStream buffer when trying to write beyond its size.
  If set, the buffer is reallocated to twice its current size until the
  requested write fits the buffer.
  @type {boolean}
  */
DataStream.prototype._dynamicSize = true;
Object.defineProperty(DataStream.prototype, 'dynamicSize',
  {
      get: function () {
          return this._dynamicSize;
      },
      set: function (v) {
          if (!v) {
              this._trimAlloc();
          }
          this._dynamicSize = v;
      }
  });

/**
  Virtual byte length of the DataStream backing buffer.
  Updated to be max of original buffer size and last written size.
  If dynamicSize is false is set to buffer size.
  @type {number}
  */
DataStream.prototype._byteLength = 0;

/**
  Returns the byte length of the DataStream object.
  @type {number}
  */
Object.defineProperty(DataStream.prototype, 'byteLength',
  {
      get: function () {
          return this._byteLength - this._byteOffset;
      }
  });

/**
  Set/get the backing ArrayBuffer of the DataStream object.
  The setter updates the DataView to point to the new buffer.
  @type {Object}
  */
Object.defineProperty(DataStream.prototype, 'buffer',
  {
      get: function () {
          this._trimAlloc();
          return this._buffer;
      },
      set: function (v) {
          this._buffer = v;
          this._dataView = new DataView(this._buffer, this._byteOffset);
          this._byteLength = this._buffer.byteLength;
      }
  });

/**
  Set/get the byteOffset of the DataStream object.
  The setter updates the DataView to point to the new byteOffset.
  @type {number}
  */
Object.defineProperty(DataStream.prototype, 'byteOffset',
  {
      get: function () {
          return this._byteOffset;
      },
      set: function (v) {
          this._byteOffset = v;
          this._dataView = new DataView(this._buffer, this._byteOffset);
          this._byteLength = this._buffer.byteLength;
      }
  });

/**
  Set/get the backing DataView of the DataStream object.
  The setter updates the buffer and byteOffset to point to the DataView values.
  @type {Object}
  */
Object.defineProperty(DataStream.prototype, 'dataView',
  {
      get: function () {
          return this._dataView;
      },
      set: function (v) {
          this._byteOffset = v.byteOffset;
          this._buffer = v.buffer;
          this._dataView = new DataView(this._buffer, this._byteOffset);
          this._byteLength = this._byteOffset + v.byteLength;
      }
  });

/**
  Internal function to resize the DataStream buffer when required.
  @param {number} extra Number of bytes to add to the buffer allocation.
  @return {null}
  */
DataStream.prototype._realloc = function (extra) {
    if (!this._dynamicSize) {
        return;
    }
    var req = this._byteOffset + this.position + extra;
    var blen = this._buffer.byteLength;
    if (req <= blen) {
        if (req > this._byteLength) {
            this._byteLength = req;
        }
        return;
    }
    if (blen < 1) {
        blen = 1;
    }
    while (req > blen) {
        blen *= 2;
    }
    var buf = new ArrayBuffer(blen);
    var src = new Uint8Array(this._buffer);
    var dst = new Uint8Array(buf, 0, src.length);
    dst.set(src);
    this.buffer = buf;
    this._byteLength = req;
};

/**
  Internal function to trim the DataStream buffer when required.
  Used for stripping out the extra bytes from the backing buffer when
  the virtual byteLength is smaller than the buffer byteLength (happens after
  growing the buffer with writes and not filling the extra space completely).

  @return {null}
  */
DataStream.prototype._trimAlloc = function () {
    if (this._byteLength == this._buffer.byteLength) {
        return;
    }
    var buf = new ArrayBuffer(this._byteLength);
    var dst = new Uint8Array(buf);
    var src = new Uint8Array(this._buffer, 0, dst.length);
    dst.set(src);
    this.buffer = buf;
};

/**
  Sets the DataStream read/write position to given position.
  Clamps between 0 and DataStream length.

  @param {number} pos Position to seek to.
  @return {null}
  */
DataStream.prototype.seek = function (pos) {
    var npos = Math.max(0, Math.min(this.byteLength, pos));
    this.position = (isNaN(npos) || !isFinite(npos)) ? 0 : npos;
};

/**
  Returns true if the DataStream seek pointer is at the end of buffer and
  there's no more data to read.

  @return {boolean} True if the seek pointer is at the end of the buffer.
  */
DataStream.prototype.isEof = function () {
    return (this.position >= this.byteLength);
};

/**
  Maps an Int32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt32Array = function (length, e) {
    this._realloc(length * 4);
    var arr = new Int32Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 4;
    return arr;
};

/**
  Maps an Int16Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int16Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt16Array = function (length, e) {
    this._realloc(length * 2);
    var arr = new Int16Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 2;
    return arr;
};

/**
  Maps an Int8Array into the DataStream buffer.

  Nice for quickly reading in data.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int8Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt8Array = function (length) {
    this._realloc(length * 1);
    var arr = new Int8Array(this._buffer, this.byteOffset + this.position, length);
    this.position += length * 1;
    return arr;
};

/**
  Maps a Uint32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint32Array = function (length, e) {
    this._realloc(length * 4);
    var arr = new Uint32Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 4;
    return arr;
};

/**
  Maps a Uint16Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint16Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint16Array = function (length, e) {
    this._realloc(length * 2);
    var arr = new Uint16Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 2;
    return arr;
};

/**
  Maps a Uint8Array into the DataStream buffer.

  Nice for quickly reading in data.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint8Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint8Array = function (length) {
    this._realloc(length * 1);
    var arr = new Uint8Array(this._buffer, this.byteOffset + this.position, length);
    this.position += length * 1;
    return arr;
};

/**
  Maps a Float64Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Float64Array to the DataStream backing buffer.
  */
DataStream.prototype.mapFloat64Array = function (length, e) {
    this._realloc(length * 8);
    var arr = new Float64Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 8;
    return arr;
};

/**
  Maps a Float32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Float32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapFloat32Array = function (length, e) {
    this._realloc(length * 4);
    var arr = new Float32Array(this._buffer, this.byteOffset + this.position, length);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += length * 4;
    return arr;
};

/**
  Reads an Int32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int32Array.
 */
DataStream.prototype.readInt32Array = function (length, e) {
    length = length == null ? (this.byteLength - this.position / 4) : length;
    var arr = new Int32Array(length);
    DataStream.memcpy(arr.buffer, 0,
                      this.buffer, this.byteOffset + this.position,
                      length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr;
};

/**
  Reads an Int16Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int16Array.
 */
DataStream.prototype.readInt16Array = function (length, e) {
    length = length == null ? (this.byteLength - this.position / 2) : length;
    var arr = new Int16Array(length);
    DataStream.memcpy(arr.buffer, 0,
                      this.buffer, this.byteOffset + this.position,
                      length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr;
};

/**
  Reads an Int8Array of desired length from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int8Array.
 */
DataStream.prototype.readInt8Array = function (length) {
    length = length == null ? (this.byteLength - this.position) : length;
    var arr = new Int8Array(length);
    DataStream.memcpy(arr.buffer, 0,
                      this.buffer, this.byteOffset + this.position,
                      length * arr.BYTES_PER_ELEMENT);
    this.position += arr.byteLength;
    return arr;
};

/**
  Reads a Uint32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint32Array.
 */
DataStream.prototype.readUint32Array = function (length, e) {
    length = length == null ? (this.byteLength - this.position / 4) : length;
    var arr = new Uint32Array(length);
    DataStream.memcpy(arr.buffer, 0,
                      this.buffer, this.byteOffset + this.position,
                      length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr;
};

/**
  Reads a Uint16Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint16Array.
 */
DataStream.prototype.readUint16Array = function (length, e) {
    length = length == null ? (this.byteLength - this.position / 2) : length;
    var arr = new Uint16Array(length);
    DataStream.memcpy(arr.buffer, 0,
                      this.buffer, this.byteOffset + this.position,
                      length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr;
};

/**
  Reads a Uint8Array of desired length from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint8Array.
 */
DataStream.prototype.readUint8Array = function (length) {
    length = length == null ? (this.byteLength - this.position) : length;
    var arr = new Uint8Array(length);
    DataStream.memcpy(arr.buffer, 0,
                      this.buffer, this.byteOffset + this.position,
                      length * arr.BYTES_PER_ELEMENT);
    this.position += arr.byteLength;
    return arr;
};

/**
  Reads a Float64Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Float64Array.
 */
DataStream.prototype.readFloat64Array = function (length, e) {
    length = length == null ? (this.byteLength - this.position / 8) : length;
    var arr = new Float64Array(length);
    DataStream.memcpy(arr.buffer, 0,
                      this.buffer, this.byteOffset + this.position,
                      length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr;
};

/**
  Reads a Float32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Float32Array.
 */
DataStream.prototype.readFloat32Array = function (length, e) {
    length = length == null ? (this.byteLength - this.position / 4) : length;
    var arr = new Float32Array(length);
    DataStream.memcpy(arr.buffer, 0,
                      this.buffer, this.byteOffset + this.position,
                      length * arr.BYTES_PER_ELEMENT);
    DataStream.arrayToNative(arr, e == null ? this.endianness : e);
    this.position += arr.byteLength;
    return arr;
};

/**
  Writes an Int32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeInt32Array = function (arr, e) {
    this._realloc(arr.length * 4);
    if (arr instanceof Int32Array &&
        (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position,
                          arr.buffer, arr.byteOffset,
                          arr.byteLength);
        this.mapInt32Array(arr.length, e);
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeInt32(arr[i], e);
        }
    }
};

/**
  Writes an Int16Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeInt16Array = function (arr, e) {
    this._realloc(arr.length * 2);
    if (arr instanceof Int16Array &&
        (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position,
                          arr.buffer, arr.byteOffset,
                          arr.byteLength);
        this.mapInt16Array(arr.length, e);
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeInt16(arr[i], e);
        }
    }
};

/**
  Writes an Int8Array to the DataStream.

  @param {Object} arr The array to write.
 */
DataStream.prototype.writeInt8Array = function (arr) {
    this._realloc(arr.length * 1);
    if (arr instanceof Int8Array &&
        (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position,
                          arr.buffer, arr.byteOffset,
                          arr.byteLength);
        this.mapInt8Array(arr.length);
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeInt8(arr[i]);
        }
    }
};

/**
  Writes a Uint32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeUint32Array = function (arr, e) {
    this._realloc(arr.length * 4);
    if (arr instanceof Uint32Array &&
        (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position,
                          arr.buffer, arr.byteOffset,
                          arr.byteLength);
        this.mapUint32Array(arr.length, e);
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeUint32(arr[i], e);
        }
    }
};

/**
  Writes a Uint16Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeUint16Array = function (arr, e) {
    this._realloc(arr.length * 2);
    if (arr instanceof Uint16Array &&
        (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position,
                          arr.buffer, arr.byteOffset,
                          arr.byteLength);
        this.mapUint16Array(arr.length, e);
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeUint16(arr[i], e);
        }
    }
};

/**
  Writes a Uint8Array to the DataStream.

  @param {Object} arr The array to write.
 */
DataStream.prototype.writeUint8Array = function (arr) {
    this._realloc(arr.length * 1);
    if (arr instanceof Uint8Array &&
        (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position,
                          arr.buffer, arr.byteOffset,
                          arr.byteLength);
        this.mapUint8Array(arr.length);
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeUint8(arr[i]);
        }
    }
};

/**
  Writes a Float64Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeFloat64Array = function (arr, e) {
    this._realloc(arr.length * 8);
    if (arr instanceof Float64Array &&
        (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position,
                          arr.buffer, arr.byteOffset,
                          arr.byteLength);
        this.mapFloat64Array(arr.length, e);
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeFloat64(arr[i], e);
        }
    }
};

/**
  Writes a Float32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeFloat32Array = function (arr, e) {
    this._realloc(arr.length * 4);
    if (arr instanceof Float32Array &&
        (this.byteOffset + this.position) % arr.BYTES_PER_ELEMENT == 0) {
        DataStream.memcpy(this._buffer, this.byteOffset + this.position,
                          arr.buffer, arr.byteOffset,
                          arr.byteLength);
        this.mapFloat32Array(arr.length, e);
    } else {
        for (var i = 0; i < arr.length; i++) {
            this.writeFloat32(arr[i], e);
        }
    }
};


/**
  Reads a 32-bit int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readInt32 = function (e) {
    var v = this._dataView.getInt32(this.position, e == null ? this.endianness : e);
    this.position += 4;
    return v;
};

/**
  Reads a 16-bit int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readInt16 = function (e) {
    var v = this._dataView.getInt16(this.position, e == null ? this.endianness : e);
    this.position += 2;
    return v;
};

/**
  Reads an 8-bit int from the DataStream.

  @return {number} The read number.
 */
DataStream.prototype.readInt8 = function () {
    var v = this._dataView.getInt8(this.position);
    this.position += 1;
    return v;
};

/**
  Reads a 32-bit unsigned int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readUint32 = function (e) {
    var v = this._dataView.getUint32(this.position, e == null ? this.endianness : e);
    this.position += 4;
    return v;
};



/**
  Reads a 16-bit unsigned int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readUint16 = function (e) {
    var v = this._dataView.getUint16(this.position, e == null ? this.endianness : e);
    this.position += 2;
    return v;
};

/**
  Reads an 8-bit unsigned int from the DataStream.

  @return {number} The read number.
 */
DataStream.prototype.readUint8 = function () {
    var v = this._dataView.getUint8(this.position);
    this.position += 1;
    return v;
};

/**
  Reads a 32-bit float from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readFloat32 = function (e) {
    var v = this._dataView.getFloat32(this.position, e == null ? this.endianness : e);
    this.position += 4;
    return v;
};

/**
  Reads a 64-bit float from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readFloat64 = function (e) {
    var v = this._dataView.getFloat64(this.position, e == null ? this.endianness : e);
    this.position += 8;
    return v;
};


/**
  Writes a 32-bit int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeInt32 = function (v, e) {
    this._realloc(4);
    this._dataView.setInt32(this.position, v, e == null ? this.endianness : e);
    this.position += 4;
};

/**
  Writes a 16-bit int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeInt16 = function (v, e) {
    this._realloc(2);
    this._dataView.setInt16(this.position, v, e == null ? this.endianness : e);
    this.position += 2;
};

/**
  Writes an 8-bit int to the DataStream.

  @param {number} v Number to write.
 */
DataStream.prototype.writeInt8 = function (v) {
    this._realloc(1);
    this._dataView.setInt8(this.position, v);
    this.position += 1;
};

/**
  Writes a 32-bit unsigned int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeUint32 = function (v, e) {
    this._realloc(4);
    this._dataView.setUint32(this.position, v, e == null ? this.endianness : e);
    this.position += 4;
};

/**
  Writes a 16-bit unsigned int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeUint16 = function (v, e) {
    this._realloc(2);
    this._dataView.setUint16(this.position, v, e == null ? this.endianness : e);
    this.position += 2;
};

/**
  Writes an 8-bit unsigned  int to the DataStream.

  @param {number} v Number to write.
 */
DataStream.prototype.writeUint8 = function (v) {
    this._realloc(1);
    this._dataView.setUint8(this.position, v);
    this.position += 1;
};

/**
  Writes a 32-bit float to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeFloat32 = function (v, e) {
    this._realloc(4);
    this._dataView.setFloat32(this.position, v, e == null ? this.endianness : e);
    this.position += 4;
};

/**
  Writes a 64-bit float to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeFloat64 = function (v, e) {
    this._realloc(8);
    this._dataView.setFloat64(this.position, v, e == null ? this.endianness : e);
    this.position += 8;
};

/**
  Native endianness. Either DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN
  depending on the platform endianness.

  @type {boolean}
 */
DataStream.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0;

/**
  Copies byteLength bytes from the src buffer at srcOffset to the
  dst buffer at dstOffset.

  @param {Object} dst Destination ArrayBuffer to write to.
  @param {number} dstOffset Offset to the destination ArrayBuffer.
  @param {Object} src Source ArrayBuffer to read from.
  @param {number} srcOffset Offset to the source ArrayBuffer.
  @param {number} byteLength Number of bytes to copy.
 */
DataStream.memcpy = function (dst, dstOffset, src, srcOffset, byteLength) {
    var dstU8 = new Uint8Array(dst, dstOffset, byteLength);
    var srcU8 = new Uint8Array(src, srcOffset, byteLength);
    dstU8.set(srcU8);
};

/**
  Converts array to native endianness in-place.

  @param {Object} array Typed array to convert.
  @param {boolean} arrayIsLittleEndian True if the data in the array is
                                       little-endian. Set false for big-endian.
  @return {Object} The converted typed array.
 */
DataStream.arrayToNative = function (array, arrayIsLittleEndian) {
    if (arrayIsLittleEndian == this.endianness) {
        return array;
    } else {
        return this.flipArrayEndianness(array);
    }
};

/**
  Converts native endianness array to desired endianness in-place.

  @param {Object} array Typed array to convert.
  @param {boolean} littleEndian True if the converted array should be
                                little-endian. Set false for big-endian.
  @return {Object} The converted typed array.
 */
DataStream.nativeToEndian = function (array, littleEndian) {
    if (this.endianness == littleEndian) {
        return array;
    } else {
        return this.flipArrayEndianness(array);
    }
};

/**
  Flips typed array endianness in-place.

  @param {Object} array Typed array to flip.
  @return {Object} The converted typed array.
 */
DataStream.flipArrayEndianness = function (array) {
    var u8 = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
    for (var i = 0; i < array.byteLength; i += array.BYTES_PER_ELEMENT) {
        for (var j = i + array.BYTES_PER_ELEMENT - 1, k = i; j > k; j--, k++) {
            var tmp = u8[k];
            u8[k] = u8[j];
            u8[j] = tmp;
        }
    }
    return array;
};

/**
  Creates an array from an array of character codes.
  Uses String.fromCharCode in chunks for memory efficiency and then concatenates
  the resulting string chunks.

  @param {array} array Array of character codes.
  @return {string} String created from the character codes.
**/
DataStream.createStringFromArray = function (array) {
    var chunk_size = 0x8000;
    var chunks = [];
    for (var i = 0; i < array.length; i += chunk_size) {
        chunks.push(String.fromCharCode.apply(null, array.subarray(i, i + chunk_size)));
    }
    return chunks.join("");
};

/**
  Seek position where DataStream#readStruct ran into a problem.
  Useful for debugging struct parsing.

  @type {number}
 */
DataStream.prototype.failurePosition = 0;

/**
  Reads a struct of data from the DataStream. The struct is defined as
  a flat array of [name, type]-pairs. See the example below:

  ds.readStruct([
    'headerTag', 'uint32', // Uint32 in DataStream endianness.
    'headerTag2', 'uint32be', // Big-endian Uint32.
    'headerTag3', 'uint32le', // Little-endian Uint32.
    'array', ['[]', 'uint32', 16], // Uint32Array of length 16.
    'array2Length', 'uint32',
    'array2', ['[]', 'uint32', 'array2Length'] // Uint32Array of length array2Length
  ]);

  The possible values for the type are as follows:

  // Number types

  // Unsuffixed number types use DataStream endianness.
  // To explicitly specify endianness, suffix the type with
  // 'le' for little-endian or 'be' for big-endian,
  // e.g. 'int32be' for big-endian int32.

  'uint8' -- 8-bit unsigned int
  'uint16' -- 16-bit unsigned int
  'uint32' -- 32-bit unsigned int
  'int8' -- 8-bit int
  'int16' -- 16-bit int
  'int32' -- 32-bit int
  'float32' -- 32-bit float
  'float64' -- 64-bit float

  // String types
  'cstring' -- ASCII string terminated by a zero byte.
  'string:N' -- ASCII string of length N, where N is a literal integer.
  'string:variableName' -- ASCII string of length $variableName,
    where 'variableName' is a previously parsed number in the current struct.
  'string,CHARSET:N' -- String of byteLength N encoded with given CHARSET.
  'u16string:N' -- UCS-2 string of length N in DataStream endianness.
  'u16stringle:N' -- UCS-2 string of length N in little-endian.
  'u16stringbe:N' -- UCS-2 string of length N in big-endian.

  // Complex types
  [name, type, name_2, type_2, ..., name_N, type_N] -- Struct
  function(dataStream, struct) {} -- Callback function to read and return data.
  {get: function(dataStream, struct) {},
   set: function(dataStream, struct) {}}
  -- Getter/setter functions to read and return data, handy for using the same
     struct definition for reading and writing structs.
  ['[]', type, length] -- Array of given type and length. The length can be either
                        a number, a string that references a previously-read
                        field, or a callback function(struct, dataStream, type){}.
                        If length is '*', reads in as many elements as it can.

  @param {Object} structDefinition Struct definition object.
  @return {Object} The read struct. Null if failed to read struct.
 */
DataStream.prototype.readStruct = function (structDefinition) {
    var struct = {}, t, v, n;
    var p = this.position;
    for (var i = 0; i < structDefinition.length; i += 2) {
        t = structDefinition[i + 1];
        v = this.readType(t, struct);
        if (v == null) {
            if (this.failurePosition == 0) {
                this.failurePosition = this.position;
            }
            this.position = p;
            return null;
        }
        struct[structDefinition[i]] = v;
    }
    return struct;
};

/**
  Read UCS-2 string of desired length and endianness from the DataStream.

  @param {number} length The length of the string to read.
  @param {boolean} endianness The endianness of the string data in the DataStream.
  @return {string} The read string.
 */
DataStream.prototype.readUCS2String = function (length, endianness) {
    return DataStream.createStringFromArray(this.readUint16Array(length, endianness));
};

/**
  Write a UCS-2 string of desired endianness to the DataStream. The
  lengthOverride argument lets you define the number of characters to write.
  If the string is shorter than lengthOverride, the extra space is padded with
  zeroes.

  @param {string} str The string to write.
  @param {?boolean} endianness The endianness to use for the written string data.
  @param {?number} lengthOverride The number of characters to write.
 */
DataStream.prototype.writeUCS2String = function (str, endianness, lengthOverride) {
    if (lengthOverride == null) {
        lengthOverride = str.length;
    }
    for (var i = 0; i < str.length && i < lengthOverride; i++) {
        this.writeUint16(str.charCodeAt(i), endianness);
    }
    for (; i < lengthOverride; i++) {
        this.writeUint16(0);
    }
};

/**
  Read a string of desired length and encoding from the DataStream.

  @param {number} length The length of the string to read in bytes.
  @param {?string} encoding The encoding of the string data in the DataStream.
                            Defaults to ASCII.
  @return {string} The read string.
 */
DataStream.prototype.readUTF8 = function () {
    var length = this._dataView.getInt16(this.position, true);
    this.position += 2;
    var view = this.buffer.slice(this.position, this.position + length);
    var result = new StringView(view).toString();
    this.position += length;
    return result;
};

DataStream.prototype.readLongUTF8 = function () {
    var length = this._dataView.getInt32(this.position, true);
    this.position += 4;
    var view = this.buffer.slice(this.position, this.position + length);
    var result = new StringView(view).toString();
    this.position += length;
    return result;
};



DataStream.prototype.readString = function (length, encoding) {
    if (encoding == null || encoding == "ASCII") {
        return DataStream.createStringFromArray(this.mapUint8Array(length == null ? this.byteLength - this.position : length));
    } else {
        return (new TextDecoder(encoding)).decode(this.mapUint8Array(length));
    }
};

/**
  Writes a string of desired length and encoding to the DataStream.

  @param {string} s The string to write.
  @param {?string} encoding The encoding for the written string data.
                            Defaults to ASCII.
  @param {?number} length The number of characters to write.
 */
DataStream.prototype.writeString = function (s, encoding, length) {
    if (encoding == null || encoding == "ASCII") {
        if (length != null) {
            var i = 0;
            var len = Math.min(s.length, length);
            for (i = 0; i < len; i++) {
                this.writeUint8(s.charCodeAt(i));
            }
            for (; i < length; i++) {
                this.writeUint8(0);
            }
        } else {
            for (var i = 0; i < s.length; i++) {
                this.writeUint8(s.charCodeAt(i));
            }
        }
    } else {
        this.writeUint8Array((new TextEncoder(encoding)).encode(s.substring(0, length)));
    }
};


/**
  Read null-terminated string of desired length from the DataStream. Truncates
  the returned string so that the null byte is not a part of it.

  @param {?number} length The length of the string to read.
  @return {string} The read string.
 */
DataStream.prototype.readCString = function (length) {
    var blen = this.byteLength - this.position;
    var u8 = new Uint8Array(this._buffer, this._byteOffset + this.position);
    var len = blen;
    if (length != null) {
        len = Math.min(length, blen);
    }
    for (var i = 0; i < len && u8[i] != 0; i++); // find first zero byte
    var s = DataStream.createStringFromArray(this.mapUint8Array(i));
    if (length != null) {
        this.position += len - i;
    } else if (i != blen) {
        this.position += 1; // trailing zero if not at end of buffer
    }
    return s;
};

/**
  Writes a null-terminated string to DataStream and zero-pads it to length
  bytes. If length is not given, writes the string followed by a zero.
  If string is longer than length, the written part of the string does not have
  a trailing zero.

  @param {string} s The string to write.
  @param {?number} length The number of characters to write.
 */
DataStream.prototype.writeCString = function (s, length) {
    if (length != null) {
        var i = 0;
        var len = Math.min(s.length, length);
        for (i = 0; i < len; i++) {
            this.writeUint8(s.charCodeAt(i));
        }
        for (; i < length; i++) {
            this.writeUint8(0);
        }
    } else {
        for (var i = 0; i < s.length; i++) {
            this.writeUint8(s.charCodeAt(i));
        }
        this.writeUint8(0);
    }
};

/**
  Reads an object of type t from the DataStream, passing struct as the thus-far
  read struct to possible callbacks that refer to it. Used by readStruct for
  reading in the values, so the type is one of the readStruct types.

  @param {Object} t Type of the object to read.
  @param {?Object} struct Struct to refer to when resolving length references
                          and for calling callbacks.
  @return {?Object} Returns the object on successful read, null on unsuccessful.
 */
DataStream.prototype.readType = function (t, struct) {
    if (typeof t == "function") {
        return t(this, struct);
    } else if (typeof t == "object" && !(t instanceof Array)) {
        return t.get(this, struct);
    } else if (t instanceof Array && t.length != 3) {
        return this.readStruct(t, struct);
    }
    var v = null;
    var lengthOverride = null;
    var charset = "ASCII";
    var pos = this.position;
    var len;
    if (typeof t == 'string' && /:/.test(t)) {
        var tp = t.split(":");
        t = tp[0];
        len = tp[1];

        // allow length to be previously parsed variable
        // e.g. 'string:fieldLength', if `fieldLength` has
        // been parsed previously.
        if (struct[len] != null) {
            lengthOverride = parseInt(struct[len]);
        } else {
            // assume literal integer e.g., 'string:4'
            lengthOverride = parseInt(tp[1]);
        }
    }
    if (typeof t == 'string' && /,/.test(t)) {
        var tp = t.split(",");
        t = tp[0];
        charset = parseInt(tp[1]);
    }
    switch (t) {

        case 'uint8':
            v = this.readUint8(); break;
        case 'int8':
            v = this.readInt8(); break;

        case 'uint16':
            v = this.readUint16(this.endianness); break;
        case 'int16':
            v = this.readInt16(this.endianness); break;
        case 'uint32':
            v = this.readUint32(this.endianness); break;
        case 'int32':
            v = this.readInt32(this.endianness); break;
        case 'float32':
            v = this.readFloat32(this.endianness); break;
        case 'float64':
            v = this.readFloat64(this.endianness); break;

        case 'uint16be':
            v = this.readUint16(DataStream.BIG_ENDIAN); break;
        case 'int16be':
            v = this.readInt16(DataStream.BIG_ENDIAN); break;
        case 'uint32be':
            v = this.readUint32(DataStream.BIG_ENDIAN); break;
        case 'int32be':
            v = this.readInt32(DataStream.BIG_ENDIAN); break;
        case 'float32be':
            v = this.readFloat32(DataStream.BIG_ENDIAN); break;
        case 'float64be':
            v = this.readFloat64(DataStream.BIG_ENDIAN); break;

        case 'uint16le':
            v = this.readUint16(DataStream.LITTLE_ENDIAN); break;
        case 'int16le':
            v = this.readInt16(DataStream.LITTLE_ENDIAN); break;
        case 'uint32le':
            v = this.readUint32(DataStream.LITTLE_ENDIAN); break;
        case 'int32le':
            v = this.readInt32(DataStream.LITTLE_ENDIAN); break;
        case 'float32le':
            v = this.readFloat32(DataStream.LITTLE_ENDIAN); break;
        case 'float64le':
            v = this.readFloat64(DataStream.LITTLE_ENDIAN); break;

        case 'cstring':
            v = this.readCString(lengthOverride); break;

        case 'string':
            v = this.readString(lengthOverride, charset); break;

        case 'u16string':
            v = this.readUCS2String(lengthOverride, this.endianness); break;

        case 'u16stringle':
            v = this.readUCS2String(lengthOverride, DataStream.LITTLE_ENDIAN); break;

        case 'u16stringbe':
            v = this.readUCS2String(lengthOverride, DataStream.BIG_ENDIAN); break;

        default:
            if (t.length == 3) {
                var ta = t[1];
                var len = t[2];
                var length = 0;
                if (typeof len == 'function') {
                    length = len(struct, this, t);
                } else if (typeof len == 'string' && struct[len] != null) {
                    length = parseInt(struct[len]);
                } else {
                    length = parseInt(len);
                }
                if (typeof ta == "string") {
                    var tap = ta.replace(/(le|be)$/, '');
                    var endianness = null;
                    if (/le$/.test(ta)) {
                        endianness = DataStream.LITTLE_ENDIAN;
                    } else if (/be$/.test(ta)) {
                        endianness = DataStream.BIG_ENDIAN;
                    }
                    if (len == '*') {
                        length = null;
                    }
                    switch (tap) {
                        case 'uint8':
                            v = this.readUint8Array(length); break;
                        case 'uint16':
                            v = this.readUint16Array(length, endianness); break;
                        case 'uint32':
                            v = this.readUint32Array(length, endianness); break;
                        case 'int8':
                            v = this.readInt8Array(length); break;
                        case 'int16':
                            v = this.readInt16Array(length, endianness); break;
                        case 'int32':
                            v = this.readInt32Array(length, endianness); break;
                        case 'float32':
                            v = this.readFloat32Array(length, endianness); break;
                        case 'float64':
                            v = this.readFloat64Array(length, endianness); break;
                        case 'cstring':
                        case 'utf16string':
                        case 'string':
                            if (length == null) {
                                v = [];
                                while (!this.isEof()) {
                                    var u = this.readType(ta, struct);
                                    if (u == null) break;
                                    v.push(u);
                                }
                            } else {
                                v = new Array(length);
                                for (var i = 0; i < length; i++) {
                                    v[i] = this.readType(ta, struct);
                                }
                            }
                            break;
                    }
                } else {
                    if (len == '*') {
                        v = [];
                        this.buffer;
                        while (true) {
                            var p = this.position;
                            try {
                                var o = this.readType(ta, struct);
                                if (o == null) {
                                    this.position = p;
                                    break;
                                }
                                v.push(o);
                            } catch (e) {
                                this.position = p;
                                break;
                            }
                        }
                    } else {
                        v = new Array(length);
                        for (var i = 0; i < length; i++) {
                            var u = this.readType(ta, struct);
                            if (u == null) return null;
                            v[i] = u;
                        }
                    }
                }
                break;
            }
    }
    if (lengthOverride != null) {
        this.position = pos + lengthOverride;
    }
    return v;
};

/**
  Writes a struct to the DataStream. Takes a structDefinition that gives the
  types and a struct object that gives the values. Refer to readStruct for the
  structure of structDefinition.

  @param {Object} structDefinition Type definition of the struct.
  @param {Object} struct The struct data object.
  */
DataStream.prototype.writeStruct = function (structDefinition, struct) {
    for (var i = 0; i < structDefinition.length; i += 2) {
        var t = structDefinition[i + 1];
        this.writeType(t, struct[structDefinition[i]], struct);
    }
};

/**
  Writes object v of type t to the DataStream.

  @param {Object} t Type of data to write.
  @param {Object} v Value of data to write.
  @param {Object} struct Struct to pass to write callback functions.
  */
DataStream.prototype.writeType = function (t, v, struct) {
    if (typeof t == "function") {
        return t(this, v);
    } else if (typeof t == "object" && !(t instanceof Array)) {
        return t.set(this, v, struct);
    }
    var lengthOverride = null;
    var charset = "ASCII";
    var pos = this.position;
    if (typeof (t) == 'string' && /:/.test(t)) {
        var tp = t.split(":");
        t = tp[0];
        lengthOverride = parseInt(tp[1]);
    }
    if (typeof t == 'string' && /,/.test(t)) {
        var tp = t.split(",");
        t = tp[0];
        charset = parseInt(tp[1]);
    }

    switch (t) {
        case 'uint8':
            this.writeUint8(v);
            break;
        case 'int8':
            this.writeInt8(v);
            break;

        case 'uint16':
            this.writeUint16(v, this.endianness);
            break;
        case 'int16':
            this.writeInt16(v, this.endianness);
            break;
        case 'uint32':
            this.writeUint32(v, this.endianness);
            break;
        case 'int32':
            this.writeInt32(v, this.endianness);
            break;
        case 'float32':
            this.writeFloat32(v, this.endianness);
            break;
        case 'float64':
            this.writeFloat64(v, this.endianness);
            break;

        case 'uint16be':
            this.writeUint16(v, DataStream.BIG_ENDIAN);
            break;
        case 'int16be':
            this.writeInt16(v, DataStream.BIG_ENDIAN);
            break;
        case 'uint32be':
            this.writeUint32(v, DataStream.BIG_ENDIAN);
            break;
        case 'int32be':
            this.writeInt32(v, DataStream.BIG_ENDIAN);
            break;
        case 'float32be':
            this.writeFloat32(v, DataStream.BIG_ENDIAN);
            break;
        case 'float64be':
            this.writeFloat64(v, DataStream.BIG_ENDIAN);
            break;

        case 'uint16le':
            this.writeUint16(v, DataStream.LITTLE_ENDIAN);
            break;
        case 'int16le':
            this.writeInt16(v, DataStream.LITTLE_ENDIAN);
            break;
        case 'uint32le':
            this.writeUint32(v, DataStream.LITTLE_ENDIAN);
            break;
        case 'int32le':
            this.writeInt32(v, DataStream.LITTLE_ENDIAN);
            break;
        case 'float32le':
            this.writeFloat32(v, DataStream.LITTLE_ENDIAN);
            break;
        case 'float64le':
            this.writeFloat64(v, DataStream.LITTLE_ENDIAN);
            break;

        case 'cstring':
            this.writeCString(v, lengthOverride);
            break;

        case 'string':
            this.writeString(v, charset, lengthOverride);
            break;

        case 'u16string':
            this.writeUCS2String(v, this.endianness, lengthOverride);
            break;

        case 'u16stringle':
            this.writeUCS2String(v, DataStream.LITTLE_ENDIAN, lengthOverride);
            break;

        case 'u16stringbe':
            this.writeUCS2String(v, DataStream.BIG_ENDIAN, lengthOverride);
            break;

        default:
            if (t.length == 3) {
                var ta = t[1];
                for (var i = 0; i < v.length; i++) {
                    this.writeType(ta, v[i]);
                }
                break;
            } else {
                this.writeStruct(t, v);
                break;
            }
    }
    if (lengthOverride != null) {
        this.position = pos;
        this._realloc(lengthOverride);
        this.position = pos + lengthOverride;
    }
};

// Export DataStream for amd environments
if (typeof define === 'function' && define.amd) {
    define('DataStream', [], function () {
        return DataStream;
    });
}

// Export DataStream for CommonJS
if (typeof module === 'object' && module && module.exports) {
    module.exports = DataStream;
}
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.pako=t()}}(function(){return function t(e,a,i){function n(s,o){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(r)return r(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var d=a[s]={exports:{}};e[s][0].call(d.exports,function(t){var a=e[s][1][t];return n(a?a:t)},d,d.exports,t,e,a,i)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,a){"use strict";function i(t){if(!(this instanceof i))return new i(t);this.options=l.assign({level:w,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var a=o.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==b)throw new Error(d[a]);if(e.header&&o.deflateSetHeader(this.strm,e.header),e.dictionary){var n;if(n="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===_.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=o.deflateSetDictionary(this.strm,n),a!==b)throw new Error(d[a]);this._dict_set=!0}}function n(t,e){var a=new i(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}function r(t,e){return e=e||{},e.raw=!0,n(t,e)}function s(t,e){return e=e||{},e.gzip=!0,n(t,e)}var o=t("./zlib/deflate"),l=t("./utils/common"),h=t("./utils/strings"),d=t("./zlib/messages"),f=t("./zlib/zstream"),_=Object.prototype.toString,u=0,c=4,b=0,g=1,m=2,w=-1,p=0,v=8;i.prototype.push=function(t,e){var a,i,n=this.strm,r=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:e===!0?c:u,"string"==typeof t?n.input=h.string2buf(t):"[object ArrayBuffer]"===_.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new l.Buf8(r),n.next_out=0,n.avail_out=r),a=o.deflate(n,i),a!==g&&a!==b)return this.onEnd(a),this.ended=!0,!1;0!==n.avail_out&&(0!==n.avail_in||i!==c&&i!==m)||("string"===this.options.to?this.onData(h.buf2binstring(l.shrinkBuf(n.output,n.next_out))):this.onData(l.shrinkBuf(n.output,n.next_out)))}while((n.avail_in>0||0===n.avail_out)&&a!==g);return i===c?(a=o.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===b):i!==m||(this.onEnd(b),n.avail_out=0,!0)},i.prototype.onData=function(t){this.chunks.push(t)},i.prototype.onEnd=function(t){t===b&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=i,a.deflate=n,a.deflateRaw=r,a.gzip=s},{"./utils/common":3,"./utils/strings":4,"./zlib/deflate":8,"./zlib/messages":13,"./zlib/zstream":15}],2:[function(t,e,a){"use strict";function i(t){if(!(this instanceof i))return new i(t);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0===(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var a=s.inflateInit2(this.strm,e.windowBits);if(a!==h.Z_OK)throw new Error(d[a]);this.header=new _,s.inflateGetHeader(this.strm,this.header)}function n(t,e){var a=new i(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}function r(t,e){return e=e||{},e.raw=!0,n(t,e)}var s=t("./zlib/inflate"),o=t("./utils/common"),l=t("./utils/strings"),h=t("./zlib/constants"),d=t("./zlib/messages"),f=t("./zlib/zstream"),_=t("./zlib/gzheader"),u=Object.prototype.toString;i.prototype.push=function(t,e){var a,i,n,r,d,f,_=this.strm,c=this.options.chunkSize,b=this.options.dictionary,g=!1;if(this.ended)return!1;i=e===~~e?e:e===!0?h.Z_FINISH:h.Z_NO_FLUSH,"string"==typeof t?_.input=l.binstring2buf(t):"[object ArrayBuffer]"===u.call(t)?_.input=new Uint8Array(t):_.input=t,_.next_in=0,_.avail_in=_.input.length;do{if(0===_.avail_out&&(_.output=new o.Buf8(c),_.next_out=0,_.avail_out=c),a=s.inflate(_,h.Z_NO_FLUSH),a===h.Z_NEED_DICT&&b&&(f="string"==typeof b?l.string2buf(b):"[object ArrayBuffer]"===u.call(b)?new Uint8Array(b):b,a=s.inflateSetDictionary(this.strm,f)),a===h.Z_BUF_ERROR&&g===!0&&(a=h.Z_OK,g=!1),a!==h.Z_STREAM_END&&a!==h.Z_OK)return this.onEnd(a),this.ended=!0,!1;_.next_out&&(0!==_.avail_out&&a!==h.Z_STREAM_END&&(0!==_.avail_in||i!==h.Z_FINISH&&i!==h.Z_SYNC_FLUSH)||("string"===this.options.to?(n=l.utf8border(_.output,_.next_out),r=_.next_out-n,d=l.buf2string(_.output,n),_.next_out=r,_.avail_out=c-r,r&&o.arraySet(_.output,_.output,n,r,0),this.onData(d)):this.onData(o.shrinkBuf(_.output,_.next_out)))),0===_.avail_in&&0===_.avail_out&&(g=!0)}while((_.avail_in>0||0===_.avail_out)&&a!==h.Z_STREAM_END);return a===h.Z_STREAM_END&&(i=h.Z_FINISH),i===h.Z_FINISH?(a=s.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===h.Z_OK):i!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),_.avail_out=0,!0)},i.prototype.onData=function(t){this.chunks.push(t)},i.prototype.onEnd=function(t){t===h.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Inflate=i,a.inflate=n,a.inflateRaw=r,a.ungzip=n},{"./utils/common":3,"./utils/strings":4,"./zlib/constants":6,"./zlib/gzheader":9,"./zlib/inflate":11,"./zlib/messages":13,"./zlib/zstream":15}],3:[function(t,e,a){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var i in a)a.hasOwnProperty(i)&&(t[i]=a[i])}}return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,a,i,n){if(e.subarray&&t.subarray)return void t.set(e.subarray(a,a+i),n);for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){var e,a,i,n,r,s;for(i=0,e=0,a=t.length;e<a;e++)i+=t[e].length;for(s=new Uint8Array(i),n=0,e=0,a=t.length;e<a;e++)r=t[e],s.set(r,n),n+=r.length;return s}},r={arraySet:function(t,e,a,i,n){for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,n)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,r))},a.setTyped(i)},{}],4:[function(t,e,a){"use strict";function i(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&r))return String.fromCharCode.apply(null,n.shrinkBuf(t,e));for(var a="",i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a}var n=t("./common"),r=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var o=new n.Buf8(256),l=0;l<256;l++)o[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;o[254]=o[254]=1,a.string2buf=function(t){var e,a,i,r,s,o=t.length,l=0;for(r=0;r<o;r++)a=t.charCodeAt(r),55296===(64512&a)&&r+1<o&&(i=t.charCodeAt(r+1),56320===(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),r++)),l+=a<128?1:a<2048?2:a<65536?3:4;for(e=new n.Buf8(l),s=0,r=0;s<l;r++)a=t.charCodeAt(r),55296===(64512&a)&&r+1<o&&(i=t.charCodeAt(r+1),56320===(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),r++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},a.buf2binstring=function(t){return i(t,t.length)},a.binstring2buf=function(t){for(var e=new n.Buf8(t.length),a=0,i=e.length;a<i;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,n,r,s,l=e||t.length,h=new Array(2*l);for(n=0,a=0;a<l;)if(r=t[a++],r<128)h[n++]=r;else if(s=o[r],s>4)h[n++]=65533,a+=s-1;else{for(r&=2===s?31:3===s?15:7;s>1&&a<l;)r=r<<6|63&t[a++],s--;s>1?h[n++]=65533:r<65536?h[n++]=r:(r-=65536,h[n++]=55296|r>>10&1023,h[n++]=56320|1023&r)}return i(h,n)},a.utf8border=function(t,e){var a;for(e=e||t.length,e>t.length&&(e=t.length),a=e-1;a>=0&&128===(192&t[a]);)a--;return a<0?e:0===a?e:a+o[t[a]]>e?a:e}},{"./common":3}],5:[function(t,e,a){"use strict";function i(t,e,a,i){for(var n=65535&t|0,r=t>>>16&65535|0,s=0;0!==a;){s=a>2e3?2e3:a,a-=s;do n=n+e[i++]|0,r=r+n|0;while(--s);n%=65521,r%=65521}return n|r<<16|0}e.exports=i},{}],6:[function(t,e,a){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],7:[function(t,e,a){"use strict";function i(){for(var t,e=[],a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}function n(t,e,a,i){var n=r,s=i+a;t^=-1;for(var o=i;o<s;o++)t=t>>>8^n[255&(t^e[o])];return t^-1}var r=i();e.exports=n},{}],8:[function(t,e,a){"use strict";function i(t,e){return t.msg=D[e],e}function n(t){return(t<<1)-(t>4?9:0)}function r(t){for(var e=t.length;--e>=0;)t[e]=0}function s(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(R.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function o(t,e){C._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}function l(t,e){t.pending_buf[t.pending++]=e}function h(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function d(t,e,a,i){var n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,R.arraySet(e,t.input,t.next_in,n,a),1===t.state.wrap?t.adler=N(t.adler,e,n,a):2===t.state.wrap&&(t.adler=O(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)}function f(t,e){var a,i,n=t.max_chain_length,r=t.strstart,s=t.prev_length,o=t.nice_match,l=t.strstart>t.w_size-ft?t.strstart-(t.w_size-ft):0,h=t.window,d=t.w_mask,f=t.prev,_=t.strstart+dt,u=h[r+s-1],c=h[r+s];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do if(a=e,h[a+s]===c&&h[a+s-1]===u&&h[a]===h[r]&&h[++a]===h[r+1]){r+=2,a++;do;while(h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&r<_);if(i=dt-(_-r),r=_-dt,i>s){if(t.match_start=e,s=i,i>=o)break;u=h[r+s-1],c=h[r+s]}}while((e=f[e&d])>l&&0!==--n);return s<=t.lookahead?s:t.lookahead}function _(t){var e,a,i,n,r,s=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-ft)){R.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,a=t.hash_size,e=a;do i=t.head[--e],t.head[e]=i>=s?i-s:0;while(--a);a=s,e=a;do i=t.prev[--e],t.prev[e]=i>=s?i-s:0;while(--a);n+=s}if(0===t.strm.avail_in)break;if(a=d(t.strm,t.window,t.strstart+t.lookahead,n),t.lookahead+=a,t.lookahead+t.insert>=ht)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+ht-1])&t.hash_mask,t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<ht)););}while(t.lookahead<ft&&0!==t.strm.avail_in)}function u(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(_(t),0===t.lookahead&&e===I)return vt;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,o(t,!1),0===t.strm.avail_out))return vt;if(t.strstart-t.block_start>=t.w_size-ft&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.strstart>t.block_start&&(o(t,!1),0===t.strm.avail_out)?vt:vt}function c(t,e){for(var a,i;;){if(t.lookahead<ft){if(_(t),t.lookahead<ft&&e===I)return vt;if(0===t.lookahead)break}if(a=0,t.lookahead>=ht&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ft&&(t.match_length=f(t,a)),t.match_length>=ht)if(i=C._tr_tally(t,t.strstart-t.match_start,t.match_length-ht),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=ht){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=t.strstart<ht-1?t.strstart:ht-1,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function b(t,e){for(var a,i,n;;){if(t.lookahead<ft){if(_(t),t.lookahead<ft&&e===I)return vt;if(0===t.lookahead)break}if(a=0,t.lookahead>=ht&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=ht-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ft&&(t.match_length=f(t,a),t.match_length<=5&&(t.strategy===q||t.match_length===ht&&t.strstart-t.match_start>4096)&&(t.match_length=ht-1)),t.prev_length>=ht&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-ht,i=C._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-ht),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);if(t.match_available=0,t.match_length=ht-1,t.strstart++,i&&(o(t,!1),0===t.strm.avail_out))return vt}else if(t.match_available){if(i=C._tr_tally(t,0,t.window[t.strstart-1]),i&&o(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return vt}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=C._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<ht-1?t.strstart:ht-1,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function g(t,e){for(var a,i,n,r,s=t.window;;){if(t.lookahead<=dt){if(_(t),t.lookahead<=dt&&e===I)return vt;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=ht&&t.strstart>0&&(n=t.strstart-1,i=s[n],i===s[++n]&&i===s[++n]&&i===s[++n])){r=t.strstart+dt;do;while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<r);t.match_length=dt-(r-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=ht?(a=C._tr_tally(t,1,t.match_length-ht),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function m(t,e){for(var a;;){if(0===t.lookahead&&(_(t),0===t.lookahead)){if(e===I)return vt;break}if(t.match_length=0,a=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function w(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}function p(t){t.window_size=2*t.w_size,r(t.head),t.max_lazy_match=Z[t.level].max_lazy,t.good_match=Z[t.level].good_length,t.nice_match=Z[t.level].nice_length,t.max_chain_length=Z[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ht-1,t.match_available=0,t.ins_h=0}function v(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=V,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new R.Buf16(2*ot),this.dyn_dtree=new R.Buf16(2*(2*rt+1)),this.bl_tree=new R.Buf16(2*(2*st+1)),r(this.dyn_ltree),r(this.dyn_dtree),r(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new R.Buf16(lt+1),this.heap=new R.Buf16(2*nt+1),r(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new R.Buf16(2*nt+1),r(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function k(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=Q,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?ut:wt,t.adler=2===e.wrap?0:1,e.last_flush=I,C._tr_init(e),H):i(t,K)}function y(t){var e=k(t);return e===H&&p(t.state),e}function x(t,e){return t&&t.state?2!==t.state.wrap?K:(t.state.gzhead=e,H):K}function z(t,e,a,n,r,s){if(!t)return K;var o=1;if(e===Y&&(e=6),n<0?(o=0,n=-n):n>15&&(o=2,n-=16),r<1||r>$||a!==V||n<8||n>15||e<0||e>9||s<0||s>W)return i(t,K);8===n&&(n=9);var l=new v;return t.state=l,l.strm=t,l.wrap=o,l.gzhead=null,l.w_bits=n,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=r+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+ht-1)/ht),l.window=new R.Buf8(2*l.w_size),l.head=new R.Buf16(l.hash_size),l.prev=new R.Buf16(l.w_size),l.lit_bufsize=1<<r+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new R.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,y(t)}function B(t,e){return z(t,e,V,tt,et,J)}function S(t,e){var a,o,d,f;if(!t||!t.state||e>L||e<0)return t?i(t,K):K;if(o=t.state,!t.output||!t.input&&0!==t.avail_in||o.status===pt&&e!==F)return i(t,0===t.avail_out?P:K);if(o.strm=t,a=o.last_flush,o.last_flush=e,o.status===ut)if(2===o.wrap)t.adler=0,l(o,31),l(o,139),l(o,8),o.gzhead?(l(o,(o.gzhead.text?1:0)+(o.gzhead.hcrc?2:0)+(o.gzhead.extra?4:0)+(o.gzhead.name?8:0)+(o.gzhead.comment?16:0)),l(o,255&o.gzhead.time),l(o,o.gzhead.time>>8&255),l(o,o.gzhead.time>>16&255),l(o,o.gzhead.time>>24&255),l(o,9===o.level?2:o.strategy>=G||o.level<2?4:0),l(o,255&o.gzhead.os),o.gzhead.extra&&o.gzhead.extra.length&&(l(o,255&o.gzhead.extra.length),l(o,o.gzhead.extra.length>>8&255)),o.gzhead.hcrc&&(t.adler=O(t.adler,o.pending_buf,o.pending,0)),o.gzindex=0,o.status=ct):(l(o,0),l(o,0),l(o,0),l(o,0),l(o,0),l(o,9===o.level?2:o.strategy>=G||o.level<2?4:0),l(o,zt),o.status=wt);else{var _=V+(o.w_bits-8<<4)<<8,u=-1;u=o.strategy>=G||o.level<2?0:o.level<6?1:6===o.level?2:3,_|=u<<6,0!==o.strstart&&(_|=_t),_+=31-_%31,o.status=wt,h(o,_),0!==o.strstart&&(h(o,t.adler>>>16),h(o,65535&t.adler)),t.adler=1}if(o.status===ct)if(o.gzhead.extra){for(d=o.pending;o.gzindex<(65535&o.gzhead.extra.length)&&(o.pending!==o.pending_buf_size||(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending!==o.pending_buf_size));)l(o,255&o.gzhead.extra[o.gzindex]),o.gzindex++;o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),o.gzindex===o.gzhead.extra.length&&(o.gzindex=0,o.status=bt)}else o.status=bt;if(o.status===bt)if(o.gzhead.name){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.name.length?255&o.gzhead.name.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.gzindex=0,o.status=gt)}else o.status=gt;if(o.status===gt)if(o.gzhead.comment){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.comment.length?255&o.gzhead.comment.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.status=mt)}else o.status=mt;if(o.status===mt&&(o.gzhead.hcrc?(o.pending+2>o.pending_buf_size&&s(t),o.pending+2<=o.pending_buf_size&&(l(o,255&t.adler),l(o,t.adler>>8&255),t.adler=0,o.status=wt)):o.status=wt),0!==o.pending){if(s(t),0===t.avail_out)return o.last_flush=-1,H}else if(0===t.avail_in&&n(e)<=n(a)&&e!==F)return i(t,P);if(o.status===pt&&0!==t.avail_in)return i(t,P);if(0!==t.avail_in||0!==o.lookahead||e!==I&&o.status!==pt){var c=o.strategy===G?m(o,e):o.strategy===X?g(o,e):Z[o.level].func(o,e);if(c!==yt&&c!==xt||(o.status=pt),c===vt||c===yt)return 0===t.avail_out&&(o.last_flush=-1),H;if(c===kt&&(e===U?C._tr_align(o):e!==L&&(C._tr_stored_block(o,0,0,!1),e===T&&(r(o.head),0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),s(t),0===t.avail_out))return o.last_flush=-1,H}return e!==F?H:o.wrap<=0?j:(2===o.wrap?(l(o,255&t.adler),l(o,t.adler>>8&255),l(o,t.adler>>16&255),l(o,t.adler>>24&255),l(o,255&t.total_in),l(o,t.total_in>>8&255),l(o,t.total_in>>16&255),l(o,t.total_in>>24&255)):(h(o,t.adler>>>16),h(o,65535&t.adler)),s(t),o.wrap>0&&(o.wrap=-o.wrap),0!==o.pending?H:j)}function E(t){var e;return t&&t.state?(e=t.state.status,e!==ut&&e!==ct&&e!==bt&&e!==gt&&e!==mt&&e!==wt&&e!==pt?i(t,K):(t.state=null,e===wt?i(t,M):H)):K}function A(t,e){var a,i,n,s,o,l,h,d,f=e.length;if(!t||!t.state)return K;if(a=t.state,s=a.wrap,2===s||1===s&&a.status!==ut||a.lookahead)return K;for(1===s&&(t.adler=N(t.adler,e,f,0)),a.wrap=0,f>=a.w_size&&(0===s&&(r(a.head),a.strstart=0,a.block_start=0,a.insert=0),d=new R.Buf8(a.w_size),R.arraySet(d,e,f-a.w_size,a.w_size,0),e=d,f=a.w_size),o=t.avail_in,l=t.next_in,h=t.input,t.avail_in=f,t.next_in=0,t.input=e,_(a);a.lookahead>=ht;){i=a.strstart,n=a.lookahead-(ht-1);do a.ins_h=(a.ins_h<<a.hash_shift^a.window[i+ht-1])&a.hash_mask,a.prev[i&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=i,i++;while(--n);a.strstart=i,a.lookahead=ht-1,_(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=ht-1,a.match_available=0,t.next_in=l,t.input=h,t.avail_in=o,a.wrap=s,H}var Z,R=t("../utils/common"),C=t("./trees"),N=t("./adler32"),O=t("./crc32"),D=t("./messages"),I=0,U=1,T=3,F=4,L=5,H=0,j=1,K=-2,M=-3,P=-5,Y=-1,q=1,G=2,X=3,W=4,J=0,Q=2,V=8,$=9,tt=15,et=8,at=29,it=256,nt=it+1+at,rt=30,st=19,ot=2*nt+1,lt=15,ht=3,dt=258,ft=dt+ht+1,_t=32,ut=42,ct=69,bt=73,gt=91,mt=103,wt=113,pt=666,vt=1,kt=2,yt=3,xt=4,zt=3;Z=[new w(0,0,0,0,u),new w(4,4,8,4,c),new w(4,5,16,8,c),new w(4,6,32,32,c),new w(4,4,16,16,b),new w(8,16,32,32,b),new w(8,16,128,128,b),new w(8,32,128,256,b),new w(32,128,258,1024,b),new w(32,258,258,4096,b)],a.deflateInit=B,a.deflateInit2=z,a.deflateReset=y,a.deflateResetKeep=k,a.deflateSetHeader=x,a.deflate=S,a.deflateEnd=E,a.deflateSetDictionary=A,a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./messages":13,"./trees":14}],9:[function(t,e,a){"use strict";function i(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}e.exports=i},{}],10:[function(t,e,a){"use strict";var i=30,n=12;e.exports=function(t,e){var a,r,s,o,l,h,d,f,_,u,c,b,g,m,w,p,v,k,y,x,z,B,S,E,A;a=t.state,r=t.next_in,E=t.input,s=r+(t.avail_in-5),o=t.next_out,A=t.output,l=o-(e-t.avail_out),h=o+(t.avail_out-257),d=a.dmax,f=a.wsize,_=a.whave,u=a.wnext,c=a.window,b=a.hold,g=a.bits,m=a.lencode,w=a.distcode,p=(1<<a.lenbits)-1,v=(1<<a.distbits)-1;t:do{g<15&&(b+=E[r++]<<g,g+=8,b+=E[r++]<<g,g+=8),k=m[b&p];e:for(;;){if(y=k>>>24,b>>>=y,g-=y,y=k>>>16&255,0===y)A[o++]=65535&k;else{if(!(16&y)){if(0===(64&y)){k=m[(65535&k)+(b&(1<<y)-1)];continue e}if(32&y){a.mode=n;break t}t.msg="invalid literal/length code",a.mode=i;break t}x=65535&k,y&=15,y&&(g<y&&(b+=E[r++]<<g,g+=8),x+=b&(1<<y)-1,b>>>=y,g-=y),g<15&&(b+=E[r++]<<g,g+=8,b+=E[r++]<<g,g+=8),k=w[b&v];a:for(;;){if(y=k>>>24,b>>>=y,g-=y,y=k>>>16&255,!(16&y)){if(0===(64&y)){k=w[(65535&k)+(b&(1<<y)-1)];continue a}t.msg="invalid distance code",a.mode=i;break t}if(z=65535&k,y&=15,g<y&&(b+=E[r++]<<g,g+=8,g<y&&(b+=E[r++]<<g,g+=8)),z+=b&(1<<y)-1,z>d){t.msg="invalid distance too far back",a.mode=i;break t}if(b>>>=y,g-=y,y=o-l,z>y){if(y=z-y,y>_&&a.sane){t.msg="invalid distance too far back",a.mode=i;break t}if(B=0,S=c,0===u){if(B+=f-y,y<x){x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}}else if(u<y){if(B+=f+u-y,y-=u,y<x){x-=y;do A[o++]=c[B++];while(--y);if(B=0,u<x){y=u,x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}}}else if(B+=u-y,y<x){x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}for(;x>2;)A[o++]=S[B++],A[o++]=S[B++],A[o++]=S[B++],x-=3;x&&(A[o++]=S[B++],x>1&&(A[o++]=S[B++]))}else{B=o-z;do A[o++]=A[B++],A[o++]=A[B++],A[o++]=A[B++],x-=3;while(x>2);x&&(A[o++]=A[B++],x>1&&(A[o++]=A[B++]))}break}}break}}while(r<s&&o<h);x=g>>3,r-=x,g-=x<<3,b&=(1<<g)-1,t.next_in=r,t.next_out=o,t.avail_in=r<s?5+(s-r):5-(r-s),t.avail_out=o<h?257+(h-o):257-(o-h),a.hold=b,a.bits=g}},{}],11:[function(t,e,a){"use strict";function i(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function n(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new w.Buf16(320),this.work=new w.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function r(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=T,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new w.Buf32(bt),e.distcode=e.distdyn=new w.Buf32(gt),e.sane=1,e.back=-1,Z):N}function s(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,r(t)):N}function o(t,e){var a,i;return t&&t.state?(i=t.state,e<0?(a=0,e=-e):(a=(e>>4)+1,e<48&&(e&=15)),e&&(e<8||e>15)?N:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,s(t))):N}function l(t,e){var a,i;return t?(i=new n,t.state=i,i.window=null,a=o(t,e),a!==Z&&(t.state=null),a):N}function h(t){return l(t,wt)}function d(t){if(pt){var e;for(g=new w.Buf32(512),m=new w.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(y(z,t.lens,0,288,g,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;y(B,t.lens,0,32,m,0,t.work,{bits:5}),pt=!1}t.lencode=g,t.lenbits=9,t.distcode=m,t.distbits=5}function f(t,e,a,i){var n,r=t.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new w.Buf8(r.wsize)),i>=r.wsize?(w.arraySet(r.window,e,a-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):(n=r.wsize-r.wnext,n>i&&(n=i),w.arraySet(r.window,e,a-i,n,r.wnext),i-=n,i?(w.arraySet(r.window,e,a-i,i,0),r.wnext=i,r.whave=r.wsize):(r.wnext+=n,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=n))),0}function _(t,e){var a,n,r,s,o,l,h,_,u,c,b,g,m,bt,gt,mt,wt,pt,vt,kt,yt,xt,zt,Bt,St=0,Et=new w.Buf8(4),At=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return N;a=t.state,a.mode===X&&(a.mode=W),o=t.next_out,r=t.output,h=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,u=a.bits,c=l,b=h,xt=Z;t:for(;;)switch(a.mode){case T:if(0===a.wrap){a.mode=W;break}for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(2&a.wrap&&35615===_){a.check=0,Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0),_=0,u=0,a.mode=F;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&_)<<8)+(_>>8))%31){t.msg="incorrect header check",a.mode=_t;break}if((15&_)!==U){t.msg="unknown compression method",a.mode=_t;break}if(_>>>=4,u-=4,yt=(15&_)+8,0===a.wbits)a.wbits=yt;else if(yt>a.wbits){t.msg="invalid window size",a.mode=_t;break}a.dmax=1<<yt,t.adler=a.check=1,a.mode=512&_?q:X,_=0,u=0;break;case F:for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(a.flags=_,(255&a.flags)!==U){t.msg="unknown compression method",a.mode=_t;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=_t;break}a.head&&(a.head.text=_>>8&1),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0,a.mode=L;case L:for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.head&&(a.head.time=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,Et[2]=_>>>16&255,Et[3]=_>>>24&255,a.check=v(a.check,Et,4,0)),_=0,u=0,a.mode=H;case H:for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.head&&(a.head.xflags=255&_,a.head.os=_>>8),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0,a.mode=j;case j:if(1024&a.flags){for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.length=_,a.head&&(a.head.extra_len=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0}else a.head&&(a.head.extra=null);a.mode=K;case K:if(1024&a.flags&&(g=a.length,g>l&&(g=l),g&&(a.head&&(yt=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),w.arraySet(a.head.extra,n,s,g,yt)),512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,a.length-=g),a.length))break t;a.length=0,a.mode=M;case M:if(2048&a.flags){if(0===l)break t;g=0;do yt=n[s+g++],a.head&&yt&&a.length<65536&&(a.head.name+=String.fromCharCode(yt));while(yt&&g<l);if(512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,yt)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=P;case P:if(4096&a.flags){if(0===l)break t;g=0;do yt=n[s+g++],a.head&&yt&&a.length<65536&&(a.head.comment+=String.fromCharCode(yt));while(yt&&g<l);if(512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,yt)break t}else a.head&&(a.head.comment=null);a.mode=Y;case Y:if(512&a.flags){for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_!==(65535&a.check)){t.msg="header crc mismatch",a.mode=_t;break}_=0,u=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=X;break;case q:for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}t.adler=a.check=i(_),_=0,u=0,a.mode=G;case G:if(0===a.havedict)return t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,C;t.adler=a.check=1,a.mode=X;case X:if(e===E||e===A)break t;case W:if(a.last){_>>>=7&u,u-=7&u,a.mode=ht;break}for(;u<3;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}switch(a.last=1&_,_>>>=1,u-=1,3&_){case 0:a.mode=J;break;case 1:if(d(a),a.mode=at,e===A){_>>>=2,u-=2;break t}break;case 2:a.mode=$;break;case 3:t.msg="invalid block type",a.mode=_t}_>>>=2,u-=2;break;case J:for(_>>>=7&u,u-=7&u;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if((65535&_)!==(_>>>16^65535)){t.msg="invalid stored block lengths",a.mode=_t;break}if(a.length=65535&_,_=0,u=0,a.mode=Q,e===A)break t;case Q:a.mode=V;case V:if(g=a.length){if(g>l&&(g=l),g>h&&(g=h),0===g)break t;w.arraySet(r,n,s,g,o),l-=g,s+=g,h-=g,o+=g,a.length-=g;break}a.mode=X;break;case $:for(;u<14;){if(0===l)break t;
l--,_+=n[s++]<<u,u+=8}if(a.nlen=(31&_)+257,_>>>=5,u-=5,a.ndist=(31&_)+1,_>>>=5,u-=5,a.ncode=(15&_)+4,_>>>=4,u-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=_t;break}a.have=0,a.mode=tt;case tt:for(;a.have<a.ncode;){for(;u<3;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.lens[At[a.have++]]=7&_,_>>>=3,u-=3}for(;a.have<19;)a.lens[At[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,zt={bits:a.lenbits},xt=y(x,a.lens,0,19,a.lencode,0,a.work,zt),a.lenbits=zt.bits,xt){t.msg="invalid code lengths set",a.mode=_t;break}a.have=0,a.mode=et;case et:for(;a.have<a.nlen+a.ndist;){for(;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(wt<16)_>>>=gt,u-=gt,a.lens[a.have++]=wt;else{if(16===wt){for(Bt=gt+2;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_>>>=gt,u-=gt,0===a.have){t.msg="invalid bit length repeat",a.mode=_t;break}yt=a.lens[a.have-1],g=3+(3&_),_>>>=2,u-=2}else if(17===wt){for(Bt=gt+3;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=gt,u-=gt,yt=0,g=3+(7&_),_>>>=3,u-=3}else{for(Bt=gt+7;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=gt,u-=gt,yt=0,g=11+(127&_),_>>>=7,u-=7}if(a.have+g>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=_t;break}for(;g--;)a.lens[a.have++]=yt}}if(a.mode===_t)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=_t;break}if(a.lenbits=9,zt={bits:a.lenbits},xt=y(z,a.lens,0,a.nlen,a.lencode,0,a.work,zt),a.lenbits=zt.bits,xt){t.msg="invalid literal/lengths set",a.mode=_t;break}if(a.distbits=6,a.distcode=a.distdyn,zt={bits:a.distbits},xt=y(B,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,zt),a.distbits=zt.bits,xt){t.msg="invalid distances set",a.mode=_t;break}if(a.mode=at,e===A)break t;case at:a.mode=it;case it:if(l>=6&&h>=258){t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,k(t,b),o=t.next_out,r=t.output,h=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,u=a.bits,a.mode===X&&(a.back=-1);break}for(a.back=0;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(mt&&0===(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.lencode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(pt+gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=pt,u-=pt,a.back+=pt}if(_>>>=gt,u-=gt,a.back+=gt,a.length=wt,0===mt){a.mode=lt;break}if(32&mt){a.back=-1,a.mode=X;break}if(64&mt){t.msg="invalid literal/length code",a.mode=_t;break}a.extra=15&mt,a.mode=nt;case nt:if(a.extra){for(Bt=a.extra;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.length+=_&(1<<a.extra)-1,_>>>=a.extra,u-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=rt;case rt:for(;St=a.distcode[_&(1<<a.distbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(0===(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.distcode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(pt+gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=pt,u-=pt,a.back+=pt}if(_>>>=gt,u-=gt,a.back+=gt,64&mt){t.msg="invalid distance code",a.mode=_t;break}a.offset=wt,a.extra=15&mt,a.mode=st;case st:if(a.extra){for(Bt=a.extra;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.offset+=_&(1<<a.extra)-1,_>>>=a.extra,u-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=_t;break}a.mode=ot;case ot:if(0===h)break t;if(g=b-h,a.offset>g){if(g=a.offset-g,g>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=_t;break}g>a.wnext?(g-=a.wnext,m=a.wsize-g):m=a.wnext-g,g>a.length&&(g=a.length),bt=a.window}else bt=r,m=o-a.offset,g=a.length;g>h&&(g=h),h-=g,a.length-=g;do r[o++]=bt[m++];while(--g);0===a.length&&(a.mode=it);break;case lt:if(0===h)break t;r[o++]=a.length,h--,a.mode=it;break;case ht:if(a.wrap){for(;u<32;){if(0===l)break t;l--,_|=n[s++]<<u,u+=8}if(b-=h,t.total_out+=b,a.total+=b,b&&(t.adler=a.check=a.flags?v(a.check,r,b,o-b):p(a.check,r,b,o-b)),b=h,(a.flags?_:i(_))!==a.check){t.msg="incorrect data check",a.mode=_t;break}_=0,u=0}a.mode=dt;case dt:if(a.wrap&&a.flags){for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=_t;break}_=0,u=0}a.mode=ft;case ft:xt=R;break t;case _t:xt=O;break t;case ut:return D;case ct:default:return N}return t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,(a.wsize||b!==t.avail_out&&a.mode<_t&&(a.mode<ht||e!==S))&&f(t,t.output,t.next_out,b-t.avail_out)?(a.mode=ut,D):(c-=t.avail_in,b-=t.avail_out,t.total_in+=c,t.total_out+=b,a.total+=b,a.wrap&&b&&(t.adler=a.check=a.flags?v(a.check,r,b,t.next_out-b):p(a.check,r,b,t.next_out-b)),t.data_type=a.bits+(a.last?64:0)+(a.mode===X?128:0)+(a.mode===at||a.mode===Q?256:0),(0===c&&0===b||e===S)&&xt===Z&&(xt=I),xt)}function u(t){if(!t||!t.state)return N;var e=t.state;return e.window&&(e.window=null),t.state=null,Z}function c(t,e){var a;return t&&t.state?(a=t.state,0===(2&a.wrap)?N:(a.head=e,e.done=!1,Z)):N}function b(t,e){var a,i,n,r=e.length;return t&&t.state?(a=t.state,0!==a.wrap&&a.mode!==G?N:a.mode===G&&(i=1,i=p(i,e,r,0),i!==a.check)?O:(n=f(t,e,r,r))?(a.mode=ut,D):(a.havedict=1,Z)):N}var g,m,w=t("../utils/common"),p=t("./adler32"),v=t("./crc32"),k=t("./inffast"),y=t("./inftrees"),x=0,z=1,B=2,S=4,E=5,A=6,Z=0,R=1,C=2,N=-2,O=-3,D=-4,I=-5,U=8,T=1,F=2,L=3,H=4,j=5,K=6,M=7,P=8,Y=9,q=10,G=11,X=12,W=13,J=14,Q=15,V=16,$=17,tt=18,et=19,at=20,it=21,nt=22,rt=23,st=24,ot=25,lt=26,ht=27,dt=28,ft=29,_t=30,ut=31,ct=32,bt=852,gt=592,mt=15,wt=mt,pt=!0;a.inflateReset=s,a.inflateReset2=o,a.inflateResetKeep=r,a.inflateInit=h,a.inflateInit2=l,a.inflate=_,a.inflateEnd=u,a.inflateGetHeader=c,a.inflateSetDictionary=b,a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./inffast":10,"./inftrees":12}],12:[function(t,e,a){"use strict";var i=t("../utils/common"),n=15,r=852,s=592,o=0,l=1,h=2,d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,a,c,b,g,m,w){var p,v,k,y,x,z,B,S,E,A=w.bits,Z=0,R=0,C=0,N=0,O=0,D=0,I=0,U=0,T=0,F=0,L=null,H=0,j=new i.Buf16(n+1),K=new i.Buf16(n+1),M=null,P=0;for(Z=0;Z<=n;Z++)j[Z]=0;for(R=0;R<c;R++)j[e[a+R]]++;for(O=A,N=n;N>=1&&0===j[N];N--);if(O>N&&(O=N),0===N)return b[g++]=20971520,b[g++]=20971520,w.bits=1,0;for(C=1;C<N&&0===j[C];C++);for(O<C&&(O=C),U=1,Z=1;Z<=n;Z++)if(U<<=1,U-=j[Z],U<0)return-1;if(U>0&&(t===o||1!==N))return-1;for(K[1]=0,Z=1;Z<n;Z++)K[Z+1]=K[Z]+j[Z];for(R=0;R<c;R++)0!==e[a+R]&&(m[K[e[a+R]]++]=R);if(t===o?(L=M=m,z=19):t===l?(L=d,H-=257,M=f,P-=257,z=256):(L=_,M=u,z=-1),F=0,R=0,Z=C,x=g,D=O,I=0,k=-1,T=1<<O,y=T-1,t===l&&T>r||t===h&&T>s)return 1;for(var Y=0;;){Y++,B=Z-I,m[R]<z?(S=0,E=m[R]):m[R]>z?(S=M[P+m[R]],E=L[H+m[R]]):(S=96,E=0),p=1<<Z-I,v=1<<D,C=v;do v-=p,b[x+(F>>I)+v]=B<<24|S<<16|E|0;while(0!==v);for(p=1<<Z-1;F&p;)p>>=1;if(0!==p?(F&=p-1,F+=p):F=0,R++,0===--j[Z]){if(Z===N)break;Z=e[a+m[R]]}if(Z>O&&(F&y)!==k){for(0===I&&(I=O),x+=C,D=Z-I,U=1<<D;D+I<N&&(U-=j[D+I],!(U<=0));)D++,U<<=1;if(T+=1<<D,t===l&&T>r||t===h&&T>s)return 1;k=F&y,b[k]=O<<24|D<<16|x-g|0}}return 0!==F&&(b[x+F]=Z-I<<24|64<<16|0),w.bits=O,0}},{"../utils/common":3}],13:[function(t,e,a){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],14:[function(t,e,a){"use strict";function i(t){for(var e=t.length;--e>=0;)t[e]=0}function n(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function r(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function s(t){return t<256?lt[t]:lt[256+(t>>>7)]}function o(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function l(t,e,a){t.bi_valid>W-a?(t.bi_buf|=e<<t.bi_valid&65535,o(t,t.bi_buf),t.bi_buf=e>>W-t.bi_valid,t.bi_valid+=a-W):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function h(t,e,a){l(t,a[2*e],a[2*e+1])}function d(t,e){var a=0;do a|=1&t,t>>>=1,a<<=1;while(--e>0);return a>>>1}function f(t){16===t.bi_valid?(o(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function _(t,e){var a,i,n,r,s,o,l=e.dyn_tree,h=e.max_code,d=e.stat_desc.static_tree,f=e.stat_desc.has_stree,_=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,c=e.stat_desc.max_length,b=0;for(r=0;r<=X;r++)t.bl_count[r]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<G;a++)i=t.heap[a],r=l[2*l[2*i+1]+1]+1,r>c&&(r=c,b++),l[2*i+1]=r,i>h||(t.bl_count[r]++,s=0,i>=u&&(s=_[i-u]),o=l[2*i],t.opt_len+=o*(r+s),f&&(t.static_len+=o*(d[2*i+1]+s)));if(0!==b){do{for(r=c-1;0===t.bl_count[r];)r--;t.bl_count[r]--,t.bl_count[r+1]+=2,t.bl_count[c]--,b-=2}while(b>0);for(r=c;0!==r;r--)for(i=t.bl_count[r];0!==i;)n=t.heap[--a],n>h||(l[2*n+1]!==r&&(t.opt_len+=(r-l[2*n+1])*l[2*n],l[2*n+1]=r),i--)}}function u(t,e,a){var i,n,r=new Array(X+1),s=0;for(i=1;i<=X;i++)r[i]=s=s+a[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=d(r[o]++,o))}}function c(){var t,e,a,i,r,s=new Array(X+1);for(a=0,i=0;i<K-1;i++)for(dt[i]=a,t=0;t<1<<et[i];t++)ht[a++]=i;for(ht[a-1]=i,r=0,i=0;i<16;i++)for(ft[i]=r,t=0;t<1<<at[i];t++)lt[r++]=i;for(r>>=7;i<Y;i++)for(ft[i]=r<<7,t=0;t<1<<at[i]-7;t++)lt[256+r++]=i;for(e=0;e<=X;e++)s[e]=0;for(t=0;t<=143;)st[2*t+1]=8,t++,s[8]++;for(;t<=255;)st[2*t+1]=9,t++,s[9]++;for(;t<=279;)st[2*t+1]=7,t++,s[7]++;for(;t<=287;)st[2*t+1]=8,t++,s[8]++;for(u(st,P+1,s),t=0;t<Y;t++)ot[2*t+1]=5,ot[2*t]=d(t,5);_t=new n(st,et,M+1,P,X),ut=new n(ot,at,0,Y,X),ct=new n(new Array(0),it,0,q,J)}function b(t){var e;for(e=0;e<P;e++)t.dyn_ltree[2*e]=0;for(e=0;e<Y;e++)t.dyn_dtree[2*e]=0;for(e=0;e<q;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*Q]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function g(t){t.bi_valid>8?o(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function m(t,e,a,i){g(t),i&&(o(t,a),o(t,~a)),N.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}function w(t,e,a,i){var n=2*e,r=2*a;return t[n]<t[r]||t[n]===t[r]&&i[e]<=i[a]}function p(t,e,a){for(var i=t.heap[a],n=a<<1;n<=t.heap_len&&(n<t.heap_len&&w(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!w(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i}function v(t,e,a){var i,n,r,o,d=0;if(0!==t.last_lit)do i=t.pending_buf[t.d_buf+2*d]<<8|t.pending_buf[t.d_buf+2*d+1],n=t.pending_buf[t.l_buf+d],d++,0===i?h(t,n,e):(r=ht[n],h(t,r+M+1,e),o=et[r],0!==o&&(n-=dt[r],l(t,n,o)),i--,r=s(i),h(t,r,a),o=at[r],0!==o&&(i-=ft[r],l(t,i,o)));while(d<t.last_lit);h(t,Q,e)}function k(t,e){var a,i,n,r=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,l=e.stat_desc.elems,h=-1;for(t.heap_len=0,t.heap_max=G,a=0;a<l;a++)0!==r[2*a]?(t.heap[++t.heap_len]=h=a,t.depth[a]=0):r[2*a+1]=0;for(;t.heap_len<2;)n=t.heap[++t.heap_len]=h<2?++h:0,r[2*n]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=s[2*n+1]);for(e.max_code=h,a=t.heap_len>>1;a>=1;a--)p(t,r,a);n=l;do a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],p(t,r,1),i=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=i,r[2*n]=r[2*a]+r[2*i],t.depth[n]=(t.depth[a]>=t.depth[i]?t.depth[a]:t.depth[i])+1,r[2*a+1]=r[2*i+1]=n,t.heap[1]=n++,p(t,r,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],_(t,e),u(r,h,t.bl_count)}function y(t,e,a){var i,n,r=-1,s=e[1],o=0,l=7,h=4;for(0===s&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=s,s=e[2*(i+1)+1],++o<l&&n===s||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==r&&t.bl_tree[2*n]++,t.bl_tree[2*V]++):o<=10?t.bl_tree[2*$]++:t.bl_tree[2*tt]++,o=0,r=n,0===s?(l=138,h=3):n===s?(l=6,h=3):(l=7,h=4))}function x(t,e,a){var i,n,r=-1,s=e[1],o=0,d=7,f=4;for(0===s&&(d=138,f=3),i=0;i<=a;i++)if(n=s,s=e[2*(i+1)+1],!(++o<d&&n===s)){if(o<f){do h(t,n,t.bl_tree);while(0!==--o)}else 0!==n?(n!==r&&(h(t,n,t.bl_tree),o--),h(t,V,t.bl_tree),l(t,o-3,2)):o<=10?(h(t,$,t.bl_tree),l(t,o-3,3)):(h(t,tt,t.bl_tree),l(t,o-11,7));o=0,r=n,0===s?(d=138,f=3):n===s?(d=6,f=3):(d=7,f=4)}}function z(t){var e;for(y(t,t.dyn_ltree,t.l_desc.max_code),y(t,t.dyn_dtree,t.d_desc.max_code),k(t,t.bl_desc),e=q-1;e>=3&&0===t.bl_tree[2*nt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function B(t,e,a,i){var n;for(l(t,e-257,5),l(t,a-1,5),l(t,i-4,4),n=0;n<i;n++)l(t,t.bl_tree[2*nt[n]+1],3);x(t,t.dyn_ltree,e-1),x(t,t.dyn_dtree,a-1)}function S(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return D;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return I;for(e=32;e<M;e++)if(0!==t.dyn_ltree[2*e])return I;return D}function E(t){bt||(c(),bt=!0),t.l_desc=new r(t.dyn_ltree,_t),t.d_desc=new r(t.dyn_dtree,ut),t.bl_desc=new r(t.bl_tree,ct),t.bi_buf=0,t.bi_valid=0,b(t)}function A(t,e,a,i){l(t,(T<<1)+(i?1:0),3),m(t,e,a,!0)}function Z(t){l(t,F<<1,3),h(t,Q,st),f(t)}function R(t,e,a,i){var n,r,s=0;t.level>0?(t.strm.data_type===U&&(t.strm.data_type=S(t)),k(t,t.l_desc),k(t,t.d_desc),s=z(t),n=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=n&&(n=r)):n=r=a+5,a+4<=n&&e!==-1?A(t,e,a,i):t.strategy===O||r===n?(l(t,(F<<1)+(i?1:0),3),v(t,st,ot)):(l(t,(L<<1)+(i?1:0),3),B(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),v(t,t.dyn_ltree,t.dyn_dtree)),b(t),i&&g(t)}function C(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(ht[a]+M+1)]++,t.dyn_dtree[2*s(e)]++),t.last_lit===t.lit_bufsize-1}var N=t("../utils/common"),O=4,D=0,I=1,U=2,T=0,F=1,L=2,H=3,j=258,K=29,M=256,P=M+1+K,Y=30,q=19,G=2*P+1,X=15,W=16,J=7,Q=256,V=16,$=17,tt=18,et=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],at=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],it=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],rt=512,st=new Array(2*(P+2));i(st);var ot=new Array(2*Y);i(ot);var lt=new Array(rt);i(lt);var ht=new Array(j-H+1);i(ht);var dt=new Array(K);i(dt);var ft=new Array(Y);i(ft);var _t,ut,ct,bt=!1;a._tr_init=E,a._tr_stored_block=A,a._tr_flush_block=R,a._tr_tally=C,a._tr_align=Z},{"../utils/common":3}],15:[function(t,e,a){"use strict";function i(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}e.exports=i},{}],"/":[function(t,e,a){"use strict";var i=t("./lib/utils/common").assign,n=t("./lib/deflate"),r=t("./lib/inflate"),s=t("./lib/zlib/constants"),o={};i(o,n,r,s),e.exports=o},{"./lib/deflate":1,"./lib/inflate":2,"./lib/utils/common":3,"./lib/zlib/constants":6}]},{},[])("/")});
function Q2qq(){}Q2qq.c86q="edgepositions";Q2qq.K86q="readInt32";Q2qq.q46q="readFloat32Array";Q2qq.U86q="readLongUTF8";var I9qq="requestC";function onGOverview(x15){var P15,I15,C15;P15=x15[Q2qq.K86q]();I15=x15[Q2qq.U86q]();if(P15==0){C15="getoverview,"+projId;_snd(C15);}else if(P15==1){}else if(P15==2){postMessage(["connecterror",I15]);}}I9qq+="ount";function gpk(G55){var E55,M55,i55;E55=G55["length"];for(var e55=0;e55<E55;e55++){var i7qq=",p";i7qq+="ack,";M55=G55[e55];i55=projId+i7qq+M55;localDB["hasKey"](i55,function(Q55,x55){var P7qq="read";P7qq+="Int32";var I55,C55,P55,B55;I55=new Uint8Array(x55);C55=pako["inflate"](I55);P55=new DataStream(C55);B55=P55[P7qq]();onrp(P55,x55,true);},function(a55){var n55;n55="pack,"+a55;_snd(n55);});}}function trdc(){var K46q="instances";function z65(s65,q65){var u0qq="leng";u0qq+="t";u0qq+="h";var h0qq="toFix";h0qq+="ed";var d0qq="pus";d0qq+="h";var U0qq="in";U0qq+="di";U0qq+="ces";var D0qq="le";D0qq+="ngt";D0qq+="h";var Y0qq="ge";Y0qq+="i";Y0qq+="d";var E65,M65,P65,j65,G65,f65,Z65,i65,Q65,C65,l65,v65,L65,e65,x65,W65,I65,n65,B65;E65=s65[Y0qq];M65=s65["sfid"];P65=0;j65=s65["ifctype"];G65=s65["elementId"];f65=s65["color"];Z65=new THREE["Matrix4"]();Z65["fromArray"](s65["matrix"]);i65=new THREE["Quaternion"]();Q65=new THREE["Vector3"]();C65=new THREE["Vector3"]();Z65["decompose"](Q65,i65,C65);l65=new Float32Array(q65["positions"][D0qq]);v65=new THREE["Vector3"]();for(var S65=0,R65=l65["length"];S65<R65;S65+=3){var H0qq="f";H0qq+="romArray";v65[H0qq](q65["positions"],S65);v65["applyMatrix4"](Z65);v65["toArray"](l65,S65);}L65=new Float32Array(q65["normals"]["length"]);for(var S65=0,R65=L65["length"];S65<R65;S65+=3){var V0qq="toA";V0qq+="rra";V0qq+="y";var A0qq="applyQu";A0qq+="at";A0qq+="ernion";v65["fromArray"](q65["normals"],S65);v65[A0qq](i65);v65[V0qq](L65,S65);}e65=new Float32Array(q65[Q2qq.c86q]);for(var S65=0,R65=e65["length"];S65<R65;S65+=3){var K0qq="applyMat";K0qq+="rix4";v65["fromArray"](q65[Q2qq.c86q],S65);v65[K0qq](Z65);v65["toArray"](e65,S65);}x65=new Uint32Array(q65["edgeindices"]);W65=new Uint32Array(q65[U0qq]);I65=[];n65={'\x69\x6e\x64\x65\x78\x53\x74\x61\x72\x74':0,'\x69\x6e\x64\x65\x78\x43\x6f\x75\x6e\x74':W65["length"],'\x65\x64\x67\x65\x53\x74\x61\x72\x74':0,'\x65\x64\x67\x65\x43\x6f\x75\x6e\x74':x65["length"],'\x63\x6f\x6c\x6f\x72':f65,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':G65,'\x73\x74\x6f\x72\x65\x79\x49\x64':P65,'\x69\x6e\x64\x69\x63\x65\x73\x43\x6f\x70\x79':new Uint32Array(W65),'\x76\x69\x73\x69\x62\x6c\x65':true,'\x66\x69\x6c\x65\x49\x64':M65,'\x6d\x65\x73\x68\x49\x64':E65,'\x69\x66\x63\x74\x79\x70\x65':j65,'\x6d\x61\x74\x72\x69\x78':s65["matrix"]};I65[d0qq](n65);B65={'\x66\x69\x6c\x65\x49\x64':M65,'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':e65,'\x63\x6f\x75\x6e\x74':1,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':G65,'\x63\x6f\x6c\x6f\x72\x73':f65,'\x6e\x6f\x72\x6d\x61\x6c\x73':L65,'\x69\x66\x63\x74\x79\x70\x65':j65,'\x69\x6e\x64\x69\x63\x65\x73':W65,'\x6b\x65\x79':j65+":"+f65[0][h0qq](3)+f65[1]["toFixed"](3)+f65[2]["toFixed"](3)+f65[3]["toFixed"](3),'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':l65,'\x6d\x65\x73\x68\x49\x64':E65,'\x66\x61\x63\x65':W65[u0qq]/3,'\x73\x74\x6f\x72\x65\x79\x49\x64':P65,'\x75\x6e\x69\x74\x73':I65,'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':x65};return B65;}var F0qq="ad";F0qq+="dDe";F0qq+="f";var X65,N65,k65,F65;X65=[];N65=new Array();k65=this;function y65(v35){var R35,X35,u35,F35,y35,z35,r35,S35;R35=v35["length"];for(var N35=0;N35<R35;N35++){var s0qq="li";s0qq+="st";X35=v35[N35];u35=X35["key"];F35=F65[u35];if(!F35){F35={'\x6c\x69\x73\x74':[],'\x66\x69\x6c\x65\x49\x64':X35["fileId"],'\x66\x63\x6f\x75\x6e\x74':0};F65[u35]=F35;}F35[s0qq]["push"](X35);F35["fcount"]+=X35["indices"]["length"];}y35=[];z35=new Array();r35=0;for(var u35 in F65){if(F65["hasOwnProperty"](u35)){S35=F65[u35];if(S35["fcount"]>=maxfn){z35[u35]=S35;y35["push"](u35);r35++;}}}for(var k35=0;k35<y35["length"];k35++){u35=y35[k35];delete F65[u35];}if(r35>0){hbm(z35);}}F65=new Array();;this[F0qq]=function(a65){N65[a65["deid"]]=a65;};this["addInst"]=function(t65){var w65,c65;w65=N65[t65["deid"]];if(w65){if(w65["insted"]){w65[K46q]["push"](t65);if(w65[K46q]["length"]==w65["rcount"]){k65["addr"](w65);}}else{var X0qq="add";X0qq+="Mesh";c65=z65(t65,w65);k65[X0qq](c65);}}};function r65(U35){var H35,d35,V35,K35,D35,h35;H35=new Array();d35=U35["length"];for(var A35=0;A35<d35;A35++){var f0qq="lis";f0qq+="t";V35=U35[A35];K35=V35["key"];D35=H35[K35];if(!D35){D35={'\x6c\x69\x73\x74':[],'\x66\x69\x6c\x65\x49\x64':V35["fileId"]};H35[K35]=D35;}D35[f0qq]["push"](V35);}h35=hbm(H35);}this["addr"]=function(J65){var R0qq="rm";R0qq+="esh";var z0qq="len";z0qq+="gth";var y0qq="in";y0qq+="stan";y0qq+="ces";var k0qq="l";k0qq+="engt";k0qq+="h";var N0qq="norm";N0qq+="als";var p65,O65,m65,g35;p65={'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':J65["positions"],'\x6e\x6f\x72\x6d\x61\x6c\x73':J65[N0qq],'\x69\x6e\x64\x69\x63\x65\x73':J65["indices"],'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':J65[Q2qq.c86q],'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':J65["edgeindices"],'\x66\x61\x63\x65':J65["indices"]["length"]/3,'\x75\x6e\x69\x74\x73':[],'\x63\x6f\x75\x6e\x74':J65[K46q][k0qq]};O65=J65[y0qq][z0qq];for(var T65=0;T65<O65;T65++){var v0qq="pus";v0qq+="h";var S0qq="leng";S0qq+="th";var r0qq="ge";r0qq+="id";m65=J65[K46q][T65];g35={'\x69\x6e\x73\x74\x49\x64':m65["geid"],'\x6d\x61\x74\x72\x69\x78':m65["matrix"],'\x69\x66\x63\x74\x79\x70\x65':m65["ifctype"],'\x63\x6f\x6c\x6f\x72':m65["color"],'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':m65["elementId"],'\x6d\x65\x73\x68\x49\x64':m65[r0qq],'\x69\x6e\x64\x65\x78':T65,'\x66\x69\x6c\x65\x49\x64':m65["sfid"],'\x73\x74\x6f\x72\x65\x79\x49\x64':0,'\x69\x6e\x64\x65\x78\x53\x74\x61\x72\x74':0,'\x69\x6e\x64\x65\x78\x43\x6f\x75\x6e\x74':J65["indices"][S0qq]};p65["units"][v0qq](g35);}postMessage([R0qq,p65]);};this["addMesh"]=function(o35){var b35;X65["push"](o35);if(X65["length"]>=500){b35=[];b35=b35["concat"](X65);X65=[];y65(b35);}};this["processRestMesh"]=function(){var q0qq="co";q0qq+="nca";q0qq+="t";var Y35;if(X65["length"]==0)return;Y35=[];Y35=Y35[q0qq](X65);X65=[];y65(Y35);hbm(F65);F65=new Array();};;;}var x9qq="Unique";function defMesh(L75){var s36q=Q2qq;var Y9qq="l";Y9qq+="ength";var o9qq="lengt";o9qq+="h";var b9qq="set";b9qq+="FromArra";b9qq+="y";var g9qq="readFloat6";g9qq+="4";var p7qq="readInt";p7qq+="3";p7qq+="2";var b95,t75,i75,O75,E75,Q75,B75,w75,P75,c75,M75,I75,C75,G75,J75,m75,T75,n75,a75,x75,p75;b95=L75[p7qq]();t75=L75[s36q.K86q]();i75=L75[s36q.K86q]();O75=L75[s36q.K86q]()*3;E75=L75[s36q.q46q](O75);Q75=L75[s36q.K86q]()*2;B75=new Float32Array();if(Q75>0){var O7qq="rea";O7qq+="dFloat32Array";B75=L75[O7qq](Q75);}w75=L75[s36q.K86q]()*3;P75=L75[s36q.q46q](w75);c75=L75[s36q.K86q]();M75=L75["readUint32Array"](c75);I75=L75[s36q.K86q]()*3;C75=L75[s36q.q46q](I75);G75=new Uint32Array(I75/3);for(var e75=0;e75<G75["length"];e75++){G75[e75]=e75;}J75=L75["readFloat64"]();m75=L75[g9qq]();T75=L75[s36q.K86q]();n75=new THREE["Box3"]();n75[b9qq](E75);a75=i75*M75["length"]>10000&&i75>10;if(a75){}x75=E75["length"]+P75[o9qq]*+M75["length"]+C75["length"]+G75[Y9qq];x75*=4;p75={'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':C75,'\x6e\x6f\x72\x6d\x61\x6c\x73':P75,'\x64\x65\x69\x64':t75,'\x75\x76\x73':B75,'\x69\x6e\x64\x69\x63\x65\x73':M75,'\x69\x6e\x73\x74\x61\x6e\x63\x65\x73':[],'\x73\x74\x79\x6c\x65':T75,'\x73\x69\x7a\x65':x75,'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':E75,'\x72\x63\x6f\x75\x6e\x74':i75,'\x76\x6f\x6c\x75\x6d\x65':J75,'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':G75,'\x61\x72\x65\x61':m75,'\x69\x6e\x73\x74\x65\x64':a75,'\x62\x6f\x78':n75};return p75;}x9qq+="Dict";var P9qq="D";function start(D25){var M0qq="o";M0qq+="nope";M0qq+="n";var Y25;Y25=self["pako"];try{wtn=new WebSocket(D25);}catch(H25){}wtn["binaryType"]="arraybuffer";wtn[M0qq]=function(){var P0qq="REV";P0qq+="IS";P0qq+="ION";var i0qq="logi";i0qq+="n";var A25;postMessage(["connected"]);A25=i0qq+","+netkey+","+projId+","+platformDescription+","+windowurl+","+BIMVIZ[P0qq];_snd(A25);};wtn["onerror"]=function(V25){console["log"]("Error: Cannot connect to the WebSocket of RestServer. Please check the following list:");console["log"]("1. Please make sure the Server is Windows Server 2012 at least.");console["log"]("2. Please check if the port is allowed by your Firewall software in Server.");};wtn["onclose"]=function(K25){var x0qq="disco";x0qq+="nnected";postMessage([x0qq]);};wtn["onmessage"]=function(u25){var I0qq="da";I0qq+="t";I0qq+="a";var U25,d25,h25;U25=u25[I0qq];postMessage(["progress",U25["byteLength"]]);d25=new Uint8Array(U25);h25=Y25["inflate"](d25);hp(h25,U25);};}function _snd(U65){var h65,d65;h65=U65["length"]+(U65["length"]+",")["length"];d65=U65["length"]+","+U65;wtn["send"](d65);}function mg(P25,u15){var N7qq="leng";N7qq+="th";var D15,Y15,o15,m25,t25,Q25,T25,n25,a25,w25,I25,c25,J25,H15,B25,A15,V15,p25,O25,g15,d15,b15,M25,K15,U15,i25,C25,h15;D15=0;Y15=0;o15=0;m25=0;t25=0;Q25=0;T25=0;P25["forEach"](function(F15){var K7qq="l";K7qq+="eng";K7qq+="th";var V7qq="lengt";V7qq+="h";var A7qq="l";A7qq+="ength";D15+=F15["positions"]["length"];Y15+=F15["uvs"]["length"];o15+=F15["normals"][A7qq];m25+=F15["indices"]["length"];t25+=F15[Q2qq.c86q]["length"];Q25+=F15["edgeindices"][V7qq];T25+=F15["colorbuf"][K7qq];});n25=new Float32Array(D15);a25=new Float32Array(Y15);w25=new Float32Array(o15);I25=new Uint32Array(m25);c25=new Float32Array(t25);J25=new Uint32Array(Q25);H15=new Float32Array(T25);B25=0;A15=0;V15=0;p25=0;O25=0;g15=0;d15=0;b15=[];for(var x25=0;x25<P25["length"];x25++){var X7qq="len";X7qq+="g";X7qq+="th";var h7qq="le";h7qq+="ngt";h7qq+="h";var d7qq="p";d7qq+="us";d7qq+="h";var U7qq="ed";U7qq+="geStart";M25=P25[x25];K15=B25/3;U15=O25/3;;i25=M25["units"][0];i25["indexStart"]=p25;i25[U7qq]=g15;i25["index"]=x25;b15[d7qq](i25);for(var E25=0;E25<M25["positions"][h7qq];E25++){n25[B25++]=M25["positions"][E25];}for(var E25=0;E25<M25["uvs"]["length"];E25++){var u7qq="uv";u7qq+="s";a25[A15++]=M25[u7qq][E25];}for(var E25=0;E25<M25["normals"]["length"];E25++){w25[V15++]=M25["normals"][E25];}for(var E25=0;E25<M25["colorbuf"]["length"];E25++){H15[d15++]=M25["colorbuf"][E25];}C25=0;for(var E25=0;E25<M25["indices"]["length"];E25++){var F7qq="i";F7qq+="ndices";C25=M25[F7qq][E25]+K15;I25[p25++]=C25;i25["indicesCopy"][E25]=C25;}for(var E25=0;E25<M25[Q2qq.c86q]["length"];E25++){c25[O25++]=M25[Q2qq.c86q][E25];}for(var E25=0;E25<M25["edgeindices"][X7qq];E25++){J25[g15++]=M25["edgeindices"][E25]+U15;}}h15={'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':n25,'\x75\x76\x73':a25,'\x6e\x6f\x72\x6d\x61\x6c\x73':w25,'\x63\x6f\x6c\x6f\x72\x73':P25[0]["colors"],'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':J25,'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':c25,'\x69\x6e\x64\x69\x63\x65\x73':I25,'\x63\x6f\x6c\x6f\x72\x62\x75\x66':H15,'\x69\x66\x63\x74\x79\x70\x65':P25[0]["ifctype"],'\x63\x6f\x75\x6e\x74':P25[N7qq],'\x73\x74\x79\x6c\x65':u15,'\x66\x61\x63\x65':I25["length"]/3,'\x75\x6e\x69\x74\x73':b15};return h15;}P9qq+="3";var wtn,projId,transactionCount,tasks,receivedNodeCount,receivedTransactionCount,netkey,project,nodedict,defmeshloadarray,maxfn,totalinst,currinst,totalPack,numPack,platformDescription,windowurl,maxMemorySize,maxDesktopSize,maxMobileSize,sceneMemorySize,usedMemorySize,usedPackCount,ismobile,treeMode,themeTexture,settings,filePackages,memory,localDB,receiveCache,styles;function onReceiveTree(O55){var C7qq="r";C7qq+="eadI";C7qq+="nt32";var g05,p55,H05,o05,Y05,D05;g05=O55[C7qq]();p55=O55["readInt32Array"](g05*3);H05=O55[Q2qq.K86q]();for(var T55=0,b05=0;T55<p55["length"];T55+=3,b05++){o05=p55[T55];Y05=p55[T55+1];D05=p55[T55+2]*4;filePackages["addPackage"](b05,o05,D05,Y05);}totalPack=g05;initLoadPacks();}function toLoadFile(L55){var l55,W55;filePackages["setFileStatus"](L55,1);l55=[];for(var j55=0;j55<filePackages["packages"]["length"];j55++){W55=filePackages["packages"][j55];if(W55["fid"]==L55){if(usedMemorySize+W55["size"]<maxMemorySize){var M7qq="mco";M7qq+="unt";var E7qq="i";E7qq+="d";l55["push"](W55[E7qq]);totalinst+=W55[M7qq];usedPackCount++;usedMemorySize+=W55["size"];}}}gpk(l55);}if("undefined"==typeof BIMVIZ){var x5qq="co";x5qq+="mmondefine.js";importScripts('../common/encoding.js');importScripts('../common/StringView.js');importScripts('../common/datastream.js');importScripts('../common/pako.min.js');importScripts(x5qq);importScripts('../common/tmath.js');}projId="";transactionCount=0;tasks=new Array();function ld(){var D66q="transaction";var b66q="onsuccess";var J5qq="ha";J5qq+="sKe";J5qq+="y";var R45,f45,v45,q45;v45='trans';q45=this;this["valid"]=false;this["init"]=function(){var s45;s45=idbok();if(!s45){this["valid"]=false;console["log"]("Your browser doesn't support a stable version of IndexedDB. Bimviz .");return;}f45=indexedDB["open"]("bimviz.cache",1);f45["onerror"]=function(Z45){console["log"]("not allow bimviz to use IndexedDB");};f45[b66q]=function(W45){R45=f45["result"];q45["valid"]=true;};f45["onupgradeneeded"]=function(l45){var c5qq="s";c5qq+="s";c5qq+="n";var t5qq="cre";t5qq+="ateObjectStor";t5qq+="e";var w5qq="t";w5qq+="arget";var j45,L45;j45=l45[w5qq]["result"];L45=j45[t5qq]("trans",{'\x6b\x65\x79\x50\x61\x74\x68':c5qq});};};this[J5qq]=function(e45,P45,E45){var T5qq="ge";T5qq+="t";var m5qq="ob";m5qq+="jec";m5qq+="tStore";var M45,i45,G45;if(q45["valid"]==false){E45(e45);return;}M45=R45[D66q](v45,"readonly");i45=M45[m5qq](v45);G45=i45[T5qq](e45);G45[b66q]=function(I45){var x45;x45=I45["target"]["result"];if(x45)P45(e45,x45["blob"]);else{E45(e45);}};G45["onerror"]=function(C45){};};this["add"]=function(w45,t45){var O5qq="re";O5qq+="adwrite";var p5qq="val";p5qq+="i";p5qq+="d";var Q45,n45,a45,B45;if(q45[p5qq]==false){return;}Q45=R45[D66q](v45,O5qq);n45=Q45["objectStore"](v45);a45={'\x62\x6c\x6f\x62':t45,'\x73\x73\x6e':w45};B45=n45["add"](a45);B45[b66q]=function(c45){};B45["onerror"]=function(){console["error"]("add error",this["error"]);};};this["put"]=function(O45,g65){var m45,T45,p45,J45;if(q45["valid"]==false){return;}m45=R45[D66q](v45,"readwrite");T45=m45["objectStore"](v45);p45={'\x62\x6c\x6f\x62':g65,'\x73\x73\x6e':O45};J45=T45["put"](p45);J45[b66q]=function(b65){};J45["onerror"]=function(){console["error"]("put error",this["error"]);};};this["clear"]=function(){var g0qq="objectSto";g0qq+="r";g0qq+="e";var o65,Y65,D65,H65,A65;if(q45["valid"]==false){return;}o65=projId;Y65=IDBKeyRange["bound"](o65,o65+'\uffff',false,false);D65=R45[D66q](v45,"readwrite");H65=D65[g0qq](v45);A65=H65["openCursor"](Y65);A65[b66q]=function(K65){var V65;V65=K65["target"]["result"];if(V65){var b0qq="c";b0qq+="o";b0qq+="ntinue";V65["delete"]();V65[b0qq]();}else{}};};this["close"]=function(){if(q45["valid"]==false){return;}if(R45&&f45){R45["close"]();}};}function TransactionTask(f35,q35){var Z35,W35,j35,s35;s35=this;this["ReceiveData"]=function(L35,P35,x35){var j0qq="nodec";j0qq+="ount";var Z0qq="readI";Z0qq+="n";Z0qq+="t32";var e35,E35,G35,M35,i35;receivedTransactionCount++;W35=new Date();e35=L35[Q2qq.K86q]();if(e35>0){for(var l35=0;l35<e35;l35++){E35=defMesh(L35);receiveCache["addDef"](E35);}}G35=L35[Z0qq]();if(G35>0){for(var l35=0;l35<G35;l35++){M35=readInst(L35);receiveCache["addInst"](M35);}}delete tasks[q35];if(receivedTransactionCount>=transactionCount){var W0qq="processRestM";W0qq+="es";W0qq+="h";receiveCache[W0qq]();}j35=new Date();receivedNodeCount+=f35["length"];postMessage([j0qq,receivedNodeCount]);if(localDB["valid"]==true){if(!x35){i35=projId+","+q35;localDB["add"](i35,P35);}}};this["SendGeoCommand"]=function(){var I35;I35=projId+","+q35;localDB["hasKey"](I35,function(t35,B35){var l0qq="readInt";l0qq+="32";var Q35,n35,C35,a35,w35;Q35=new Uint8Array(B35);n35=pako["inflate"](Q35);C35=new DataStream(n35);a35=C35[l0qq]();w35=C35[Q2qq.K86q]();s35["ReceiveData"](C35,B35,true);},function(o25){var L0qq="gl";L0qq+="is";L0qq+="t";var m35,O35,g25,b25,J35,c35;m35="nodelist,"+projId+","+q35;O35="dlist";g25=L0qq;for(var T35=0;T35<f35["length"];T35++){b25=f35[T35];J35=nodedict[b25];if(J35&&J35["go"]){for(var p35=0;p35<J35["go"]["length"];p35++){var e0qq="d";e0qq+="eid";c35=J35["go"][p35];if(defmeshloadarray[c35[e0qq]]==undefined){var E0qq="s";E0qq+="fi";E0qq+="d";var G0qq="d";G0qq+="ei";G0qq+="d";defmeshloadarray[c35[G0qq]]=1;O35+="_"+c35["deid"]+"_"+c35[E0qq];}else{defmeshloadarray[c35["deid"]]++;}g25+="_"+c35["geid"];}}}m35+=","+O35;m35+=","+g25;_snd(m35);Z35=new Date();});};}receivedNodeCount=0;function idbok(){return"indexedDB"in self;}receivedTransactionCount=0;netkey="";project={'\x6f\x76\x65\x72\x76\x69\x65\x77':null,'\x73\x63\x65\x6e\x65':null};nodedict=new Array();function onRBScene(h55,u55,F55){var d55;project["scene"]=h55[Q2qq.U86q]();postMessage(["overview",project]);if(localDB["valid"]==true){if(!F55){d55=projId+",bscene";if(treeMode=="async"){d55=projId+",bscenesimple";}localDB["add"](d55,u55);}}}function onReceiveTree0(R05){var S05,z05,v05,r05,s05,q05,f05;S05=R05[Q2qq.K86q]();z05=R05["readInt32Array"](S05*3);totalinst=0;v05=0;r05=0;for(var y05=0;y05<z05["length"];y05+=3){s05=z05[y05];q05=z05[y05+1];f05=z05[y05+2]*4;r05+=f05;sceneMemorySize=r05;if(r05<=maxMemorySize){usedMemorySize=r05;v05++;totalinst+=q05;}}usedPackCount=v05;totalPack=S05;gpk0(usedPackCount);}function createOctreeNodeByStream(W05,I05,e05){var e36q=Q2qq;var n7qq="readIn";n7qq+="t32";var B7qq="levelId";B7qq+="ListDict";var Z05,j05,L05,G05,i05,P05,x05,M05,E05;Z05={};Z05["Id"]=W05[e36q.K86q]();Z05["Level"]=W05[e36q.K86q]();j05=W05[e36q.q46q](6);Z05["Box"]={'\x58':j05[0],'\x59':j05[1],'\x5a':j05[2],'\x53\x69\x7a\x65\x58':j05[3],'\x53\x69\x7a\x65\x59':j05[4],'\x53\x69\x7a\x65\x5a':j05[5]};Z05["ChildNodes"]=[];Z05["go"]=[];I05["ChildNodes"]["push"](Z05);L05=e05[B7qq][Z05["Level"]];if(!L05){var Q7qq="Leve";Q7qq+="l";L05=[];e05["levelIdListDict"][Z05[Q7qq]]=L05;}L05["push"](Z05["Id"]);G05=W05[n7qq]();for(var l05=0;l05<G05;l05++){i05=W05[e36q.K86q]();P05=W05[e36q.K86q]();x05=W05[e36q.K86q]();M05={'\x73\x66\x69\x64':x05,'\x64\x65\x69\x64':P05,'\x67\x65\x69\x64':i05};Z05["go"]["push"](M05);}for(var l05=0;l05<8;l05++){E05=W05[e36q.K86q]();if(E05==1){createOctreeNodeByStream(W05,Z05,e05);}}nodedict[Z05["Id"]]=Z05;}defmeshloadarray=new Array();function GBSceneImpl(){var b55;b55=projId+",bscene";if(treeMode=="async"){var L7qq=",bscenes";L7qq+="imple";b55=projId+L7qq;}localDB["hasKey"](b55,function(V55,Y55){var D55,H55,o55,A55;D55=new Uint8Array(Y55);H55=pako["inflate"](D55);o55=new DataStream(H55);A55=o55[Q2qq.K86q]();onRBScene(o55,Y55,true);},function(U55){var K55;K55="getbimtree,"+projId;if(treeMode=="async"){K55="getbimsimpletree,"+projId;}_snd(K55);});}maxfn=65535;function onrp0(Z5qq,P5qq,i5qq){var J9qq="rea";J9qq+="dInt";J9qq+="32";var c9qq="read";c9qq+="Int3";c9qq+="2";var l5qq,L5qq,W5qq,E5qq,M5qq,j5qq,G5qq,e5qq;l5qq=Z5qq[c9qq]();L5qq=Z5qq[Q2qq.K86q]();for(var s5qq=0;s5qq<L5qq;s5qq++){W5qq=defMesh(Z5qq);defmeshloadarray[W5qq["deid"]]=W5qq;}E5qq=Z5qq[Q2qq.K86q]();for(var s5qq=0;s5qq<E5qq;s5qq++){itoMesh(Z5qq);}M5qq=Z5qq[Q2qq.K86q]();for(var s5qq=0;s5qq<M5qq;s5qq++){btoMesh(Z5qq);}j5qq=Z5qq[J9qq]();for(var s5qq=0;s5qq<j5qq;s5qq++){G5qq=Z5qq[Q2qq.K86q]();if(themeTexture===true){rquestt(G5qq);}}if(localDB["valid"]==true){if(!i5qq){var m9qq="a";m9qq+="dd";e5qq=projId+",pack,"+l5qq;localDB[m9qq](e5qq,P5qq);}}numPack++;if(themeTexture===false){if(numPack==usedPackCount){onfi();}}}totalinst=0;function itoMesh(S1qq,L1qq){var L9qq="read";L9qq+="Int32";var W1qq,j1qq,s1qq,Z1qq,q1qq,l1qq,R1qq,v1qq;W1qq=S1qq[L9qq]();j1qq=S1qq[Q2qq.K86q]();s1qq=S1qq[Q2qq.K86q]();Z1qq=S1qq["readFloat64Array"](6);q1qq=[];for(var f1qq=0;f1qq<j1qq;f1qq++){l1qq=readInst(S1qq);q1qq["push"](l1qq);}R1qq=defmeshloadarray[W1qq];if(R1qq){var e9qq="r";e9qq+="mesh";v1qq=minstm(R1qq,q1qq,s1qq);v1qq["box"]=Z1qq;v1qq["fid"]=L1qq;postMessage([e9qq,v1qq]);}currinst+=1;postMessage(["instcount",{'\x63\x75\x72\x72\x65\x6e\x74':currinst,'\x74\x6f\x74\x61\x6c':totalinst}]);if(currinst==totalinst){currinst=0;totalinst=0;}}currinst=0;totalPack=0;function MemoryUsage(){var a5qq="notvali";a5qq+="d";var k45;k45=0;this["add"]=function(y45){k45+=y45;};this[a5qq]=function(S45){var z45,r45;z45=k45+S45;r45=z45>maxMemorySize;if(r45)return true;exitDataFlow();return false;};this["maxed"]=function(){return k45<=maxMemorySize;};}function onrpickdata(C05){var W36q=Q2qq;var a7qq="rea";a7qq+="dInt3";a7qq+="2";var p05,n05,a05,w05,t05,B05,J05,m05,T05,Q05,O05,g75,b75,o75,Y75,D75,H75,A75,V75,c05;p05=C05[a7qq]();if(p05>0){var J7qq="r";J7qq+="eadFloat32A";J7qq+="rray";var c7qq="read";c7qq+="Int32";var t7qq="read";t7qq+="Float";t7qq+="32Array";var w7qq="rea";w7qq+="dI";w7qq+="nt32";n05=C05[w7qq]();a05=C05[W36q.U86q]();w05=C05[W36q.U86q]();t05=C05[W36q.K86q]();B05=C05["readFloat32"]();J05=C05[W36q.q46q](3);m05=C05[W36q.K86q]();T05=C05[W36q.q46q](3);Q05=C05[W36q.q46q](3);O05=C05[t7qq](3);g75=C05[W36q.K86q]();b75=C05[W36q.q46q](g75*3);o75=C05[c7qq]();Y75=C05[J7qq](o75*3);D75=C05["readFloat64"]();H75=C05[W36q.K86q]();A75=C05[W36q.K86q]();V75=C05[W36q.K86q]();c05={'\x64\x65\x66\x49\x64':n05,'\x63\x70\x6f\x69\x6e\x74':T05,'\x70\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':b75,'\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':Y75,'\x69\x66\x63\x74\x79\x70\x65':w05,'\x67\x65\x6f\x6d\x65\x74\x72\x79\x49\x64':t05,'\x61\x72\x65\x61':D75,'\x64\x69\x73\x74\x61\x6e\x63\x65':B05,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':a05,'\x65\x73\x74\x61\x72\x74':Q05,'\x70\x6f\x69\x6e\x74\x49\x64':H75,'\x65\x64\x67\x65\x49\x64':A75,'\x70\x6f\x6c\x79\x67\x6f\x6e\x49\x64':V75,'\x66\x61\x63\x65\x49\x64':m05,'\x64\x69\x73\x74\x61\x6e\x63\x65':B05,'\x65\x65\x6e\x64':O05,'\x70\x6f\x69\x6e\x74':J05};postMessage(["pickeddata",c05]);}}function minstm(s95,C95,n2qq){var d9qq="le";d9qq+="ng";d9qq+="th";var U9qq="in";U9qq+="dice";U9qq+="s";var K9qq="indic";K9qq+="e";K9qq+="s";var n95,l95,i95,W95,x95,a95,T95,O95,B95,t95;n95={'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':s95["positions"],'\x75\x76\x73':s95["uvs"],'\x6e\x6f\x72\x6d\x61\x6c\x73':s95["normals"],'\x69\x6e\x64\x69\x63\x65\x73':s95[K9qq],'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':s95[Q2qq.c86q],'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':s95["edgeindices"],'\x66\x61\x63\x65':s95[U9qq]["length"]/3,'\x75\x6e\x69\x74\x73':[],'\x63\x6f\x75\x6e\x74':C95[d9qq],'\x76\x6f\x6c\x75\x6d\x65':s95["volume"],'\x61\x72\x65\x61':s95["area"],'\x62\x6f\x78':s95["box"],'\x73\x74\x79\x6c\x65':n2qq};l95=s95["size"];i95=C95["length"];for(var j95=0;j95<i95;j95++){var X9qq="pu";X9qq+="s";X9qq+="h";var F9qq="Vec";F9qq+="to";F9qq+="r3";var u9qq="Vect";u9qq+="or3";var h9qq="fromAr";h9qq+="r";h9qq+="ay";W95=C95[j95];x95=new THREE["Matrix4"]();x95[h9qq](W95["matrix"]);a95=new THREE["Quaternion"]();T95=new THREE[u9qq]();O95=new THREE[F9qq]();x95["decompose"](T95,a95,O95);B95=s95["box"]["clone"]();B95["applyMatrix4"](x95);t95={'\x69\x6e\x73\x74\x49\x64':W95["geid"],'\x64\x65\x66\x49\x64':W95["deid"],'\x6d\x61\x74\x72\x69\x78':W95["matrix"],'\x69\x66\x63\x74\x79\x70\x65':W95["ifctype"],'\x63\x6f\x6c\x6f\x72':W95["color"],'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':W95["elementId"],'\x6d\x65\x73\x68\x49\x64':W95["geid"],'\x69\x6e\x64\x65\x78':j95,'\x66\x69\x6c\x65\x49\x64':W95["sfid"],'\x73\x74\x6f\x72\x65\x79\x49\x64':W95["storeyId"],'\x69\x6e\x64\x65\x78\x53\x74\x61\x72\x74':0,'\x69\x6e\x64\x65\x78\x43\x6f\x75\x6e\x74':s95["indices"]["length"],'\x6d\x74\x79\x70\x65':'R','\x76\x6f\x6c\x75\x6d\x65':defMesh["volume"],'\x61\x72\x65\x61':defMesh["area"],'\x71\x75\x61\x74\x65\x72\x6e\x69\x6f\x6e':a95,'\x62\x6f\x78':B95};n95["units"][X9qq](t95);}l95+=i95*16*4;l95+=i95*1*4;l95+=i95*4*1;memory["add"](l95);return n95;}function rquestt(o5qq){var Q9qq="g";Q9qq+="et";var b5qq,Y5qq;b5qq=styles[Q9qq](o5qq);if(b5qq){return;}styles["requestCount"]++;b5qq={'\x73\x74\x61\x74\x75\x73':"loading"};styles["add"](o5qq,b5qq);Y5qq=projId+",spack,"+o5qq;localDB["hasKey"](Y5qq,function(U5qq,H5qq){var n9qq="readInt";n9qq+="32";var A5qq,V5qq,D5qq,K5qq;A5qq=new Uint8Array(H5qq);V5qq=pako["inflate"](A5qq);D5qq=new DataStream(V5qq);K5qq=D5qq[n9qq]();onrquesttf(D5qq,H5qq,true);},function(h5qq){var d5qq;d5qq="getspack,"+h5qq;_snd(d5qq);});}numPack=0;maxMemorySize=0;maxDesktopSize=0;maxMobileSize=0;function onRTree(q55,s55,Z55){var G7qq="v";G7qq+="al";G7qq+="id";var f55;if(settings["loadingmethod"]==1)onReceiveTree0(q55);else if(settings["loadingmethod"]==2)onReceiveTree(q55);if(localDB[G7qq]==true){if(!Z55){f55=projId+",tree";localDB["add"](f55,s55);}}}sceneMemorySize=0;function onfi(){var o0qq="sc";o0qq+="e";o0qq+="ne";if(settings["loadingmethod"]==1)localDB["close"]();for(var u65 in defmeshloadarray){if(defmeshloadarray["hasOwnProperty"](u65)){delete defmeshloadarray[u65];}}project[o0qq]=null;project["overview"]=null;postMessage(["loadingresult",{'\x74\x6f\x74\x61\x6c':totalinst,'\x6d\x6f\x62\x69\x6c\x65':ismobile,'\x75\x73\x65\x64\x4d\x65\x6d\x6f\x72\x79\x53\x69\x7a\x65':usedMemorySize,'\x6d\x61\x78\x41\x6c\x6c\x6f\x77\x65\x64\x53\x69\x7a\x65':maxMemorySize,'\x73\x63\x65\x6e\x65\x4d\x65\x6d\x6f\x72\x79\x53\x69\x7a\x65':sceneMemorySize,'\x63\x75\x72\x72\x65\x6e\x74':currinst}]);}usedMemorySize=0;usedPackCount=0;ismobile=false;treeMode="sync";function gpk0(V05){var K05;totalPack=V05;for(var A05=0;A05<V05;A05++){K05=projId+",pack,"+A05;localDB["hasKey"](K05,function(X05,d05){var h05,u05,U05,F05;h05=new Uint8Array(d05);u05=pako["inflate"](h05);U05=new DataStream(u05);F05=U05[Q2qq.K86q]();onrp0(U05,d05,true);},function(k05){var N05;N05="pack,"+k05;_snd(N05);});}}themeTexture=false;settings=null;function waitCTimeout(g55,O15){if(localDB["valid"]==false&&g55>=0){setTimeout(function(){console["log"]("wait cache",new Date()["toLocaleTimeString"]());if(localDB["valid"]==false){waitCTimeout(g55-1,O15);}else{O15();}},1000);}else if(localDB["valid"]==true){O15();}else{var l7qq="Your browser can not su";l7qq+="pport indexdb correctly no";l7qq+="w. Please retry in a newer browser or refresh later.";var j7qq="l";j7qq+="og";console[j7qq](l7qq);}};filePackages=new FilePackages();;;function onrp(F5qq,f5qq,q5qq){var f36q=Q2qq;var t9qq="va";t9qq+="l";t9qq+="id";var N5qq,y5qq,X5qq,k5qq,v5qq,R5qq,r5qq,z5qq,S5qq;N5qq=F5qq[f36q.K86q]();y5qq=F5qq[f36q.K86q]();X5qq=filePackages["packages"][N5qq];for(var u5qq=0;u5qq<y5qq;u5qq++){var a9qq="d";a9qq+="eid";k5qq=defMesh(F5qq);defmeshloadarray[k5qq[a9qq]]=k5qq;}v5qq=F5qq[f36q.K86q]();for(var u5qq=0;u5qq<v5qq;u5qq++){itoMesh(F5qq,X5qq["fid"]);}R5qq=F5qq[f36q.K86q]();for(var u5qq=0;u5qq<R5qq;u5qq++){var w9qq="f";w9qq+="i";w9qq+="d";btoMesh(F5qq,X5qq[w9qq]);}r5qq=F5qq[f36q.K86q]();for(var u5qq=0;u5qq<r5qq;u5qq++){z5qq=F5qq[f36q.K86q]();if(themeTexture===true){rquestt(z5qq);}}if(localDB[t9qq]==true){if(!q5qq){S5qq=projId+",pack,"+N5qq;localDB["add"](S5qq,f5qq);}}usedPackCount--;usedMemorySize-=X5qq["size"];if(styles["finishCount"]==styles["requestCount"]){if(0==usedPackCount){onfi();}}}function initLoadPacks(){var x7qq="len";x7qq+="g";x7qq+="th";var J55,c55,m55,w55;J55=0;c55=[];m55=0;usedMemorySize=0;for(var t55=0;t55<filePackages["packages"][x7qq];t55++){var I7qq="f";I7qq+="i";I7qq+="d";w55=filePackages["packages"][t55];if(filePackages["getFileStatus"](w55[I7qq])===1){if(usedMemorySize+w55["size"]<maxMemorySize){c55["push"](w55["id"]);totalinst+=w55["mcount"];usedPackCount++;usedMemorySize+=w55["size"];}}}gpk(c55);}function btoMesh(E1qq,Q1qq){var i9qq="i";i9qq+="nstco";i9qq+="unt";var x1qq,I1qq,C1qq,e1qq,i1qq,P1qq,B1qq,G1qq;x1qq=E1qq[Q2qq.K86q]();I1qq=E1qq[Q2qq.K86q]();C1qq=E1qq["readFloat64Array"](6);e1qq=[];for(var M1qq=0;M1qq<x1qq;M1qq++){var G9qq="d";G9qq+="eid";i1qq=readInst(E1qq);P1qq=defmeshloadarray[i1qq[G9qq]];if(P1qq){B1qq=mbatm(P1qq,i1qq);e1qq["push"](B1qq);}}if(e1qq["length"]>0){var M9qq="dat";M9qq+="a";var E9qq="b";E9qq+="o";E9qq+="x";G1qq=mg(e1qq,I1qq);G1qq[E9qq]=C1qq;G1qq["fid"]=Q1qq;postMessage([M9qq,G1qq]);}currinst+=1;postMessage([i9qq,{'\x74\x6f\x74\x61\x6c':totalinst,'\x63\x75\x72\x72\x65\x6e\x74':currinst}]);if(currinst==totalinst){currinst=0;totalinst=0;}}memory=new MemoryUsage();localDB=new ld();function onReceiveQueryElements(H95){var R36q=Q2qq;var V95,A95,N95,U95,d95,y95,v95,r95,z95,R95,k95;V95=H95[R36q.K86q]();if(V95==0)return;A95=[];N95=[];for(var K95=0;K95<V95;K95++){var V9qq="p";V9qq+="ush";var A9qq="readI";A9qq+="nt32";var H9qq="readIn";H9qq+="t32";var D9qq="r";D9qq+="eadInt";D9qq+="32";U95=H95[D9qq]();d95=H95[R36q.U86q]();y95=H95[R36q.U86q]();v95=H95[H9qq]();r95=H95["readFloat32"]();z95=H95[R36q.q46q](3);R95=H95[A9qq]();N95["push"](U95);k95={'\x64\x65\x66\x69\x64':U95,'\x64\x69\x73\x74\x61\x6e\x63\x65':r95,'\x69\x66\x63\x74\x79\x70\x65':y95,'\x70\x6f\x69\x6e\x74':z95,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':d95};A95[V9qq](k95);}A95["sphere"]=H95[R36q.q46q](4);postMessage(["queryelement",A95]);}function exitDataFlow(){postMessage(["instcount",{'\x63\x75\x72\x72\x65\x6e\x74':currinst,'\x74\x6f\x74\x61\x6c':totalinst}]);}localDB["init"]();;receiveCache=new trdc();function readInst(v75){var v36q=Q2qq;var T7qq="r";T7qq+="eadI";T7qq+="nt32";var R75,q75,f75,s75,Z75,W75,j75,l75;R75=v75[v36q.K86q]();q75=v75[v36q.K86q]();f75=v75[v36q.U86q]();s75=v75[v36q.K86q]();Z75=v75[v36q.q46q](16);W75=v75[v36q.U86q]();j75=v75[v36q.q46q](4);l75=v75[T7qq]();return{'\x73\x66\x69\x64':s75,'\x63\x6f\x6c\x6f\x72':j75,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':f75,'\x64\x65\x69\x64':R75,'\x69\x66\x63\x74\x79\x70\x65':W75,'\x6d\x61\x74\x72\x69\x78':Z75,'\x67\x65\x69\x64':q75,'\x73\x74\x6f\x72\x65\x79\x49\x64':l75};}function onGTree(){var X55;X55=projId+",tree";localDB["hasKey"](X55,function(S55,k55){var e7qq="rea";e7qq+="dInt32";var y55,z55,N55,r55;y55=new Uint8Array(k55);z55=pako["inflate"](y55);N55=new DataStream(z55);r55=N55[e7qq]();onRTree(N55,k55,true);},function(R55){var v55;v55="gettree,"+projId;_snd(v55);});}onmessage=function(F25){var H36q="WORKDEFINE";var D36q="data";var b7qq="Load";b7qq+="File";var g7qq="WOR";g7qq+="KDE";g7qq+="FINE";var p0qq="Ge";p0qq+="tPickedD";p0qq+="ata";var T0qq="W";T0qq+="ORKDE";T0qq+="FINE";var B0qq="W";B0qq+="ORKDEFINE";var C0qq="d";C0qq+="ata";var X25,f25,s25,r25,N25,z25,v25,k25,q25,Z25,S25,y25,R25;X25=F25[C0qq][0];if(X25==BIMVIZ[B0qq]["Start"]){var a0qq="d";a0qq+="a";a0qq+="ta";var n0qq="dat";n0qq+="a";var Q0qq="da";Q0qq+="ta";f25=F25[D36q][1];projId=F25[D36q][2];netkey=F25[Q0qq][3];platformDescription=F25[D36q][4];windowurl=F25[n0qq][5];maxDesktopSize=F25[D36q][6];maxMobileSize=F25[D36q][7];ismobile=F25[D36q][8];treeMode=F25[a0qq][9];start(f25);}else if(X25==BIMVIZ[H36q]["Close"]){wtn["close"]();}else if(X25==BIMVIZ[H36q]["LoadTreeNodeMesh"]){var w0qq="SendG";w0qq+="eoCom";w0qq+="mand";s25=F25[D36q][1];transactionCount++;r25=new TransactionTask(s25,transactionCount);tasks[transactionCount]=r25;r25[w0qq]();}else if(X25==BIMVIZ[H36q]["PickByRay"]){var c0qq="da";c0qq+="ta";var t0qq="dat";t0qq+="a";N25=F25[D36q][1];z25=F25[t0qq][2];v25=F25[c0qq][3];k25="pick,"+projId+","+N25["x"]+","+N25["y"]+","+N25["z"]+","+z25["x"]+","+z25["y"]+","+z25["z"]+","+v25;_snd(k25);}else if(X25==BIMVIZ[H36q]["GetElementData"]){var J0qq="da";J0qq+="ta";q25=F25[J0qq][1];k25="queryelement,"+projId+","+q25;_snd(k25);}else if(X25==BIMVIZ[H36q]["LoadTree"]){var m0qq="pre";m0qq+="s";m0qq+="et";Z25=F25[D36q][1];S25=F25[D36q][2];filePackages[m0qq]=S25;filterFiles(S25);onGTree();}else if(X25==BIMVIZ[T0qq][p0qq]){var O0qq="dist";O0qq+="a";O0qq+="nce";y25=F25[D36q][1];N25=y25["orgPoint"];k25="pickeddata,"+projId+","+y25["elementId"]+","+N25["x"]+","+N25["y"]+","+N25["z"]+","+y25["defId"]+","+y25["geometryId"]+","+y25["faceId"]+","+y25[O0qq];_snd(k25);}else if(X25==BIMVIZ[g7qq][b7qq]){R25=F25[D36q][1];toLoadFile(R25);}};;;;;;;function onReceiveSelectEntity(K75){var S36q=Q2qq;var z75,U75,N75,h75,F75,k75,y75,u75,r75,S75,X75;z75=K75[S36q.K86q]();U75=[];N75=[];for(var d75=0;d75<z75;d75++){var m7qq="readLongUTF";m7qq+="8";h75=K75[S36q.K86q]();F75=K75[m7qq]();k75=K75[S36q.U86q]();y75=K75[S36q.K86q]();u75=K75["readFloat32"]();r75=K75[S36q.q46q](3);S75=K75[S36q.K86q]();N75["push"](h75);X75={'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':F75,'\x70\x6f\x69\x6e\x74':r75,'\x64\x65\x66\x49\x64':h75,'\x64\x69\x73\x74\x61\x6e\x63\x65':u75,'\x67\x65\x6f\x6d\x65\x74\x72\x79\x49\x64':y75,'\x69\x66\x63\x74\x79\x70\x65':k75,'\x64\x69\x73\x74\x61\x6e\x63\x65':u75,'\x66\x61\x63\x65\x49\x64':S75};U75["push"](X75);}postMessage(["select",U75]);}function hbm(f15){var R15,r15,W15,N15,Z15,v15,k15,S15,z15,s15;R15=0;r15=maxfn;for(var q15 in f15){if(f15["hasOwnProperty"](q15)){W15=f15[q15];N15=W15["list"];if(N15&&N15["length"]>0){var y7qq="len";y7qq+="g";y7qq+="th";var k7qq="s";k7qq+="or";k7qq+="t";N15[k7qq](function(j15,l15){return l15["indices"]["length"]-j15["indices"]["length"];});for(var X15=0,y15=N15[y7qq]-1;X15<=y15;){if(X15==y15){var z7qq="da";z7qq+="ta";Z15=N15[X15++];postMessage([z7qq,Z15]);}else{var v7qq="d";v7qq+="a";v7qq+="ta";v15=[N15[X15]];k15=N15[X15]["indices"]["length"];X15++;while(k15<r15&&X15<=y15){var r7qq="in";r7qq+="dice";r7qq+="s";S15=N15[X15];z15=N15[y15];if(k15+S15[r7qq]["length"]<r15){k15+=S15["indices"]["length"];v15["push"](S15);X15++;}else if(k15+z15["indices"]["length"]<r15){var S7qq="p";S7qq+="u";S7qq+="sh";k15+=z15["indices"]["length"];v15[S7qq](z15);y15--;}else{break;}}s15=mg(v15,0);postMessage([v7qq,s15]);R15++;}}}}}return R15;}function filterFiles(W25){var o7qq="loa";o7qq+="dingm";o7qq+="ethod";var e25,L25,G25;if(settings[o7qq]==2&&W25&&W25["enabled"]===true){for(var l25 in filePackages["files"]){var Y7qq="f";Y7qq+="il";Y7qq+="es";if(!filePackages["files"]["hasOwnProperty"](l25))continue;filePackages[Y7qq][l25]["status"]=0;}if(W25["nameList"]&&W25["nameList"]["length"]>0){for(var j25=0;j25<W25["nameList"]["length"];j25++){var D7qq="n";D7qq+="ameLi";D7qq+="st";e25=W25[D7qq][j25];L25=filePackages["getFileByName"](e25);if(L25){L25["status"]=1;}}}if(W25["idList"]&&W25["idList"]["length"]>0){for(var j25=0;j25<W25["idList"]["length"];j25++){var H7qq="setFi";H7qq+="leStatus";G25=W25["idList"][j25];filePackages[H7qq](G25,1);}}}};;function FilePackages(){var Q5qq="setFil";Q5qq+="eStatus";var C5qq="ad";C5qq+="dFi";C5qq+="le";var I5qq="f";I5qq+="il";I5qq+="es";this[I5qq]={};this["packages"]=[];this["preset"]=null;this[C5qq]=function(o45,Y45,D45){this["files"][o45]={'\x6e\x61\x6d\x65':Y45,'\x73\x74\x61\x74\x75\x73':D45,'\x69\x64':o45};};this["getFileByName"]=function(V45){var A45;for(var H45 in this["files"]){var B5qq="hasOwnProper";B5qq+="ty";if(this["files"][B5qq](H45)){A45=this["files"][H45];if(A45["name"]==V45){return A45;}}}return null;};this[Q5qq]=function(K45,U45){var n5qq="fi";n5qq+="les";this[n5qq][K45]["status"]=U45;};this["getFileStatus"]=function(h45){var d45;d45=this["files"][h45]["status"];return d45;};this["addPackage"]=function(u45,F45,X45,N45){this["packages"]["push"]({'\x69\x64':u45,'\x6d\x63\x6f\x75\x6e\x74':N45,'\x66\x69\x64':F45,'\x73\x69\x7a\x65':X45});};};function hp(i15,G15){var L15,e15,M15,E15;L15=new DataStream(i15);e15=L15[Q2qq.K86q]();if(e15==1){M15=L15[Q2qq.K86q]();E15=tasks[M15];if(E15){E15["ReceiveData"](L15,G15,false);}}else if(e15==2){onReceiveSelectEntity(L15);}else if(e15==3){onReceiveQueryElements(L15);}else if(e15==4){onRTree(L15,G15,false);}else if(e15==5){onGOverview(L15);}else if(e15==8){onROverview(L15);}else if(e15==9){onRBScene(L15,G15,false);}else if(e15==100){if(settings["loadingmethod"]==1){onrp0(L15,G15,false);}else if(settings["loadingmethod"]==2){onrp(L15,G15,false);}}else if(e15==101){onrpickdata(L15);}else if(e15==102){onRBScene(L15,G15,false);}else if(e15==103){onrquesttf(L15,G15,false);}}function onrquesttf(n1qq,g5qq,O1qq){var B9qq="v";B9qq+="al";B9qq+="id";var C9qq="rea";C9qq+="dInt32";var c1qq,J1qq,T1qq,w1qq,t1qq,p1qq,m1qq;c1qq=n1qq[Q2qq.K86q]();J1qq=n1qq[C9qq]();for(var a1qq=0;a1qq<J1qq;a1qq++){T1qq=n1qq[Q2qq.K86q]();w1qq=n1qq[Q2qq.K86q]();if(w1qq>0){t1qq=n1qq["readUint8Array"](w1qq);p1qq={'\x63\x6f\x6e\x74\x65\x6e\x74':t1qq,'\x73\x69\x64':T1qq};postMessage(["style",p1qq]);}}if(localDB[B9qq]==true){if(!O1qq){m1qq=projId+",spack,"+c1qq;localDB["add"](m1qq,g5qq);}}styles["finishCount"]++;if(styles["finishCount"]==styles["requestCount"]){onfi();}}styles=new BIMVIZ[P9qq][x9qq]();function onGBScene(){waitCTimeout(5,GBSceneImpl);}styles[I9qq]=0;styles["finishCount"]=0;function onROverview(t15){var N36q="MaxMemory";var R7qq="r";R7qq+="eadLongUTF8";var w15,B15,a15,n15;w15=t15[R7qq]();project["overview"]=JSON["parse"](w15);settings=project["overview"];function c15(){var J15;J15=projId+",timestamp";localDB["hasKey"](J15,function(m15,T15){var Z7qq="ti";Z7qq+="mestamp";if(project["overview"][Z7qq]!=T15){localDB["clear"]();localDB["put"](m15,project["overview"]["timestamp"]);console["log"]("The scene is updated in server, so it will be updated in client cache.");}else{console["log"]("The scene is same as in server, Bimviz will use it for your speed.");}onGBScene();},function(p15){var W7qq="l";W7qq+="og";console[W7qq]("The scene will be cached in client cache.");localDB["add"](p15,project["overview"]["timestamp"]);onGBScene();});}if(ismobile){var q7qq="MobileMaxMe";q7qq+="mory";B15=1024*1024*1024*2;maxMemorySize=project["overview"][q7qq]>0?project["overview"]["MobileMaxMemory"]*1024*1024:B15;if(maxMobileSize>0){maxMemorySize=maxMobileSize*1024*1024;}}else{B15=1024*1024*1024*4;maxMemorySize=project["overview"][N36q]>0?project["overview"][N36q]*1024*1024:B15;if(maxDesktopSize>0){maxMemorySize=maxDesktopSize*1024*1024;}}project[N36q]=maxMemorySize;themeTexture=project["overview"]["TextureMode"]===2;a15=project["overview"]["LoadFiles"];for(var Q15=0;Q15<a15["length"];Q15++){var s7qq="L";s7qq+="oad";var f7qq="Fi";f7qq+="leId";n15=a15[Q15];filePackages["addFile"](n15[f7qq],n15["FileName"],n15[s7qq]?1:0);}waitCTimeout(5,c15);}function mbatm(w2qq,m2qq){var l9qq="ad";l9qq+="d";var j9qq="leng";j9qq+="th";var W9qq="le";W9qq+="ngt";W9qq+="h";var Z9qq="len";Z9qq+="g";Z9qq+="th";var s9qq="l";s9qq+="eng";s9qq+="th";var f9qq="matr";f9qq+="ix";var q9qq="l";q9qq+="ength";var R9qq="edge";R9qq+="indi";R9qq+="ces";var S9qq="po";S9qq+="sitions";var z9qq="uv";z9qq+="s";var y9qq="applyM";y9qq+="atrix4";var k9qq="c";k9qq+="l";k9qq+="one";var N9qq="mat";N9qq+="r";N9qq+="ix";var F1qq,X1qq,V1qq,H1qq,U1qq,c2qq,g1qq,K1qq,y1qq,k1qq,h1qq,p2qq,J2qq,o1qq,d1qq,b1qq,u1qq,T2qq,Y1qq,A1qq,O2qq,N1qq,z1qq,r1qq,D1qq;F1qq=m2qq["geid"];X1qq=m2qq["sfid"];V1qq=m2qq["storeyId"];H1qq=m2qq["ifctype"];U1qq=m2qq["elementId"];c2qq=m2qq["color"];g1qq=new THREE["Matrix4"]();g1qq["fromArray"](m2qq[N9qq]);K1qq=new THREE["Quaternion"]();y1qq=new THREE["Vector3"]();k1qq=new THREE["Vector3"]();g1qq["decompose"](y1qq,K1qq,k1qq);h1qq=w2qq["box"][k9qq]();h1qq[y9qq](g1qq);p2qq=new Float32Array(w2qq["positions"]["length"]);J2qq=new THREE["Vector3"]();for(var a2qq=0,t2qq=p2qq["length"];a2qq<t2qq;a2qq+=3){J2qq["fromArray"](w2qq["positions"],a2qq);J2qq["applyMatrix4"](g1qq);J2qq["toArray"](p2qq,a2qq);}o1qq=new Float32Array(w2qq[z9qq]["length"]);d1qq=new THREE["Vector2"]();for(var a2qq=0,t2qq=o1qq["length"];a2qq<t2qq;a2qq+=2){d1qq["fromArray"](w2qq["uvs"],a2qq);d1qq["toArray"](o1qq,a2qq);}b1qq=new Float32Array(w2qq["normals"]["length"]);for(var a2qq=0,t2qq=b1qq["length"];a2qq<t2qq;a2qq+=3){var r9qq="no";r9qq+="rmal";r9qq+="s";J2qq["fromArray"](w2qq[r9qq],a2qq);J2qq["applyQuaternion"](K1qq)["normalize"]();J2qq["toArray"](b1qq,a2qq);}u1qq=w2qq[S9qq]["length"]/3*4;T2qq=new Float32Array(u1qq);for(var a2qq=0,t2qq=u1qq;a2qq<t2qq;a2qq+=4){T2qq[a2qq]=c2qq[0];T2qq[a2qq+1]=c2qq[1];T2qq[a2qq+2]=c2qq[2];T2qq[a2qq+3]=c2qq[3];}Y1qq=new Float32Array(w2qq[Q2qq.c86q]);for(var a2qq=0,t2qq=Y1qq["length"];a2qq<t2qq;a2qq+=3){var v9qq="edgep";v9qq+="osition";v9qq+="s";J2qq["fromArray"](w2qq[v9qq],a2qq);J2qq["applyMatrix4"](g1qq);J2qq["toArray"](Y1qq,a2qq);}A1qq=new Uint32Array(w2qq[R9qq]);O2qq=new Uint32Array(w2qq["indices"]);N1qq=[];z1qq={'\x69\x6e\x73\x74\x49\x64':m2qq["geid"],'\x64\x65\x66\x49\x64':m2qq["deid"],'\x69\x6e\x64\x65\x78\x53\x74\x61\x72\x74':0,'\x69\x6e\x64\x65\x78\x43\x6f\x75\x6e\x74':O2qq[q9qq],'\x65\x64\x67\x65\x53\x74\x61\x72\x74':0,'\x65\x64\x67\x65\x43\x6f\x75\x6e\x74':A1qq["length"],'\x69\x6e\x64\x69\x63\x65\x73\x43\x6f\x70\x79':new Uint32Array(O2qq),'\x73\x74\x6f\x72\x65\x79\x49\x64':V1qq,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':U1qq,'\x6d\x65\x73\x68\x49\x64':F1qq,'\x69\x66\x63\x74\x79\x70\x65':H1qq,'\x76\x69\x73\x69\x62\x6c\x65':true,'\x66\x69\x6c\x65\x49\x64':X1qq,'\x63\x6f\x6c\x6f\x72':c2qq,'\x6d\x61\x74\x72\x69\x78':m2qq[f9qq],'\x6d\x74\x79\x70\x65':'B','\x76\x6f\x6c\x75\x6d\x65':w2qq["volume"],'\x61\x72\x65\x61':w2qq["area"],'\x62\x6f\x78':h1qq,'\x73\x74\x79\x6c\x65':w2qq["style"]};N1qq["push"](z1qq);r1qq={'\x75\x6e\x69\x74\x73':N1qq,'\x63\x6f\x6c\x6f\x72\x73':c2qq,'\x6e\x6f\x72\x6d\x61\x6c\x73':b1qq,'\x6d\x65\x73\x68\x49\x64':F1qq,'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':p2qq,'\x69\x6e\x64\x69\x63\x65\x73':O2qq,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':U1qq,'\x66\x61\x63\x65':O2qq["length"]/3,'\x63\x6f\x75\x6e\x74':1,'\x69\x66\x63\x74\x79\x70\x65':H1qq,'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':A1qq,'\x63\x6f\x6c\x6f\x72\x62\x75\x66':T2qq,'\x6b\x65\x79':H1qq+":"+c2qq[0]["toFixed"](3)+c2qq[1]["toFixed"](3)+c2qq[2]["toFixed"](3)+c2qq[3]["toFixed"](3),'\x75\x76\x73':o1qq,'\x66\x69\x6c\x65\x49\x64':X1qq,'\x73\x74\x6f\x72\x65\x79\x49\x64':V1qq,'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':Y1qq};D1qq=p2qq[s9qq]+b1qq["length"]+T2qq[Z9qq]+O2qq["length"]+Y1qq["length"]+A1qq[W9qq]+o1qq["length"];D1qq*=4;D1qq+=p2qq[j9qq]/3*1*4;D1qq+=p2qq["length"]/3*4*1;memory[l9qq](D1qq);return r1qq;}
var L0TT="D";L0TT+="3";var N0TT="UniqueDic";N0TT+="t";var H0TT="E";H0TT+="L";H0TT+="EMENT";var e0TT="E";e0TT+="L";e0TT+="EMENT";var F0TT="U";F0TT+="I";var B0TT="W";B0TT+="ORK";B0TT+="DEFINE";var BIMVIZ;function doDisposeObject3DOnly(H0z){if(H0z!==null){for(var N0z=0;N0z<H0z["children"]["length"];N0z++){var K0z="c";K0z+="h";K0z+="ildren";doDisposeObject3DOnly(H0z[K0z][N0z]);}if(H0z["geometry"]){var b0z="dis";b0z+="po";b0z+="se";H0z["geometry"][b0z]();H0z["geometry"]=undefined;}if(H0z["material"]){H0z["material"]=undefined;}}H0z=undefined;}BIMVIZ={'\x52\x45\x56\x49\x53\x49\x4f\x4e':'1.6.6'};BIMVIZ[B0TT]={'\x47\x65\x74\x50\x69\x63\x6b\x65\x64\x44\x61\x74\x61':7,'\x47\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x44\x61\x74\x61':5,'\x53\x74\x61\x72\x74':1,'\x50\x69\x63\x6b\x42\x79\x52\x61\x79':4,'\x4c\x6f\x61\x64\x46\x69\x6c\x65':8,'\x4c\x6f\x61\x64\x54\x72\x65\x65\x4e\x6f\x64\x65\x4d\x65\x73\x68':3,'\x43\x6c\x6f\x73\x65':2,'\x4c\x6f\x61\x64\x54\x72\x65\x65':6};BIMVIZ["NETDEFINE"]={};BIMVIZ[F0TT]={};BIMVIZ["D3"]={};BIMVIZ[e0TT]={};BIMVIZ[H0TT]["STATUS"]={};BIMVIZ["D3"][N0TT]=function(){this["dict"]=new Array();this["length"]=0;};BIMVIZ["D3"]["UniqueDict"]["prototype"]={'\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72':BIMVIZ["D3"]["UniqueDict"],'\x73\x65\x74':function(g0z,r0z){var w0z;w0z=this["dict"][g0z];if(w0z){this["dict"][g0z]=r0z;}else{var x0z="dic";x0z+="t";this[x0z][g0z]=r0z;this["length"]++;}},'\x67\x65\x74':function(U0z){var o0z="d";o0z+="ic";o0z+="t";var C0z;C0z=this[o0z][U0z];return C0z;},'\x63\x6c\x65\x61\x72':function(){this["dict"]=new Array();this["length"]=0;},'\x72\x65\x6d\x6f\x76\x65':function(j0z){var T0z;T0z=this["dict"][j0z];if(T0z){delete this["dict"][j0z];this["length"]--;}},'\x6c\x69\x73\x74':function(){var d0z;d0z=[];for(var a0z in this["dict"]){if(!this["dict"]["hasOwnProperty"](a0z))continue;d0z["push"](a0z);}return d0z;},'\x61\x64\x64':function(y9z,D0z){var t9z;t9z=this["dict"][y9z];if(!t9z){var L0z="l";L0z+="eng";L0z+="th";this["dict"][y9z]=D0z;this[L0z]++;}}};BIMVIZ["D3"]["KeyListDict"]=function(){this["dict"]=new Array();};function doDisposeObject3D(B0z){var d1z="dispose";var e0z;if(B0z!==null){var l0z="ge";l0z+="om";l0z+="etry";var n0z="le";n0z+="ngt";n0z+="h";var O0z="chil";O0z+="dr";O0z+="en";for(var F0z=0;F0z<B0z[O0z][n0z];F0z++){doDisposeObject3D(B0z["children"][F0z]);}if(B0z[l0z]){var c0z="geomet";c0z+="ry";B0z[c0z][d1z]();B0z["geometry"]=undefined;}if(B0z["material"]){if(Array["isArray"](B0z["material"])){for(var F0z=0;F0z<B0z["material"]["length"];F0z++){e0z=B0z["material"][F0z];if(e0z["map"]){var s0z="m";s0z+="a";s0z+="p";var z0z="ma";z0z+="p";e0z[z0z][d1z]();e0z[s0z]=undefined;}if(e0z[d1z]){var i0z="d";i0z+="isp";i0z+="ose";e0z[i0z]();}e0z=undefined;B0z["material"][F0z]=undefined;}}else{if(B0z["material"]["map"]){var Z0z="mater";Z0z+="ial";B0z["material"]["map"][d1z]();B0z[Z0z]["map"]=undefined;}if(B0z["material"][d1z]){var k0z="mate";k0z+="ria";k0z+="l";B0z[k0z][d1z]();}}B0z["material"]=undefined;}}B0z=undefined;}BIMVIZ[L0TT]["KeyListDict"]["prototype"]={'\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72':BIMVIZ["D3"]["KeyListDict"],'\x67\x65\x74':function(V0z){var J0z="di";J0z+="c";J0z+="t";var A0z;A0z=this[J0z][V0z];return A0z;},'\x61\x64\x64':function(S0z,v0z){var h0z;h0z=this["dict"][S0z];if(!h0z){var p0z="d";p0z+="ict";h0z=[];this[p0z][S0z]=h0z;}h0z["push"](v0z);}};;;var J8V2g={'C50':function(j,U){return j>U;},'p70':function(j,U){return j!==U;},'d9W':function(j,U){return j*U;},'o4g':function(j,U){return j-U;},'C9W':function(j,U){return j===U;},'U0g':function(j,U){return j*U;},'W8w':function(j,U){return j*U;},'r3w':function(j,U){return j-U;},'b3W':function(j,U){return j*U;},'x3w':function(j,U){return j===U;},'L9v':function(j,U){return j*U;},'x4W':function(j,U){return j*U;},'F4g':function(j,U,Q){return j*U*Q;},'U20':function(j,U,Q){return j*U*Q;},'F2W':function(j,U){return j-U;},'V3lb':"matrixWorld",'I8g':function(j,U){return j/U;},'T00':function(j,U){return j<U;},'p9v':function(j,U){return j*U;},'P6w':function(j,U){return j-U;},'U3W':function(j,U){return j*U;},'m40':function(j,U){return j-U;},'G6w':function(j,U){return j*U;},'K5g':function(j,U){return j*U;},'a4W':function(j,U){return j*U;},'X5w':function(j,U){return j-U;},'m3g':function(j,U){return j===U;},'X4w':function(j,U){return j*U;},'W5g':function(j,U){return j*U;},'E4W':function(j,U){return j*U;},'G5w':function(j,U){return j===U;},'B2v':function(j,U){return j*U;},'L7lb':"lengthSq",'a30':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'d1w':function(j,U){return j*U;},'q8W':function(j,U){return j*U;},'E8w':function(j,U){return j<U;},'J7bb':4,'c7W':function(j,U){return j*U;},'x5lb':13,'o9lb':"getInverse",'J3w':function(j,U){return j*U;},'I1w':function(j,U){return j*U;},'F1W':function(j,U){return j-U;},'s1w':function(j,U){return j*U;},'A5bb':"dot",'g7lb':true,'o8g':function(j,U){return j*U;},'z7g':function(j,U){return j>U;},'t0w':function(j,U){return j*U;},'A00':function(j,U){return j*U;},'w7W':function(j,U){return j*U;},'t8w':function(j,U){return j*U;},'V3g':function(j,U){return j-U;},'g2v':function(j,U){return j*U;},'B8g':function(j,U){return j>U;},'D80':function(j,U){return j*U;},'k60':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'B6lb':"sub",'J5g':function(j,U){return j*U;},'T7bb':1,'I9W':function(j,U){return j-U;},'N8w':function(j,U){return j===U;},'L0w':function(j,U){return j===U;},'S0W':function(j,U){return j===U;},'G7bb':3,'E10':function(j,U){return j*U;},'q5lb':"multiplyScalar",'H2W':function(j,U){return j*U;},'d6lb':"applyQuaternion",'V7lb':1.0,'l8lb':"makeEmpty",'K9w':function(j,U){return j*U;},'h9W':function(j,U){return j*U;},'R5g':function(j,U){return j===U;},'o50':function(j,U){return j<=U;},'Z9v':function(j,U){return j*U;},'t9w':function(j,U){return j*U;},'k3lb':"ceil",'M9w':function(j,U){return j/U;},'x8w':function(j,U){return j<U;},'B2lb':"onChangeCallback",'v1W':function(j,U){return j*U;},'C1w':function(j,U){return j*U;},'q3W':function(j,U){return j*U;},'t3w':function(j,U){return j-U;},'V2v':function(j,U){return j*U;},'C7bb':8,'S8W':function(j,U){return j*U;},'W5W':function(j,U){return j*U;},'e5w':function(j,U){return j-U;},'R9w':function(j,U){return j/U;},'y5g':function(j,U){return j*U;},'R3g':function(j,U){return j-U;},'C2v':function(j,U){return j*U;},'M4W':function(j,U){return j===U;},'Z5g':function(j,U){return j*U;},'n7bb':5,'h8W':function(j,U){return j*U;},'s8W':function(j,U){return j*U;},'q0g':function(j,U){return j*U;},'k00':function(j,U){return j*U;},'J1g':function(j,U,Q){return j*U*Q;},'R0w':function(j,U){return j===U;},'m2w':function(j,U){return j===U;},'T5w':function(j,U){return j===U;},'P6lb':"fromArray",'n1lb':"warn",'l0lb':"elements",'e6v':function(j,U,Q){return j-U+Q;},'t27b':"Box3",'Q8lb':"sqrt",'O4g':function(j,U,Q){return j*U*Q;},'w6w':function(j,U){return j/U;},'e27b':"subVectors",'O40':function(j,U,Q){return j*U/Q;},'F3g':function(j,U){return j-U;},'m50':function(j,U){return j<U;},'o7w':function(j,U){return j/U;},'K6W':function(j,U){return j-U;},'P1g':function(j,U){return j===U;},'U50':function(j,U){return j<U;},'G30':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'Y40':function(j,U){return j===U;},'B50':function(j,U){return j<=U;},'b7w':function(j,U){return j*U;},'p9w':function(j,U){return j<U;},'o8lb':false,'G80':function(j,U){return j*U;},'M8w':function(j,U){return j/U;},'t30':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'V8W':function(j,U){return j*U;},'L5W':function(j,U){return j*U;},'D1W':function(j,U){return j*U;},'t10':function(j,U){return j*U;},'J70':function(j,U){return j<U;},'g7w':function(j,U){return j-U;},'C40':function(j,U){return j*U;},'E6g':function(j,U){return j/U;},'s60':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'E5g':function(j,U){return j!==U;},'R4lb':"max",'d2w':function(j,U){return j!==U;},'T7g':function(j,U){return j*U;},'z1W':function(j,U){return j*U;},'M6W':function(j,U){return j*U;},'L10':function(j,U){return j*U;},'z4w':function(j,U){return j*U;},'F5bb':"add",'v7W':function(j,U){return j*U;},'r9v':function(j,U){return j>=U;},'e00':function(j,U){return j*U;},'a5W':function(j,U){return j*U;},'U8W':function(j,U){return j*U;},'S0lb':"z",'e80':function(j,U){return j*U;},'s9W':function(j,U){return j-U;},'S7w':function(j,U){return j*U;},'w5w':function(j,U){return j*U;},'b8g':function(j,U){return j/U;},'o20':function(j,U){return j===U;},'b60':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'E5W':function(j,U){return j*U;},'W9v':function(j,U){return j<=U;},'m2v':function(j,U){return j*U;},'a0lb':"multiplyMatrices",'R6g':function(j,U){return j!==U;},'f4w':function(j,U){return j*U;},'C0g':function(j,U){return j*U;},'E9w':function(j,U){return j*U;},'P2W':function(j,U){return j-U;},'m60':function(j,U){return j*U;},'V9W':function(j,U){return j*U;},'h50':function(j,U){return j>U;},'C7w':function(j,U){return j*U;},'u4g':function(j,U){return j===U;},'u3W':function(j,U){return j*U;},'c1W':function(j,U){return j*U;},'i5g':function(j,U){return j*U;},'Y9v':function(j,U){return j!==U;},'a1g':function(j,U){return j-U;},'Q2w':function(j,U){return j*U;},'c6w':function(j,U){return j*U;},'Y10':function(j,U){return j*U;},'i3w':function(j,U){return j!==U;},'X1lb':"J6g",'I2w':function(j,U){return j*U;},'H1W':function(j,U){return j*U;},'K70':function(j,U){return j<U;},'Q0bb':"min",'m8W':function(j,U){return j*U;},'z6v':function(j,U){return j===U;},'E3w':function(j,U){return j*U;},'m7w':function(j,U){return j*U;},'Q60':function(j,U){return j*U;},'g50':function(j,U){return j/U;},'w00':function(j,U){return j*U;},'F7g':function(j,U){return j/U;},'i30':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'L4W':function(j,U){return j-U;},'g27b':"isEmpty",'U0W':function(j,U){return j*U;},'N40':function(j,U){return j/U;},'h2v':function(j,U){return j*U;},'s7bb':'index is out of range: ','J4lb':'XYZ','f6w':function(j,U){return j*U;},'B9W':function(j,U){return j*U;},'l7W':function(j,U){return j*U;},'d3W':function(j,U){return j*U;},'C30':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'r0w':function(j,U){return j===U;},'R10':function(j,U){return j-U;},'K6g':function(j,U){return j===U;},'R5W':function(j,U){return j*U;},'f1lb':"copy",'Z97b':"atan2",'S9W':function(j,U){return j*U;},'s8g':function(j,U){return j*U;},'W6g':function(j,U){return j===U;},'n1w':function(j,U){return j*U;},'j2w':function(j,U){return j*U;},'j0W':function(j,U){return j*U;},'d0g':function(j,U){return j*U;},'C8g':function(j,U){return j>U;},'Y3w':function(j,U){return j!==U;},'E1g':function(j,U,Q){return j*U*Q;},'q40':function(j,U){return j-U;},'E70':function(j,U){return j<U;},'w7g':function(j,U){return j===U;},'o9W':function(j,U){return j*U;},'v6v':function(j,U){return j===U;},'D5w':function(j,U){return j*U;},'N3w':function(j,U){return j*U;},'p20':function(j,U,Q){return j*U*Q;},'g40':function(j,U){return j/U;},'b0W':function(j,U){return j*U;},'T80':function(j,U){return j-U;},'B7w':function(j,U){return j!==U;},'s2w':function(j,U){return j*U;},'t4W':function(j,U){return j===U;},'z2W':function(j,U){return j*U;},'G4w':function(j,U){return j*U;},'P4w':function(j,U){return j*U;},'M9lb':0.5,'Q1w':function(j,U){return j*U;},'H67b':"_w",'M5g':function(j,U){return j/U;},'o0W':function(j,U){return j===U;},'b40':function(j,U,Q){return j*U*Q;},'l3g':function(j,U,Q){return j*U*Q;},'o3W':function(j,U){return j-U;},'b8W':function(j,U){return j*U;},'q0W':function(j,U){return j*U;},'n8g':function(j,U){return j*U;},'k5w':function(j,U){return j*U;},'P7W':function(j,U){return j*U;},'L7bb':6,'y70':function(j,U){return j===U;},'c7g':function(j,U){return j>U;},'n50':function(j,U){return j<U;},'S0g':function(j,U,Q,G){return j-U-Q-G;},'t97b':"floor",'x0w':function(j,U){return j*U;},'S6v':function(j,U){return j*U;},'Q8W':function(j,U){return j*U;},'Z6W':function(j,U){return j*U;},'Y6g':function(j,U){return j===U;},'z2lb':"crossVectors",'U2w':function(j,U){return j*U;},'Z9w':function(j,U){return j>=U;},'C8W':function(j,U){return j*U;},'t1g':function(j,U,Q){return j*U*Q;},'x5g':function(j,U){return j*U;},'H6w':function(j,U){return j-U;},'y5W':function(j,U){return j*U;},'a0w':function(j,U){return j*U;},'H7W':function(j,U){return j*U;},'b2v':function(j,U){return j*U;},'G6v':function(j,U){return j===U;},'Z10':function(j,U){return j*U;},'t2lb':"Euler",'i8w':function(j,U){return j===U;},'A1W':function(j,U){return j*U;},'x5W':function(j,U){return j*U;},'f5w':function(j,U){return j*U;},'a5g':function(j,U){return j*U;},'l80':function(j,U){return j/U;},'J9v':function(j,U){return j*U;},'d0W':function(j,U){return j<U;},'y9w':function(j,U){return j*U;},'H7bb':"_z",'c8bb':"Vector3",'Y9w':function(j,U){return j*U;},'f1g':function(j,U,Q){return j*U*Q;},'A0g':function(j,U){return j*U;},'e0lb':"itemSize",'R3w':function(j,U){return j*U;},'m1w':function(j,U){return j*U;},'W70':function(j,U){return j<U;},'q1w':function(j,U){return j*U;},'q50':function(j,U){return j>U;},'S50':function(j,U){return j<=U;},'Y6W':function(j,U){return j*U;},'i70':function(j,U){return j!==U;},'O80':function(j,U){return j!==U;},'N3g':function(j,U,Q){return j*U*Q;},'x4g':function(j,U,Q){return j*U*Q;},'c5w':function(j,U){return j*U;},'r9w':function(j,U){return j*U;},'M70':function(j,U){return j!==U;},'t6g':function(j,U){return j===U;},'u20':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'N5W':function(j,U){return j*U;},'f6v':function(j,U){return j===U;},'T4g':function(j,U,Q){return j*U*Q;},'D00':function(j,U){return j>U;},'e67b':"_x",'x10':function(j,U){return j-U;},'y3w':function(j,U){return j/U;},'g3g':function(j,U,Q){return j*U*Q;},'D5lb':11,'U1g':function(j,U,Q){return j*U*Q;},'U90':function(j,U,Q){return j*U*Q;},'Q9W':function(j,U){return j*U;},'b2w':function(j,U){return j===U;},'W2lb':'assign','V7w':function(j,U){return j-U;},'V0W':function(j,U){return j<U;},'D7g':function(j,U){return j<U;},'P30':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'C3W':function(j,U){return j*U;},'x6g':function(j,U){return j/U;},'k1W':function(j,U){return j*U;},'w1g':function(j,U,Q){return j*U*Q;},'Q3W':function(j,U){return j*U;},'C0W':function(j,U){return j*U;},'N20':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'G00':function(j,U){return j>U;},'G20':function(j,U,Q){return j*U*Q;},'X6w':function(j,U){return j*U;},'L5g':function(j,U){return j*U;},'p90':function(j,U,Q){return j*U*Q;},'U27b':"setFromMatrixColumn",'f1W':function(j,U){return j-U;},'W6W':function(j,U){return j*U;},'d8g':function(j,U){return j*U;},'p4W':function(j,U){return j-U;},'O2W':function(j,U){return j*U;},'u8g':function(j,U){return j*U;},'n0W':function(j,U){return j*U;},'P5w':function(j,U){return j*U;},'I7w':function(j,U){return j-U;},'c5lb':14,'V3W':function(j,U){return j*U;},'B4g':function(j,U,Q){return j*U*Q;},'B5lb':10,'P1W':function(j,U){return j*U;},'r10':function(j,U){return j*U;},'L6W':function(j,U){return j-U;},'h7w':function(j,U){return j*U;},'t6W':function(j,U){return j*U;},'m7lb':'YXZ','a3w':function(j,U){return j===U;},'e2W':function(j,U){return j*U;},'L4g':function(j,U,Q){return j*U*Q;},'Y5W':function(j,U){return j*U;},'v00':function(j,U){return j<U;},'j3g':function(j,U){return j/U;},'l6v':function(j,U){return j-U;},'q2w':function(j,U){return j===U;},'K10':function(j,U){return j*U;},'L6g':function(j,U){return j===U;},'q60':function(j,U){return j*U;},'M40':function(j,U){return j/U;},'g2w':function(j,U){return j*U;},'S1w':function(j,U){return j*U;},'y6W':function(j,U){return j*U;},'a70':function(j,U){return j!==U;},'m8lb':'ZYX','A8lb':"set",'b1w':function(j,U){return j*U;},'B1w':function(j,U){return j*U;},'F6w':function(j,U){return j*U;},'l90':function(j,U,Q){return j*U*Q;},'k7W':function(j,U){return j*U;},'X1W':function(j,U){return j*U;},'s5lb':12,'k2W':function(j,U){return j*U;},'a6g':function(j,U){return j/U;},'F7W':function(j,U){return j*U;},'x8lb':"array",'I8W':function(j,U){return j*U;},'a6W':function(j,U){return j*U;},'q4lb':"distanceToSquared",'A6w':function(j,U){return j===U;},'M3w':function(j,U){return j*U;},'S8g':function(j,U){return j>U;},'X00':function(j,U){return j>U;},'h0g':function(j,U){return j*U;},'B3W':function(j,U){return j-U;},'R7bb':'XZY','T4w':function(j,U){return j*U;},'L70':function(j,U){return j<U;},'L8w':function(j,U){return j*U;},'p3w':function(j,U){return j*U;},'N10':function(j,U){return j*U;},'d6v':function(j,U){return j*U;},'K3w':function(j,U){return j===U;},'N9v':function(j,U){return j!==U;},'T6w':function(j,U){return j*U;},'s1g':function(j,U,Q){return j*U*Q;},'b9W':function(j,U){return j===U;},'G1W':function(j,U){return j*U;},'j2v':function(j,U){return j/U;},'y4g':function(j,U,Q){return j*U*Q;},'W7bb':9,'X6v':function(j,U){return j-U;},'D27b':"divideScalar",'p8w':function(j,U){return j*U;},'Z70':function(j,U){return j<U;},'n8W':function(j,U){return j*U;},'r5g':function(j,U){return j*U;},'K5W':function(j,U){return j*U;},'g9W':function(j,U){return j*U;},'F5w':function(j,U){return j/U;},'U8g':function(j,U){return j!==U;},'d50':function(j,U){return j<=U;},'f7W':function(j,U){return j*U;},'P7g':function(j,U){return j/U;},'x90':function(j,U,Q){return j*U*Q;},'N9w':function(j,U){return j*U;},'E60':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'W0w':function(j,U){return j===U;},'a10':function(j,U){return j*U;},'N70':function(j,U){return j instanceof U;},'H6v':function(j,U){return j===U;},'c20':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'g1w':function(j,U){return j/U;},'d8W':function(j,U){return j*U;},'W3w':function(j,U){return j-U;},'J6g':function(j,U){return j===U;},'D3g':function(j,U,Q){return j*U*Q;},'a8w':function(j,U){return j<U;},'I50':function(j,U){return j/U;},'I0W':function(j,U){return j/U;},'e1W':function(j,U){return j*U;},'x9w':function(j,U){return j*U;},'m0W':function(j,U){return j*U;},'u50':function(j,U){return j<=U;},'O90':function(j,U,Q){return j*U*Q;},'o2w':function(j,U){return j===U;},'f7bb':7,'M5W':function(j,U){return j*U;},'n20':function(j,U,Q){return j*U*Q;},'l4w':function(j,U){return j*U;},'f7g':function(j,U){return j*U;},'U7w':function(j,U){return j*U;},'g8W':function(j,U){return j*U;},'W10':function(j,U){return j*U;},'q9W':function(j,U){return j*U;},'g8g':function(j,U){return j/U;},'p10':function(j,U){return j*U;},'A80':function(j,U){return j===U;},'w4w':function(j,U){return j*U;},'W5bb':"clamp",'u7w':function(j,U){return j*U;},'R9v':function(j,U){return j*U;},'M10':function(j,U){return j*U;},'H80':function(j,U){return j*U;},'O7W':function(j,U){return j*U;},'q0lb':"x",'O5w':function(j,U){return j*U;},'I2v':function(j,U){return j/U;},'u1w':function(j,U){return j*U;},'G90':function(j,U,Q){return j*U*Q;},'r8w':function(j,U){return j*U;},'J9w':function(j,U){return j-U;},'R8w':function(j,U){return j*U;},'Q2v':function(j,U){return j<U;},'e7g':function(j,U){return j/U;},'L9w':function(j,U){return j<U;},'L3w':function(j,U){return j!==U;},'U97b':"radius",'t5W':function(j,U){return j*U;},'G3lb':"order",'k1g':function(j,U){return j-U;},'S4g':function(j,U){return j-U;},'A7W':function(j,U){return j*U;},'n0lb':"defineProperty",'K40':function(j,U){return j/U;},'Q8g':function(j,U){return j/U;},'u9W':function(j,U){return j*U;},'Y60':function(j,U,Q,G,T,J){return j-U+Q-G-T+J;},'p6W':function(j,U){return j*U;},'j0g':function(j,U){return j*U;},'G2W':function(j,U){return j*U;},'z5w':function(j,U){return j-U;},'j1w':function(j,U){return j*U;},'r6g':function(j,U){return j!==U;},'C60':function(j,U){return j===U;},'e1g':function(j,U){return j-U;},'i10':function(j,U){return j*U;},'s0W':function(j,U){return j===U;},'F6v':function(j,U){return j*U;},'b27b':"sin",'l6w':function(j,U){return j*U;},'o1w':function(j,U){return j*U;},'v4w':function(j,U){return j*U;},'T2W':function(j,U){return j*U;},'G7W':function(j,U){return j*U;},'X27b':"center",'k4w':function(j,U){return j*U;},'o90':function(j,U,Q){return j*U*Q;},'k7g':function(j,U){return j*U;},'p5W':function(j,U){return j*U;},'c2W':function(j,U){return j*U;},'t9v':function(j,U){return j*U;},'p1g':function(j,U){return j===U;},'X80':function(j,U){return j/U;},'y7bb':"_y",'F80':function(j,U){return j/U;},'r6W':function(j,U){return j===U;},'c4w':function(j,U){return j*U;},'V50':function(j,U){return j/U;},'j9W':function(j,U){return j*U;},'Q50':function(j,U){return j<U;},'Z3w':function(j,U){return j*U;},'A97b':"abs",'N6g':function(j,U){return j!==U;},'d7bb':"Quaternion",'K9v':function(j,U){return j-U;},'v6w':function(j,U){return j*U;},'L1lb':"normalize",'j50':function(j,U){return j<U;},'B8W':function(j,U){return j*U;},'N0w':function(j,U){return j/U;},'T1W':function(j,U){return j*U;},'z4g':function(j,U){return j===U;},'z00':function(j,U){return j>U;},'L3g':function(j,U,Q){return j*U*Q;},'J0lb':"expandByPoint",'d7w':function(j,U){return j*U;},'N4W':function(j,U){return j!==U;},'C0bb':"toArray",'u0g':function(j,U){return j*U;},'h1w':function(j,U){return j*U;},'T7W':function(j,U){return j*U;},'m0g':function(j,U){return j*U;},'p0w':function(j,U){return j===U;},'B2w':function(j,U){return j!==U;},'s3W':function(j,U){return j===U;},'i4W':function(j,U){return j-U;},'f00':function(j,U){return j>U;},'e6w':function(j,U){return j>=U;},'R90':function(j,U,Q){return j*U*Q;},'E0w':function(j,U){return j*U;},'G7g':function(j,U){return j/U;},'b0g':function(j,U){return j*U;},'E6W':function(j,U){return j*U;},'W90':function(j,U,Q){return j*U*Q;},'H27b':"addVectors",'Q7w':function(j,U){return j*U;},'D7W':function(j,U){return j*U;},'W4W':function(j,U){return j-U;},'V8g':function(j,U){return j*U;},'n2w':function(j,U){return j===U;},'U2v':function(j,U){return j<U;},'P00':function(j,U){return j*U;},'M3g':function(j,U){return j===U;},'h4g':function(j,U){return j-U;},'O0g':function(j,U){return j*U;},'c0g':function(j,U){return j===U;},'q4g':function(j,U,Q){return j*U*Q;},'o0g':function(j,U){return j*U;},'m8g':function(j,U){return j*U;},'I3W':function(j,U){return j*U;},'y0w':function(j,U){return j*U;},'r70':function(j,U){return j>U;},'Y4W':function(j,U){return j===U;},'X7W':function(j,U){return j*U;},'C2w':function(j,U){return j===U;},'n2v':function(j,U){return j*U;},'n0g':function(j,U){return j*U;},'O7g':function(j,U){return j*U;},'J8w':function(j,U){return j*U;},'E9v':function(j,U){return j===U;},'p7bb':0,'U3g':function(j,U){return j/U;},'Y8w':function(j,U){return j*U;},'F00':function(j,U){return j===U;},'z6w':function(j,U){return j*U;},'O6w':function(j,U){return j*U;},'u2v':function(j,U){return j*U;},'j8W':function(j,U){return j*U;},'y0bb':'ZXY','K8w':function(j,U){return j/U;},'X7g':function(j,U){return j/U;},'Z4W':function(j,U){return j-U;},'h8lb':"projectionMatrix",'y4W':function(j,U){return j*U;},'U40':function(j,U){return j*U;},'j40':function(j,U){return j*U;},'r4W':function(j,U){return j===U;},'S2w':function(j,U){return j!==U;},'n40':function(j,U){return j*U;},'T6v':function(j,U){return j===U;},'p5g':function(j,U){return j*U;},'B30':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'n90':function(j,U,Q){return j*U*Q;},'g3W':function(j,U){return j*U;},'k80':function(j,U){return j*U;},'e4w':function(j,U){return j*U;},'Y5g':function(j,U){return j*U;},'q7w':function(j,U){return j*U;},'h3W':function(j,U){return j*U;},'n7w':function(j,U){return j*U;},'l2W':function(j,U){return j*U;},'o8W':function(j,U){return j*U;},'Q40':function(j,U){return j*U;},'E8bb':"applyMatrix4",'x70':function(j,U){return j instanceof U;},'l7g':function(j,U){return j*U;},'i5W':function(j,U){return j*U;},'k90':function(j,U,Q){return j*U*Q;},'k6w':function(j,U){return j>U;},'D0g':function(j,U){return j===U;},'P2Bb':(function(K2Bb){return (function(O2Bb,I2Bb){return (function(V2Bb){return {d2Bb:V2Bb,A2Bb:V2Bb,};})(function(k2Bb){var x2Bb,S2Bb=0;for(var a2Bb=O2Bb;S2Bb<k2Bb["length"];S2Bb++){var c2Bb=I2Bb(k2Bb,S2Bb);x2Bb=S2Bb===0?c2Bb:x2Bb^c2Bb;}return x2Bb?a2Bb:!a2Bb;});})((function(D2Bb,w2Bb,N2Bb,s2Bb){var B2Bb=33;return D2Bb(K2Bb,B2Bb)-s2Bb(w2Bb,N2Bb)>B2Bb;})(parseInt,Date,(function(w2Bb){return (''+w2Bb)["substring"](1,(w2Bb+'')["length"]-1);})('_getTime2'),function(w2Bb,N2Bb){return new w2Bb()[N2Bb]();}),function(k2Bb,S2Bb){var M2Bb=parseInt(k2Bb["charAt"](S2Bb),16)["toString"](2);return M2Bb["charAt"](M2Bb["length"]-1);});})('54ikrlsgl'),'l00':function(j,U){return j<=U;},'m3W':function(j,U){return j===U;},'J10':function(j,U){return j*U;},'v0lb':"w",'m9W':function(j,U){return j*U;},'H4w':function(j,U){return j*U;},'V2w':function(j,U){return j*U;},'V1w':function(j,U){return j*U;},'z80':function(j,U){return j-U;},'S3W':function(j,U){return j*U;},'a5lb':15,'J5W':function(j,U){return j*U;},'f80':function(j,U){return j*U;},'s2v':function(j,U){return j*U;},'z7W':function(j,U){return j*U;},'B0W':function(j,U){return j===U;},'v80':function(j,U){return j/U;},'R4W':function(j,U){return j===U;},'b1g':function(j,U,Q){return j*U*Q;},'J0w':function(j,U){return j===U;},'M6g':function(j,U){return j!==U;},'u0W':function(j,U){return j===U;},'W20':function(j,U,Q){return j*U*Q;},'a9v':function(j,U){return j/U;},'M9v':function(j,U){return j*U;},'R70':function(j,U){return j<U;},'A4w':function(j,U){return j*U;},'l5w':function(j,U){return j-U;},'Y70':function(j,U){return j>U;},'O4w':function(j,U){return j*U;},'v5w':function(j,U){return j-U;},'Z7bb':2,'w2W':function(j,U){return j*U;},'x40':function(j,U,Q){return j*U/Q;},'Z8w':function(j,U){return j*U;},'g90':function(j,U,Q){return j*U*Q;},'i9w':function(j,U){return j*U;},'t70':function(j,U){return j>U;},'S2v':function(j,U){return j-U;},'U9W':function(j,U){return j*U;},'a0bb':"Math",'n9W':function(j,U){return j*U;},'j7w':function(j,U){return j*U;},'Q0W':function(j,U){return j*U;},'T9lb':"round",'q2v':function(j,U){return j*U;},'Z1g':function(j,U){return j-U;},'o3g':function(j,U,Q){return j*U*Q;},'K0w':function(j,U){return j/U;},'D4w':function(j,U){return j*U;},'W3lb':"assign",'d2v':function(j,U){return j-U;},'U1w':function(j,U){return j*U;},'A2W':function(j,U){return j*U;},'X2W':function(j,U){return j*U;},'f2W':function(j,U){return j*U;},'I3g':function(j,U){return j-U;},'B90':function(j,U,Q){return j*U*Q;},'c00':function(j,U){return j*U;},'u2w':function(j,U){return j!==U;},'o2v':function(j,U){return j<U;},'u8W':function(j,U){return j*U;},'j3W':function(j,U){return j-U;},'q8g':function(j,U){return j*U;},'d4g':function(j,U){return j-U;},'i0w':function(j,U){return j===U;},'O00':function(j,U){return j*U;},'Q0g':function(j,U){return j*U;},'Q3g':function(j,U){return j/U;},'w1W':function(j,U){return j*U;},'Z5W':function(j,U){return j*U;},'N6W':function(j,U){return j*U;},'g20':function(j,U,Q,G,T,J){return j-U-Q+G+T-J;},'n60':function(j,U){return j*U;},'I4lb':"cos",'N5g':function(j,U){return j*U;},'A5w':function(j,U){return j*U;},'e9lb':"Vector2",'l1W':function(j,U){return j*U;},'M0w':function(j,U){return j/U;},'V1lb':'YZX','K4W':function(j,U){return j*U;},'r0lb':"y",'t40':function(j,U){return j===U;},'h2w':function(j,U){return j===U;},'y8w':function(j,U){return j===U;},'i9v':function(j,U){return j>U;},'c80':function(j,U){return j<U;},'s7w':function(j,U){return j-U;},'g0W':function(j,U,Q){return j*U*Q;},'Y0w':function(j,U){return j>U;},'t5g':function(j,U){return j*U;},'w80':function(j,U){return j*U;},'F4w':function(j,U){return j*U;},'D6w':function(j,U){return j/U;},'q3g':function(j,U,Q){return j*U*Q;},'A7g':function(j,U){return j*U;},'R6W':function(j,U){return j*U;},'H00':function(j,U){return j<U;},'x6W':function(j,U){return j*U;},'R40':function(j,U){return j<U;},'O1W':function(j,U){return j*U;},'e7W':function(j,U){return j*U;},'H5w':function(j,U){return j===U;},'v7g':function(j,U){return j/U;},'P80':function(j,U){return j*U;},'x9v':function(j,U){return j-U;},'a9w':function(j,U){return j*U;},'q3lb':"Matrix4",'s50':function(j,U){return j<=U;},'D2W':function(j,U){return j===U;},'v2W':function(j,U){return j===U;},'b50':function(j,U){return j<U;},'D9lb':"applyProjection",'h8g':function(j,U){return j/U;},'y10':function(j,U){return j/U;},'r5W':function(j,U){return j*U;},'i6W':function(j,U){return j-U;},'y9v':function(j,U){return j*U;},'h0W':function(j,U){return j===U;},'l20':function(j,U,Q){return j*U*Q;},'J4W':function(j,U){return j-U;},'n3W':function(j,U){return j*U;},'J6W':function(j,U){return j*U;},'H7g':function(j,U){return j/U;},'W9w':function(j,U){return j*U;},'Z0w':function(j,U){return j===U;},'g4g':function(j,U,Q){return j*U*Q;}};J8V2g.a6Bb=function(b){while(b)return J8V2g.P2Bb.A2Bb(b);};J8V2g.I6Bb=function(n){while(n)return J8V2g.P2Bb.A2Bb(n);};J8V2g.D6Bb=function(c){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(c);};J8V2g.K6Bb=function(a){if(J8V2g&&a)return J8V2g.P2Bb.A2Bb(a);};J8V2g.B6Bb=function(k){while(k)return J8V2g.P2Bb.d2Bb(k);};J8V2g.N6Bb=function(c){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(c);};J8V2g.S6Bb=function(a){while(a)return J8V2g.P2Bb.d2Bb(a);};J8V2g.P6Bb=function(f){while(f)return J8V2g.P2Bb.A2Bb(f);};J8V2g.R6Bb=function(f){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(f);};J8V2g.e6Bb=function(g){while(g)return J8V2g.P2Bb.d2Bb(g);};J8V2g.Y6Bb=function(j){while(j)return J8V2g.P2Bb.d2Bb(j);};J8V2g.X6Bb=function(g){while(g)return J8V2g.P2Bb.A2Bb(g);};J8V2g.t6Bb=function(m){while(m)return J8V2g.P2Bb.A2Bb(m);};J8V2g.h6Bb=function(e){while(e)return J8V2g.P2Bb.A2Bb(e);};J8V2g.l6Bb=function(l){if(J8V2g&&l)return J8V2g.P2Bb.d2Bb(l);};J8V2g.r6Bb=function(i){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(i);};J8V2g.b6Bb=function(f){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(f);};J8V2g.W6Bb=function(d){while(d)return J8V2g.P2Bb.A2Bb(d);};J8V2g.C6Bb=function(d){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(d);};J8V2g.L6Bb=function(m){if(J8V2g&&m)return J8V2g.P2Bb.A2Bb(m);};J8V2g.n6Bb=function(b){while(b)return J8V2g.P2Bb.d2Bb(b);};J8V2g.H6Bb=function(a){while(a)return J8V2g.P2Bb.d2Bb(a);};J8V2g.J6Bb=function(k){while(k)return J8V2g.P2Bb.d2Bb(k);};J8V2g.m6Bb=function(b){while(b)return J8V2g.P2Bb.A2Bb(b);};J8V2g.p6Bb=function(f){if(J8V2g&&f)return J8V2g.P2Bb.A2Bb(f);};J8V2g.i6Bb=function(l){while(l)return J8V2g.P2Bb.A2Bb(l);};J8V2g.U6Bb=function(k){if(J8V2g&&k)return J8V2g.P2Bb.A2Bb(k);};J8V2g.j6Bb=function(m){while(m)return J8V2g.P2Bb.A2Bb(m);};J8V2g.g2Bb=function(j){while(j)return J8V2g.P2Bb.A2Bb(j);};var THREE=J8V2g.g2Bb("efc")?{}:"Texture Loaded:";if(J8V2g[J8V2g.X1lb](Object[J8V2g.W3lb],undefined)){J8V2g.q6Bb=function(d){if(J8V2g&&d)return J8V2g.P2Bb.d2Bb(d);};J8V2g.Z6Bb=function(e){if(J8V2g&&e)return J8V2g.P2Bb.d2Bb(e);};Object[J8V2g.n0lb](Object,J8V2g.W2lb,{writable:J8V2g.g7lb,configurable:J8V2g.g7lb,value:function(U){J8V2g.G6Bb=function(c){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(c);};J8V2g.T6Bb=function(h){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(h);};J8V2g.Q6Bb=function(c){while(c)return J8V2g.P2Bb.A2Bb(c);};J8V2g.z6Bb=function(e){if(J8V2g&&e)return J8V2g.P2Bb.d2Bb(e);};J8V2g.v6Bb=function(g){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(g);};J8V2g.y6Bb=function(l){if(J8V2g&&l)return J8V2g.P2Bb.A2Bb(l);};'use strict';var Q=J8V2g.j6Bb("d6b")?"contentLen":"enumerable",G=J8V2g.y6Bb("64")?'MeshDistanceMaterial':"M6g",T=J8V2g.v6Bb("462")?"ShadowMaterial":"getOwnPropertyDescriptor",J=J8V2g.U6Bb("4825")?"R6g":'RingoJS',n=J8V2g.i6Bb("28bd")?"UnsignedShort565Type":"keys",W=J8V2g.z6Bb("bc84")?"Y6g":'os.version',H=J8V2g.Q6Bb("7623")?"s+":"t6g",f=J8V2g.G6Bb("1b")?'seagreen':"r6g",C=J8V2g.p6Bb("e83e")?"Cannot convert first argument to object":"DOLLY",F=J8V2g.T6Bb("1112")?null:"vertexTextures",e=J8V2g.m6Bb("b2")?"W6g":'thistle',o=J8V2g.Z6Bb("a1")?"L6g":"vVisibility *= 1.0 - visibility.g / 9.0;";if(J8V2g[o](U,undefined)||J8V2g[e](U,F)){throw  new TypeError(C);}var u=J8V2g.q6Bb("22")?"UnsignedByteType":Object(U);for(var R=J8V2g.T7bb,d=arguments.length;J8V2g[f](R,d);++R){var D=arguments[R];if(J8V2g[H](D,undefined)||J8V2g[W](D,F))continue;D=Object(D);var M=Object[n](D);for(var O=J8V2g.p7bb,k=M.length;J8V2g[J](O,k);++O){var N=M[O],B=Object[T](D,N);if(J8V2g[G](B,undefined)&&B[Q]){var K=function(j){u[N]=j[N];};K(D);}}}return u;}});}THREE[J8V2g.d7bb]=J8V2g.J6Bb("b86")?function(j,U,Q,G){J8V2g.f6Bb=function(k){if(J8V2g&&k)return J8V2g.P2Bb.A2Bb(k);};var T=J8V2g.H6Bb("4741")?'"><i class="fa fa-check-square"></i></a>':"N6g";this[J8V2g.e67b]=J8V2g.L6Bb("8764")?j||J8V2g.p7bb:'TorusKnotGeometry';this[J8V2g.y7bb]=J8V2g.f6Bb("e6")?'fuchsia':U||J8V2g.p7bb;this[J8V2g.H7bb]=Q||J8V2g.p7bb;this[J8V2g.H67b]=J8V2g.n6Bb("2bc4")?(J8V2g[T](G,undefined))?G:J8V2g.T7bb:"IFCSITE";}:'Sprite';THREE.Quaternion.prototype=J8V2g.C6Bb("dc")?{constructor:THREE[J8V2g.d7bb],get x(){return this[J8V2g.e67b];},set x(value){this[J8V2g.e67b]=value;this[J8V2g.B2lb]();},get y(){return this[J8V2g.y7bb];},set y(value){this[J8V2g.y7bb]=J8V2g.W6Bb("7334")?value:"_weightNext";this[J8V2g.B2lb]();},get z(){return this[J8V2g.H7bb];},set z(value){this[J8V2g.H7bb]=value;this[J8V2g.B2lb]();},get w(){return this[J8V2g.H67b];},set w(value){this[J8V2g.H67b]=value;this[J8V2g.B2lb]();},set:function(j,U,Q,G){J8V2g.F6Bb=function(h){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(h);};this[J8V2g.e67b]=j;this[J8V2g.y7bb]=U;this[J8V2g.H7bb]=J8V2g.F6Bb("75cd")?Q:"interpolant";this[J8V2g.H67b]=G;this[J8V2g.B2lb]();return this;},clone:function(){return new this.constructor(this[J8V2g.e67b],this[J8V2g.y7bb],this[J8V2g.H7bb],this[J8V2g.H67b]);},copy:function(j){this[J8V2g.e67b]=J8V2g.b6Bb("7d")?267:j[J8V2g.q0lb];this[J8V2g.y7bb]=J8V2g.r6Bb("de5")?"#if DIFFUSE_TEXTURE == 1":j[J8V2g.r0lb];this[J8V2g.H7bb]=j[J8V2g.S0lb];this[J8V2g.H67b]=j[J8V2g.v0lb];this[J8V2g.B2lb]();return this;},setFromEuler:function(j,U){J8V2g.c6Bb=function(f){if(J8V2g&&f)return J8V2g.P2Bb.d2Bb(f);};J8V2g.x6Bb=function(f){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(f);};J8V2g.s6Bb=function(h){if(J8V2g&&h)return J8V2g.P2Bb.A2Bb(h);};J8V2g.w6Bb=function(k){for(;J8V2g;)return J8V2g.P2Bb.A2Bb(k);};J8V2g.k6Bb=function(l){if(J8V2g&&l)return J8V2g.P2Bb.A2Bb(l);};J8V2g.M6Bb=function(k){while(k)return J8V2g.P2Bb.A2Bb(k);};J8V2g.d6Bb=function(j){for(;J8V2g;)return J8V2g.P2Bb.d2Bb(j);};J8V2g.u6Bb=function(f){while(f)return J8V2g.P2Bb.d2Bb(f);};J8V2g.o6Bb=function(b){if(J8V2g&&b)return J8V2g.P2Bb.d2Bb(b);};var Q="U8g",G="g4g",T=J8V2g.l6Bb("3ec")?"O4g":'lineDistance',J="x4g",n=J8V2g.h6Bb("e4")?'points':"B4g",W=J8V2g.x6Bb("8a1")?"S4g":'OpenBSD',H="d4g",f=J8V2g.t6Bb("7f")?'Nintendo':"u4g",C=J8V2g.X6Bb("eb4")?"o4g":"Sketch",F="h4g",e="F4g",o="L4g",u=J8V2g.o6Bb("dc")?"q4g":"SMAANeighborhoodBlendingVS( vUv );",R=J8V2g.c6Bb("53")?'THREE.Audio: this Audio has no playback control.':"T4g",d="z4g",D=J8V2g.I6Bb("14")?"y4g":'SpriteMaterial',M=J8V2g.Y6Bb("d4")?"E1g":")",O="a1g",k=J8V2g.a6Bb("8a")?'THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.':"s1g",N=J8V2g.e6Bb("6a")?1025:"w1g",B="k1g",K=J8V2g.u6Bb("a323")?'THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( \'WEBGL_compressed_texture_s3tc\' ).':"P1g",I="e1g",v9="t1g",j9="b1g",Z9=J8V2g.R6Bb("62e")?"pickeddata":"f1g",A=J8V2g.P6Bb("7ee")?"J1g":'o',y9=J8V2g.d6Bb("53")?"vec3 Uncharted2Tonemap(vec3 x)":"Z1g",V="p1g",i9="U1g",U9="g3g",z9="V3g",q9="I3g",J9="D3g",m9="N3g",f9=J8V2g.M6Bb("2db")?'void main() {':"M3g",T9=J8V2g.k6Bb("7533")?"vec3 curr = Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);":"R3g",G9="o3g",F9="l3g",C9="F3g",l9=J8V2g.S6Bb("7be")?3004:"L3g",H9=J8V2g.N6Bb("16f")?"dlist":"q3g",t9=J8V2g.w6Bb("bc8a")?"m3g":'THREE.EffectComposer relies on THREE.ShaderPass',Y9="Q3g",n9="U3g",L9=J8V2g.B6Bb("e21")?"j3g":'4.0',P9="E6g",w9=J8V2g.K6Bb("3e")?"a6g":"t = abs( C - Cright );",N9=J8V2g.D6Bb("11")?'bindMatrixInverse':"x6g",d9='THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.',M9=J8V2g.s6Bb("ed")?"K6g":'(';if(J8V2g[M9](j instanceof THREE[J8V2g.t2lb],J8V2g.o8lb)){throw  new Error(d9);}var s9=Math[J8V2g.I4lb](J8V2g[N9](j[J8V2g.e67b],J8V2g.Z7bb)),k9=Math[J8V2g.I4lb](J8V2g[w9](j[J8V2g.y7bb],J8V2g.Z7bb)),u9=Math[J8V2g.I4lb](J8V2g[P9](j[J8V2g.H7bb],J8V2g.Z7bb)),B9=Math[J8V2g.b27b](J8V2g[L9](j[J8V2g.e67b],J8V2g.Z7bb)),S9=Math[J8V2g.b27b](J8V2g[n9](j[J8V2g.y7bb],J8V2g.Z7bb)),K9=Math[J8V2g.b27b](J8V2g[Y9](j[J8V2g.H7bb],J8V2g.Z7bb)),g9=j[J8V2g.G3lb];if(J8V2g[t9](g9,J8V2g.J4lb)){this[J8V2g.e67b]=J8V2g[H9](B9,k9,u9)+J8V2g[l9](s9,S9,K9);this[J8V2g.y7bb]=J8V2g[C9](s9*S9*u9,B9*k9*K9);this[J8V2g.H7bb]=J8V2g[F9](s9,k9,K9)+J8V2g[G9](B9,S9,u9);this[J8V2g.H67b]=J8V2g[T9](s9*k9*u9,B9*S9*K9);}else if(J8V2g[f9](g9,J8V2g.m7lb)){this[J8V2g.e67b]=J8V2g[m9](B9,k9,u9)+J8V2g[J9](s9,S9,K9);this[J8V2g.y7bb]=J8V2g[q9](s9*S9*u9,B9*k9*K9);this[J8V2g.H7bb]=J8V2g[z9](s9*k9*K9,B9*S9*u9);this[J8V2g.H67b]=J8V2g[U9](s9,k9,u9)+J8V2g[i9](B9,S9,K9);}else if(J8V2g[V](g9,J8V2g.y0bb)){this[J8V2g.e67b]=J8V2g[y9](B9*k9*u9,s9*S9*K9);this[J8V2g.y7bb]=J8V2g[A](s9,S9,u9)+J8V2g[Z9](B9,k9,K9);this[J8V2g.H7bb]=J8V2g[j9](s9,k9,K9)+J8V2g[v9](B9,S9,u9);this[J8V2g.H67b]=J8V2g[I](s9*k9*u9,B9*S9*K9);}else if(J8V2g[K](g9,J8V2g.m8lb)){this[J8V2g.e67b]=J8V2g[B](B9*k9*u9,s9*S9*K9);this[J8V2g.y7bb]=J8V2g[N](s9,S9,u9)+J8V2g[k](B9,k9,K9);this[J8V2g.H7bb]=J8V2g[O](s9*k9*K9,B9*S9*u9);this[J8V2g.H67b]=J8V2g[M](s9,k9,u9)+J8V2g[D](B9,S9,K9);}else if(J8V2g[d](g9,J8V2g.V1lb)){this[J8V2g.e67b]=J8V2g[R](B9,k9,u9)+J8V2g[u](s9,S9,K9);this[J8V2g.y7bb]=J8V2g[o](s9,S9,u9)+J8V2g[e](B9,k9,K9);this[J8V2g.H7bb]=J8V2g[F](s9*k9*K9,B9*S9*u9);this[J8V2g.H67b]=J8V2g[C](s9*k9*u9,B9*S9*K9);}else if(J8V2g[f](g9,J8V2g.R7bb)){this[J8V2g.e67b]=J8V2g[H](B9*k9*u9,s9*S9*K9);this[J8V2g.y7bb]=J8V2g[W](s9*S9*u9,B9*k9*K9);this[J8V2g.H7bb]=J8V2g[n](s9,k9,K9)+J8V2g[J](B9,S9,u9);this[J8V2g.H67b]=J8V2g[T](s9,k9,u9)+J8V2g[G](B9,S9,K9);}if(J8V2g[Q](U,J8V2g.o8lb))this[J8V2g.B2lb]();return this;},setFromAxisAngle:function(j,U){var Q="n8g",G="q8g",T="m8g",J="Q8g",n=J8V2g[J](U,J8V2g.Z7bb),W=Math[J8V2g.b27b](n);this[J8V2g.e67b]=J8V2g[T](j[J8V2g.q0lb],W);this[J8V2g.y7bb]=J8V2g[G](j[J8V2g.r0lb],W);this[J8V2g.H7bb]=J8V2g[Q](j[J8V2g.S0lb],W);this[J8V2g.H67b]=Math[J8V2g.I4lb](n);this[J8V2g.B2lb]();return this;},setFromRotationMatrix:function(j){var U="k7g",Q="P7g",G="e7g",T="X7g",J="l7g",n="F7g",W="f7g",H="H7g",f="G7g",C="T7g",F="z7g",e="v7g",o="g8g",u="V8g",R="I8g",d=2.0,D="s8g",M="B8g",O="S8g",k="d8g",N="u8g",B="o8g",K=0.25,I="h8g",v9="b8g",j9="C8g",Z9=j[J8V2g.l0lb],A=Z9[J8V2g.p7bb],y9=Z9[J8V2g.J7bb],V=Z9[J8V2g.C7bb],i9=Z9[J8V2g.T7bb],U9=Z9[J8V2g.n7bb],z9=Z9[J8V2g.W7bb],q9=Z9[J8V2g.Z7bb],J9=Z9[J8V2g.L7bb],m9=Z9[J8V2g.B5lb],f9=A+U9+m9,T9;if(J8V2g[j9](f9,J8V2g.p7bb)){T9=J8V2g[v9](J8V2g.M9lb,Math[J8V2g.Q8lb](f9+J8V2g.V7lb));this[J8V2g.H67b]=J8V2g[I](K,T9);this[J8V2g.e67b]=J8V2g[B]((J9-z9),T9);this[J8V2g.y7bb]=J8V2g[N]((V-q9),T9);this[J8V2g.H7bb]=J8V2g[k]((i9-y9),T9);}else if(J8V2g[O](A,U9)&&J8V2g[M](A,m9)){T9=J8V2g[D](d,Math[J8V2g.Q8lb](J8V2g.V7lb+A-U9-m9));this[J8V2g.H67b]=J8V2g[R]((J9-z9),T9);this[J8V2g.e67b]=J8V2g[u](K,T9);this[J8V2g.y7bb]=J8V2g[o]((y9+i9),T9);this[J8V2g.H7bb]=J8V2g[e]((V+q9),T9);}else if(J8V2g[F](U9,m9)){T9=J8V2g[C](d,Math[J8V2g.Q8lb](J8V2g.V7lb+U9-A-m9));this[J8V2g.H67b]=J8V2g[f]((V-q9),T9);this[J8V2g.e67b]=J8V2g[H]((y9+i9),T9);this[J8V2g.y7bb]=J8V2g[W](K,T9);this[J8V2g.H7bb]=J8V2g[n]((z9+J9),T9);}else{T9=J8V2g[J](d,Math[J8V2g.Q8lb](J8V2g.V7lb+m9-A-U9));this[J8V2g.H67b]=J8V2g[T]((i9-y9),T9);this[J8V2g.e67b]=J8V2g[G]((V+q9),T9);this[J8V2g.y7bb]=J8V2g[Q]((z9+J9),T9);this[J8V2g.H7bb]=J8V2g[U](K,T9);}this[J8V2g.B2lb]();return this;},setFromUnitVectors:function(){var J=0.000001,n,W,H=J;return function(j,U){var Q="c7g",G="D7g",T="w7g";if(J8V2g[T](n,undefined))n=new THREE[J8V2g.c8bb]();W=j[J8V2g.A5bb](U)+J8V2g.T7bb;if(J8V2g[G](W,H)){W=J8V2g.p7bb;if(J8V2g[Q](Math[J8V2g.A97b](j[J8V2g.q0lb]),Math[J8V2g.A97b](j[J8V2g.S0lb]))){n[J8V2g.A8lb](-j[J8V2g.r0lb],j[J8V2g.q0lb],J8V2g.p7bb);}else{n[J8V2g.A8lb](J8V2g.p7bb,-j[J8V2g.S0lb],j[J8V2g.r0lb]);}}else{n[J8V2g.z2lb](j,U);}this[J8V2g.e67b]=n[J8V2g.q0lb];this[J8V2g.y7bb]=n[J8V2g.r0lb];this[J8V2g.H7bb]=n[J8V2g.S0lb];this[J8V2g.H67b]=W;this[J8V2g.L1lb]();return this;};}(),inverse:function(){var j="conjugate";this[j]()[J8V2g.L1lb]();return this;},conjugate:function(){this[J8V2g.e67b]*=-J8V2g.T7bb;this[J8V2g.y7bb]*=-J8V2g.T7bb;this[J8V2g.H7bb]*=-J8V2g.T7bb;this[J8V2g.B2lb]();return this;},dot:function(j){var U="i5g",Q="y5g",G="A7g",T="O7g";return J8V2g[T](this[J8V2g.e67b],j[J8V2g.e67b])+J8V2g[G](this[J8V2g.y7bb],j[J8V2g.y7bb])+J8V2g[Q](this[J8V2g.H7bb],j[J8V2g.H7bb])+J8V2g[U](this[J8V2g.H67b],j[J8V2g.H67b]);},lengthSq:function(){var j="L5g",U="J5g",Q="Z5g",G="p5g";return J8V2g[G](this[J8V2g.e67b],this[J8V2g.e67b])+J8V2g[Q](this[J8V2g.y7bb],this[J8V2g.y7bb])+J8V2g[U](this[J8V2g.H7bb],this[J8V2g.H7bb])+J8V2g[j](this[J8V2g.H67b],this[J8V2g.H67b]);},length:function(){var j="Y5g",U="t5g",Q="r5g",G="W5g";return Math[J8V2g.Q8lb](J8V2g[G](this[J8V2g.e67b],this[J8V2g.e67b])+J8V2g[Q](this[J8V2g.y7bb],this[J8V2g.y7bb])+J8V2g[U](this[J8V2g.H7bb],this[J8V2g.H7bb])+J8V2g[j](this[J8V2g.H67b],this[J8V2g.H67b]));},normalize:function(){var j="a5g",U="x5g",Q="K5g",G="N5g",T="M5g",J="R5g",n=this.length();if(J8V2g[J](n,J8V2g.p7bb)){this[J8V2g.e67b]=J8V2g.p7bb;this[J8V2g.y7bb]=J8V2g.p7bb;this[J8V2g.H7bb]=J8V2g.p7bb;this[J8V2g.H67b]=J8V2g.T7bb;}else{n=J8V2g[T](J8V2g.T7bb,n);this[J8V2g.e67b]=J8V2g[G](this[J8V2g.e67b],n);this[J8V2g.y7bb]=J8V2g[Q](this[J8V2g.y7bb],n);this[J8V2g.H7bb]=J8V2g[U](this[J8V2g.H7bb],n);this[J8V2g.H67b]=J8V2g[j](this[J8V2g.H67b],n);}this[J8V2g.B2lb]();return this;},multiply:function(j,U){var Q="multiplyQuaternions",G='THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.',T="E5g";if(J8V2g[T](U,undefined)){console[J8V2g.n1lb](G);return this[Q](j,U);}return this[Q](this,j);},multiplyQuaternions:function(j,U){var Q="S0g",G="d0g",T="u0g",J="o0g",n="h0g",W="b0g",H="C0g",f="n0g",C="q0g",F="m0g",e="Q0g",o="U0g",u="j0g",R=j[J8V2g.e67b],d=j[J8V2g.y7bb],D=j[J8V2g.H7bb],M=j[J8V2g.H67b],O=U[J8V2g.e67b],k=U[J8V2g.y7bb],N=U[J8V2g.H7bb],B=U[J8V2g.H67b];this[J8V2g.e67b]=J8V2g[u](R,B)+J8V2g[o](M,O)+J8V2g[e](d,N)-J8V2g[F](D,k);this[J8V2g.y7bb]=J8V2g[C](d,B)+J8V2g[f](M,k)+J8V2g[H](D,O)-J8V2g[W](R,N);this[J8V2g.H7bb]=J8V2g[n](D,B)+J8V2g[J](M,N)+J8V2g[T](R,k)-J8V2g[G](d,O);this[J8V2g.H67b]=J8V2g[Q](M*B,R*O,d*k,D*N);this[J8V2g.B2lb]();return this;},slerp:function(j,U){var Q="Q2w",G="U2w",T="j2w",J="E9w",n="a9w",W="x9w",H="K9w",f="N9w",C="M9w",F="R9w",e="Y9w",o="t9w",u="r9w",R="W9w",d=0.001,D="L9w",M="J9w",O="Z9w",k="p9w",N="i9w",B="y9w",K="A0g",I="O0g",v9="c0g",j9="D0g";if(J8V2g[j9](U,J8V2g.p7bb))return this;if(J8V2g[v9](U,J8V2g.T7bb))return this[J8V2g.f1lb](j);var Z9=this[J8V2g.e67b],A=this[J8V2g.y7bb],y9=this[J8V2g.H7bb],V=this[J8V2g.H67b],i9=J8V2g[I](V,j[J8V2g.H67b])+J8V2g[K](Z9,j[J8V2g.e67b])+J8V2g[B](A,j[J8V2g.y7bb])+J8V2g[N](y9,j[J8V2g.H7bb]);if(J8V2g[k](i9,J8V2g.p7bb)){this[J8V2g.H67b]=-j[J8V2g.H67b];this[J8V2g.e67b]=-j[J8V2g.e67b];this[J8V2g.y7bb]=-j[J8V2g.y7bb];this[J8V2g.H7bb]=-j[J8V2g.H7bb];i9=-i9;}else{this[J8V2g.f1lb](j);}if(J8V2g[O](i9,J8V2g.V7lb)){this[J8V2g.H67b]=V;this[J8V2g.e67b]=Z9;this[J8V2g.y7bb]=A;this[J8V2g.H7bb]=y9;return this;}var U9=Math[J8V2g.Q8lb](J8V2g[M](J8V2g.V7lb,i9*i9));if(J8V2g[D](Math[J8V2g.A97b](U9),d)){this[J8V2g.H67b]=J8V2g[R](J8V2g.M9lb,(V+this[J8V2g.H67b]));this[J8V2g.e67b]=J8V2g[u](J8V2g.M9lb,(Z9+this[J8V2g.e67b]));this[J8V2g.y7bb]=J8V2g[o](J8V2g.M9lb,(A+this[J8V2g.y7bb]));this[J8V2g.H7bb]=J8V2g[e](J8V2g.M9lb,(y9+this[J8V2g.H7bb]));return this;}var z9=Math[J8V2g.Z97b](U9,i9),q9=J8V2g[F](Math[J8V2g.b27b]((J8V2g.T7bb-U)*z9),U9),J9=J8V2g[C](Math[J8V2g.b27b](U*z9),U9);this[J8V2g.H67b]=(J8V2g[f](V,q9)+J8V2g[H](this[J8V2g.H67b],J9));this[J8V2g.e67b]=(J8V2g[W](Z9,q9)+J8V2g[n](this[J8V2g.e67b],J9));this[J8V2g.y7bb]=(J8V2g[J](A,q9)+J8V2g[T](this[J8V2g.y7bb],J9));this[J8V2g.H7bb]=(J8V2g[G](y9,q9)+J8V2g[Q](this[J8V2g.H7bb],J9));this[J8V2g.B2lb]();return this;},equals:function(j){var U="C2w",Q="n2w",G="q2w",T="m2w";return (J8V2g[T](j[J8V2g.e67b],this[J8V2g.e67b]))&&(J8V2g[G](j[J8V2g.y7bb],this[J8V2g.y7bb]))&&(J8V2g[Q](j[J8V2g.H7bb],this[J8V2g.H7bb]))&&(J8V2g[U](j[J8V2g.H67b],this[J8V2g.H67b]));},fromArray:function(j,U){var Q="b2w";if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;this[J8V2g.e67b]=j[U];this[J8V2g.y7bb]=j[U+J8V2g.T7bb];this[J8V2g.H7bb]=j[U+J8V2g.Z7bb];this[J8V2g.H67b]=j[U+J8V2g.G7bb];this[J8V2g.B2lb]();return this;},toArray:function(j,U){var Q="o2w",G="h2w";if(J8V2g[G](j,undefined))j=[];if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;j[U]=this[J8V2g.e67b];j[U+J8V2g.T7bb]=this[J8V2g.y7bb];j[U+J8V2g.Z7bb]=this[J8V2g.H7bb];j[U+J8V2g.G7bb]=this[J8V2g.H67b];return j;},onChange:function(j){this[J8V2g.B2lb]=j;return this;},onChangeCallback:function(){}}:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n";Object[J8V2g.W3lb](THREE[J8V2g.d7bb],{slerp:function(j,U,Q,G){var T="slerp";return Q[J8V2g.f1lb](j)[T](U,G);},slerpFlat:function(Q,G,T,J,n,W,H){var f="y3w",C="A6w",F="O6w",e="c6w",o="EPSILON",u="k6w",R="P6w",d="e6w",D="X6w",M="l6w",O="F6w",k="f6w",N="H6w",B="B2w",K="S2w",I="d2w",v9="u2w",j9=function(j){Q[G]=j;},Z9=function(j){Q[G+J8V2g.Z7bb]=j;},A=function(j){Q[G+J8V2g.G7bb]=j;},y9=function(j){Q[G+J8V2g.T7bb]=j;},V=T[J+J8V2g.p7bb],i9=T[J+J8V2g.T7bb],U9=T[J+J8V2g.Z7bb],z9=T[J+J8V2g.G7bb],q9=n[W+J8V2g.p7bb],J9=n[W+J8V2g.T7bb],m9=n[W+J8V2g.Z7bb],f9=n[W+J8V2g.G7bb];if(J8V2g[v9](z9,f9)||J8V2g[I](V,q9)||J8V2g[K](i9,J9)||J8V2g[B](U9,m9)){var T9=function(){var j="I2w",U="s2w";z9=J8V2g[U](z9,l9)+J8V2g[j](f9,N9);},G9=function(){var j="G6w";var U="T6w";V=J8V2g[U](V,l9)+J8V2g[j](q9,N9);},F9=function(){var j="z6w";var U="v6w";i9=J8V2g[U](i9,l9)+J8V2g[j](J9,N9);},C9=function(){var j="g2w";var U="V2w";U9=J8V2g[U](U9,l9)+J8V2g[j](m9,N9);};var l9=J8V2g[N](J8V2g.T7bb,H),H9=J8V2g[k](V,q9)+J8V2g[O](i9,J9)+J8V2g[M](U9,m9)+J8V2g[D](z9,f9),t9=(J8V2g[d](H9,J8V2g.p7bb)?J8V2g.T7bb:-J8V2g.T7bb),Y9=J8V2g[R](J8V2g.T7bb,H9*H9);if(J8V2g[u](Y9,Number[o])){var n9=function(){var j="D6w";l9=J8V2g[j](Math[J8V2g.b27b](l9*w9),P9);},L9=function(){var j="w6w";H=J8V2g[j](Math[J8V2g.b27b](H*w9),P9);};var P9=Math[J8V2g.Q8lb](Y9),w9=Math[J8V2g.Z97b](P9,J8V2g[e](H9,t9));n9();L9();}var N9=J8V2g[F](H,t9);G9();F9();C9();T9();if(J8V2g[C](l9,J8V2g.T7bb-H)){var d9=J8V2g[f](J8V2g.T7bb,Math[J8V2g.Q8lb](V*V+i9*i9+U9*U9+z9*z9));V*=d9;i9*=d9;U9*=d9;z9*=d9;}}j9(V);y9(i9);Z9(U9);A(z9);}});THREE[J8V2g.c8bb]=function(j,U,Q){this[J8V2g.q0lb]=j||J8V2g.p7bb;this[J8V2g.r0lb]=U||J8V2g.p7bb;this[J8V2g.S0lb]=Q||J8V2g.p7bb;};THREE.Vector3.prototype={constructor:THREE[J8V2g.c8bb],set:function(j,U,Q){this[J8V2g.q0lb]=j;this[J8V2g.r0lb]=U;this[J8V2g.S0lb]=Q;return this;},setScalar:function(j){this[J8V2g.q0lb]=j;this[J8V2g.r0lb]=j;this[J8V2g.S0lb]=j;return this;},setX:function(j){this[J8V2g.q0lb]=j;return this;},setY:function(j){this[J8V2g.r0lb]=j;return this;},setZ:function(j){this[J8V2g.S0lb]=j;return this;},setComponent:function(j,U){switch(j){case J8V2g.p7bb:this[J8V2g.q0lb]=U;break;case J8V2g.T7bb:this[J8V2g.r0lb]=U;break;case J8V2g.Z7bb:this[J8V2g.S0lb]=U;break;default:throw  new Error(J8V2g.s7bb+j);}},getComponent:function(j){switch(j){case J8V2g.p7bb:return this[J8V2g.q0lb];case J8V2g.T7bb:return this[J8V2g.r0lb];case J8V2g.Z7bb:return this[J8V2g.S0lb];default:throw  new Error(J8V2g.s7bb+j);}},clone:function(){return new this.constructor(this[J8V2g.q0lb],this[J8V2g.r0lb],this[J8V2g.S0lb]);},copy:function(j){this[J8V2g.q0lb]=j[J8V2g.q0lb];this[J8V2g.r0lb]=j[J8V2g.r0lb];this[J8V2g.S0lb]=j[J8V2g.S0lb];return this;},add:function(j,U){var Q='THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.',G="i3w";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.H27b](j,U);}this[J8V2g.q0lb]+=j[J8V2g.q0lb];this[J8V2g.r0lb]+=j[J8V2g.r0lb];this[J8V2g.S0lb]+=j[J8V2g.S0lb];return this;},addScalar:function(j){this[J8V2g.q0lb]+=j;this[J8V2g.r0lb]+=j;this[J8V2g.S0lb]+=j;return this;},addVectors:function(j,U){this[J8V2g.q0lb]=j[J8V2g.q0lb]+U[J8V2g.q0lb];this[J8V2g.r0lb]=j[J8V2g.r0lb]+U[J8V2g.r0lb];this[J8V2g.S0lb]=j[J8V2g.S0lb]+U[J8V2g.S0lb];return this;},addScaledVector:function(j,U){var Q="J3w",G="Z3w",T="p3w";this[J8V2g.q0lb]+=J8V2g[T](j[J8V2g.q0lb],U);this[J8V2g.r0lb]+=J8V2g[G](j[J8V2g.r0lb],U);this[J8V2g.S0lb]+=J8V2g[Q](j[J8V2g.S0lb],U);return this;},sub:function(j,U){var Q='THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.',G="L3w";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.e27b](j,U);}this[J8V2g.q0lb]-=j[J8V2g.q0lb];this[J8V2g.r0lb]-=j[J8V2g.r0lb];this[J8V2g.S0lb]-=j[J8V2g.S0lb];return this;},subScalar:function(j){this[J8V2g.q0lb]-=j;this[J8V2g.r0lb]-=j;this[J8V2g.S0lb]-=j;return this;},subVectors:function(j,U){var Q="t3w",G="r3w",T="W3w";this[J8V2g.q0lb]=J8V2g[T](j[J8V2g.q0lb],U[J8V2g.q0lb]);this[J8V2g.r0lb]=J8V2g[G](j[J8V2g.r0lb],U[J8V2g.r0lb]);this[J8V2g.S0lb]=J8V2g[Q](j[J8V2g.S0lb],U[J8V2g.S0lb]);return this;},multiply:function(j,U){var Q="multiplyVectors",G='THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.',T="Y3w";if(J8V2g[T](U,undefined)){console[J8V2g.n1lb](G);return this[Q](j,U);}this[J8V2g.q0lb]*=j[J8V2g.q0lb];this[J8V2g.r0lb]*=j[J8V2g.r0lb];this[J8V2g.S0lb]*=j[J8V2g.S0lb];return this;},multiplyScalar:function(j){if(isFinite(j)){this[J8V2g.q0lb]*=j;this[J8V2g.r0lb]*=j;this[J8V2g.S0lb]*=j;}else{this[J8V2g.q0lb]=J8V2g.p7bb;this[J8V2g.r0lb]=J8V2g.p7bb;this[J8V2g.S0lb]=J8V2g.p7bb;}return this;},multiplyVectors:function(j,U){var Q="N3w",G="M3w",T="R3w";this[J8V2g.q0lb]=J8V2g[T](j[J8V2g.q0lb],U[J8V2g.q0lb]);this[J8V2g.r0lb]=J8V2g[G](j[J8V2g.r0lb],U[J8V2g.r0lb]);this[J8V2g.S0lb]=J8V2g[Q](j[J8V2g.S0lb],U[J8V2g.S0lb]);return this;},applyEuler:function(){var J;return function n(j){var U="setFromEuler",Q="x3w",G='THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.',T="K3w";if(J8V2g[T](j instanceof THREE[J8V2g.t2lb],J8V2g.o8lb)){console.error(G);}if(J8V2g[Q](J,undefined))J=new THREE[J8V2g.d7bb]();this[J8V2g.d6lb](J[U](j));return this;};}(),applyAxisAngle:function(){var T;return function J(j,U){var Q="setFromAxisAngle",G="a3w";if(J8V2g[G](T,undefined))T=new THREE[J8V2g.d7bb]();this[J8V2g.d6lb](T[Q](j,U));return this;};}(),applyMatrix3:function(j){var U="b1w",Q="C1w",G="n1w",T="q1w",J="m1w",n="Q1w",W="U1w",H="j1w",f="E3w",C=this[J8V2g.q0lb],F=this[J8V2g.r0lb],e=this[J8V2g.S0lb],o=j[J8V2g.l0lb];this[J8V2g.q0lb]=J8V2g[f](o[J8V2g.p7bb],C)+J8V2g[H](o[J8V2g.G7bb],F)+J8V2g[W](o[J8V2g.L7bb],e);this[J8V2g.r0lb]=J8V2g[n](o[J8V2g.T7bb],C)+J8V2g[J](o[J8V2g.J7bb],F)+J8V2g[T](o[J8V2g.f7bb],e);this[J8V2g.S0lb]=J8V2g[G](o[J8V2g.Z7bb],C)+J8V2g[Q](o[J8V2g.n7bb],F)+J8V2g[U](o[J8V2g.C7bb],e);return this;},applyMatrix4:function(j){var U="V1w",Q="I1w",G="s1w",T="B1w",J="S1w",n="d1w",W="u1w",H="o1w",f="h1w",C=this[J8V2g.q0lb],F=this[J8V2g.r0lb],e=this[J8V2g.S0lb],o=j[J8V2g.l0lb];this[J8V2g.q0lb]=J8V2g[f](o[J8V2g.p7bb],C)+J8V2g[H](o[J8V2g.J7bb],F)+J8V2g[W](o[J8V2g.C7bb],e)+o[J8V2g.s5lb];this[J8V2g.r0lb]=J8V2g[n](o[J8V2g.T7bb],C)+J8V2g[J](o[J8V2g.n7bb],F)+J8V2g[T](o[J8V2g.W7bb],e)+o[J8V2g.x5lb];this[J8V2g.S0lb]=J8V2g[G](o[J8V2g.Z7bb],C)+J8V2g[Q](o[J8V2g.L7bb],F)+J8V2g[U](o[J8V2g.B5lb],e)+o[J8V2g.c5lb];return this;},applyProjection:function(j){var U="T4w",Q="z4w",G="v4w",T="g1w",J=this[J8V2g.q0lb],n=this[J8V2g.r0lb],W=this[J8V2g.S0lb],H=j[J8V2g.l0lb],f=J8V2g[T](J8V2g.T7bb,(H[J8V2g.G7bb]*J+H[J8V2g.f7bb]*n+H[J8V2g.D5lb]*W+H[J8V2g.a5lb]));this[J8V2g.q0lb]=J8V2g[G]((H[J8V2g.p7bb]*J+H[J8V2g.J7bb]*n+H[J8V2g.C7bb]*W+H[J8V2g.s5lb]),f);this[J8V2g.r0lb]=J8V2g[Q]((H[J8V2g.T7bb]*J+H[J8V2g.n7bb]*n+H[J8V2g.W7bb]*W+H[J8V2g.x5lb]),f);this[J8V2g.S0lb]=J8V2g[U]((H[J8V2g.Z7bb]*J+H[J8V2g.L7bb]*n+H[J8V2g.B5lb]*W+H[J8V2g.c5lb]),f);return this;},applyQuaternion:function(j){var U="A4w",Q="O4w",G="c4w",T="D4w",J="w4w",n="k4w",W="P4w",H="e4w",f="X4w",C="l4w",F="F4w",e="f4w",o="H4w",u="G4w",R=this[J8V2g.q0lb],d=this[J8V2g.r0lb],D=this[J8V2g.S0lb],M=j[J8V2g.q0lb],O=j[J8V2g.r0lb],k=j[J8V2g.S0lb],N=j[J8V2g.v0lb],B=J8V2g[u](N,R)+J8V2g[o](O,D)-J8V2g[e](k,d),K=J8V2g[F](N,d)+J8V2g[C](k,R)-J8V2g[f](M,D),I=J8V2g[H](N,D)+J8V2g[W](M,d)-J8V2g[n](O,R),v9=-M*R-J8V2g[J](O,d)-J8V2g[T](k,D);this[J8V2g.q0lb]=J8V2g[G](B,N)+v9*-M+K*-k-I*-O;this[J8V2g.r0lb]=J8V2g[Q](K,N)+v9*-O+I*-M-B*-k;this[J8V2g.S0lb]=J8V2g[U](I,N)+v9*-k+B*-O-K*-M;return this;},project:function(){var Q;return function G(j){var U="y8w";if(J8V2g[U](Q,undefined))Q=new THREE[J8V2g.q3lb]();Q[J8V2g.a0lb](j[J8V2g.h8lb],Q[J8V2g.o9lb](j[J8V2g.V3lb]));return this[J8V2g.D9lb](Q);};}(),unproject:function(){var Q;return function G(j){var U="i8w";if(J8V2g[U](Q,undefined))Q=new THREE[J8V2g.q3lb]();Q[J8V2g.a0lb](j[J8V2g.V3lb],Q[J8V2g.o9lb](j[J8V2g.h8lb]));return this[J8V2g.D9lb](Q);};}(),transformDirection:function(j){var U="R8w",Q="Y8w",G="t8w",T="r8w",J="W8w",n="L8w",W="J8w",H="Z8w",f="p8w",C=this[J8V2g.q0lb],F=this[J8V2g.r0lb],e=this[J8V2g.S0lb],o=j[J8V2g.l0lb];this[J8V2g.q0lb]=J8V2g[f](o[J8V2g.p7bb],C)+J8V2g[H](o[J8V2g.J7bb],F)+J8V2g[W](o[J8V2g.C7bb],e);this[J8V2g.r0lb]=J8V2g[n](o[J8V2g.T7bb],C)+J8V2g[J](o[J8V2g.n7bb],F)+J8V2g[T](o[J8V2g.W7bb],e);this[J8V2g.S0lb]=J8V2g[G](o[J8V2g.Z7bb],C)+J8V2g[Q](o[J8V2g.L7bb],F)+J8V2g[U](o[J8V2g.B5lb],e);this[J8V2g.L1lb]();return this;},divide:function(j){this[J8V2g.q0lb]/=j[J8V2g.q0lb];this[J8V2g.r0lb]/=j[J8V2g.r0lb];this[J8V2g.S0lb]/=j[J8V2g.S0lb];return this;},divideScalar:function(j){var U="M8w";return this[J8V2g.q5lb](J8V2g[U](J8V2g.T7bb,j));},min:function(j){this[J8V2g.q0lb]=Math[J8V2g.Q0bb](this[J8V2g.q0lb],j[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.Q0bb](this[J8V2g.r0lb],j[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.Q0bb](this[J8V2g.S0lb],j[J8V2g.S0lb]);return this;},max:function(j){this[J8V2g.q0lb]=Math[J8V2g.R4lb](this[J8V2g.q0lb],j[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.R4lb](this[J8V2g.r0lb],j[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.R4lb](this[J8V2g.S0lb],j[J8V2g.S0lb]);return this;},clamp:function(j,U){this[J8V2g.q0lb]=Math[J8V2g.R4lb](j[J8V2g.q0lb],Math[J8V2g.Q0bb](U[J8V2g.q0lb],this[J8V2g.q0lb]));this[J8V2g.r0lb]=Math[J8V2g.R4lb](j[J8V2g.r0lb],Math[J8V2g.Q0bb](U[J8V2g.r0lb],this[J8V2g.r0lb]));this[J8V2g.S0lb]=Math[J8V2g.R4lb](j[J8V2g.S0lb],Math[J8V2g.Q0bb](U[J8V2g.S0lb],this[J8V2g.S0lb]));return this;},clampScalar:function(){var G,T;return function J(j,U){var Q="N8w";if(J8V2g[Q](G,undefined)){G=new THREE[J8V2g.c8bb]();T=new THREE[J8V2g.c8bb]();}G[J8V2g.A8lb](j,j,j);T[J8V2g.A8lb](U,U,U);return this[J8V2g.W5bb](G,T);};}(),clampLength:function(j,U){var Q="K8w",G=this.length();this[J8V2g.q5lb](J8V2g[Q](Math[J8V2g.R4lb](j,Math[J8V2g.Q0bb](U,G)),G));return this;},floor:function(){this[J8V2g.q0lb]=Math[J8V2g.t97b](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.t97b](this[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.t97b](this[J8V2g.S0lb]);return this;},ceil:function(){this[J8V2g.q0lb]=Math[J8V2g.k3lb](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.k3lb](this[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.k3lb](this[J8V2g.S0lb]);return this;},round:function(){this[J8V2g.q0lb]=Math[J8V2g.T9lb](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.T9lb](this[J8V2g.r0lb]);this[J8V2g.S0lb]=Math[J8V2g.T9lb](this[J8V2g.S0lb]);return this;},roundToZero:function(){var j="E8w",U="a8w",Q="x8w";this[J8V2g.q0lb]=(J8V2g[Q](this[J8V2g.q0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.q0lb]):Math[J8V2g.t97b](this[J8V2g.q0lb]);this[J8V2g.r0lb]=(J8V2g[U](this[J8V2g.r0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.r0lb]):Math[J8V2g.t97b](this[J8V2g.r0lb]);this[J8V2g.S0lb]=(J8V2g[j](this[J8V2g.S0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.S0lb]):Math[J8V2g.t97b](this[J8V2g.S0lb]);return this;},negate:function(){this[J8V2g.q0lb]=-this[J8V2g.q0lb];this[J8V2g.r0lb]=-this[J8V2g.r0lb];this[J8V2g.S0lb]=-this[J8V2g.S0lb];return this;},dot:function(j){var U="Q7w",Q="U7w",G="j7w";return J8V2g[G](this[J8V2g.q0lb],j[J8V2g.q0lb])+J8V2g[Q](this[J8V2g.r0lb],j[J8V2g.r0lb])+J8V2g[U](this[J8V2g.S0lb],j[J8V2g.S0lb]);},lengthSq:function(){var j="n7w",U="q7w",Q="m7w";return J8V2g[Q](this[J8V2g.q0lb],this[J8V2g.q0lb])+J8V2g[U](this[J8V2g.r0lb],this[J8V2g.r0lb])+J8V2g[j](this[J8V2g.S0lb],this[J8V2g.S0lb]);},length:function(){var j="h7w",U="b7w",Q="C7w";return Math[J8V2g.Q8lb](J8V2g[Q](this[J8V2g.q0lb],this[J8V2g.q0lb])+J8V2g[U](this[J8V2g.r0lb],this[J8V2g.r0lb])+J8V2g[j](this[J8V2g.S0lb],this[J8V2g.S0lb]));},lengthManhattan:function(){return Math[J8V2g.A97b](this[J8V2g.q0lb])+Math[J8V2g.A97b](this[J8V2g.r0lb])+Math[J8V2g.A97b](this[J8V2g.S0lb]);},normalize:function(){return this[J8V2g.D27b](this.length());},setLength:function(j){var U="o7w";return this[J8V2g.q5lb](J8V2g[U](j,this.length()));},lerp:function(j,U){var Q="S7w",G="d7w",T="u7w";this[J8V2g.q0lb]+=J8V2g[T]((j[J8V2g.q0lb]-this[J8V2g.q0lb]),U);this[J8V2g.r0lb]+=J8V2g[G]((j[J8V2g.r0lb]-this[J8V2g.r0lb]),U);this[J8V2g.S0lb]+=J8V2g[Q]((j[J8V2g.S0lb]-this[J8V2g.S0lb]),U);return this;},lerpVectors:function(j,U,Q){this[J8V2g.e27b](U,j)[J8V2g.q5lb](Q)[J8V2g.F5bb](j);return this;},cross:function(j,U){var Q="V7w",G="I7w",T="s7w",J='THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.',n="B7w";if(J8V2g[n](U,undefined)){console[J8V2g.n1lb](J);return this[J8V2g.z2lb](j,U);}var W=this[J8V2g.q0lb],H=this[J8V2g.r0lb],f=this[J8V2g.S0lb];this[J8V2g.q0lb]=J8V2g[T](H*j[J8V2g.S0lb],f*j[J8V2g.r0lb]);this[J8V2g.r0lb]=J8V2g[G](f*j[J8V2g.q0lb],W*j[J8V2g.S0lb]);this[J8V2g.S0lb]=J8V2g[Q](W*j[J8V2g.r0lb],H*j[J8V2g.q0lb]);return this;},crossVectors:function(j,U){var Q="z5w",G="v5w",T="g7w",J=j[J8V2g.q0lb],n=j[J8V2g.r0lb],W=j[J8V2g.S0lb],H=U[J8V2g.q0lb],f=U[J8V2g.r0lb],C=U[J8V2g.S0lb];this[J8V2g.q0lb]=J8V2g[T](n*C,W*f);this[J8V2g.r0lb]=J8V2g[G](W*H,J*C);this[J8V2g.S0lb]=J8V2g[Q](J*f,n*H);return this;},projectOnVector:function(){var Q,G;return function T(j){var U="T5w";if(J8V2g[U](Q,undefined))Q=new THREE[J8V2g.c8bb]();Q[J8V2g.f1lb](j)[J8V2g.L1lb]();G=this[J8V2g.A5bb](Q);return this[J8V2g.f1lb](Q)[J8V2g.q5lb](G);};}(),projectOnPlane:function(){var G;return function T(j){var U="projectOnVector",Q="G5w";if(J8V2g[Q](G,undefined))G=new THREE[J8V2g.c8bb]();G[J8V2g.f1lb](this)[U](j);return this[J8V2g.B6lb](G);};}(),reflect:function(){var G;return function T(j){var U="f5w",Q="H5w";if(J8V2g[Q](G,undefined))G=new THREE[J8V2g.c8bb]();return this[J8V2g.B6lb](G[J8V2g.f1lb](j)[J8V2g.q5lb](J8V2g[U](J8V2g.Z7bb,this[J8V2g.A5bb](j))));};}(),angleTo:function(j){var U="acos",Q="F5w",G=J8V2g[Q](this[J8V2g.A5bb](j),(Math[J8V2g.Q8lb](this[J8V2g.L7lb]()*j[J8V2g.L7lb]())));return Math[U](THREE[J8V2g.a0bb][J8V2g.W5bb](G,-J8V2g.T7bb,J8V2g.T7bb));},distanceTo:function(j){return Math[J8V2g.Q8lb](this[J8V2g.q4lb](j));},distanceToSquared:function(j){var U="w5w",Q="k5w",G="P5w",T="e5w",J="X5w",n="l5w",W=J8V2g[n](this[J8V2g.q0lb],j[J8V2g.q0lb]),H=J8V2g[J](this[J8V2g.r0lb],j[J8V2g.r0lb]),f=J8V2g[T](this[J8V2g.S0lb],j[J8V2g.S0lb]);return J8V2g[G](W,W)+J8V2g[Q](H,H)+J8V2g[U](f,f);},setFromSpherical:function(j){var U="A5w",Q="O5w",G="theta",T="c5w",J="phi",n="D5w",W=J8V2g[n](Math[J8V2g.b27b](j[J]),j[J8V2g.U97b]);this[J8V2g.q0lb]=J8V2g[T](W,Math[J8V2g.b27b](j[G]));this[J8V2g.r0lb]=J8V2g[Q](Math[J8V2g.I4lb](j[J]),j[J8V2g.U97b]);this[J8V2g.S0lb]=J8V2g[U](W,Math[J8V2g.I4lb](j[G]));return this;},setFromMatrixPosition:function(j){return this[J8V2g.U27b](j,J8V2g.G7bb);},setFromMatrixScale:function(j){var U=this[J8V2g.U27b](j,J8V2g.p7bb).length(),Q=this[J8V2g.U27b](j,J8V2g.T7bb).length(),G=this[J8V2g.U27b](j,J8V2g.Z7bb).length();this[J8V2g.q0lb]=U;this[J8V2g.r0lb]=Q;this[J8V2g.S0lb]=G;return this;},setFromMatrixColumn:function(j,U){var Q="y0w",G='THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).',T='number';if(typeof j===T){console[J8V2g.n1lb](G);j=arguments[J8V2g.T7bb];U=arguments[J8V2g.p7bb];}return this[J8V2g.P6lb](j[J8V2g.l0lb],J8V2g[Q](U,J8V2g.J7bb));},equals:function(j){var U="Z0w",Q="p0w",G="i0w";return ((J8V2g[G](j[J8V2g.q0lb],this[J8V2g.q0lb]))&&(J8V2g[Q](j[J8V2g.r0lb],this[J8V2g.r0lb]))&&(J8V2g[U](j[J8V2g.S0lb],this[J8V2g.S0lb])));},fromArray:function(j,U){var Q="J0w";if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;this[J8V2g.q0lb]=j[U];this[J8V2g.r0lb]=j[U+J8V2g.T7bb];this[J8V2g.S0lb]=j[U+J8V2g.Z7bb];return this;},toArray:function(j,U){var Q="W0w",G="L0w";if(J8V2g[G](j,undefined))j=[];if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;j[U]=this[J8V2g.q0lb];j[U+J8V2g.T7bb]=this[J8V2g.r0lb];j[U+J8V2g.Z7bb]=this[J8V2g.S0lb];return j;},fromAttribute:function(j,U,Q){var G="t0w",T="r0w";if(J8V2g[T](Q,undefined))Q=J8V2g.p7bb;U=J8V2g[G](U,j[J8V2g.e0lb])+Q;this[J8V2g.q0lb]=j[J8V2g.x8lb][U];this[J8V2g.r0lb]=j[J8V2g.x8lb][U+J8V2g.T7bb];this[J8V2g.S0lb]=j[J8V2g.x8lb][U+J8V2g.Z7bb];return this;}};THREE[J8V2g.q3lb]=function(){var j='THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.',U="Y0w";this[J8V2g.l0lb]=new Float32Array([J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb]);if(J8V2g[U](arguments.length,J8V2g.p7bb)){console.error(j);}};THREE.Matrix4.prototype={constructor:THREE[J8V2g.q3lb],set:function(j,U,Q,G,T,J,n,W,H,f,C,F,e,o,u,R){var d=this[J8V2g.l0lb];d[J8V2g.p7bb]=j;d[J8V2g.J7bb]=U;d[J8V2g.C7bb]=Q;d[J8V2g.s5lb]=G;d[J8V2g.T7bb]=T;d[J8V2g.n7bb]=J;d[J8V2g.W7bb]=n;d[J8V2g.x5lb]=W;d[J8V2g.Z7bb]=H;d[J8V2g.L7bb]=f;d[J8V2g.B5lb]=C;d[J8V2g.c5lb]=F;d[J8V2g.G7bb]=e;d[J8V2g.f7bb]=o;d[J8V2g.D5lb]=u;d[J8V2g.a5lb]=R;return this;},identity:function(){this[J8V2g.A8lb](J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},clone:function(){return new THREE[J8V2g.q3lb]()[J8V2g.P6lb](this[J8V2g.l0lb]);},copy:function(j){this[J8V2g.l0lb][J8V2g.A8lb](j[J8V2g.l0lb]);return this;},copyPosition:function(j){var U=this[J8V2g.l0lb],Q=j[J8V2g.l0lb];U[J8V2g.s5lb]=Q[J8V2g.s5lb];U[J8V2g.x5lb]=Q[J8V2g.x5lb];U[J8V2g.c5lb]=Q[J8V2g.c5lb];return this;},extractBasis:function(j,U,Q){j[J8V2g.U27b](this,J8V2g.p7bb);U[J8V2g.U27b](this,J8V2g.T7bb);Q[J8V2g.U27b](this,J8V2g.Z7bb);return this;},makeBasis:function(j,U,Q){this[J8V2g.A8lb](j[J8V2g.q0lb],U[J8V2g.q0lb],Q[J8V2g.q0lb],J8V2g.p7bb,j[J8V2g.r0lb],U[J8V2g.r0lb],Q[J8V2g.r0lb],J8V2g.p7bb,j[J8V2g.S0lb],U[J8V2g.S0lb],Q[J8V2g.S0lb],J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},extractRotation:function(){var O;return function(j){var U="n9W",Q="q9W",G="m9W",T="Q9W",J="U9W",n="j9W",W="E0w",H="a0w",f="x0w",C="K0w",F="N0w",e="M0w",o="R0w";if(J8V2g[o](O,undefined))O=new THREE[J8V2g.c8bb]();var u=this[J8V2g.l0lb],R=j[J8V2g.l0lb],d=J8V2g[e](J8V2g.T7bb,O[J8V2g.U27b](j,J8V2g.p7bb).length()),D=J8V2g[F](J8V2g.T7bb,O[J8V2g.U27b](j,J8V2g.T7bb).length()),M=J8V2g[C](J8V2g.T7bb,O[J8V2g.U27b](j,J8V2g.Z7bb).length());u[J8V2g.p7bb]=J8V2g[f](R[J8V2g.p7bb],d);u[J8V2g.T7bb]=J8V2g[H](R[J8V2g.T7bb],d);u[J8V2g.Z7bb]=J8V2g[W](R[J8V2g.Z7bb],d);u[J8V2g.J7bb]=J8V2g[n](R[J8V2g.J7bb],D);u[J8V2g.n7bb]=J8V2g[J](R[J8V2g.n7bb],D);u[J8V2g.L7bb]=J8V2g[T](R[J8V2g.L7bb],D);u[J8V2g.C7bb]=J8V2g[G](R[J8V2g.C7bb],M);u[J8V2g.W7bb]=J8V2g[Q](R[J8V2g.W7bb],M);u[J8V2g.B5lb]=J8V2g[U](R[J8V2g.B5lb],M);return this;};}(),makeRotationFromEuler:function(j){var U="X1W",Q="l1W",G="F1W",T="f1W",J="H1W",n="G1W",W="T1W",H="z1W",f="v1W",C="g3W",F="V3W",e="I3W",o="s3W",u="B3W",R="S3W",d="d3W",D="u3W",M="o3W",O="h3W",k="b3W",N="C3W",B="n3W",K="q3W",I="m3W",v9="Q3W",j9="U3W",Z9="j3W",A="E6W",y9="a6W",V="x6W",i9="K6W",U9="N6W",z9="M6W",q9="R6W",J9="Y6W",m9="t6W",f9="r6W",T9="W6W",G9="L6W",F9="J6W",C9="Z6W",l9="p6W",H9="i6W",t9="y6W",Y9="A2W",n9="O2W",L9="c2W",P9="D2W",w9="w2W",N9="k2W",d9="P2W",M9="e2W",s9="X2W",k9="l2W",u9="F2W",B9="f2W",S9="H2W",K9="G2W",g9="T2W",I9="z2W",V9="v2W",A9="g9W",L2="V9W",q2="I9W",p2="s9W",e2="B9W",u2="S9W",n2="d9W",z2="u9W",w2="o9W",y2="h9W",k2="b9W",B2='THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.',G2="C9W";if(J8V2g[G2](j instanceof THREE[J8V2g.t2lb],J8V2g.o8lb)){console.error(B2);}var U2=this[J8V2g.l0lb],E9=j[J8V2g.q0lb],R2=j[J8V2g.r0lb],T2=j[J8V2g.S0lb],Q2=Math[J8V2g.I4lb](E9),O9=Math[J8V2g.b27b](E9),W2=Math[J8V2g.I4lb](R2),i2=Math[J8V2g.b27b](R2),j2=Math[J8V2g.I4lb](T2),t2=Math[J8V2g.b27b](T2);if(J8V2g[k2](j[J8V2g.G3lb],J8V2g.J4lb)){var Z2=J8V2g[y2](Q2,j2),c2=J8V2g[w2](Q2,t2),S2=J8V2g[z2](O9,j2),F2=J8V2g[n2](O9,t2);U2[J8V2g.p7bb]=J8V2g[u2](W2,j2);U2[J8V2g.J7bb]=-W2*t2;U2[J8V2g.C7bb]=i2;U2[J8V2g.T7bb]=c2+J8V2g[e2](S2,i2);U2[J8V2g.n7bb]=J8V2g[p2](Z2,F2*i2);U2[J8V2g.W7bb]=-O9*W2;U2[J8V2g.Z7bb]=J8V2g[q2](F2,Z2*i2);U2[J8V2g.L7bb]=S2+J8V2g[L2](c2,i2);U2[J8V2g.B5lb]=J8V2g[A9](Q2,W2);}else if(J8V2g[V9](j[J8V2g.G3lb],J8V2g.m7lb)){var l2=J8V2g[I9](W2,j2),E2=J8V2g[g9](W2,t2),J2=J8V2g[K9](i2,j2),f2=J8V2g[S9](i2,t2);U2[J8V2g.p7bb]=l2+J8V2g[B9](f2,O9);U2[J8V2g.J7bb]=J8V2g[u9](J2*O9,E2);U2[J8V2g.C7bb]=J8V2g[k9](Q2,i2);U2[J8V2g.T7bb]=J8V2g[s9](Q2,t2);U2[J8V2g.n7bb]=J8V2g[M9](Q2,j2);U2[J8V2g.W7bb]=-O9;U2[J8V2g.Z7bb]=J8V2g[d9](E2*O9,J2);U2[J8V2g.L7bb]=f2+J8V2g[N9](l2,O9);U2[J8V2g.B5lb]=J8V2g[w9](Q2,W2);}else if(J8V2g[P9](j[J8V2g.G3lb],J8V2g.y0bb)){var l2=J8V2g[L9](W2,j2),E2=J8V2g[n9](W2,t2),J2=J8V2g[Y9](i2,j2),f2=J8V2g[t9](i2,t2);U2[J8V2g.p7bb]=J8V2g[H9](l2,f2*O9);U2[J8V2g.J7bb]=-Q2*t2;U2[J8V2g.C7bb]=J2+J8V2g[l9](E2,O9);U2[J8V2g.T7bb]=E2+J8V2g[C9](J2,O9);U2[J8V2g.n7bb]=J8V2g[F9](Q2,j2);U2[J8V2g.W7bb]=J8V2g[G9](f2,l2*O9);U2[J8V2g.Z7bb]=-Q2*i2;U2[J8V2g.L7bb]=O9;U2[J8V2g.B5lb]=J8V2g[T9](Q2,W2);}else if(J8V2g[f9](j[J8V2g.G3lb],J8V2g.m8lb)){var Z2=J8V2g[m9](Q2,j2),c2=J8V2g[J9](Q2,t2),S2=J8V2g[q9](O9,j2),F2=J8V2g[z9](O9,t2);U2[J8V2g.p7bb]=J8V2g[U9](W2,j2);U2[J8V2g.J7bb]=J8V2g[i9](S2*i2,c2);U2[J8V2g.C7bb]=J8V2g[V](Z2,i2)+F2;U2[J8V2g.T7bb]=J8V2g[y9](W2,t2);U2[J8V2g.n7bb]=J8V2g[A](F2,i2)+Z2;U2[J8V2g.W7bb]=J8V2g[Z9](c2*i2,S2);U2[J8V2g.Z7bb]=-i2;U2[J8V2g.L7bb]=J8V2g[j9](O9,W2);U2[J8V2g.B5lb]=J8V2g[v9](Q2,W2);}else if(J8V2g[I](j[J8V2g.G3lb],J8V2g.V1lb)){var S6=J8V2g[K](Q2,W2),X6=J8V2g[B](Q2,i2),U6=J8V2g[N](O9,W2),b6=J8V2g[k](O9,i2);U2[J8V2g.p7bb]=J8V2g[O](W2,j2);U2[J8V2g.J7bb]=J8V2g[M](b6,S6*t2);U2[J8V2g.C7bb]=J8V2g[D](U6,t2)+X6;U2[J8V2g.T7bb]=t2;U2[J8V2g.n7bb]=J8V2g[d](Q2,j2);U2[J8V2g.W7bb]=-O9*j2;U2[J8V2g.Z7bb]=-i2*j2;U2[J8V2g.L7bb]=J8V2g[R](X6,t2)+U6;U2[J8V2g.B5lb]=J8V2g[u](S6,b6*t2);}else if(J8V2g[o](j[J8V2g.G3lb],J8V2g.R7bb)){var S6=J8V2g[e](Q2,W2),X6=J8V2g[F](Q2,i2),U6=J8V2g[C](O9,W2),b6=J8V2g[f](O9,i2);U2[J8V2g.p7bb]=J8V2g[H](W2,j2);U2[J8V2g.J7bb]=-t2;U2[J8V2g.C7bb]=J8V2g[W](i2,j2);U2[J8V2g.T7bb]=J8V2g[n](S6,t2)+b6;U2[J8V2g.n7bb]=J8V2g[J](Q2,j2);U2[J8V2g.W7bb]=J8V2g[T](X6*t2,U6);U2[J8V2g.Z7bb]=J8V2g[G](U6*t2,X6);U2[J8V2g.L7bb]=J8V2g[Q](O9,j2);U2[J8V2g.B5lb]=J8V2g[U](b6,t2)+S6;}U2[J8V2g.G7bb]=J8V2g.p7bb;U2[J8V2g.f7bb]=J8V2g.p7bb;U2[J8V2g.D5lb]=J8V2g.p7bb;U2[J8V2g.s5lb]=J8V2g.p7bb;U2[J8V2g.x5lb]=J8V2g.p7bb;U2[J8V2g.c5lb]=J8V2g.p7bb;U2[J8V2g.a5lb]=J8V2g.T7bb;return this;},makeRotationFromQuaternion:function(j){var U="W4W",Q="L4W",G="J4W",T="Z4W",J="p4W",n="i4W",W="y4W",H="A1W",f="O1W",C="c1W",F="D1W",e="w1W",o="k1W",u="P1W",R="e1W",d=this[J8V2g.l0lb],D=j[J8V2g.q0lb],M=j[J8V2g.r0lb],O=j[J8V2g.S0lb],k=j[J8V2g.v0lb],N=D+D,B=M+M,K=O+O,I=J8V2g[R](D,N),v9=J8V2g[u](D,B),j9=J8V2g[o](D,K),Z9=J8V2g[e](M,B),A=J8V2g[F](M,K),y9=J8V2g[C](O,K),V=J8V2g[f](k,N),i9=J8V2g[H](k,B),U9=J8V2g[W](k,K);d[J8V2g.p7bb]=J8V2g[n](J8V2g.T7bb,(Z9+y9));d[J8V2g.J7bb]=J8V2g[J](v9,U9);d[J8V2g.C7bb]=j9+i9;d[J8V2g.T7bb]=v9+U9;d[J8V2g.n7bb]=J8V2g[T](J8V2g.T7bb,(I+y9));d[J8V2g.W7bb]=J8V2g[G](A,V);d[J8V2g.Z7bb]=J8V2g[Q](j9,i9);d[J8V2g.L7bb]=A+V;d[J8V2g.B5lb]=J8V2g[U](J8V2g.T7bb,(I+Z9));d[J8V2g.G7bb]=J8V2g.p7bb;d[J8V2g.f7bb]=J8V2g.p7bb;d[J8V2g.D5lb]=J8V2g.p7bb;d[J8V2g.s5lb]=J8V2g.p7bb;d[J8V2g.x5lb]=J8V2g.p7bb;d[J8V2g.c5lb]=J8V2g.p7bb;d[J8V2g.a5lb]=J8V2g.T7bb;return this;},lookAt:function(){var C,F,e;return function(j,U,Q){var G=0.0001,T="M4W",J="R4W",n="Y4W",W="t4W",H="r4W";if(J8V2g[H](C,undefined))C=new THREE[J8V2g.c8bb]();if(J8V2g[W](F,undefined))F=new THREE[J8V2g.c8bb]();if(J8V2g[n](e,undefined))e=new THREE[J8V2g.c8bb]();var f=this[J8V2g.l0lb];e[J8V2g.e27b](j,U)[J8V2g.L1lb]();if(J8V2g[J](e[J8V2g.L7lb](),J8V2g.p7bb)){e[J8V2g.S0lb]=J8V2g.T7bb;}C[J8V2g.z2lb](Q,e)[J8V2g.L1lb]();if(J8V2g[T](C[J8V2g.L7lb](),J8V2g.p7bb)){e[J8V2g.q0lb]+=G;C[J8V2g.z2lb](Q,e)[J8V2g.L1lb]();}F[J8V2g.z2lb](e,C);f[J8V2g.p7bb]=C[J8V2g.q0lb];f[J8V2g.J7bb]=F[J8V2g.q0lb];f[J8V2g.C7bb]=e[J8V2g.q0lb];f[J8V2g.T7bb]=C[J8V2g.r0lb];f[J8V2g.n7bb]=F[J8V2g.r0lb];f[J8V2g.W7bb]=e[J8V2g.r0lb];f[J8V2g.Z7bb]=C[J8V2g.S0lb];f[J8V2g.L7bb]=F[J8V2g.S0lb];f[J8V2g.B5lb]=e[J8V2g.S0lb];return this;};}(),multiply:function(j,U){var Q='THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.',G="N4W";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.a0lb](j,U);}return this[J8V2g.a0lb](this,j);},premultiply:function(j){return this[J8V2g.a0lb](j,this);},multiplyMatrices:function(j,U){var Q="b0W",G="C0W",T="n0W",J="q0W",n="m0W",W="Q0W",H="U0W",f="j0W",C="E5W",F="a5W",e="x5W",o="K5W",u="N5W",R="M5W",d="R5W",D="Y5W",M="t5W",O="r5W",k="W5W",N="L5W",B="J5W",K="Z5W",I="p5W",v9="i5W",j9="y5W",Z9="A7W",A="O7W",y9="c7W",V="D7W",i9="w7W",U9="k7W",z9="P7W",q9="e7W",J9="X7W",m9="l7W",f9="F7W",T9="f7W",G9="H7W",F9="G7W",C9="T7W",l9="z7W",H9="v7W",t9="g8W",Y9="V8W",n9="I8W",L9="s8W",P9="B8W",w9="S8W",N9="d8W",d9="u8W",M9="o8W",s9="h8W",k9="b8W",u9="C8W",B9="n8W",S9="q8W",K9="m8W",g9="Q8W",I9="U8W",V9="j8W",A9="E4W",L2="a4W",q2="x4W",p2="K4W",e2=j[J8V2g.l0lb],u2=U[J8V2g.l0lb],n2=this[J8V2g.l0lb],z2=e2[J8V2g.p7bb],w2=e2[J8V2g.J7bb],y2=e2[J8V2g.C7bb],k2=e2[J8V2g.s5lb],B2=e2[J8V2g.T7bb],G2=e2[J8V2g.n7bb],U2=e2[J8V2g.W7bb],E9=e2[J8V2g.x5lb],R2=e2[J8V2g.Z7bb],T2=e2[J8V2g.L7bb],Q2=e2[J8V2g.B5lb],O9=e2[J8V2g.c5lb],W2=e2[J8V2g.G7bb],i2=e2[J8V2g.f7bb],j2=e2[J8V2g.D5lb],t2=e2[J8V2g.a5lb],Z2=u2[J8V2g.p7bb],c2=u2[J8V2g.J7bb],S2=u2[J8V2g.C7bb],F2=u2[J8V2g.s5lb],l2=u2[J8V2g.T7bb],E2=u2[J8V2g.n7bb],J2=u2[J8V2g.W7bb],f2=u2[J8V2g.x5lb],S6=u2[J8V2g.Z7bb],X6=u2[J8V2g.L7bb],U6=u2[J8V2g.B5lb],b6=u2[J8V2g.c5lb],Q6=u2[J8V2g.G7bb],U3=u2[J8V2g.f7bb],y6=u2[J8V2g.D5lb],b2=u2[J8V2g.a5lb];n2[J8V2g.p7bb]=J8V2g[p2](z2,Z2)+J8V2g[q2](w2,l2)+J8V2g[L2](y2,S6)+J8V2g[A9](k2,Q6);n2[J8V2g.J7bb]=J8V2g[V9](z2,c2)+J8V2g[I9](w2,E2)+J8V2g[g9](y2,X6)+J8V2g[K9](k2,U3);n2[J8V2g.C7bb]=J8V2g[S9](z2,S2)+J8V2g[B9](w2,J2)+J8V2g[u9](y2,U6)+J8V2g[k9](k2,y6);n2[J8V2g.s5lb]=J8V2g[s9](z2,F2)+J8V2g[M9](w2,f2)+J8V2g[d9](y2,b6)+J8V2g[N9](k2,b2);n2[J8V2g.T7bb]=J8V2g[w9](B2,Z2)+J8V2g[P9](G2,l2)+J8V2g[L9](U2,S6)+J8V2g[n9](E9,Q6);n2[J8V2g.n7bb]=J8V2g[Y9](B2,c2)+J8V2g[t9](G2,E2)+J8V2g[H9](U2,X6)+J8V2g[l9](E9,U3);n2[J8V2g.W7bb]=J8V2g[C9](B2,S2)+J8V2g[F9](G2,J2)+J8V2g[G9](U2,U6)+J8V2g[T9](E9,y6);n2[J8V2g.x5lb]=J8V2g[f9](B2,F2)+J8V2g[m9](G2,f2)+J8V2g[J9](U2,b6)+J8V2g[q9](E9,b2);n2[J8V2g.Z7bb]=J8V2g[z9](R2,Z2)+J8V2g[U9](T2,l2)+J8V2g[i9](Q2,S6)+J8V2g[V](O9,Q6);n2[J8V2g.L7bb]=J8V2g[y9](R2,c2)+J8V2g[A](T2,E2)+J8V2g[Z9](Q2,X6)+J8V2g[j9](O9,U3);n2[J8V2g.B5lb]=J8V2g[v9](R2,S2)+J8V2g[I](T2,J2)+J8V2g[K](Q2,U6)+J8V2g[B](O9,y6);n2[J8V2g.c5lb]=J8V2g[N](R2,F2)+J8V2g[k](T2,f2)+J8V2g[O](Q2,b6)+J8V2g[M](O9,b2);n2[J8V2g.G7bb]=J8V2g[D](W2,Z2)+J8V2g[d](i2,l2)+J8V2g[R](j2,S6)+J8V2g[u](t2,Q6);n2[J8V2g.f7bb]=J8V2g[o](W2,c2)+J8V2g[e](i2,E2)+J8V2g[F](j2,X6)+J8V2g[C](t2,U3);n2[J8V2g.D5lb]=J8V2g[f](W2,S2)+J8V2g[H](i2,J2)+J8V2g[W](j2,U6)+J8V2g[n](t2,y6);n2[J8V2g.a5lb]=J8V2g[J](W2,F2)+J8V2g[T](i2,f2)+J8V2g[G](j2,b6)+J8V2g[Q](t2,b2);return this;},multiplyToArray:function(j,U,Q){var G=this[J8V2g.l0lb];this[J8V2g.a0lb](j,U);Q[J8V2g.p7bb]=G[J8V2g.p7bb];Q[J8V2g.T7bb]=G[J8V2g.T7bb];Q[J8V2g.Z7bb]=G[J8V2g.Z7bb];Q[J8V2g.G7bb]=G[J8V2g.G7bb];Q[J8V2g.J7bb]=G[J8V2g.J7bb];Q[J8V2g.n7bb]=G[J8V2g.n7bb];Q[J8V2g.L7bb]=G[J8V2g.L7bb];Q[J8V2g.f7bb]=G[J8V2g.f7bb];Q[J8V2g.C7bb]=G[J8V2g.C7bb];Q[J8V2g.W7bb]=G[J8V2g.W7bb];Q[J8V2g.B5lb]=G[J8V2g.B5lb];Q[J8V2g.D5lb]=G[J8V2g.D5lb];Q[J8V2g.s5lb]=G[J8V2g.s5lb];Q[J8V2g.x5lb]=G[J8V2g.x5lb];Q[J8V2g.c5lb]=G[J8V2g.c5lb];Q[J8V2g.a5lb]=G[J8V2g.a5lb];return this;},multiplyScalar:function(j){var U=this[J8V2g.l0lb];U[J8V2g.p7bb]*=j;U[J8V2g.J7bb]*=j;U[J8V2g.C7bb]*=j;U[J8V2g.s5lb]*=j;U[J8V2g.T7bb]*=j;U[J8V2g.n7bb]*=j;U[J8V2g.W7bb]*=j;U[J8V2g.x5lb]*=j;U[J8V2g.Z7bb]*=j;U[J8V2g.L7bb]*=j;U[J8V2g.B5lb]*=j;U[J8V2g.c5lb]*=j;U[J8V2g.G7bb]*=j;U[J8V2g.f7bb]*=j;U[J8V2g.D5lb]*=j;U[J8V2g.a5lb]*=j;return this;},applyToVector3Array:function(){var f;return function(j,U,Q){var G="d0W",T="u0W",J="o0W",n="h0W";if(J8V2g[n](f,undefined))f=new THREE[J8V2g.c8bb]();if(J8V2g[J](U,undefined))U=J8V2g.p7bb;if(J8V2g[T](Q,undefined))Q=j.length;for(var W=J8V2g.p7bb,H=U;J8V2g[G](W,Q);W+=J8V2g.G7bb,H+=J8V2g.G7bb){f[J8V2g.P6lb](j,H);f[J8V2g.E8bb](this);f[J8V2g.C0bb](j,H);}return j;};}(),applyToBuffer:function(){var u;return function R(j,U,Q){var G="setXYZ",T="getZ",J="getY",n="getX",W="V0W",H="I0W",f="s0W",C="B0W",F="S0W";if(J8V2g[F](u,undefined))u=new THREE[J8V2g.c8bb]();if(J8V2g[C](U,undefined))U=J8V2g.p7bb;if(J8V2g[f](Q,undefined))Q=J8V2g[H](j.length,j[J8V2g.e0lb]);for(var e=J8V2g.p7bb,o=U;J8V2g[W](e,Q);e++,o++){u[J8V2g.q0lb]=j[n](o);u[J8V2g.r0lb]=j[J](o);u[J8V2g.S0lb]=j[T](o);u[J8V2g.E8bb](this);j[G](u[J8V2g.q0lb],u[J8V2g.r0lb],u[J8V2g.S0lb]);}return j;};}(),determinant:function(){var j="l20",U="W20",Q="n20",G="G20",T="p20",J="U20",n="g90",W="O90",H="x90",f="B90",C="k90",F="R90",e="o90",o="l90",u="W90",R="n90",d="G90",D="p90",M="U90",O="g0W",k=this[J8V2g.l0lb],N=k[J8V2g.p7bb],B=k[J8V2g.J7bb],K=k[J8V2g.C7bb],I=k[J8V2g.s5lb],v9=k[J8V2g.T7bb],j9=k[J8V2g.n7bb],Z9=k[J8V2g.W7bb],A=k[J8V2g.x5lb],y9=k[J8V2g.Z7bb],V=k[J8V2g.L7bb],i9=k[J8V2g.B5lb],U9=k[J8V2g.c5lb],z9=k[J8V2g.G7bb],q9=k[J8V2g.f7bb],J9=k[J8V2g.D5lb],m9=k[J8V2g.a5lb];return (z9*(+I*Z9*V-J8V2g[O](K,A,V)-J8V2g[M](I,j9,i9)+J8V2g[D](B,A,i9)+J8V2g[d](K,j9,U9)-J8V2g[R](B,Z9,U9))+q9*(+N*Z9*U9-J8V2g[u](N,A,i9)+J8V2g[o](I,v9,i9)-J8V2g[e](K,v9,U9)+J8V2g[F](K,A,y9)-J8V2g[C](I,Z9,y9))+J9*(+N*A*V-J8V2g[f](N,j9,U9)-J8V2g[H](I,v9,V)+J8V2g[W](B,v9,U9)+J8V2g[n](I,j9,y9)-J8V2g[J](B,A,y9))+m9*(-K*j9*y9-J8V2g[T](N,Z9,V)+J8V2g[G](N,j9,i9)+J8V2g[Q](K,v9,V)-J8V2g[U](B,v9,i9)+J8V2g[j](B,Z9,y9)));},transpose:function(){var j=this[J8V2g.l0lb],U;U=j[J8V2g.T7bb];j[J8V2g.T7bb]=j[J8V2g.J7bb];j[J8V2g.J7bb]=U;U=j[J8V2g.Z7bb];j[J8V2g.Z7bb]=j[J8V2g.C7bb];j[J8V2g.C7bb]=U;U=j[J8V2g.L7bb];j[J8V2g.L7bb]=j[J8V2g.W7bb];j[J8V2g.W7bb]=U;U=j[J8V2g.G7bb];j[J8V2g.G7bb]=j[J8V2g.s5lb];j[J8V2g.s5lb]=U;U=j[J8V2g.f7bb];j[J8V2g.f7bb]=j[J8V2g.x5lb];j[J8V2g.x5lb]=U;U=j[J8V2g.D5lb];j[J8V2g.D5lb]=j[J8V2g.c5lb];j[J8V2g.c5lb]=U;return this;},flattenToArrayOffset:function(j,U){var Q="- just use .toArray instead.",G="THREE.Matrix3: .flattenToArrayOffset is deprecated ";console[J8V2g.n1lb](G+Q);return this[J8V2g.C0bb](j,U);},getPosition:function(){var Q;return function(){var j='THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.',U="o20";if(J8V2g[U](Q,undefined))Q=new THREE[J8V2g.c8bb]();console[J8V2g.n1lb](j);return Q[J8V2g.U27b](this,J8V2g.G7bb);};}(),setPosition:function(j){var U=this[J8V2g.l0lb];U[J8V2g.s5lb]=j[J8V2g.q0lb];U[J8V2g.x5lb]=j[J8V2g.r0lb];U[J8V2g.c5lb]=j[J8V2g.S0lb];return this;},getInverse:function(j,U){var Q="y10",G="a30",T="B30",J="P30",n="t30",W="C30",H="G30",f="i30",C="E60",F="s60",e="k60",o="Y60",u="b60",R="identity",d="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0",D="C60",M="n60",O="q60",k="m60",N="Q60",B="g20",K="c20",I="N20",v9="u20",j9=this[J8V2g.l0lb],Z9=j[J8V2g.l0lb],A=Z9[J8V2g.p7bb],y9=Z9[J8V2g.T7bb],V=Z9[J8V2g.Z7bb],i9=Z9[J8V2g.G7bb],U9=Z9[J8V2g.J7bb],z9=Z9[J8V2g.n7bb],q9=Z9[J8V2g.L7bb],J9=Z9[J8V2g.f7bb],m9=Z9[J8V2g.C7bb],f9=Z9[J8V2g.W7bb],T9=Z9[J8V2g.B5lb],G9=Z9[J8V2g.D5lb],F9=Z9[J8V2g.s5lb],C9=Z9[J8V2g.x5lb],l9=Z9[J8V2g.c5lb],H9=Z9[J8V2g.a5lb],t9=J8V2g[v9](f9*l9*J9,C9*T9*J9,C9*q9*G9,z9*l9*G9,f9*q9*H9,z9*T9*H9),Y9=J8V2g[I](F9*T9*J9,m9*l9*J9,F9*q9*G9,U9*l9*G9,m9*q9*H9,U9*T9*H9),n9=J8V2g[K](m9*C9*J9,F9*f9*J9,F9*z9*G9,U9*C9*G9,m9*z9*H9,U9*f9*H9),L9=J8V2g[B](F9*f9*q9,m9*C9*q9,F9*z9*T9,U9*C9*T9,m9*z9*l9,U9*f9*l9),P9=J8V2g[N](A,t9)+J8V2g[k](y9,Y9)+J8V2g[O](V,n9)+J8V2g[M](i9,L9);if(J8V2g[D](P9,J8V2g.p7bb)){var w9=d;if(U||J8V2g.o8lb){throw  new Error(w9);}else{console[J8V2g.n1lb](w9);}return this[R]();}j9[J8V2g.p7bb]=t9;j9[J8V2g.T7bb]=J8V2g[u](C9*T9*i9,f9*l9*i9,C9*V*G9,y9*l9*G9,f9*V*H9,y9*T9*H9);j9[J8V2g.Z7bb]=J8V2g[o](z9*l9*i9,C9*q9*i9,C9*V*J9,y9*l9*J9,z9*V*H9,y9*q9*H9);j9[J8V2g.G7bb]=J8V2g[e](f9*q9*i9,z9*T9*i9,f9*V*J9,y9*T9*J9,z9*V*G9,y9*q9*G9);j9[J8V2g.J7bb]=Y9;j9[J8V2g.n7bb]=J8V2g[F](m9*l9*i9,F9*T9*i9,F9*V*G9,A*l9*G9,m9*V*H9,A*T9*H9);j9[J8V2g.L7bb]=J8V2g[C](F9*q9*i9,U9*l9*i9,F9*V*J9,A*l9*J9,U9*V*H9,A*q9*H9);j9[J8V2g.f7bb]=J8V2g[f](U9*T9*i9,m9*q9*i9,m9*V*J9,A*T9*J9,U9*V*G9,A*q9*G9);j9[J8V2g.C7bb]=n9;j9[J8V2g.W7bb]=J8V2g[H](F9*f9*i9,m9*C9*i9,F9*y9*G9,A*C9*G9,m9*y9*H9,A*f9*H9);j9[J8V2g.B5lb]=J8V2g[W](U9*C9*i9,F9*z9*i9,F9*y9*J9,A*C9*J9,U9*y9*H9,A*z9*H9);j9[J8V2g.D5lb]=J8V2g[n](m9*z9*i9,U9*f9*i9,m9*y9*J9,A*f9*J9,U9*y9*G9,A*z9*G9);j9[J8V2g.s5lb]=L9;j9[J8V2g.x5lb]=J8V2g[J](m9*C9*V,F9*f9*V,F9*y9*T9,A*C9*T9,m9*y9*l9,A*f9*l9);j9[J8V2g.c5lb]=J8V2g[T](F9*z9*V,U9*C9*V,F9*y9*q9,A*C9*q9,U9*y9*l9,A*z9*l9);j9[J8V2g.a5lb]=J8V2g[G](U9*f9*V,m9*z9*V,m9*y9*q9,A*f9*q9,U9*y9*T9,A*z9*T9);return this[J8V2g.q5lb](J8V2g[Q](J8V2g.T7bb,P9));},scale:function(j){var U=this[J8V2g.l0lb],Q=j[J8V2g.q0lb],G=j[J8V2g.r0lb],T=j[J8V2g.S0lb];U[J8V2g.p7bb]*=Q;U[J8V2g.J7bb]*=G;U[J8V2g.C7bb]*=T;U[J8V2g.T7bb]*=Q;U[J8V2g.n7bb]*=G;U[J8V2g.W7bb]*=T;U[J8V2g.Z7bb]*=Q;U[J8V2g.L7bb]*=G;U[J8V2g.B5lb]*=T;U[J8V2g.G7bb]*=Q;U[J8V2g.f7bb]*=G;U[J8V2g.D5lb]*=T;return this;},getMaxScaleOnAxis:function(){var j="Y10",U="t10",Q="r10",G="W10",T="L10",J="J10",n="Z10",W="p10",H="i10",f=this[J8V2g.l0lb],C=J8V2g[H](f[J8V2g.p7bb],f[J8V2g.p7bb])+J8V2g[W](f[J8V2g.T7bb],f[J8V2g.T7bb])+J8V2g[n](f[J8V2g.Z7bb],f[J8V2g.Z7bb]),F=J8V2g[J](f[J8V2g.J7bb],f[J8V2g.J7bb])+J8V2g[T](f[J8V2g.n7bb],f[J8V2g.n7bb])+J8V2g[G](f[J8V2g.L7bb],f[J8V2g.L7bb]),e=J8V2g[Q](f[J8V2g.C7bb],f[J8V2g.C7bb])+J8V2g[U](f[J8V2g.W7bb],f[J8V2g.W7bb])+J8V2g[j](f[J8V2g.B5lb],f[J8V2g.B5lb]);return Math[J8V2g.Q8lb](Math[J8V2g.R4lb](C,F,e));},makeTranslation:function(j,U,Q){this[J8V2g.A8lb](J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,j,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,Q,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeRotationX:function(j){var U=Math[J8V2g.I4lb](j),Q=Math[J8V2g.b27b](j);this[J8V2g.A8lb](J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,U,-Q,J8V2g.p7bb,J8V2g.p7bb,Q,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeRotationY:function(j){var U=Math[J8V2g.I4lb](j),Q=Math[J8V2g.b27b](j);this[J8V2g.A8lb](U,J8V2g.p7bb,Q,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,-Q,J8V2g.p7bb,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeRotationZ:function(j){var U=Math[J8V2g.I4lb](j),Q=Math[J8V2g.b27b](j);this[J8V2g.A8lb](U,-Q,J8V2g.p7bb,J8V2g.p7bb,Q,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeRotationAxis:function(j,U){var Q="b40",G="C40",T="n40",J="q40",n="m40",W="Q40",H="U40",f="j40",C="E10",F="a10",e="x10",o="K10",u="N10",R="M10",d="R10",D=Math[J8V2g.I4lb](U),M=Math[J8V2g.b27b](U),O=J8V2g[d](J8V2g.T7bb,D),k=j[J8V2g.q0lb],N=j[J8V2g.r0lb],B=j[J8V2g.S0lb],K=J8V2g[R](O,k),I=J8V2g[u](O,N);this[J8V2g.A8lb](J8V2g[o](K,k)+D,J8V2g[e](K*N,M*B),J8V2g[F](K,B)+J8V2g[C](M,N),J8V2g.p7bb,J8V2g[f](K,N)+J8V2g[H](M,B),J8V2g[W](I,N)+D,J8V2g[n](I*B,M*k),J8V2g.p7bb,J8V2g[J](K*B,M*N),J8V2g[T](I,B)+J8V2g[G](M,k),J8V2g[Q](O,B,B)+D,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},makeScale:function(j,U,Q){this[J8V2g.A8lb](j,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,U,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,Q,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.p7bb,J8V2g.T7bb);return this;},compose:function(j,U,Q){var G="setPosition",T="makeRotationFromQuaternion";this[T](U);this.scale(Q);this[G](j);return this;},decompose:function(){var O,k;return function(j,U,Q){var G="setFromRotationMatrix",T="K40",J="N40",n="M40",W="R40",H="determinant",f="Y40",C="t40";if(J8V2g[C](O,undefined))O=new THREE[J8V2g.c8bb]();if(J8V2g[f](k,undefined))k=new THREE[J8V2g.q3lb]();var F=this[J8V2g.l0lb],e=O[J8V2g.A8lb](F[J8V2g.p7bb],F[J8V2g.T7bb],F[J8V2g.Z7bb]).length(),o=O[J8V2g.A8lb](F[J8V2g.J7bb],F[J8V2g.n7bb],F[J8V2g.L7bb]).length(),u=O[J8V2g.A8lb](F[J8V2g.C7bb],F[J8V2g.W7bb],F[J8V2g.B5lb]).length(),R=this[H]();if(J8V2g[W](R,J8V2g.p7bb)){e=-e;}j[J8V2g.q0lb]=F[J8V2g.s5lb];j[J8V2g.r0lb]=F[J8V2g.x5lb];j[J8V2g.S0lb]=F[J8V2g.c5lb];k[J8V2g.l0lb][J8V2g.A8lb](this[J8V2g.l0lb]);var d=J8V2g[n](J8V2g.T7bb,e),D=J8V2g[J](J8V2g.T7bb,o),M=J8V2g[T](J8V2g.T7bb,u);k[J8V2g.l0lb][J8V2g.p7bb]*=d;k[J8V2g.l0lb][J8V2g.T7bb]*=d;k[J8V2g.l0lb][J8V2g.Z7bb]*=d;k[J8V2g.l0lb][J8V2g.J7bb]*=D;k[J8V2g.l0lb][J8V2g.n7bb]*=D;k[J8V2g.l0lb][J8V2g.L7bb]*=D;k[J8V2g.l0lb][J8V2g.C7bb]*=M;k[J8V2g.l0lb][J8V2g.W7bb]*=M;k[J8V2g.l0lb][J8V2g.B5lb]*=M;U[G](k);Q[J8V2g.q0lb]=e;Q[J8V2g.r0lb]=o;Q[J8V2g.S0lb]=u;return this;};}(),makeFrustum:function(j,U,Q,G,T,J){var n="T80",W="z80",H="v80",f="g40",C="O40",F="x40",e=this[J8V2g.l0lb],o=J8V2g[F](J8V2g.Z7bb,T,(U-j)),u=J8V2g[C](J8V2g.Z7bb,T,(G-Q)),R=J8V2g[f]((U+j),(U-j)),d=J8V2g[H]((G+Q),(G-Q)),D=-(J+T)/(J8V2g[W](J,T)),M=-J8V2g.Z7bb*J*T/(J8V2g[n](J,T));e[J8V2g.p7bb]=o;e[J8V2g.J7bb]=J8V2g.p7bb;e[J8V2g.C7bb]=R;e[J8V2g.s5lb]=J8V2g.p7bb;e[J8V2g.T7bb]=J8V2g.p7bb;e[J8V2g.n7bb]=u;e[J8V2g.W7bb]=d;e[J8V2g.x5lb]=J8V2g.p7bb;e[J8V2g.Z7bb]=J8V2g.p7bb;e[J8V2g.L7bb]=J8V2g.p7bb;e[J8V2g.B5lb]=D;e[J8V2g.c5lb]=M;e[J8V2g.G7bb]=J8V2g.p7bb;e[J8V2g.f7bb]=J8V2g.p7bb;e[J8V2g.D5lb]=-J8V2g.T7bb;e[J8V2g.a5lb]=J8V2g.p7bb;return this;},makePerspective:function(j,U,Q,G){var T="makeFrustum",J="f80",n="H80",W="DEG2RAD",H="tan",f="G80",C=J8V2g[f](Q,Math[H](THREE[J8V2g.a0bb][W]*j*J8V2g.M9lb)),F=-C,e=J8V2g[n](F,U),o=J8V2g[J](C,U);return this[T](e,o,F,C,Q,G);},makeOrthographic:function(j,U,Q,G,T,J){var n="D80",W="w80",H="k80",f="P80",C="e80",F="X80",e="l80",o="F80",u=this[J8V2g.l0lb],R=J8V2g[o](J8V2g.V7lb,(U-j)),d=J8V2g[e](J8V2g.V7lb,(Q-G)),D=J8V2g[F](J8V2g.V7lb,(J-T)),M=J8V2g[C]((U+j),R),O=J8V2g[f]((Q+G),d),k=J8V2g[H]((J+T),D);u[J8V2g.p7bb]=J8V2g[W](J8V2g.Z7bb,R);u[J8V2g.J7bb]=J8V2g.p7bb;u[J8V2g.C7bb]=J8V2g.p7bb;u[J8V2g.s5lb]=-M;u[J8V2g.T7bb]=J8V2g.p7bb;u[J8V2g.n7bb]=J8V2g[n](J8V2g.Z7bb,d);u[J8V2g.W7bb]=J8V2g.p7bb;u[J8V2g.x5lb]=-O;u[J8V2g.Z7bb]=J8V2g.p7bb;u[J8V2g.L7bb]=J8V2g.p7bb;u[J8V2g.B5lb]=-J8V2g.Z7bb*D;u[J8V2g.c5lb]=-k;u[J8V2g.G7bb]=J8V2g.p7bb;u[J8V2g.f7bb]=J8V2g.p7bb;u[J8V2g.D5lb]=J8V2g.p7bb;u[J8V2g.a5lb]=J8V2g.T7bb;return this;},equals:function(j){var U="O80",Q=16,G="c80",T=this[J8V2g.l0lb],J=j[J8V2g.l0lb];for(var n=J8V2g.p7bb;J8V2g[G](n,Q);n++){if(J8V2g[U](T[n],J[n]))return J8V2g.o8lb;}return J8V2g.g7lb;},fromArray:function(j){this[J8V2g.l0lb][J8V2g.A8lb](j);return this;},toArray:function(j,U){var Q="y70",G="A80";if(J8V2g[G](j,undefined))j=[];if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;var T=this[J8V2g.l0lb];j[U]=T[J8V2g.p7bb];j[U+J8V2g.T7bb]=T[J8V2g.T7bb];j[U+J8V2g.Z7bb]=T[J8V2g.Z7bb];j[U+J8V2g.G7bb]=T[J8V2g.G7bb];j[U+J8V2g.J7bb]=T[J8V2g.J7bb];j[U+J8V2g.n7bb]=T[J8V2g.n7bb];j[U+J8V2g.L7bb]=T[J8V2g.L7bb];j[U+J8V2g.f7bb]=T[J8V2g.f7bb];j[U+J8V2g.C7bb]=T[J8V2g.C7bb];j[U+J8V2g.W7bb]=T[J8V2g.W7bb];j[U+J8V2g.B5lb]=T[J8V2g.B5lb];j[U+J8V2g.D5lb]=T[J8V2g.D5lb];j[U+J8V2g.s5lb]=T[J8V2g.s5lb];j[U+J8V2g.x5lb]=T[J8V2g.x5lb];j[U+J8V2g.c5lb]=T[J8V2g.c5lb];j[U+J8V2g.a5lb]=T[J8V2g.a5lb];return j;}};THREE[J8V2g.t27b]=function(j,U){var Q="p70",G="i70";this[J8V2g.Q0bb]=(J8V2g[G](j,undefined))?j:new THREE[J8V2g.c8bb](+Infinity,+Infinity,+Infinity);this[J8V2g.R4lb]=(J8V2g[Q](U,undefined))?U:new THREE[J8V2g.c8bb](-Infinity,-Infinity,-Infinity);};THREE.Box3.prototype={constructor:THREE[J8V2g.t27b],set:function(j,U){this[J8V2g.Q0bb][J8V2g.f1lb](j);this[J8V2g.R4lb][J8V2g.f1lb](U);return this;},setFromArray:function(j){var U="Y70",Q="t70",G="r70",T="W70",J="L70",n="J70",W="Z70",H=+Infinity,f=+Infinity,C=+Infinity,F=-Infinity,e=-Infinity,o=-Infinity;for(var u=J8V2g.p7bb,R=j.length;J8V2g[W](u,R);u+=J8V2g.G7bb){var d=j[u],D=j[u+J8V2g.T7bb],M=j[u+J8V2g.Z7bb];if(J8V2g[n](d,H))H=d;if(J8V2g[J](D,f))f=D;if(J8V2g[T](M,C))C=M;if(J8V2g[G](d,F))F=d;if(J8V2g[Q](D,e))e=D;if(J8V2g[U](M,o))o=M;}this[J8V2g.Q0bb][J8V2g.A8lb](H,f,C);this[J8V2g.R4lb][J8V2g.A8lb](F,e,o);},setFromPoints:function(j){var U="R70";this[J8V2g.l8lb]();for(var Q=J8V2g.p7bb,G=j.length;J8V2g[U](Q,G);Q++){this[J8V2g.J0lb](j[Q]);}return this;},setFromCenterAndSize:function(){var G=new THREE[J8V2g.c8bb]();return function(j,U){var Q=G[J8V2g.f1lb](U)[J8V2g.q5lb](J8V2g.M9lb);this[J8V2g.Q0bb][J8V2g.f1lb](j)[J8V2g.B6lb](Q);this[J8V2g.R4lb][J8V2g.f1lb](j)[J8V2g.F5bb](Q);return this;};}(),setFromObject:function(){var B=new THREE[J8V2g.c8bb]();return function(M){var O="traverse",k="updateMatrixWorld",N=this;M[k](J8V2g.g7lb);this[J8V2g.l8lb]();M[O](function(j){var U="E70",Q='position',G="attributes",T="a70",J="BufferGeometry",n="x70",W="K70",H="vertices",f="Geometry",C="N70",F="M70",e="geometry",o=j[e];if(J8V2g[F](o,undefined)){if(J8V2g[C](o,THREE[f])){var u=o[H];for(var R=J8V2g.p7bb,d=u.length;J8V2g[W](R,d);R++){B[J8V2g.f1lb](u[R]);B[J8V2g.E8bb](j[J8V2g.V3lb]);N[J8V2g.J0lb](B);}}else if(J8V2g[n](o,THREE[J])&&J8V2g[T](o[G][Q],undefined)){var D=o[G][Q][J8V2g.x8lb];for(var R=J8V2g.p7bb,d=D.length;J8V2g[U](R,d);R+=J8V2g.G7bb){B[J8V2g.P6lb](D,R);B[J8V2g.E8bb](j[J8V2g.V3lb]);N[J8V2g.J0lb](B);}}}});return this;};}(),clone:function(){return new this.constructor()[J8V2g.f1lb](this);},copy:function(j){this[J8V2g.Q0bb][J8V2g.f1lb](j[J8V2g.Q0bb]);this[J8V2g.R4lb][J8V2g.f1lb](j[J8V2g.R4lb]);return this;},makeEmpty:function(){this[J8V2g.Q0bb][J8V2g.q0lb]=this[J8V2g.Q0bb][J8V2g.r0lb]=this[J8V2g.Q0bb][J8V2g.S0lb]=+Infinity;this[J8V2g.R4lb][J8V2g.q0lb]=this[J8V2g.R4lb][J8V2g.r0lb]=this[J8V2g.R4lb][J8V2g.S0lb]=-Infinity;return this;},isEmpty:function(){var j="Q50",U="U50",Q="j50";return (J8V2g[Q](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb]))||(J8V2g[U](this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb]))||(J8V2g[j](this[J8V2g.R4lb][J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb]));},center:function(j){var U=j||new THREE[J8V2g.c8bb]();return U[J8V2g.H27b](this[J8V2g.Q0bb],this[J8V2g.R4lb])[J8V2g.q5lb](J8V2g.M9lb);},size:function(j){var U=j||new THREE[J8V2g.c8bb]();return U[J8V2g.e27b](this[J8V2g.R4lb],this[J8V2g.Q0bb]);},expandByPoint:function(j){this[J8V2g.Q0bb][J8V2g.Q0bb](j);this[J8V2g.R4lb][J8V2g.R4lb](j);return this;},expandByVector:function(j){this[J8V2g.Q0bb][J8V2g.B6lb](j);this[J8V2g.R4lb][J8V2g.F5bb](j);return this;},expandByScalar:function(j){var U="addScalar";this[J8V2g.Q0bb][U](-j);this[J8V2g.R4lb][U](j);return this;},containsPoint:function(j){var U="h50",Q="b50",G="C50",T="n50",J="q50",n="m50";if(J8V2g[n](j[J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb])||J8V2g[J](j[J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb])||J8V2g[T](j[J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb])||J8V2g[G](j[J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb])||J8V2g[Q](j[J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb])||J8V2g[U](j[J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb])){return J8V2g.o8lb;}return J8V2g.g7lb;},containsBox:function(j){var U="s50",Q="B50",G="S50",T="d50",J="u50",n="o50";if((J8V2g[n](this[J8V2g.Q0bb][J8V2g.q0lb],j[J8V2g.Q0bb][J8V2g.q0lb]))&&(J8V2g[J](j[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb]))&&(J8V2g[T](this[J8V2g.Q0bb][J8V2g.r0lb],j[J8V2g.Q0bb][J8V2g.r0lb]))&&(J8V2g[G](j[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb]))&&(J8V2g[Q](this[J8V2g.Q0bb][J8V2g.S0lb],j[J8V2g.Q0bb][J8V2g.S0lb]))&&(J8V2g[U](j[J8V2g.R4lb][J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb]))){return J8V2g.g7lb;}return J8V2g.o8lb;},getParameter:function(j,U){var Q="g50",G="V50",T="I50",J=U||new THREE[J8V2g.c8bb]();return J[J8V2g.A8lb](J8V2g[T]((j[J8V2g.q0lb]-this[J8V2g.Q0bb][J8V2g.q0lb]),(this[J8V2g.R4lb][J8V2g.q0lb]-this[J8V2g.Q0bb][J8V2g.q0lb])),J8V2g[G]((j[J8V2g.r0lb]-this[J8V2g.Q0bb][J8V2g.r0lb]),(this[J8V2g.R4lb][J8V2g.r0lb]-this[J8V2g.Q0bb][J8V2g.r0lb])),J8V2g[Q]((j[J8V2g.S0lb]-this[J8V2g.Q0bb][J8V2g.S0lb]),(this[J8V2g.R4lb][J8V2g.S0lb]-this[J8V2g.Q0bb][J8V2g.S0lb])));},intersectsBox:function(j){var U="f00",Q="H00",G="G00",T="T00",J="z00",n="v00";if(J8V2g[n](j[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb])||J8V2g[J](j[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb])||J8V2g[T](j[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb])||J8V2g[G](j[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb])||J8V2g[Q](j[J8V2g.R4lb][J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb])||J8V2g[U](j[J8V2g.Q0bb][J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb])){return J8V2g.o8lb;}return J8V2g.g7lb;},intersectsSphere:(function(){var T;return function J(j){var U="l00",Q="clampPoint",G="F00";if(J8V2g[G](T,undefined))T=new THREE[J8V2g.c8bb]();this[Q](j[J8V2g.X27b],T);return J8V2g[U](T[J8V2g.q4lb](j[J8V2g.X27b]),(j[J8V2g.U97b]*j[J8V2g.U97b]));};})(),intersectsPlane:function(j){var U="r9v",Q="constant",G="W9v",T="L9v",J="J9v",n="Z9v",W="p9v",H="i9v",f="y9v",C="A00",F="O00",e="c00",o="D00",u="w00",R="k00",d="P00",D="e00",M="normal",O="X00",k,N;if(J8V2g[O](j[M][J8V2g.q0lb],J8V2g.p7bb)){k=J8V2g[D](j[M][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb]);N=J8V2g[d](j[M][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb]);}else{k=J8V2g[R](j[M][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.q0lb]);N=J8V2g[u](j[M][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.q0lb]);}if(J8V2g[o](j[M][J8V2g.r0lb],J8V2g.p7bb)){k+=J8V2g[e](j[M][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb]);N+=J8V2g[F](j[M][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb]);}else{k+=J8V2g[C](j[M][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.r0lb]);N+=J8V2g[f](j[M][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.r0lb]);}if(J8V2g[H](j[M][J8V2g.S0lb],J8V2g.p7bb)){k+=J8V2g[W](j[M][J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb]);N+=J8V2g[n](j[M][J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb]);}else{k+=J8V2g[J](j[M][J8V2g.S0lb],this[J8V2g.R4lb][J8V2g.S0lb]);N+=J8V2g[T](j[M][J8V2g.S0lb],this[J8V2g.Q0bb][J8V2g.S0lb]);}return (J8V2g[G](k,j[Q])&&J8V2g[U](N,j[Q]));},clampPoint:function(j,U){var Q=U||new THREE[J8V2g.c8bb]();return Q[J8V2g.f1lb](j)[J8V2g.W5bb](this[J8V2g.Q0bb],this[J8V2g.R4lb]);},distanceToPoint:function(){var Q=new THREE[J8V2g.c8bb]();return function(j){var U=Q[J8V2g.f1lb](j)[J8V2g.W5bb](this[J8V2g.Q0bb],this[J8V2g.R4lb]);return U[J8V2g.B6lb](j).length();};}(),getBoundingSphere:function(){var J=new THREE[J8V2g.c8bb]();return function(j){var U="size",Q="t9v",G="Sphere",T=j||new THREE[G]();T[J8V2g.X27b]=this[J8V2g.X27b]();T[J8V2g.U97b]=J8V2g[Q](this[U](J).length(),J8V2g.M9lb);return T;};}(),intersect:function(j){this[J8V2g.Q0bb][J8V2g.R4lb](j[J8V2g.Q0bb]);this[J8V2g.R4lb][J8V2g.Q0bb](j[J8V2g.R4lb]);if(this[J8V2g.g27b]())this[J8V2g.l8lb]();return this;},union:function(j){this[J8V2g.Q0bb][J8V2g.Q0bb](j[J8V2g.Q0bb]);this[J8V2g.R4lb][J8V2g.R4lb](j[J8V2g.R4lb]);return this;},applyMatrix4:function(){var Q=[new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb](),new THREE[J8V2g.c8bb]()];return function(j){var U="setFromPoints";if(this[J8V2g.g27b]())return this;Q[J8V2g.p7bb][J8V2g.A8lb](this[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.T7bb][J8V2g.A8lb](this[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.Z7bb][J8V2g.A8lb](this[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.G7bb][J8V2g.A8lb](this[J8V2g.Q0bb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.J7bb][J8V2g.A8lb](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.n7bb][J8V2g.A8lb](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.Q0bb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.L7bb][J8V2g.A8lb](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.Q0bb][J8V2g.S0lb])[J8V2g.E8bb](j);Q[J8V2g.f7bb][J8V2g.A8lb](this[J8V2g.R4lb][J8V2g.q0lb],this[J8V2g.R4lb][J8V2g.r0lb],this[J8V2g.R4lb][J8V2g.S0lb])[J8V2g.E8bb](j);this[U](Q);return this;};}(),translate:function(j){this[J8V2g.Q0bb][J8V2g.F5bb](j);this[J8V2g.R4lb][J8V2g.F5bb](j);return this;},equals:function(j){var U="equals";return j[J8V2g.Q0bb][U](this[J8V2g.Q0bb])&&j[J8V2g.R4lb][U](this[J8V2g.R4lb]);}};THREE[J8V2g.e9lb]=function(j,U){this[J8V2g.q0lb]=j||J8V2g.p7bb;this[J8V2g.r0lb]=U||J8V2g.p7bb;};THREE.Vector2.prototype={constructor:THREE[J8V2g.e9lb],get width(){return this[J8V2g.q0lb];},set width(value){this[J8V2g.q0lb]=value;},get height(){return this[J8V2g.r0lb];},set height(value){this[J8V2g.r0lb]=value;},set:function(j,U){this[J8V2g.q0lb]=j;this[J8V2g.r0lb]=U;return this;},setScalar:function(j){this[J8V2g.q0lb]=j;this[J8V2g.r0lb]=j;return this;},setX:function(j){this[J8V2g.q0lb]=j;return this;},setY:function(j){this[J8V2g.r0lb]=j;return this;},setComponent:function(j,U){switch(j){case J8V2g.p7bb:this[J8V2g.q0lb]=U;break;case J8V2g.T7bb:this[J8V2g.r0lb]=U;break;default:throw  new Error(J8V2g.s7bb+j);}},getComponent:function(j){switch(j){case J8V2g.p7bb:return this[J8V2g.q0lb];case J8V2g.T7bb:return this[J8V2g.r0lb];default:throw  new Error(J8V2g.s7bb+j);}},clone:function(){return new this.constructor(this[J8V2g.q0lb],this[J8V2g.r0lb]);},copy:function(j){this[J8V2g.q0lb]=j[J8V2g.q0lb];this[J8V2g.r0lb]=j[J8V2g.r0lb];return this;},add:function(j,U){var Q='THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.',G="Y9v";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.H27b](j,U);}this[J8V2g.q0lb]+=j[J8V2g.q0lb];this[J8V2g.r0lb]+=j[J8V2g.r0lb];return this;},addScalar:function(j){this[J8V2g.q0lb]+=j;this[J8V2g.r0lb]+=j;return this;},addVectors:function(j,U){this[J8V2g.q0lb]=j[J8V2g.q0lb]+U[J8V2g.q0lb];this[J8V2g.r0lb]=j[J8V2g.r0lb]+U[J8V2g.r0lb];return this;},addScaledVector:function(j,U){var Q="M9v",G="R9v";this[J8V2g.q0lb]+=J8V2g[G](j[J8V2g.q0lb],U);this[J8V2g.r0lb]+=J8V2g[Q](j[J8V2g.r0lb],U);return this;},sub:function(j,U){var Q='THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.',G="N9v";if(J8V2g[G](U,undefined)){console[J8V2g.n1lb](Q);return this[J8V2g.e27b](j,U);}this[J8V2g.q0lb]-=j[J8V2g.q0lb];this[J8V2g.r0lb]-=j[J8V2g.r0lb];return this;},subScalar:function(j){this[J8V2g.q0lb]-=j;this[J8V2g.r0lb]-=j;return this;},subVectors:function(j,U){var Q="x9v",G="K9v";this[J8V2g.q0lb]=J8V2g[G](j[J8V2g.q0lb],U[J8V2g.q0lb]);this[J8V2g.r0lb]=J8V2g[Q](j[J8V2g.r0lb],U[J8V2g.r0lb]);return this;},multiply:function(j){this[J8V2g.q0lb]*=j[J8V2g.q0lb];this[J8V2g.r0lb]*=j[J8V2g.r0lb];return this;},multiplyScalar:function(j){if(isFinite(j)){this[J8V2g.q0lb]*=j;this[J8V2g.r0lb]*=j;}else{this[J8V2g.q0lb]=J8V2g.p7bb;this[J8V2g.r0lb]=J8V2g.p7bb;}return this;},divide:function(j){this[J8V2g.q0lb]/=j[J8V2g.q0lb];this[J8V2g.r0lb]/=j[J8V2g.r0lb];return this;},divideScalar:function(j){var U="a9v";return this[J8V2g.q5lb](J8V2g[U](J8V2g.T7bb,j));},min:function(j){this[J8V2g.q0lb]=Math[J8V2g.Q0bb](this[J8V2g.q0lb],j[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.Q0bb](this[J8V2g.r0lb],j[J8V2g.r0lb]);return this;},max:function(j){this[J8V2g.q0lb]=Math[J8V2g.R4lb](this[J8V2g.q0lb],j[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.R4lb](this[J8V2g.r0lb],j[J8V2g.r0lb]);return this;},clamp:function(j,U){this[J8V2g.q0lb]=Math[J8V2g.R4lb](j[J8V2g.q0lb],Math[J8V2g.Q0bb](U[J8V2g.q0lb],this[J8V2g.q0lb]));this[J8V2g.r0lb]=Math[J8V2g.R4lb](j[J8V2g.r0lb],Math[J8V2g.Q0bb](U[J8V2g.r0lb],this[J8V2g.r0lb]));return this;},clampScalar:function(){var G,T;return function J(j,U){var Q="E9v";if(J8V2g[Q](G,undefined)){G=new THREE[J8V2g.e9lb]();T=new THREE[J8V2g.e9lb]();}G[J8V2g.A8lb](j,j);T[J8V2g.A8lb](U,U);return this[J8V2g.W5bb](G,T);};}(),clampLength:function(j,U){var Q="j2v",G=this.length();this[J8V2g.q5lb](J8V2g[Q](Math[J8V2g.R4lb](j,Math[J8V2g.Q0bb](U,G)),G));return this;},floor:function(){this[J8V2g.q0lb]=Math[J8V2g.t97b](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.t97b](this[J8V2g.r0lb]);return this;},ceil:function(){this[J8V2g.q0lb]=Math[J8V2g.k3lb](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.k3lb](this[J8V2g.r0lb]);return this;},round:function(){this[J8V2g.q0lb]=Math[J8V2g.T9lb](this[J8V2g.q0lb]);this[J8V2g.r0lb]=Math[J8V2g.T9lb](this[J8V2g.r0lb]);return this;},roundToZero:function(){var j="Q2v",U="U2v";this[J8V2g.q0lb]=(J8V2g[U](this[J8V2g.q0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.q0lb]):Math[J8V2g.t97b](this[J8V2g.q0lb]);this[J8V2g.r0lb]=(J8V2g[j](this[J8V2g.r0lb],J8V2g.p7bb))?Math[J8V2g.k3lb](this[J8V2g.r0lb]):Math[J8V2g.t97b](this[J8V2g.r0lb]);return this;},negate:function(){this[J8V2g.q0lb]=-this[J8V2g.q0lb];this[J8V2g.r0lb]=-this[J8V2g.r0lb];return this;},dot:function(j){var U="q2v",Q="m2v";return J8V2g[Q](this[J8V2g.q0lb],j[J8V2g.q0lb])+J8V2g[U](this[J8V2g.r0lb],j[J8V2g.r0lb]);},lengthSq:function(){var j="C2v",U="n2v";return J8V2g[U](this[J8V2g.q0lb],this[J8V2g.q0lb])+J8V2g[j](this[J8V2g.r0lb],this[J8V2g.r0lb]);},length:function(){var j="h2v",U="b2v";return Math[J8V2g.Q8lb](J8V2g[U](this[J8V2g.q0lb],this[J8V2g.q0lb])+J8V2g[j](this[J8V2g.r0lb],this[J8V2g.r0lb]));},lengthManhattan:function(){return Math[J8V2g.A97b](this[J8V2g.q0lb])+Math[J8V2g.A97b](this[J8V2g.r0lb]);},normalize:function(){return this[J8V2g.D27b](this.length());},angle:function(){var j="PI",U="u2v",Q="o2v",G=Math[J8V2g.Z97b](this[J8V2g.r0lb],this[J8V2g.q0lb]);if(J8V2g[Q](G,J8V2g.p7bb))G+=J8V2g[U](J8V2g.Z7bb,Math[j]);return G;},distanceTo:function(j){return Math[J8V2g.Q8lb](this[J8V2g.q4lb](j));},distanceToSquared:function(j){var U="s2v",Q="B2v",G="S2v",T="d2v",J=J8V2g[T](this[J8V2g.q0lb],j[J8V2g.q0lb]),n=J8V2g[G](this[J8V2g.r0lb],j[J8V2g.r0lb]);return J8V2g[Q](J,J)+J8V2g[U](n,n);},setLength:function(j){var U="I2v";return this[J8V2g.q5lb](J8V2g[U](j,this.length()));},lerp:function(j,U){var Q="g2v",G="V2v";this[J8V2g.q0lb]+=J8V2g[G]((j[J8V2g.q0lb]-this[J8V2g.q0lb]),U);this[J8V2g.r0lb]+=J8V2g[Q]((j[J8V2g.r0lb]-this[J8V2g.r0lb]),U);return this;},lerpVectors:function(j,U,Q){this[J8V2g.e27b](U,j)[J8V2g.q5lb](Q)[J8V2g.F5bb](j);return this;},equals:function(j){var U="z6v",Q="v6v";return ((J8V2g[Q](j[J8V2g.q0lb],this[J8V2g.q0lb]))&&(J8V2g[U](j[J8V2g.r0lb],this[J8V2g.r0lb])));},fromArray:function(j,U){var Q="T6v";if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;this[J8V2g.q0lb]=j[U];this[J8V2g.r0lb]=j[U+J8V2g.T7bb];return this;},toArray:function(j,U){var Q="H6v",G="G6v";if(J8V2g[G](j,undefined))j=[];if(J8V2g[Q](U,undefined))U=J8V2g.p7bb;j[U]=this[J8V2g.q0lb];j[U+J8V2g.T7bb]=this[J8V2g.r0lb];return j;},fromAttribute:function(j,U,Q){var G="F6v",T="f6v";if(J8V2g[T](Q,undefined))Q=J8V2g.p7bb;U=J8V2g[G](U,j[J8V2g.e0lb])+Q;this[J8V2g.q0lb]=j[J8V2g.x8lb][U];this[J8V2g.r0lb]=j[J8V2g.x8lb][U+J8V2g.T7bb];return this;},rotateAround:function(j,U){var Q="S6v",G="d6v",T="e6v",J="X6v",n="l6v",W=Math[J8V2g.I4lb](U),H=Math[J8V2g.b27b](U),f=J8V2g[n](this[J8V2g.q0lb],j[J8V2g.q0lb]),C=J8V2g[J](this[J8V2g.r0lb],j[J8V2g.r0lb]);this[J8V2g.q0lb]=J8V2g[T](f*W,C*H,j[J8V2g.q0lb]);this[J8V2g.r0lb]=J8V2g[G](f,H)+J8V2g[Q](C,W)+j[J8V2g.r0lb];return this;}};"use strict";

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
F1BB.m6T="hasOwnProperty";F1BB.C6T="loadingmethod";F1BB.o5s="readInt32";function F1BB(){}F1BB.Y3T="edgepositions";F1BB.M5s="readLongUTF8";F1BB.Q5s="readFloat32Array";var M1BB="f";M1BB+="ini";function idbok(){return"indexedDB"in self;}function onrpickdata(t7s){var o7T=F1BB;var S7s,A7s,F7s,M7s,R7s,e7s,s7s,L7s,k7s,o7s,d7s,v7s,p7s,G7s,q7s,B7s,H7s,l1s,O1s,Q7s;S7s=t7s[o7T.o5s]();if(S7s>0){var h0s="re";h0s+="adInt32";var b0s="readFl";b0s+="oa";b0s+="t64";var D0s="readFl";D0s+="oat32Array";A7s=t7s[o7T.o5s]();F7s=t7s[o7T.M5s]();M7s=t7s[o7T.M5s]();R7s=t7s[o7T.o5s]();e7s=t7s["readFloat32"]();s7s=t7s[o7T.Q5s](3);L7s=t7s[o7T.o5s]();k7s=t7s[o7T.Q5s](3);o7s=t7s[D0s](3);d7s=t7s[o7T.Q5s](3);v7s=t7s[o7T.o5s]();p7s=t7s[o7T.Q5s](v7s*3);G7s=t7s[o7T.o5s]();q7s=t7s[o7T.Q5s](G7s*3);B7s=t7s[b0s]();H7s=t7s[o7T.o5s]();l1s=t7s[h0s]();O1s=t7s[o7T.o5s]();Q7s={'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':F7s,'\x64\x65\x66\x49\x64':A7s,'\x70\x6f\x69\x6e\x74':s7s,'\x63\x70\x6f\x69\x6e\x74':k7s,'\x65\x64\x67\x65\x49\x64':l1s,'\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':q7s,'\x70\x6f\x69\x6e\x74\x49\x64':H7s,'\x64\x69\x73\x74\x61\x6e\x63\x65':e7s,'\x70\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':p7s,'\x69\x66\x63\x74\x79\x70\x65':M7s,'\x67\x65\x6f\x6d\x65\x74\x72\x79\x49\x64':R7s,'\x70\x6f\x6c\x79\x67\x6f\x6e\x49\x64':O1s,'\x65\x65\x6e\x64':d7s,'\x65\x73\x74\x61\x72\x74':o7s,'\x64\x69\x73\x74\x61\x6e\x63\x65':e7s,'\x61\x72\x65\x61':B7s,'\x66\x61\x63\x65\x49\x64':L7s};postMessage(["pickeddata",Q7s]);}}function onrp0(n8s,y8s,f8s){var M7T=F1BB;var X5s="readI";X5s+="n";X5s+="t32";var r5s="re";r5s+="adI";r5s+="nt32";var I8s,u8s,W8s,m8s,c8s,j8s,g8s,C8s;I8s=n8s[r5s]();u8s=n8s[M7T.o5s]();for(var K8s=0;K8s<u8s;K8s++){W8s=defMesh(n8s);defmeshloadarray[W8s["deid"]]=W8s;}m8s=n8s[M7T.o5s]();for(var K8s=0;K8s<m8s;K8s++){itoMesh(n8s);}c8s=n8s[M7T.o5s]();for(var K8s=0;K8s<c8s;K8s++){btoMesh(n8s);}j8s=n8s[X5s]();for(var K8s=0;K8s<j8s;K8s++){g8s=n8s[M7T.o5s]();if(themeTexture===true){rquestt(g8s);}}if(localDB["valid"]==true){if(!f8s){C8s=projId+",pack,"+I8s;localDB["add"](C8s,y8s);}}numPack++;if(themeTexture===false){if(numPack==usedPackCount){onfi();}}}M1BB+="shCount";var wtn,projId,transactionCount,tasks,receivedNodeCount,receivedTransactionCount,netkey,project,nodedict,defmeshloadarray,maxfn,totalinst,currinst,totalPack,numPack,platformDescription,windowurl,maxMemorySize,maxDesktopSize,maxMobileSize,sceneMemorySize,usedMemorySize,usedPackCount,ismobile,treeMode,themeTexture,settings,filePackages,memory,localDB,receiveCache,styles;if("undefined"==typeof BIMVIZ){var a8s="../common/tma";a8s+="th.j";a8s+="s";importScripts('../common/StringView.js');importScripts('../common/datastream.js');importScripts('../common/pako.min.js');importScripts('commondefine.js');importScripts(a8s);}function createOctreeNodeByStream(r7s,P7s,x7s){var R7T=F1BB;var K6T="levelIdListDict";var x0s="I";x0s+="d";var V0s="pus";V0s+="h";var i7s,X7s,V7s,U7s,h7s,w7s,z7s,b7s,D7s;i7s={};i7s["Id"]=r7s[R7T.o5s]();i7s["Level"]=r7s[R7T.o5s]();X7s=r7s[R7T.Q5s](6);i7s["Box"]={'\x58':X7s[0],'\x59':X7s[1],'\x5a':X7s[2],'\x53\x69\x7a\x65\x58':X7s[3],'\x53\x69\x7a\x65\x59':X7s[4],'\x53\x69\x7a\x65\x5a':X7s[5]};i7s["ChildNodes"]=[];i7s["go"]=[];P7s["ChildNodes"][V0s](i7s);V7s=x7s[K6T][i7s["Level"]];if(!V7s){V7s=[];x7s[K6T][i7s["Level"]]=V7s;}V7s["push"](i7s[x0s]);U7s=r7s[R7T.o5s]();for(var Y7s=0;Y7s<U7s;Y7s++){var U0s="p";U0s+="u";U0s+="sh";h7s=r7s[R7T.o5s]();w7s=r7s[R7T.o5s]();z7s=r7s[R7T.o5s]();b7s={'\x73\x66\x69\x64':z7s,'\x64\x65\x69\x64':w7s,'\x67\x65\x69\x64':h7s};i7s["go"][U0s](b7s);}for(var Y7s=0;Y7s<8;Y7s++){D7s=r7s[R7T.o5s]();if(D7s==1){createOctreeNodeByStream(r7s,i7s,x7s);}}nodedict[i7s["Id"]]=i7s;}function onfi(){var e8s="loading";e8s+="res";e8s+="ult";if(settings[F1BB.C6T]==1)localDB["close"]();for(var W4v in defmeshloadarray){if(defmeshloadarray[F1BB.m6T](W4v)){delete defmeshloadarray[W4v];}}project["scene"]=null;project["overview"]=null;postMessage([e8s,{'\x74\x6f\x74\x61\x6c':totalinst,'\x73\x63\x65\x6e\x65\x4d\x65\x6d\x6f\x72\x79\x53\x69\x7a\x65':sceneMemorySize,'\x6d\x6f\x62\x69\x6c\x65':ismobile,'\x75\x73\x65\x64\x4d\x65\x6d\x6f\x72\x79\x53\x69\x7a\x65':usedMemorySize,'\x63\x75\x72\x72\x65\x6e\x74':currinst,'\x6d\x61\x78\x41\x6c\x6c\x6f\x77\x65\x64\x53\x69\x7a\x65':maxMemorySize}]);}function start(B0v){var q0v;q0v=self["pako"];try{wtn=new WebSocket(B0v);}catch(H0v){}wtn["binaryType"]="arraybuffer";wtn["onopen"]=function(){var l5v;postMessage(["connected"]);l5v="login"+","+netkey+","+projId+","+platformDescription+","+windowurl+","+BIMVIZ["REVISION"];_snd(l5v);};wtn["onerror"]=function(O5v){console["log"]("Error: Cannot connect to the WebSocket of RestServer. Please check the following list:");console["log"]("1. Please make sure the Server is Windows Server 2012 at least.");console["log"]("2. Please check if the port is allowed by your Firewall software in Server.");};wtn["onclose"]=function(T5v){var m4s="disconne";m4s+="cted";postMessage([m4s]);};wtn["onmessage"]=function(W5v){var c4s="progres";c4s+="s";var N5v,K5v,n5v;N5v=W5v["data"];postMessage([c4s,N5v["byteLength"]]);K5v=new Uint8Array(N5v);n5v=q0v["inflate"](K5v);hp(n5v,N5v);};}projId="";function onrquesttf(r9s,z9s,w9s){var f5s="finis";f5s+="hCount";var c5s="r";c5s+="eadInt3";c5s+="2";var x9s,U9s,b9s,Y9s,V9s,h9s,D9s;x9s=r9s[F1BB.o5s]();U9s=r9s[c5s]();for(var X9s=0;X9s<U9s;X9s++){b9s=r9s[F1BB.o5s]();Y9s=r9s[F1BB.o5s]();if(Y9s>0){V9s=r9s["readUint8Array"](Y9s);h9s={'\x63\x6f\x6e\x74\x65\x6e\x74':V9s,'\x73\x69\x64':b9s};postMessage(["style",h9s]);}}if(localDB["valid"]==true){if(!w9s){D9s=projId+",spack,"+x9s;localDB["add"](D9s,z9s);}}styles["finishCount"]++;if(styles[f5s]==styles["requestCount"]){onfi();}}transactionCount=0;tasks=new Array();function onGOverview(z6s){var w6s,P6s,t6s;w6s=z6s[F1BB.o5s]();P6s=z6s[F1BB.M5s]();if(w6s==0){t6s="getoverview,"+projId;_snd(t6s);}else if(w6s==1){}else if(w6s==2){postMessage(["connecterror",P6s]);}}function btoMesh(m9s,i9s){var g5s="re";g5s+="adFloat64Arra";g5s+="y";var C5s="r";C5s+="eadInt32";var a9s,E9s,J9s,C9s,f9s,y9s,Z9s,g9s;a9s=m9s[C5s]();E9s=m9s[F1BB.o5s]();J9s=m9s[g5s](6);C9s=[];for(var c9s=0;c9s<a9s;c9s++){f9s=readInst(m9s);y9s=defmeshloadarray[f9s["deid"]];if(y9s){var m5s="p";m5s+="us";m5s+="h";Z9s=mbatm(y9s,f9s);C9s[m5s](Z9s);}}if(C9s["length"]>0){g9s=mg(C9s,E9s);g9s["box"]=J9s;g9s["fid"]=i9s;postMessage(["data",g9s]);}currinst+=1;postMessage(["instcount",{'\x74\x6f\x74\x61\x6c':totalinst,'\x63\x75\x72\x72\x65\x6e\x74':currinst}]);if(currinst==totalinst){currinst=0;totalinst=0;}}receivedNodeCount=0;receivedTransactionCount=0;netkey="";project={'\x73\x63\x65\x6e\x65':null,'\x6f\x76\x65\x72\x76\x69\x65\x77':null};nodedict=new Array();defmeshloadarray=new Array();maxfn=65535;totalinst=0;function onReceiveSelectEntity(T1s){var O1T=F1BB;var w0s="r";w0s+="eadInt32";var m1s,N1s,u1s,n1s,j1s,C1s,g1s,W1s,c1s,f1s,I1s;m1s=T1s[w0s]();N1s=[];u1s=[];for(var K1s=0;K1s<m1s;K1s++){var z0s="r";z0s+="eadFloat32";n1s=T1s[O1T.o5s]();j1s=T1s[O1T.M5s]();C1s=T1s[O1T.M5s]();g1s=T1s[O1T.o5s]();W1s=T1s[z0s]();c1s=T1s[O1T.Q5s](3);f1s=T1s[O1T.o5s]();u1s["push"](n1s);I1s={'\x66\x61\x63\x65\x49\x64':f1s,'\x69\x66\x63\x74\x79\x70\x65':C1s,'\x64\x65\x66\x49\x64':n1s,'\x64\x69\x73\x74\x61\x6e\x63\x65':W1s,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':j1s,'\x70\x6f\x69\x6e\x74':c1s,'\x64\x69\x73\x74\x61\x6e\x63\x65':W1s,'\x67\x65\x6f\x6d\x65\x74\x72\x79\x49\x64':g1s};N1s["push"](I1s);}postMessage(["select",N1s]);}function MemoryUsage(){var C8v;C8v=0;this["add"]=function(g8v){C8v+=g8v;};this["notvalid"]=function(f8v){var m8v,c8v;m8v=C8v+f8v;c8v=m8v>maxMemorySize;if(c8v)return true;exitDataFlow();return false;};this["maxed"]=function(){return C8v<=maxMemorySize;};}function filterFiles(r5v){var Q6T="idList";var x5v,V5v,U5v;if(settings[F1BB.C6T]==2&&r5v&&r5v["enabled"]===true){for(var Y5v in filePackages["files"]){var h4s="s";h4s+="tatus";var b4s="fi";b4s+="le";b4s+="s";if(!filePackages[b4s][F1BB.m6T](Y5v))continue;filePackages["files"][Y5v][h4s]=0;}if(r5v["nameList"]&&r5v["nameList"]["length"]>0){var z4s="l";z4s+="ength";var w4s="nameLis";w4s+="t";for(var X5v=0;X5v<r5v[w4s][z4s];X5v++){var P4s="nam";P4s+="eList";x5v=r5v[P4s][X5v];V5v=filePackages["getFileByName"](x5v);if(V5v){var t4s="s";t4s+="tatu";t4s+="s";V5v[t4s]=1;}}}if(r5v[Q6T]&&r5v[Q6T]["length"]>0){for(var X5v=0;X5v<r5v[Q6T]["length"];X5v++){var e4s="set";e4s+="FileStatus";U5v=r5v[Q6T][X5v];filePackages[e4s](U5v,1);}}}}function onReceiveTree0(f7s){var y7s,m7s,a7s,c7s,J7s,Z7s,E7s;y7s=f7s[F1BB.o5s]();m7s=f7s["readInt32Array"](y7s*3);totalinst=f7s[F1BB.o5s]();a7s=0;c7s=0;for(var g7s=0;g7s<m7s["length"];g7s+=3){J7s=m7s[g7s];Z7s=m7s[g7s+1];E7s=m7s[g7s+2]*4;c7s+=E7s;sceneMemorySize=c7s;if(c7s<=maxMemorySize){usedMemorySize=c7s;a7s++;}}usedPackCount=a7s;totalPack=y7s;gpk0(usedPackCount);}function hbm(J6s){var a6s,c6s,r6s,u6s,i6s,y6s,C6s,f6s,m6s,Z6s;a6s=0;c6s=maxfn;for(var E6s in J6s){if(J6s[F1BB.m6T](E6s)){r6s=J6s[E6s];u6s=r6s["list"];if(u6s&&u6s["length"]>0){u6s["sort"](function(X6s,Y6s){var B4s="ind";B4s+="ice";B4s+="s";var q4s="len";q4s+="gt";q4s+="h";return Y6s["indices"][q4s]-X6s[B4s]["length"];});for(var I6s=0,g6s=u6s["length"]-1;I6s<=g6s;){if(I6s==g6s){var H4s="da";H4s+="ta";i6s=u6s[I6s++];postMessage([H4s,i6s]);}else{y6s=[u6s[I6s]];C6s=u6s[I6s]["indices"]["length"];I6s++;while(C6s<c6s&&I6s<=g6s){f6s=u6s[I6s];m6s=u6s[g6s];if(C6s+f6s["indices"]["length"]<c6s){C6s+=f6s["indices"]["length"];y6s["push"](f6s);I6s++;}else if(C6s+m6s["indices"]["length"]<c6s){var l0s="le";l0s+="ngth";C6s+=m6s["indices"][l0s];y6s["push"](m6s);g6s--;}else{break;}}Z6s=mg(y6s,0);postMessage(["data",Z6s]);a6s++;}}}}}return a6s;}currinst=0;function gpk(U3s){var Z0s="le";Z0s+="ngth";var D3s,b3s,h3s;D3s=U3s[Z0s];for(var x3s=0;x3s<D3s;x3s++){b3s=U3s[x3s];h3s=projId+",pack,"+b3s;localDB["hasKey"](h3s,function(o3s,z3s){var P3s,t3s,w3s,e3s;P3s=new Uint8Array(z3s);t3s=pako["inflate"](P3s);w3s=new DataStream(t3s);e3s=w3s[F1BB.o5s]();onrp(w3s,z3s,true);},function(F3s){var A3s;A3s="pack,"+F3s;_snd(A3s);});}}totalPack=0;numPack=0;function FilePackages(){var J8s="pres";J8s+="et";var E8s="p";E8s+="ackages";this["files"]={};this[E8s]=[];this[J8s]=null;this["addFile"]=function(G9v,q9v,B9v){this["files"][G9v]={'\x69\x64':G9v,'\x6e\x61\x6d\x65':q9v,'\x73\x74\x61\x74\x75\x73':B9v};};this["getFileByName"]=function(O8v){var Z8s="file";Z8s+="s";var l8v;for(var H9v in this[Z8s]){if(this["files"][F1BB.m6T](H9v)){l8v=this["files"][H9v];if(l8v["name"]==O8v){return l8v;}}}return null;};this["setFileStatus"]=function(T8v,N8v){var i8s="s";i8s+="ta";i8s+="tus";this["files"][T8v][i8s]=N8v;};this["getFileStatus"]=function(n8v){var r8s="sta";r8s+="tus";var K8v;K8v=this["files"][n8v][r8s];return K8v;};this["addPackage"]=function(W8v,j8v,I8v,u8v){this["packages"]["push"]({'\x73\x69\x7a\x65':I8v,'\x6d\x63\x6f\x75\x6e\x74':u8v,'\x69\x64':W8v,'\x66\x69\x64':j8v});};}function onROverview(R6s){var t5s=1024;var n0s="Load";function Q6s(){var n3T="timestamp";var s6s;s6s=projId+",timestamp";localDB["hasKey"](s6s,function(L6s,k6s){if(project["overview"][n3T]!=k6s){var W0s="p";W0s+="u";W0s+="t";localDB["clear"]();localDB[W0s](L6s,project["overview"][n3T]);console["log"]("The scene is updated in server, so it will be updated in client cache.");}else{var I0s="The scene is same as in server, Bimviz will us";I0s+="e it for your speed.";var j0s="l";j0s+="o";j0s+="g";console[j0s](I0s);}onGBScene();},function(S6s){var u0s="ad";u0s+="d";console["log"]("The scene will be cached in client cache.");localDB[u0s](S6s,project["overview"][n3T]);onGBScene();});}n0s+="F";n0s+="iles";var M6s,e6s,F6s,A6s;M6s=R6s[F1BB.M5s]();project["overview"]=JSON["parse"](M6s);settings=project["overview"];if(ismobile){var T0s="MobileMaxMe";T0s+="mory";var O0s="Mo";O0s+="bileMax";O0s+="Memory";e6s=t5s*t5s*t5s*2;maxMemorySize=project["overview"][O0s]>0?project["overview"][T0s]*t5s*t5s:e6s;if(maxMobileSize>0){maxMemorySize=maxMobileSize*t5s*t5s;}}else{var K0s="Max";K0s+="Memory";var N0s="ov";N0s+="erview";e6s=t5s*t5s*t5s*4;maxMemorySize=project[N0s]["MaxMemory"]>0?project["overview"][K0s]*t5s*t5s:e6s;if(maxDesktopSize>0){maxMemorySize=maxDesktopSize*t5s*t5s;}}project["MaxMemory"]=maxMemorySize;themeTexture=project["overview"]["TextureMode"]===2;F6s=project["overview"][n0s];for(var o6s=0;o6s<F6s["length"];o6s++){A6s=F6s[o6s];filePackages["addFile"](A6s["FileId"],A6s["FileName"],A6s["Load"]?1:0);}waitCTimeout(5,Q6s);}maxMemorySize=0;function trdc(){var Z3T="instances";var T4s="pr";T4s+="ocessRestMesh";var k8s="ad";k8s+="d";k8s+="Inst";var I4v,u4v,C4v,j4v;function g4v(y0v){var W4s="leng";W4s+="th";var a0v,I0v,W0v,j0v,g0v,m0v,c0v,f0v;a0v=y0v["length"];for(var u0v=0;u0v<a0v;u0v++){I0v=y0v[u0v];W0v=I0v["key"];j0v=j4v[W0v];if(!j0v){j0v={'\x6c\x69\x73\x74':[],'\x66\x69\x6c\x65\x49\x64':I0v["fileId"],'\x66\x63\x6f\x75\x6e\x74':0};j4v[W0v]=j0v;}j0v["list"]["push"](I0v);j0v["fcount"]+=I0v["indices"]["length"];}g0v=[];m0v=new Array();c0v=0;for(var W0v in j4v){if(j4v[F1BB.m6T](W0v)){f0v=j4v[W0v];if(f0v["fcount"]>=maxfn){m0v[W0v]=f0v;g0v["push"](W0v);c0v++;}}}for(var C0v=0;C0v<g0v[W4s];C0v++){W0v=g0v[C0v];delete j4v[W0v];}if(c0v>0){hbm(m0v);}}I4v=[];u4v=new Array();C4v=this;j4v=new Array();;this["addDef"]=function(F4v){u4v[F4v["deid"]]=F4v;};this[k8s]=function(R4v){var S8s="de";S8s+="i";S8s+="d";var M4v,Q4v;M4v=u4v[R4v[S8s]];if(M4v){if(M4v["insted"]){var v8s="l";v8s+="e";v8s+="ngth";var d8s="in";d8s+="sta";d8s+="nces";M4v[Z3T]["push"](R4v);if(M4v[d8s][v8s]==M4v["rcount"]){C4v["addr"](M4v);}}else{var p8s="add";p8s+="M";p8s+="esh";Q4v=m4v(R4v,M4v);C4v[p8s](Q4v);}}};this["addr"]=function(s4v){var q8s="ind";q8s+="ices";var G8s="posi";G8s+="tions";var S4v,d4v,L4v,v4v;S4v={'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':s4v[G8s],'\x6e\x6f\x72\x6d\x61\x6c\x73':s4v["normals"],'\x69\x6e\x64\x69\x63\x65\x73':s4v[q8s],'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':s4v[F1BB.Y3T],'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':s4v["edgeindices"],'\x75\x6e\x69\x74\x73':[],'\x66\x61\x63\x65':s4v["indices"]["length"]/3,'\x63\x6f\x75\x6e\x74':s4v[Z3T]["length"]};d4v=s4v[Z3T]["length"];for(var k4v=0;k4v<d4v;k4v++){var l4s="g";l4s+="e";l4s+="id";var H8s="mat";H8s+="rix";var B8s="ins";B8s+="tances";L4v=s4v[B8s][k4v];v4v={'\x69\x6e\x73\x74\x49\x64':L4v["geid"],'\x6d\x61\x74\x72\x69\x78':L4v[H8s],'\x69\x66\x63\x74\x79\x70\x65':L4v["ifctype"],'\x63\x6f\x6c\x6f\x72':L4v["color"],'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':L4v["elementId"],'\x6d\x65\x73\x68\x49\x64':L4v[l4s],'\x69\x6e\x64\x65\x78':k4v,'\x66\x69\x6c\x65\x49\x64':L4v["sfid"],'\x69\x6e\x64\x65\x78\x53\x74\x61\x72\x74':0,'\x73\x74\x6f\x72\x65\x79\x49\x64':0,'\x69\x6e\x64\x65\x78\x43\x6f\x75\x6e\x74':s4v["indices"]["length"]};S4v["units"]["push"](v4v);}postMessage(["rmesh",S4v]);};this["addMesh"]=function(G4v){var p4v;I4v["push"](G4v);if(I4v["length"]>=500){var O4s="co";O4s+="ncat";p4v=[];p4v=p4v[O4s](I4v);I4v=[];g4v(p4v);}};function c4v(N0v){var N4s="leng";N4s+="t";N4s+="h";var H4v,K0v,O0v,T0v,B4v,n0v;H4v=new Array();K0v=N0v[N4s];for(var l0v=0;l0v<K0v;l0v++){var n4s="p";n4s+="us";n4s+="h";var K4s="k";K4s+="e";K4s+="y";O0v=N0v[l0v];T0v=O0v[K4s];B4v=H4v[T0v];if(!B4v){B4v={'\x6c\x69\x73\x74':[],'\x66\x69\x6c\x65\x49\x64':O0v["fileId"]};H4v[T0v]=B4v;}B4v["list"][n4s](O0v);}n0v=hbm(H4v);}this[T4s]=function(){var q4v;if(I4v["length"]==0)return;q4v=[];q4v=q4v["concat"](I4v);I4v=[];g4v(q4v);hbm(j4v);j4v=new Array();};;;function m4v(Z4v,E4v){var L8s="edge";L8s+="indices";var M8s="normal";M8s+="s";var F8s="l";F8s+="e";F8s+="ngth";var A8s="Ve";A8s+="ctor3";var o8s="e";o8s+="lement";o8s+="Id";var D4v,b4v,w4v,X4v,U4v,J4v,i4v,h4v,o4v,t4v,Y4v,y4v,V4v,x4v,z4v,r4v,P4v,A4v,e4v;D4v=Z4v["geid"];b4v=Z4v["sfid"];w4v=0;X4v=Z4v["ifctype"];U4v=Z4v[o8s];J4v=Z4v["color"];i4v=new THREE["Matrix4"]();i4v["fromArray"](Z4v["matrix"]);h4v=new THREE["Quaternion"]();o4v=new THREE["Vector3"]();t4v=new THREE[A8s]();i4v["decompose"](o4v,h4v,t4v);Y4v=new Float32Array(E4v["positions"][F8s]);y4v=new THREE["Vector3"]();for(var f4v=0,a4v=Y4v["length"];f4v<a4v;f4v+=3){y4v["fromArray"](E4v["positions"],f4v);y4v["applyMatrix4"](i4v);y4v["toArray"](Y4v,f4v);}V4v=new Float32Array(E4v[M8s]["length"]);for(var f4v=0,a4v=V4v["length"];f4v<a4v;f4v+=3){var Q8s="no";Q8s+="rmals";var R8s="fr";R8s+="omArr";R8s+="ay";y4v[R8s](E4v[Q8s],f4v);y4v["applyQuaternion"](h4v);y4v["toArray"](V4v,f4v);}x4v=new Float32Array(E4v[F1BB.Y3T]);for(var f4v=0,a4v=x4v["length"];f4v<a4v;f4v+=3){var s8s="appl";s8s+="yMat";s8s+="rix4";y4v["fromArray"](E4v[F1BB.Y3T],f4v);y4v[s8s](i4v);y4v["toArray"](x4v,f4v);}z4v=new Uint32Array(E4v[L8s]);r4v=new Uint32Array(E4v["indices"]);P4v=[];A4v={'\x69\x6e\x64\x65\x78\x53\x74\x61\x72\x74':0,'\x69\x6e\x64\x65\x78\x43\x6f\x75\x6e\x74':r4v["length"],'\x65\x64\x67\x65\x53\x74\x61\x72\x74':0,'\x65\x64\x67\x65\x43\x6f\x75\x6e\x74':z4v["length"],'\x69\x66\x63\x74\x79\x70\x65':X4v,'\x73\x74\x6f\x72\x65\x79\x49\x64':w4v,'\x76\x69\x73\x69\x62\x6c\x65':true,'\x66\x69\x6c\x65\x49\x64':b4v,'\x6d\x65\x73\x68\x49\x64':D4v,'\x69\x6e\x64\x69\x63\x65\x73\x43\x6f\x70\x79':new Uint32Array(r4v),'\x63\x6f\x6c\x6f\x72':J4v,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':U4v,'\x6d\x61\x74\x72\x69\x78':Z4v["matrix"]};P4v["push"](A4v);e4v={'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':Y4v,'\x6d\x65\x73\x68\x49\x64':D4v,'\x66\x61\x63\x65':r4v["length"]/3,'\x63\x6f\x75\x6e\x74':1,'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':z4v,'\x75\x6e\x69\x74\x73':P4v,'\x6b\x65\x79':X4v+":"+J4v[0]["toFixed"](3)+J4v[1]["toFixed"](3)+J4v[2]["toFixed"](3)+J4v[3]["toFixed"](3),'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':x4v,'\x73\x74\x6f\x72\x65\x79\x49\x64':w4v,'\x69\x66\x63\x74\x79\x70\x65':X4v,'\x66\x69\x6c\x65\x49\x64':b4v,'\x63\x6f\x6c\x6f\x72\x73':J4v,'\x69\x6e\x64\x69\x63\x65\x73':r4v,'\x6e\x6f\x72\x6d\x61\x6c\x73':V4v,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':U4v};return e4v;}}maxDesktopSize=0;maxMobileSize=0;sceneMemorySize=0;usedMemorySize=0;function ld(){var W7T="error";var n7T="objectStore";var K7T="readwrite";var T7T="transaction";var l7T="result";var H3T="onsuccess";var w8s="c";w8s+="lo";w8s+="se";var U8s="a";U8s+="dd";var a8v,J8v,y8v,E8v;y8v='trans';E8v=this;this["valid"]=false;this["init"]=function(){var V8s="onupgradene";V8s+="eded";var Z8v;Z8v=idbok();if(!Z8v){var Y8s="Your browser doesn't support a s";Y8s+="table version of IndexedDB. Bimviz .";var X8s="l";X8s+="o";X8s+="g";this["valid"]=false;console[X8s](Y8s);return;}J8v=indexedDB["open"]("bimviz.cache",1);J8v["onerror"]=function(i8v){console["log"]("not allow bimviz to use IndexedDB");};J8v[H3T]=function(r8v){a8v=J8v[l7T];E8v["valid"]=true;};J8v[V8s]=function(Y8v){var X8v,V8v;X8v=Y8v["target"][l7T];V8v=X8v["createObjectStore"]("trans",{'\x6b\x65\x79\x50\x61\x74\x68':"ssn"});};};this["hasKey"]=function(x8v,w8v,D8v){var x8s="ob";x8s+="jectS";x8s+="tore";var b8v,h8v,U8v;if(E8v["valid"]==false){D8v(x8v);return;}b8v=a8v[T7T](y8v,"readonly");h8v=b8v[x8s](y8v);U8v=h8v["get"](x8v);U8v[H3T]=function(P8v){var z8v;z8v=P8v["target"][l7T];if(z8v)w8v(x8v,z8v["blob"]);else{D8v(x8v);}};U8v["onerror"]=function(t8v){};};this[U8s]=function(M8v,R8v){var o8v,A8v,F8v,e8v;if(E8v["valid"]==false){return;}o8v=a8v[T7T](y8v,K7T);A8v=o8v[n7T](y8v);F8v={'\x62\x6c\x6f\x62':R8v,'\x73\x73\x6e':M8v};e8v=A8v["add"](F8v);e8v[H3T]=function(Q8v){};e8v["onerror"]=function(){var D8s="add e";D8s+="rror";console[W7T](D8s,this[W7T]);};};this["put"]=function(d8v,v8v){var b8s="t";b8s+="r";b8s+="ansaction";var L8v,k8v,S8v,s8v;if(E8v["valid"]==false){return;}L8v=a8v[b8s](y8v,K7T);k8v=L8v[n7T](y8v);S8v={'\x73\x73\x6e':d8v,'\x62\x6c\x6f\x62':v8v};s8v=k8v["put"](S8v);s8v[H3T]=function(p8v){};s8v["onerror"]=function(){var h8s="p";h8s+="ut err";h8s+="or";console[W7T](h8s,this[W7T]);};};this["clear"]=function(){var G8v,q8v,B8v,H8v,l4v;if(E8v["valid"]==false){return;}G8v=projId;q8v=IDBKeyRange["bound"](G8v,G8v+'\uffff',false,false);B8v=a8v[T7T](y8v,K7T);H8v=B8v[n7T](y8v);l4v=H8v["openCursor"](q8v);l4v[H3T]=function(T4v){var O4v;O4v=T4v["target"][l7T];if(O4v){O4v["delete"]();O4v["continue"]();}else{}};};this[w8s]=function(){if(E8v["valid"]==false){return;}if(a8v&&J8v){var z8s="c";z8s+="lose";a8v[z8s]();}};}usedPackCount=0;function onReceiveQueryElements(p1s){var e7T=F1BB;var q1s,G1s,O2s,H1s,l2s,N2s,W2s,n2s,K2s,j2s,T2s;q1s=p1s[e7T.o5s]();if(q1s==0)return;G1s=[];O2s=[];for(var B1s=0;B1s<q1s;B1s++){var R0s="pu";R0s+="sh";var M0s="rea";M0s+="dInt";M0s+="32";H1s=p1s[e7T.o5s]();l2s=p1s[e7T.M5s]();N2s=p1s[e7T.M5s]();W2s=p1s[M0s]();n2s=p1s["readFloat32"]();K2s=p1s[e7T.Q5s](3);j2s=p1s[e7T.o5s]();O2s["push"](H1s);T2s={'\x64\x69\x73\x74\x61\x6e\x63\x65':n2s,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':l2s,'\x70\x6f\x69\x6e\x74':K2s,'\x64\x65\x66\x69\x64':H1s,'\x69\x66\x63\x74\x79\x70\x65':N2s};G1s[R0s](T2s);}G1s["sphere"]=p1s[e7T.Q5s](4);postMessage(["queryelement",G1s]);}function mg(w5v,W6s){var G4s="l";G4s+="ength";var R4s="len";R4s+="gth";var B5v,q5v,G5v,L5v,R5v,o5v,k5v,A5v,F5v,M5v,P5v,Q5v,s5v,H5v,e5v,l6s,O6s,S5v,d5v,v5v,K6s,p5v,b5v,T6s,N6s,h5v,t5v,n6s;B5v=0;q5v=0;G5v=0;L5v=0;R5v=0;o5v=0;k5v=0;w5v["forEach"](function(j6s){var M4s="l";M4s+="eng";M4s+="th";var F4s="leng";F4s+="th";var A4s="le";A4s+="ngth";var o4s="u";o4s+="v";o4s+="s";B5v+=j6s["positions"]["length"];q5v+=j6s[o4s][A4s];G5v+=j6s["normals"][F4s];L5v+=j6s["indices"][M4s];R5v+=j6s[F1BB.Y3T]["length"];o5v+=j6s["edgeindices"]["length"];k5v+=j6s["colorbuf"]["length"];});A5v=new Float32Array(B5v);F5v=new Float32Array(q5v);M5v=new Float32Array(G5v);P5v=new Uint32Array(L5v);Q5v=new Float32Array(R5v);s5v=new Uint32Array(o5v);H5v=new Float32Array(k5v);e5v=0;l6s=0;O6s=0;S5v=0;d5v=0;v5v=0;K6s=0;p5v=[];for(var z5v=0;z5v<w5v[R4s];z5v++){var v4s="indic";v4s+="e";v4s+="s";var d4s="colorbu";d4s+="f";var s4s="in";s4s+="dexSta";s4s+="rt";var Q4s="un";Q4s+="its";b5v=w5v[z5v];T6s=e5v/3;N6s=d5v/3;;h5v=b5v[Q4s][0];h5v[s4s]=S5v;h5v["edgeStart"]=v5v;h5v["index"]=z5v;p5v["push"](h5v);for(var D5v=0;D5v<b5v["positions"]["length"];D5v++){var L4s="posit";L4s+="ions";A5v[e5v++]=b5v[L4s][D5v];}for(var D5v=0;D5v<b5v["uvs"]["length"];D5v++){var k4s="u";k4s+="vs";F5v[l6s++]=b5v[k4s][D5v];}for(var D5v=0;D5v<b5v["normals"]["length"];D5v++){var S4s="no";S4s+="rmals";M5v[O6s++]=b5v[S4s][D5v];}for(var D5v=0;D5v<b5v[d4s]["length"];D5v++){H5v[K6s++]=b5v["colorbuf"][D5v];}t5v=0;for(var D5v=0;D5v<b5v[v4s]["length"];D5v++){t5v=b5v["indices"][D5v]+T6s;P5v[S5v++]=t5v;h5v["indicesCopy"][D5v]=t5v;}for(var D5v=0;D5v<b5v[F1BB.Y3T]["length"];D5v++){Q5v[d5v++]=b5v[F1BB.Y3T][D5v];}for(var D5v=0;D5v<b5v["edgeindices"]["length"];D5v++){var p4s="edgeindi";p4s+="ces";s5v[v5v++]=b5v[p4s][D5v]+N6s;}}n6s={'\x6e\x6f\x72\x6d\x61\x6c\x73':M5v,'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':A5v,'\x75\x76\x73':F5v,'\x63\x6f\x6c\x6f\x72\x73':w5v[0]["colors"],'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':Q5v,'\x63\x6f\x6c\x6f\x72\x62\x75\x66':H5v,'\x69\x6e\x64\x69\x63\x65\x73':P5v,'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':s5v,'\x69\x66\x63\x74\x79\x70\x65':w5v[0]["ifctype"],'\x63\x6f\x75\x6e\x74':w5v["length"],'\x75\x6e\x69\x74\x73':p5v,'\x66\x61\x63\x65':P5v[G4s]/3,'\x73\x74\x79\x6c\x65':W6s};return n6s;}ismobile=false;treeMode="sync";themeTexture=false;settings=null;;filePackages=new FilePackages();function onrp(S9s,N8s,T8s){var q7T=F1BB;var Z5s="rea";Z5s+="dInt32";var E5s="readIn";E5s+="t32";var v9s,G9s,d9s,p9s,l8s,O8s,B9s,q9s,H9s;v9s=S9s[q7T.o5s]();G9s=S9s[q7T.o5s]();d9s=filePackages["packages"][v9s];for(var k9s=0;k9s<G9s;k9s++){p9s=defMesh(S9s);defmeshloadarray[p9s["deid"]]=p9s;}l8s=S9s[E5s]();for(var k9s=0;k9s<l8s;k9s++){var J5s="f";J5s+="i";J5s+="d";itoMesh(S9s,d9s[J5s]);}O8s=S9s[Z5s]();for(var k9s=0;k9s<O8s;k9s++){btoMesh(S9s,d9s["fid"]);}B9s=S9s[q7T.o5s]();for(var k9s=0;k9s<B9s;k9s++){q9s=S9s[q7T.o5s]();if(themeTexture===true){rquestt(q9s);}}if(localDB["valid"]==true){if(!T8s){var i5s="ad";i5s+="d";H9s=projId+",pack,"+v9s;localDB[i5s](H9s,N8s);}}usedPackCount--;usedMemorySize-=d9s["size"];if(styles["finishCount"]==styles["requestCount"]){if(0==usedPackCount){onfi();}}}function mbatm(Y2s,D2s){var u5s="l";u5s+="e";u5s+="ngth";var I5s="toFix";I5s+="ed";var j5s="le";j5s+="ng";j5s+="th";var W5s="edgeposi";W5s+="tions";var T5s="l";T5s+="eng";T5s+="th";var O5s="le";O5s+="ngt";O5s+="h";var B0s="l";B0s+="engt";B0s+="h";var q0s="cl";q0s+="o";q0s+="ne";var G0s="ma";G0s+="trix";var p0s="sf";p0s+="id";var S2s,d2s,M2s,A2s,Q2s,x2s,z2s,R2s,G2s,p2s,L2s,h2s,U2s,t2s,s2s,P2s,k2s,b2s,e2s,F2s,w2s,v2s,q2s,B2s,o2s;S2s=D2s["geid"];d2s=D2s[p0s];M2s=D2s["storeyId"];A2s=D2s["ifctype"];Q2s=D2s["elementId"];x2s=D2s["color"];z2s=new THREE["Matrix4"]();z2s["fromArray"](D2s[G0s]);R2s=new THREE["Quaternion"]();G2s=new THREE["Vector3"]();p2s=new THREE["Vector3"]();z2s["decompose"](G2s,R2s,p2s);L2s=Y2s["box"][q0s]();L2s["applyMatrix4"](z2s);h2s=new Float32Array(Y2s["positions"][B0s]);U2s=new THREE["Vector3"]();for(var X2s=0,V2s=h2s["length"];X2s<V2s;X2s+=3){var l5s="ap";l5s+="ply";l5s+="Matrix4";var H0s="fr";H0s+="om";H0s+="Array";U2s[H0s](Y2s["positions"],X2s);U2s[l5s](z2s);U2s["toArray"](h2s,X2s);}t2s=new Float32Array(Y2s["uvs"]["length"]);s2s=new THREE["Vector2"]();for(var X2s=0,V2s=t2s[O5s];X2s<V2s;X2s+=2){s2s["fromArray"](Y2s["uvs"],X2s);s2s["toArray"](t2s,X2s);}P2s=new Float32Array(Y2s["normals"]["length"]);for(var X2s=0,V2s=P2s[T5s];X2s<V2s;X2s+=3){var n5s="ap";n5s+="plyQuaternion";var K5s="norma";K5s+="ls";var N5s="fromArra";N5s+="y";U2s[N5s](Y2s[K5s],X2s);U2s[n5s](R2s)["normalize"]();U2s["toArray"](P2s,X2s);}k2s=Y2s["positions"]["length"]/3*4;b2s=new Float32Array(k2s);for(var X2s=0,V2s=k2s;X2s<V2s;X2s+=4){b2s[X2s]=x2s[0];b2s[X2s+1]=x2s[1];b2s[X2s+2]=x2s[2];b2s[X2s+3]=x2s[3];}e2s=new Float32Array(Y2s[W5s]);for(var X2s=0,V2s=e2s["length"];X2s<V2s;X2s+=3){U2s["fromArray"](Y2s[F1BB.Y3T],X2s);U2s["applyMatrix4"](z2s);U2s["toArray"](e2s,X2s);}F2s=new Uint32Array(Y2s["edgeindices"]);w2s=new Uint32Array(Y2s["indices"]);v2s=[];q2s={'\x69\x6e\x73\x74\x49\x64':D2s["geid"],'\x64\x65\x66\x49\x64':D2s["deid"],'\x69\x6e\x64\x65\x78\x53\x74\x61\x72\x74':0,'\x69\x6e\x64\x65\x78\x43\x6f\x75\x6e\x74':w2s[j5s],'\x65\x64\x67\x65\x53\x74\x61\x72\x74':0,'\x65\x64\x67\x65\x43\x6f\x75\x6e\x74':F2s["length"],'\x76\x69\x73\x69\x62\x6c\x65':true,'\x6d\x65\x73\x68\x49\x64':S2s,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':Q2s,'\x69\x6e\x64\x69\x63\x65\x73\x43\x6f\x70\x79':new Uint32Array(w2s),'\x63\x6f\x6c\x6f\x72':x2s,'\x69\x66\x63\x74\x79\x70\x65':A2s,'\x73\x74\x6f\x72\x65\x79\x49\x64':M2s,'\x66\x69\x6c\x65\x49\x64':d2s,'\x6d\x61\x74\x72\x69\x78':D2s["matrix"],'\x6d\x74\x79\x70\x65':'B','\x76\x6f\x6c\x75\x6d\x65':Y2s["volume"],'\x61\x72\x65\x61':Y2s["area"],'\x62\x6f\x78':L2s,'\x73\x74\x79\x6c\x65':Y2s["style"]};v2s["push"](q2s);B2s={'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':F2s,'\x6d\x65\x73\x68\x49\x64':S2s,'\x73\x74\x6f\x72\x65\x79\x49\x64':M2s,'\x66\x69\x6c\x65\x49\x64':d2s,'\x66\x61\x63\x65':w2s["length"]/3,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':Q2s,'\x75\x76\x73':t2s,'\x69\x6e\x64\x69\x63\x65\x73':w2s,'\x69\x66\x63\x74\x79\x70\x65':A2s,'\x6b\x65\x79':A2s+":"+x2s[0]["toFixed"](3)+x2s[1]["toFixed"](3)+x2s[2][I5s](3)+x2s[3]["toFixed"](3),'\x6e\x6f\x72\x6d\x61\x6c\x73':P2s,'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':e2s,'\x63\x6f\x6c\x6f\x72\x62\x75\x66':b2s,'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':h2s,'\x63\x6f\x6c\x6f\x72\x73':x2s,'\x63\x6f\x75\x6e\x74':1,'\x75\x6e\x69\x74\x73':v2s};o2s=h2s["length"]+P2s["length"]+b2s["length"]+w2s["length"]+e2s["length"]+F2s["length"]+t2s[u5s];o2s*=4;o2s+=h2s["length"]/3*1*4;o2s+=h2s["length"]/3*4*1;memory["add"](o2s);return B2s;};function waitCTimeout(v6s,d6s){var C0s="v";C0s+="alid";if(localDB[C0s]==false&&v6s>=0){setTimeout(function(){var m0s="t";m0s+="oLocaleTimeSt";m0s+="ring";var g0s="wait cac";g0s+="h";g0s+="e";console["log"](g0s,new Date()[m0s]());if(localDB["valid"]==false){waitCTimeout(v6s-1,d6s);}else{d6s();}},1000);}else if(localDB["valid"]==true){d6s();}else{console["log"]("Your browser can not support indexdb correctly now. Please retry in a newer browser or refresh later.");}}function GBSceneImpl(){var c0s="ha";c0s+="sKe";c0s+="y";var p6s;p6s=projId+",bscene";if(treeMode=="async"){p6s=projId+",bscenesimple";}localDB[c0s](p6s,function(O3s,q6s){var B6s,H6s,G6s,l3s;B6s=new Uint8Array(q6s);H6s=pako["inflate"](B6s);G6s=new DataStream(H6s);l3s=G6s[F1BB.o5s]();onRBScene(G6s,q6s,true);},function(N3s){var f0s="g";f0s+="etbimtree,";var T3s;T3s=f0s+projId;if(treeMode=="async"){var y0s="getbims";y0s+="i";y0s+="mpletree,";T3s=y0s+projId;}_snd(T3s);});}function _snd(N4v){var t8s="le";t8s+="ng";t8s+="th";var P8s="len";P8s+="g";P8s+="th";var n4v,K4v;n4v=N4v["length"]+(N4v[P8s]+",")[t8s];K4v=N4v["length"]+","+N4v;wtn["send"](K4v);};memory=new MemoryUsage();function onGTree(){var I3s;I3s=projId+",tree";localDB["hasKey"](I3s,function(f3s,C3s){var g3s,m3s,u3s,c3s;g3s=new Uint8Array(C3s);m3s=pako["inflate"](g3s);u3s=new DataStream(m3s);c3s=u3s[F1BB.o5s]();onRTree(u3s,C3s,true);},function(a3s){var y3s;y3s="gettree,"+projId;_snd(y3s);});}function minstm(I2s,f2s,r2s){var s0s="s";s0s+="ize";var Q0s="b";Q0s+="ox";var a2s,g2s,m2s,u2s,c2s,E2s,Z2s,i2s,y2s,J2s;a2s={'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':I2s["positions"],'\x75\x76\x73':I2s["uvs"],'\x6e\x6f\x72\x6d\x61\x6c\x73':I2s["normals"],'\x69\x6e\x64\x69\x63\x65\x73':I2s["indices"],'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':I2s[F1BB.Y3T],'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':I2s["edgeindices"],'\x66\x61\x63\x65':I2s["indices"]["length"]/3,'\x75\x6e\x69\x74\x73':[],'\x63\x6f\x75\x6e\x74':f2s["length"],'\x76\x6f\x6c\x75\x6d\x65':I2s["volume"],'\x61\x72\x65\x61':I2s["area"],'\x62\x6f\x78':I2s[Q0s],'\x73\x74\x79\x6c\x65':r2s};g2s=I2s[s0s];m2s=f2s["length"];for(var C2s=0;C2s<m2s;C2s++){var v0s="le";v0s+="ng";v0s+="th";var d0s="g";d0s+="eid";var S0s="el";S0s+="ementId";var k0s="co";k0s+="l";k0s+="or";var L0s="deco";L0s+="mpos";L0s+="e";u2s=f2s[C2s];c2s=new THREE["Matrix4"]();c2s["fromArray"](u2s["matrix"]);E2s=new THREE["Quaternion"]();Z2s=new THREE["Vector3"]();i2s=new THREE["Vector3"]();c2s[L0s](Z2s,E2s,i2s);y2s=I2s["box"]["clone"]();y2s["applyMatrix4"](c2s);J2s={'\x69\x6e\x73\x74\x49\x64':u2s["geid"],'\x64\x65\x66\x49\x64':u2s["deid"],'\x6d\x61\x74\x72\x69\x78':u2s["matrix"],'\x69\x66\x63\x74\x79\x70\x65':u2s["ifctype"],'\x63\x6f\x6c\x6f\x72':u2s[k0s],'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':u2s[S0s],'\x6d\x65\x73\x68\x49\x64':u2s[d0s],'\x69\x6e\x64\x65\x78':C2s,'\x66\x69\x6c\x65\x49\x64':u2s["sfid"],'\x73\x74\x6f\x72\x65\x79\x49\x64':u2s["storeyId"],'\x69\x6e\x64\x65\x78\x53\x74\x61\x72\x74':0,'\x69\x6e\x64\x65\x78\x43\x6f\x75\x6e\x74':I2s["indices"][v0s],'\x6d\x74\x79\x70\x65':'R','\x76\x6f\x6c\x75\x6d\x65':defMesh["volume"],'\x61\x72\x65\x61':defMesh["area"],'\x62\x6f\x78':y2s,'\x71\x75\x61\x74\x65\x72\x6e\x69\x6f\x6e':E2s};a2s["units"]["push"](J2s);}g2s+=m2s*16*4;g2s+=m2s*1*4;g2s+=m2s*4*1;memory["add"](g2s);return a2s;}localDB=new ld();function itoMesh(H2s,u9s){var W9s,j9s,I9s,n9s,T9s,K9s,O9s,l9s;W9s=H2s[F1BB.o5s]();j9s=H2s[F1BB.o5s]();I9s=H2s[F1BB.o5s]();n9s=H2s["readFloat64Array"](6);T9s=[];for(var N9s=0;N9s<j9s;N9s++){K9s=readInst(H2s);T9s["push"](K9s);}O9s=defmeshloadarray[W9s];if(O9s){l9s=minstm(O9s,T9s);l9s["box"]=n9s;l9s["fid"]=u9s;postMessage(["rmesh",l9s]);}currinst+=1;postMessage(["instcount",{'\x74\x6f\x74\x61\x6c':totalinst,'\x63\x75\x72\x72\x65\x6e\x74':currinst}]);if(currinst==totalinst){currinst=0;totalinst=0;}}localDB["init"]();;receiveCache=new trdc();function readInst(y1s){var k7T=F1BB;var a1s,E1s,J1s,Z1s,i1s,r1s,X1s,Y1s;a1s=y1s[k7T.o5s]();E1s=y1s[k7T.o5s]();J1s=y1s[k7T.M5s]();Z1s=y1s[k7T.o5s]();i1s=y1s[k7T.Q5s](16);r1s=y1s[k7T.M5s]();X1s=y1s[k7T.Q5s](4);Y1s=y1s[k7T.o5s]();return{'\x69\x66\x63\x74\x79\x70\x65':r1s,'\x63\x6f\x6c\x6f\x72':X1s,'\x73\x66\x69\x64':Z1s,'\x6d\x61\x74\x72\x69\x78':i1s,'\x64\x65\x69\x64':a1s,'\x65\x6c\x65\x6d\x65\x6e\x74\x49\x64':J1s,'\x73\x74\x6f\x72\x65\x79\x49\x64':Y1s,'\x67\x65\x69\x64':E1s};}function toLoadFile(V3s){var J0s="pac";J0s+="ka";J0s+="ges";var Y3s,r3s;filePackages["setFileStatus"](V3s,1);Y3s=[];for(var X3s=0;X3s<filePackages[J0s]["length"];X3s++){r3s=filePackages["packages"][X3s];if(r3s["fid"]==V3s){if(usedMemorySize+r3s["size"]<maxMemorySize){Y3s["push"](r3s["id"]);totalinst+=r3s["mcount"];usedPackCount++;usedMemorySize+=r3s["size"];}}}gpk(Y3s);}function onGBScene(){waitCTimeout(5,GBSceneImpl);}onmessage=function(j5v){var b7T="WORKDEFINE";var V4s="WORKDEFIN";V4s+="E";var Y4s="WORKD";Y4s+="EFIN";Y4s+="E";var Z4s="WORK";Z4s+="DEFINE";var y4s="Sta";y4s+="rt";var f4s="dat";f4s+="a";var I5v,J5v,Z5v,c5v,u5v,m5v,y5v,C5v,E5v,i5v,f5v,g5v,a5v;I5v=j5v[f4s][0];if(I5v==BIMVIZ[b7T][y4s]){var J4s="da";J4s+="ta";var E4s="da";E4s+="t";E4s+="a";var a4s="da";a4s+="t";a4s+="a";J5v=j5v[a4s][1];projId=j5v["data"][2];netkey=j5v["data"][3];platformDescription=j5v[E4s][4];windowurl=j5v["data"][5];maxDesktopSize=j5v["data"][6];maxMobileSize=j5v[J4s][7];ismobile=j5v["data"][8];treeMode=j5v["data"][9];start(J5v);}else if(I5v==BIMVIZ[Z4s]["Close"]){wtn["close"]();}else if(I5v==BIMVIZ[b7T]["LoadTreeNodeMesh"]){var r4s="S";r4s+="endGeoComma";r4s+="nd";var i4s="dat";i4s+="a";Z5v=j5v[i4s][1];transactionCount++;c5v=new TransactionTask(Z5v,transactionCount);tasks[transactionCount]=c5v;c5v[r4s]();}else if(I5v==BIMVIZ[b7T]["PickByRay"]){var X4s="p";X4s+="ick";X4s+=",";u5v=j5v["data"][1];m5v=j5v["data"][2];y5v=j5v["data"][3];C5v=X4s+projId+","+u5v["x"]+","+u5v["y"]+","+u5v["z"]+","+m5v["x"]+","+m5v["y"]+","+m5v["z"]+","+y5v;_snd(C5v);}else if(I5v==BIMVIZ[Y4s]["GetElementData"]){E5v=j5v["data"][1];C5v="queryelement,"+projId+((2400,6430)>=(9440,3943)?",":("u",231.42))+E5v;_snd(C5v);}else if(I5v==BIMVIZ[b7T]["LoadTree"]){i5v=j5v["data"][1];f5v=j5v["data"][2];filePackages["preset"]=f5v;filterFiles(f5v);onGTree();}else if(I5v==BIMVIZ[V4s]["GetPickedData"]){var D4s="faceI";D4s+="d";var U4s="picked";U4s+="data,";var x4s="da";x4s+="t";x4s+="a";g5v=j5v[x4s][1];u5v=g5v["orgPoint"];C5v=U4s+projId+","+g5v["elementId"]+","+u5v["x"]+","+u5v["y"]+","+u5v["z"]+","+g5v["defId"]+","+g5v["geometryId"]+","+g5v[D4s]+","+g5v["distance"];_snd(C5v);}else if(I5v==BIMVIZ[b7T]["LoadFile"]){a5v=j5v["data"][1];toLoadFile(a5v);}};;function onRBScene(n3s,W3s,j3s){var K3s;project["scene"]=n3s[F1BB.M5s]();postMessage(["overview",project]);if(localDB["valid"]==true){if(!j3s){var a0s=",bs";a0s+="cene";K3s=projId+a0s;if(treeMode=="async"){K3s=projId+",bscenesimple";}localDB["add"](K3s,W3s);}}};function onRTree(E3s,Z3s,i3s){var J3s;if(settings[F1BB.C6T]==1)onReceiveTree0(E3s);else if(settings[F1BB.C6T]==2)onReceiveTree(E3s);if(localDB["valid"]==true){if(!i3s){var E0s=",";E0s+="tr";E0s+="ee";J3s=projId+E0s;localDB["add"](J3s,Z3s);}}};;function exitDataFlow(){postMessage(["instcount",{'\x63\x75\x72\x72\x65\x6e\x74':currinst,'\x74\x6f\x74\x61\x6c':totalinst}]);};function TransactionTask(J0v,E0v){var j4s="Rece";j4s+="iveData";var i0v,r0v,X0v,Z0v;Z0v=this;this[j4s]=function(V0v,w0v,z0v){var x0v,D0v,U0v,b0v,h0v;receivedTransactionCount++;r0v=new Date();x0v=V0v[F1BB.o5s]();if(x0v>0){for(var Y0v=0;Y0v<x0v;Y0v++){var I4s="add";I4s+="D";I4s+="ef";D0v=defMesh(V0v);receiveCache[I4s](D0v);}}U0v=V0v[F1BB.o5s]();if(U0v>0){for(var Y0v=0;Y0v<U0v;Y0v++){var u4s="a";u4s+="ddIns";u4s+="t";b0v=readInst(V0v);receiveCache[u4s](b0v);}}delete tasks[E0v];if(receivedTransactionCount>=transactionCount){receiveCache["processRestMesh"]();}X0v=new Date();receivedNodeCount+=J0v["length"];postMessage(["nodecount",receivedNodeCount]);if(localDB["valid"]==true){if(!z0v){h0v=projId+","+E0v;localDB["add"](h0v,w0v);}}};this["SendGeoCommand"]=function(){var P0v;P0v=projId+","+E0v;localDB["hasKey"](P0v,function(R0v,e0v){var o0v,A0v,t0v,F0v,M0v;o0v=new Uint8Array(e0v);A0v=pako["inflate"](o0v);t0v=new DataStream(A0v);F0v=t0v[F1BB.o5s]();M0v=t0v[F1BB.o5s]();Z0v["ReceiveData"](t0v,e0v,true);},function(G0v){var L0v,d0v,v0v,p0v,s0v,Q0v;L0v="nodelist,"+projId+","+E0v;d0v="dlist";v0v="glist";for(var k0v=0;k0v<J0v["length"];k0v++){var C4s="g";C4s+="o";p0v=J0v[k0v];s0v=nodedict[p0v];if(s0v&&s0v[C4s]){for(var S0v=0;S0v<s0v["go"]["length"];S0v++){Q0v=s0v["go"][S0v];if(defmeshloadarray[Q0v["deid"]]==undefined){var g4s="d";g4s+="eid";defmeshloadarray[Q0v["deid"]]=1;d0v+="_"+Q0v[g4s]+((8141,4800)==(4737,7730)?9.73e+3:"_")+Q0v["sfid"];}else{defmeshloadarray[Q0v["deid"]]++;}v0v+="_"+Q0v["geid"];}}}L0v+=","+d0v;L0v+=","+v0v;_snd(L0v);i0v=new Date();});};};function rquestt(t9s){var a5s="h";a5s+="asKey";var y5s=",spa";y5s+="ck,";var P9s,e9s;P9s=styles["get"](t9s);if(P9s){return;}styles["requestCount"]++;P9s={'\x73\x74\x61\x74\x75\x73':"loading"};styles["add"](t9s,P9s);e9s=projId+y5s+t9s;localDB[a5s](e9s,function(Q9s,A9s){var F9s,M9s,o9s,R9s;F9s=new Uint8Array(A9s);M9s=pako["inflate"](F9s);o9s=new DataStream(M9s);R9s=o9s[F1BB.o5s]();onrquesttf(o9s,A9s,true);},function(L9s){var s9s;s9s="getspack,"+L9s;_snd(s9s);});};function defMesh(V1s){var F7T=F1BB;var F0s="leng";F0s+="th";var A0s="leng";A0s+="th";var o0s="le";o0s+="n";o0s+="gth";var e0s="readFloat32Arra";e0s+="y";var t0s="re";t0s+="ad";t0s+="Int32";var P0s="re";P0s+="adIn";P0s+="t32";var v1s,R1s,h1s,d1s,D1s,o1s,e1s,M1s,w1s,Q1s,b1s,P1s,t1s,U1s,s1s,L1s,k1s,A1s,F1s,z1s,S1s;v1s=V1s[P0s]();R1s=V1s[F7T.o5s]();h1s=V1s[F7T.o5s]();d1s=V1s[F7T.o5s]()*3;D1s=V1s[F7T.Q5s](d1s);o1s=V1s[t0s]()*2;e1s=new Float32Array();if(o1s>0){e1s=V1s[F7T.Q5s](o1s);}M1s=V1s[F7T.o5s]()*3;w1s=V1s[e0s](M1s);Q1s=V1s[F7T.o5s]();b1s=V1s["readUint32Array"](Q1s);P1s=V1s[F7T.o5s]()*3;t1s=V1s[F7T.Q5s](P1s);U1s=new Uint32Array(P1s/3);for(var x1s=0;x1s<U1s["length"];x1s++){U1s[x1s]=x1s;}s1s=V1s["readFloat64"]();L1s=V1s["readFloat64"]();k1s=V1s[F7T.o5s]();A1s=new THREE["Box3"]();A1s["setFromArray"](D1s);F1s=h1s*b1s[o0s]>10000&&h1s>10;if(F1s){}z1s=D1s[A0s]+w1s["length"]*+b1s[F0s]+t1s["length"]+U1s["length"];z1s*=4;S1s={'\x76\x6f\x6c\x75\x6d\x65':s1s,'\x6e\x6f\x72\x6d\x61\x6c\x73':w1s,'\x75\x76\x73':e1s,'\x69\x6e\x73\x74\x65\x64':F1s,'\x65\x64\x67\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':t1s,'\x62\x6f\x78':A1s,'\x64\x65\x69\x64':R1s,'\x70\x6f\x73\x69\x74\x69\x6f\x6e\x73':D1s,'\x65\x64\x67\x65\x69\x6e\x64\x69\x63\x65\x73':U1s,'\x69\x6e\x64\x69\x63\x65\x73':b1s,'\x72\x63\x6f\x75\x6e\x74':h1s,'\x61\x72\x65\x61':L1s,'\x73\x74\x79\x6c\x65':k1s,'\x73\x69\x7a\x65':z1s,'\x69\x6e\x73\x74\x61\x6e\x63\x65\x73':[]};return S1s;};function initLoadPacks(){var i0s="l";i0s+="ength";var s3s,Q3s,L3s,M3s;s3s=0;Q3s=[];L3s=0;usedMemorySize=0;for(var R3s=0;R3s<filePackages["packages"][i0s];R3s++){var r0s="getFileSta";r0s+="tus";M3s=filePackages["packages"][R3s];if(filePackages[r0s](M3s["fid"])===1){if(usedMemorySize+M3s["size"]<maxMemorySize){var X0s="siz";X0s+="e";Q3s["push"](M3s["id"]);totalinst+=M3s["mcount"];usedPackCount++;usedMemorySize+=M3s[X0s];}}}gpk(Q3s);};styles=new BIMVIZ["D3"]["UniqueDict"]();styles["requestCount"]=0;function hp(h6s,U6s){var A7T=F1BB;var V6s,x6s,b6s,D6s;V6s=new DataStream(h6s);x6s=V6s[A7T.o5s]();if(x6s==1){b6s=V6s[A7T.o5s]();D6s=tasks[b6s];if(D6s){D6s["ReceiveData"](V6s,U6s,false);}}else if(x6s==2){onReceiveSelectEntity(V6s);}else if(x6s==3){onReceiveQueryElements(V6s);}else if(x6s==4){onRTree(V6s,U6s,false);}else if(x6s==5){onGOverview(V6s);}else if(x6s==8){onROverview(V6s);}else if(x6s==9){onRBScene(V6s,U6s,false);}else if(x6s==100){if(settings[A7T.C6T]==1){onrp0(V6s,U6s,false);}else if(settings[A7T.C6T]==2){onrp(V6s,U6s,false);}}else if(x6s==101){onrpickdata(V6s);}else if(x6s==102){onRBScene(V6s,U6s,false);}else if(x6s==103){onrquesttf(V6s,U6s,false);}}function onReceiveTree(d3s){var v3s,S3s,H3s,G3s,q3s,B3s;v3s=d3s[F1BB.o5s]();S3s=d3s["readInt32Array"](v3s*3);H3s=d3s[F1BB.o5s]();for(var k3s=0,p3s=0;k3s<S3s["length"];k3s+=3,p3s++){var Y0s="a";Y0s+="ddPackage";G3s=S3s[k3s];q3s=S3s[k3s+1];B3s=S3s[k3s+2]*4;filePackages[Y0s](p3s,G3s,B3s,q3s);}totalPack=v3s;initLoadPacks();}function gpk0(O7s){var T7s;totalPack=O7s;for(var l7s=0;l7s<O7s;l7s++){T7s=projId+",pack,"+l7s;localDB["hasKey"](T7s,function(I7s,K7s){var n7s,W7s,N7s,j7s;n7s=new Uint8Array(K7s);W7s=pako["inflate"](n7s);N7s=new DataStream(W7s);j7s=N7s[F1BB.o5s]();onrp0(N7s,K7s,true);},function(C7s){var u7s;u7s="pack,"+C7s;_snd(u7s);});}}styles[M1BB]=0;
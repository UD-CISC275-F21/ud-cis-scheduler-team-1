import { Semester } from "../interfaces/semester";

//courses satisfying multicultural
export const multiCult = ["AFRA 110", "AFRA 193", "AFRA 205", "AFRA 206", "AFRA 220", "AFRA 221", "AFRA 222", "AFRA 223", "AFRA 225", 
    "AFRA 250", "AFRA 251", "AFRA 304", "AFRA 305", "AFRA 306", "AFRA 314", "AFRA 315", "AFRA 318", "AFRA 320", "AFRA 321", "AFRA 325", 
    "AFRA 329", "AFRA 334", "AFRA 362", "AFRA 370", "AFRA 371", "AFRA 372", "AFRA 373", "AFRA 381", "AFRA 398", "AFRA 434", "AFRA 440", 
    "AFRA 442", "AFRA 443", "AFRA 445", "AFRA 446", "AFRA 447", "AFRA 484", "ANFS 100", "ANFS 102", "ANTH 101", "ANTH 103", "ANTH 201", 
    "ANTH 209", "ANTH 210", "ANTH 211", "ANTH 212", "ANTH 223", "ANTH 228", "ANTH 229", "ANTH 230", "ANTH 232", "ANTH 233", "ANTH 234", 
    "ANTH 235", "ANTH 236", "ANTH 239", "ANTH 245", "ANTH 265", "ANTH 269", "ANTH 310", "ANTH 312", "ANTH 318", "ANTH 320", "ANTH 321", 
    "ANTH 325", "ANTH 326", "ANTH 330", "ANTH 333", "ANTH 343", "ANTH 344", "ANTH 351", "ANTH 352", "ANTH 354", "ANTH 356", "ANTH 360", 
    "ANTH 372", "ANTH 375", "ANTH 381", "ANTH 383", "ANTH 401", "APEC 100", "ARAB 208", "ART 204 ", "ART 324 ", "ART 407 ", "ARTC 110", 
    "ARTH 101", "ARTH 151", "ARTH 153", "ARTH 163", "ARTH 164", "ARTH 175", "ARTH 204", "ARTH 210", "ARTH 228", "ARTH 229", "ARTH 232", 
    "ARTH 233", "ARTH 237", "ARTH 246", "ARTH 248", "ARTH 299", "ARTH 303", "ARTH 311", "ARTH 323", "ARTH 332", "ARTH 333", "ARTH 380", 
    "ARTH 419", "ARTH 440", "ARTH 444", "ARTH 445", "ARTH 456", "BHAN 236", "BHAN 322", "BISC 127", "DIST 250", "CHIN 204", "CHIN 451", 
    "CHIN 452", "CIEG 492", "COMM 204", "COMM 263", "COMM 421", "CRJU 350", "CRJU 355", "CRJU 452", "ECON 311", "ECON 418", "EDUC 247", 
    "EDUC 258", "EDUC 419", "EDUC 459", "ENGL 215", "ENGL 216", "ENGL 278", "ENGL 345", "ENGL 350", "ENGL 376", "ENGL 380", "ENGL 381", 
    "ENGL 382", "ENWC 413", "FASH 213", "FASH 319", "FREN 207", "FREN 457", "FREN 458", "GAME 352", "GEOG 102", "GEOG 120", "GEOG 203", 
    "GEOG 226", "GEOG 310", "GEOG 430", "GEOG 450", "HDFS 202", "HDFS 203", "HIST 103", "HIST 104", "HIST 130", "HIST 131", "HIST 134", 
    "HIST 135", "HIST 137", "HIST 138", "HIST 139", "HIST 140", "HIST 145", "HIST 146", "HIST 224", "HIST 300", "HIST 304", "HIST 327", 
    "HIST 335", "HIST 364", "HIST 368", "HIST 369", "HIST 370", "HIST 371", "HIST 377", "HIST 378", "HIST 380", "HIST 381", "HIST 388", 
    "HIST 390", "HIST 392", "HIST 395", "HIST 397", "HIST 439", "HIST 444", "HIST 460", "HIST 477", "HLPR 233", "HLTH 245", "HLTH 315", 
    "HOSP 214", "HOSP 316", "HOSP 317", "HOSP 328", "HOSP 330", "HOSP 355", "JAPN 208", "LARC 202", "LING 101", "LING 102", "LING 203", 
    "LING 222", "LING 480", "LLCU 207", "LLCU 332", "LLCU 333", "LLCU 335", "LLCU 345", "MAST 202", "MAST 375", "MUSC 205", "MUSC 227", 
    "MUSC 302", "MUSC 438", "NTDT 301", "NTDT 475", "NURS 235", "NURS 412", "NURS 414", "PHIL 204", "PHIL 208", "PHIL 307", "PHIL 309", 
    "PHIL 310", "PHIL 327", "PHIL 335", "PHIL 337", "PHIL 338", "PHIL 410", "PLSC 100", "POSC 230", "POSC 322", "POSC 361", "POSC 406", 
    "POSC 412", "POSC 422", "POSC 433", "POSC 455", "RUSS 325", "SOCI 213", "SOCI 471", "SPAN 207", "SPAN 208", "SPAN 326", "SPAN 447", 
    "SPAN 471", "SPAN 472", "SPAN 473", "SPAN 474", "SPAN 479", "SPAN 491", "SPTM 318", "SPTM 416", "THEA 240", "THEA 241", "THEA 340", 
    "UAPP 449", "WOMS 200", "WOMS 201", "WOMS 202", "WOMS 209", "WOMS 210", "WOMS 212", "WOMS 214", "WOMS 216", "WOMS 240", "WOMS 284", 
    "WOMS 304", "WOMS 306", "WOMS 314", "WOMS 332", "WOMS 336", "WOMS 341", "WOMS 356"];

//courses satisfying first year experience
export const firstYearExp = ["ARSC 116", "BHAN 135", "BMEG 101", "BUAD 110", "EDUC 100", "EGGG 101", 
    "ENSC 101", "KAAP 105", "KAAP 155", "LLCU 111", "MAST 100", "NURS 100", "UNIV 101"];

//courses satisfying discovery learning experience
export const dle = ["ACCT 363", "ACCT 364", "AFRA 446", "AFRA 464", "AFRA 468", "AFSC 310", "ANFS 404", "ANFS 411", 
    "ANFS 417", "ANFS 418", "ANFS 421", "ANFS 422", "ANFS 426", "ANFS 464", "ANTH 218", "ANTH 232", "ANTH 334", "ANTH 338", 
    "ANTH 341", "ANTH 350", "ANTH 375", "ANTH 404", "ANTH 424", "ANTH 463", "ANTH 486", "ANTH 489", "APEC 409", "APEC 412", 
    "APEC 430", "ARSC 316", "ARSC 480", "ARSC 482", "ART 408 ", "ART 416 ", "ARTC 464", "ARTH 264", "ARTH 364", "ARTH 464", 
    "BHAN 464", "BISC 312", "BISC 316", "BISC 411", "BISC 412", "BISC 413", "BISC 451", "BISC 452", "BISC 468", "BISC 484", 
    "BMEG 450", "BREG 450", "BUAD 364", "BUAD 430", "BUAD 444", "BUAD 445", "BUAD 448", "BUAD 468", "BUAD 478", "CGSC 310", 
    "CGSC 420", "CHEG 432", "CHEG 468", "CHEM 402", "CHEM 468", "CIEG 461", "CIEG 465", "CIEG 491", "CISC 357", "CISC 374", 
    "CISC 475", "CISC 498", "CISC 499", "COMM 326", "COMM 351", "COMM 364", "COMM 388", "COMM 408", "COMM 409", "COMM 424", 
    "COMM 426", "COMM 427", "COMM 468", "COMM 490", "CPEG 422", "CPEG 460", "CRJU 368", "CRJU 424", "CRJU 451", "CRJU 452", 
    "CRJU 495", "DANC 210", "DANC 400", "DANC 401", "DIST 200", "DIST 345", "DIST 400", "ECON 436", "EDUC 205", "EDUC 310", 
    "EDUC 400", "EDUC 413", "ELEG 450", "ELEG 498", "ELEG 499", "ENEP 364", "ENEP 472", "ENGL 308", "ENGL 462", "ENGL 464", 
    "ENGL 468", "ENGL 469", "ENGL 480", "ENSC 425", "ENSC 426", "ENSC 464", "ENTR 353", "ENTR 364", "ENTR 420", "ENTR 450", 
    "ENTR 455", "ENTR 456", "ENTR 458", "ENTR 461", "ENTR 464", "ENTR 489", "ENWC 408", "ENWC 409", "ENWC 415", "ENWC 423", 
    "ENWC 426", "ENWC 468", "FASH 320", "FASH 417", "FASH 419", "FASH 425", "FINC 364", "FINC 418", "FINC 425", "FINC 426", 
    "FREN 456", "GAME 401", "GEOG 309", "GEOG 315", "GEOL 306", "GEOL 434", "HDFS 225", "HDFS 334", "HDFS 335", "HDFS 436", 
    "HIST 268", "HIST 304", "HIST 464", "HIST 468", "HIST 491", "HLTH 215", "HLTH 320", "HLTH 395", "HLTH 490", "HLTH 491", 
    "HLTH 495", "HOSP 300", "HOSP 355", "HOSP 364", "HOSP 488", "HOSP 489", "HOSP 495", "JAPN 490", "JOUR 464", "KAAP 106", 
    "KAAP 107", "KAAP 206", "KAAP 207", "KAAP 285", "KAAP 301", "KAAP 306", "KAAP 307", "KAAP 400", "KAAP 458", "KAAP 459", 
    "LAMS 464", "LARC 332", "LARC 364", "LARC 456", "LEAD 268", "LEAD 340", "LEAD 390", "LEAD 468", "LEAD 490", "LING 353", 
    "LING 471", "MAST 407", "MAST 421", "MAST 432", "MAST 443", "MAST 468", "MCST 464", "MEEG 401", "MEEG 402", "MISY 364", 
    "MLSC 105", "MLSC 106", "MLSC 205", "MLSC 206", "MLSC 305", "MLSC 306", "MLSC 405", "MLSC 406", "MMSC 410", "MMSC 444", 
    "MMSC 455", "MMSC 462", "MMSC 473", "MMSC 474", "MMSC 475", "MMSC 476", "MMSC 477", "MMSC 478", "MMSC 479", "MMSC 481", 
    "MSEG 401", "MSST 401", "MSST 402", "MSST 407", "MSST 410", "MSST 464", "MUSC 401", "MUSC 423", "MUSC 457", "MUSC 458", 
    "MUSC 464", "MUSC 483", "MUSC 499", "NSCI 368", "NSCI 468", "NTDT 350", "NTDT 460", "NURS 353", "NURS 355", "NURS 357", 
    "NURS 375", "NURS 443", "NURS 453", "NURS 457", "NURS 459", "NURS 478", "NURS 485", "PHIL 338", "PHYS 468", "PLSC 364", 
    "PLSC 405", "POSC 423", "POSC 447", "POSC 464", "POSC 468", "POSC 469", "POSC 471", "POSC 475", "POSC 497", "POSC 498", 
    "PSYC 365", "PSYC 369", "PSYC 405", "PSYC 468", "SCEN 105", "SCEN 111", "SCEN 117", "SCEN 119", "SOCI 368", "SOCI 410", 
    "SOCI 441", "SOCI 449", "SOCI 464", "SOCI 471", "SPAN 318", "SPTM 420", "STAT 468", "THEA 314", "THEA 408", "UAPP 268", 
    "UAPP 300", "UAPP 390", "UAPP 468", "UNIV 118", "UNIV 240", "UNIV 260", "UNIV 262", "UNIV 268", "UNIV 301", "UNIV 302", 
    "UNIV 303", "UNIV 304", "UNIV 305", "UNIV 320", "UNIV 321", "UNIV 322", "UNIV 340", "UNIV 360", "UNIV 361", "UNIV 362", 
    "UNIV 364", "UNIV 365", "UNIV 368", "UNIV 370", "UNIV 371", "UNIV 372", "UNIV 373", "UNIV 401", "UNIV 402", "UNIV 440", 
    "UNIV 460", "UNIV 462", "UNIV 468", "WOMS 498"];

//courses satisfying arts and sciences group A requirement
export const groupA = ["AFRA 206", "AFRA 250", "AFRA 295", "AFRA 305", "AFRA 314", "AFRA 315", "AFRA 318", "AFRA 325", "AFRA 370", 
    "AFRA 372", "AFRA 442", "AFRA 447", "ANTH 201", "ANTH 205", "ANTH 216", "ANTH 227", "ANTH 239", "ANTH 251", "ANTH 338", "ANTH 344", 
    "ANTH 381", "ANTH 457", "ART 129 ", "ART 133 ", "ART 180 ", "ART 200 ", "ART 204 ", "ART 230 ", "ART 231 ", "ART 233 ", "ART 243 ", 
    "ART 246 ", "ART 250 ", "ART 280 ", "ART 281 ", "ART 289 ", "ART 290 ", "ARTC 110", "ARTH 101", "ARTH 150", "ARTH 151", "ARTH 153", 
    "ARTH 154", "ARTH 162", "ARTH 198", "ARTH 199", "ARTH 203", "ARTH 213", "ARTH 219", "ARTH 229", "ARTH 237", "ARTH 243", "ARTH 248", 
    "ARTH 249", "ARTH 251", "ARTH 302", "ARTH 307", "ARTH 319", "ARTH 321", "ARTH 323", "ARTH 325", "ARTH 332", "ARTH 333", "ARTH 403", 
    "ARTH 444", "ARTH 445", "ARTH 456", "ARSC 297", "ARSC 298", "ARSC 301", "CHIN 204", "CGSC 421", "COMM 256", "CISC 355", "CRJU 335", 
    "CRJU 336", "DANC 101", "DANC 202", "DANC 203", "DANC 204", "DANC 206", "DANC 207", "DANC 208", "DANC 210", "DANC 302", "DANC 303", 
    "DANC 304", "DANC 305", "DANC 306", "DANC 307", "DANC 309", "DANC 310", "DANC 312", "DANC 313", "EDUC 240", "EDUC 470", "EDUC 485", 
    "ENGL 101", "ENGL 150", "ENGL 151", "ENGL 201", "ENGL 202", "ENGL 207", "ENGL 208", "ENGL 209", "ENGL 210", "ENGL 217", "ENGL 220", 
    "ENGL 230", "ENGL 280", "ENGL 284", "ENGL 290", "ENGL 318", "ENGL 324", "ENGL 338", "ENGL 348", "ENGL 350", "ENGL 365", "ENGL 372", 
    "ENGL 374", "ENGL 376", "ENGL 380", "ENTR 356", "FASH 133", "FREN 211", "GAME 201", "GAME 351", "GAME 352", "GEOG 203", "GEOG 345", 
    "GEOG 346", "GEOG 416", "GRMN 211", "GREK 301", "GREK 302", "HLTH 215", "HLTH 241", "HONR 290", "HONR 295", "ITAL 211", "ITAL 212", 
    "JAPN 204", "LARC 103", "LARC 232", "LLCU 316", "LLCU 319", "LLCU 320", "LLCU 321", "LLCU 322", "LLCU 323", "LLCU 326", "LLCU 327", 
    "LLCU 328", "LLCU 329", "LLCU 331", "LLCU 332", "LLCU 337", "LLCU 338", "LLCU 380", "LLCU 416", "LLCU 420", "LATN 301", "LATN 302", 
    "MUSC 101", "MUSC 102", "MUSC 105", "MUSC 112", "MUSC 119", "MUSC 120", "MUSC 122", "MUSC 123", "MUSC 124", "MUSC 150", "MUSC 177", 
    "MUSC 181", "MUSC 182", "MUSC 204", "MUSC 224", "MUSC 227", "MUSC 228", "MUSC 241", "MUSC 281", "MUSC 293", "MUSC 334", "MUSC 430", 
    "MUSC 432", "MUSC 433", "MUSC 438", "MUSC 460", "MUSC 461", "MUSC 462", "MUSC 463", "MUSC 470", "MUSC 471", "MUSC 472", "MUSC 473", 
    "MUSC 474", "MUSC 475", "MUSC 476", "MUSC 477", "MUSC 478", "MUSC 491", "PHIL 100", "PHIL 102", "PHIL 105", "PHIL 125", "PHIL 200", 
    "PHIL 201", "PHIL 202", "PHIL 203", "PHIL 204", "PHIL 208", "PHIL 209", "PHIL 212", "PHIL 241", "PHIL 244", "PHIL 302", "PHIL 306", 
    "PHIL 307", "PHIL 308", "PHIL 309", "PHIL 310", "PHIL 313", "PHIL 315", "PHIL 316", "PHIL 320", "PHIL 322", "PHIL 327", "PHIL 335", 
    "PHIL 337", "PHIL 338", "PHIL 344", "PHIL 346", "PHIL 448", "POSC 285", "POSC 333", "POSC 435", "POSC 436", "PSYC 447", "RUSS 211", 
    "SPAN 201", "THEA 102", "THEA 104", "THEA 106", "THEA 200", "THEA 202", "THEA 203", "THEA 204", "THEA 205", "THEA 212", "THEA 226", 
    "THEA 227", "THEA 240", "THEA 242", "THEA 300", "THEA 301", "THEA 302", "THEA 304", "THEA 305", "THEA 308", "THEA 309", "THEA 311", 
    "THEA 314", "THEA 340", "THEA 360", "THEA 361", "WOMS 205", "WOMS 216", "WOMS 332", "WOMS 336"]; 

//courses satisying arts and sciences group B requirement
export const groupB = ["AFRA 110", "AFRA 193", "AFRA 220", "AFRA 304", "AFRA 306", "AFRA 320", "AFRA 329", "AFRA 334", "AFRA 362", "AFRA 363", 
    "AFRA 364", "AFRA 369", "AFRA 371", "AFRA 393", "AFRA 398", "AFRA 434", "AFRA 440", "AFRA 445", "AFRA 446", "AFRA 484", "ANTH 101", 
    "ANTH 105", "ANTH 209", "ANTH 210", "ANTH 211", "ANTH 212", "ANTH 225", "ANTH 228", "ANTH 233", "ANTH 265", "ANTH 269", "ANTH 275", 
    "ANTH 312", "ANTH 323", "ANTH 325", "ANTH 326", "ANTH 330", "ANTH 333", "ANTH 334", "ANTH 342", "ANTH 351", "ANTH 360", "ANTH 372", 
    "ANTH 375", "ANTH 383", "ARTH 156", "ARTH 158", "ARTH 163", "ARTH 164", "ARTH 175", "ARTH 204", "ARTH 206", "ARTH 207", "ARTH 208", 
    "ARTH 209", "ARTH 210", "ARTH 217", "ARTH 218", "ARTH 222", "ARTH 225", "ARTH 227", "ARTH 228", "ARTH 230", "ARTH 231", "ARTH 232", 
    "ARTH 233", "ARTH 236", "ARTH 238", "ARTH 239", "ARTH 242", "ARTH 244", "ARTH 246", "ARTH 298", "ARTH 299", "ARTH 303", "ARTH 304", 
    "ARTH 305", "ARTH 310", "ARTH 311", "ARTH 314", "ARTH 318", "ARTH 320", "ARTH 335", "ARTH 380", "ARTH 399", "ASIA 136", "BHAN 351", 
    "CHEM 410", "CHEM 412", "DIST 250", "CMLT 207", "CMLT 208", "CRJU 312", "CRJU 324", "CRJU 351", "CRJU 352", "DANC 209", "ECON 315", 
    "ECON 316", "EDUC 247", "ENGL 204", "ENGL 205", "ENGL 206", "ENGL 214", "ENGL 215", "ENGL 216", "ENGL 278", "ENGL 283", "ENGL 317", 
    "ENGL 321", "ENGL 334", "ENGL 340", "ENGL 341", "ENGL 342", "ENGL 344", "ENGL 345", "ENGL 349", "ENGL 368", "ENGL 378", "ENGL 381", 
    "ENGL 382", "ENGL 386", "FASH 213", "FASH 214", "FASH 224", "FASH 319", "FREN 207", "GEOG 103", "GEOG 226", "GEOG 310", "GRMN 208", 
    "GRMN 255", "GRMN 326", "HEBR 208", "HEBR 209", "HIST 101", "HIST 102", "HIST 103", "HIST 104", "HIST 105", "HIST 106", "HIST 130", 
    "HIST 131", "HIST 134", "HIST 135", "HIST 137", "HIST 138", "HIST 139", "HIST 140", "HIST 145", "HIST 146", "HIST 150", "HIST 152", 
    "HIST 156", "HIST 158", "HIST 170", "HIST 178", "HIST 180", "HIST 190", "HIST 200", "HIST 201", "HIST 210", "HIST 211", "HIST 221", 
    "HIST 222", "HIST 223", "HIST 224", "HIST 241", "HIST 243", "HIST 250", "HIST 252", "HIST 254", "HIST 280", "HIST 300", "HIST 302", 
    "HIST 304", "HIST 307", "HIST 308", "HIST 309", "HIST 310", "HIST 311", "HIST 312", "HIST 313", "HIST 314", "HIST 315", "HIST 316", 
    "HIST 317", "HIST 318", "HIST 319", "HIST 321", "HIST 323", "HIST 327", "HIST 328", "HIST 331", "HIST 332", "HIST 335", "HIST 336", 
    "HIST 337", "HIST 338", "HIST 339", "HIST 340", "HIST 341", "HIST 342", "HIST 343", "HIST 344", "HIST 345", "HIST 347", "HIST 348", 
    "HIST 349", "HIST 350", "HIST 351", "HIST 352", "HIST 353", "HIST 354", "HIST 355", "HIST 356", "HIST 357", "HIST 359", "HIST 360", 
    "HIST 361", "HIST 363", "HIST 364", "HIST 365", "HIST 368", "HIST 369", "HIST 370", "HIST 371", "HIST 373", "HIST 374", "HIST 375", 
    "HIST 376", "HIST 377", "HIST 378", "HIST 380", "HIST 381", "HIST 382", "HIST 384", "HIST 385", "HIST 387", "HIST 388", "HIST 389", 
    "HIST 390", "HIST 392", "HIST 395", "HIST 396", "HIST 397", "HIST 398", "HIST 460", "HONR 291", "HONR 293", "HONR 330", "HONR 338", 
    "HOSP 316", "HOSP 425", "HDFS 203", "ITAL 208", "JOUR 301", "JWST 101", "JWST 303", "JWST 310", "LARC 202", "LEAD 101", "LING 401", 
    "LLCU 207", "LLCU 208", "LLCU 330", "LLCU 333", "LLCU 335", "LLCU 336", "LLCU 340", "LLCU 345", "LLCU 375", "LLCU 430", "MATH 308", 
    "MSST 203", "MUSC 107", "MUSC 205", "MUSC 206", "MUSC 207", "MUSC 208", "MUSC 226", "MUSC 302", "MUSC 345", "NTDT 475", "PHIL 101", 
    "PHIL 300", "PHIL 301", "PHIL 303", "PHIL 305", "PHIL 311", "PHIL 312", "PHYS 480", "PLSC 100", "POSC 304", "POSC 361", "POSC 387", 
    "POSC 491", "PORT 207", "PSYC 415", "PSYC 420", "SOCI 322", "SPAN 207", "SPAN 208", "SPAN 307", "SPAN 325", "SPAN 326", "THEA 241", 
    "THEA 341", "UAPP 220", "WOMS 200", "WOMS 202", "WOMS 210", "WOMS 260", "WOMS 284", "WOMS 291", "WOMS 313", "WOMS 314", "WOMS 324", 
    "WOMS 356"];

//courses satisfying group c arts and sciences requirement
export const groupC = ["AFRA 205", "AFRA 223", "AFRA 225", "AFRA 251", "AFRA 321", "AFRA 350", "AFRA 373", "AFRA 381", "ANFS 100", "ANTH 103",
    "ANTH 218", "ANTH 222", "ANTH 223", "ANTH 229", "ANTH 230", "ANTH 232", "ANTH 234", "ANTH 235", "ANTH 236", "ANTH 245", "ANTH 255",
    "ANTH 302", "ANTH 303", "ANTH 304", "ANTH 310", "ANTH 311", "ANTH 316", "ANTH 318", "ANTH 320", "ANTH 321", "ANTH 324", "ANTH 329", 
    "ANTH 332", "ANTH 337", "ANTH 341", "ANTH 352", "ANTH 355", "ANTH 356", "ANTH 370", "ANTH 379", "ANTH 382", "ANTH 401", "ANTH 463", 
    "APEC 100", "APEC 150", "APEC 212", "APEC 305", "APEC 316", "APEC 343", "APEC 406", "APEC 409", "APEC 410", "APEC 450", "ARSC 299", 
    "ART 215 ", "ART 324 ", "BHAN 155", "BHAN 226", "BHAN 236", "BHAN 301", "BHAN 322", "BHAN 335", "BUAD 301", "BUAD 309", "CGSC 170", 
    "CGSC 404", "CGSC 410", "CISC 356", "COMM 200", "COMM 204", "COMM 206", "COMM 227", "COMM 228", "COMM 230", "COMM 245", "COMM 305", 
    "COMM 341", "COMM 370", "CRJU 110", "CRJU 201", "CRJU 202", "CRJU 203", "ECON 100", "ECON 101", "ECON 103", "ECON 251", "ECON 300", 
    "ECON 301", "ECON 303", "ECON 304", "ECON 311", "ECON 332", "ECON 360", "ECON 381", "ECON 385", "ECON 393", "EDUC 297", "EDUC 459", 
    "ENEP 250", "ENEP 410", "ENEP 425", "ENEP 426", "ENEP 427", "ENGL 390", "ENGL 394", "ENTR 253", "ENTR 350", "ENTR 457", "FASH 455", 
    "FREN 403", "GEOG 102", "GEOG 120", "GEOG 229", "GEOG 230", "GEOG 235", "GEOG 236", "GEOG 311", "GEOG 315", "GEOG 320", "GEOG 325", 
    "GEOG 430", "HDFS 201", "HDFS 202", "HDFS 220", "HDFS 221", "HDFS 223", "HDFS 230", "HDFS 270", "HDFS 271", "HDFS 318", "HDFS 329", 
    "HDFS 330", "HDFS 331", "HDFS 333", "HDFS 339", "HDFS 401", "HDFS 405", "HDFS 409", "HDFS 427", "HLPR 211", "HLPR 233", "HLTH 320", 
    "HLTH 315", "HONR 292", "HONR 294", "HONR 331", "KAAP 484", "LEAD 100", "LEAD 200", "LEAD 300", "LING 101", "LING 102", "LING 203", 
    "LING 222", "LING 265", "LING 404", "LING 471", "MAST 375", "MUSC 326", "MUSC 487", "NTDT 301", "NTDT 455", "PHIL 330", "PHIL 410", 
    "PLSC 145", "POSC 150", "POSC 220", "POSC 230", "POSC 240", "POSC 270", "POSC 317", "POSC 322", "POSC 329", "POSC 342", "POSC 345", 
    "POSC 355", "POSC 380", "POSC 412", "POSC 422", "POSC 441", "POSC 451", "POSC 455", "POSC 456", "PSYC 100", "PSYC 105", "PSYC 303", 
    "PSYC 325", "PSYC 333", "PSYC 334", "SOCI 201", "SOCI 204", "SOCI 209", "SOCI 213", "SOCI 215", "SOCI 302", "SOCI 303", "SOCI 304", 
    "SOCI 305", "SOCI 308", "SOCI 311", "SOCI 325", "SOCI 335", "SOCI 343", "SOCI 345", "SOCI 360", "SOCI 361", "SOCI 375", "SOCI 471", 
    "SPTM 330", "SPPA 414", "UAPP 102", "UAPP 110", "UAPP 225", "UAPP 403", "WOMS 201", "WOMS 206", "WOMS 212", "WOMS 240", "WOMS 301", 
    "WOMS 304", "WOMS 306", "WOMS 355", "WOMS 363", "WOMS 389"];

//courses satisfying arts and sciences group d requirement
export const groupD = ["AGRI 100", "ANFS 101", "ANFS 102", "ANFS 230", "ANFS 241", "ANFS 261", "ANFS 305", "ANTH 102", "ANTH 104", "ANTH 106", 
    "ANTH 202", "ANTH 204", "ANTH 300", "ANTH 301", "ANTH 305", "ANTH 306", "ANTH 307", "ANTH 404", "ANTH 405", "ANTH 424", "ARTC 210", 
    "ARTH 205", "BISC 103", "BISC 104", "BISC 105", "BISC 106", "BISC 107", "BISC 110", "BISC 113", "BISC 115", "BISC 116", "BISC 117", 
    "BISC 127", "BISC 152", "BISC 171", "BISC 195", "BISC 207", "BISC 208", "CHEM 100", "CHEM 101", "CHEM 102", "CHEM 103", "CHEM 104", 
    "CHEM 111", "CHEM 112", "CHEM 131", "CHEM 132", "CHEM 133", "CHEM 134", "CISC 101", "CISC 103", "CISC 106", "CISC 108", "CISC 181", 
    "ECON 415", "EDUC 421", "ELEG 303", "ENWC 103", "ENWC 201", "ENWC 205", "ENWC 215", "ENTR 209", "ENTR 460", "ENSC 102", "GEOG 101", 
    "GEOG 106", "GEOG 111", "GEOG 152", "GEOG 220", "GEOG 271", "GEOG 480", "GEOG 483", "GEOL 105", "GEOL 107", "GEOL 108", "GEOL 109", 
    "GEOL 110", "GEOL 113", "GEOL 115", "HLPR 222", "KAAP 180", "KAAP 220", "KAAP 221", "KAAP 309", "KAAP 310", "LARC 222", "LING 451", 
    "MAST 120", "MAST 200", "MAST 202", "MAST 215", "MATH 201", "MATH 210", "MATH 221", "MATH 222", "MATH 230", "MATH 231", "MATH 232", 
    "MATH 241", "MATH 242", "MMSC 160", "MMSC 200", "MMSC 220", "MMSC 230", "MMSC 240", "MMSC 450", "MSEG 288", "MUSC 106", "NSCI 100", 
    "NSCI 320", "NTDT 200", "PHIL 205", "PHIL 207", "PHIL 211", "PHYS 133", "PHYS 141", "PHYS 143", "PHYS 144", "PHYS 145", "PHYS 146", 
    "PHYS 201", "PHYS 202", "PHYS 203", "PHYS 204", "PHYS 207", "PHYS 208", "PHYS 221", "PHYS 222", "PHYS 227", "PHYS 228", "PHYS 403", 
    "PHYS 404", "PLSC 101", "PLSC 140", "PLSC 170", "PLSC 204", "PLSC 212", "PLSC 214", "PLSC 218", "PLSC 302", "PSYC 314", "SCEN 101", 
    "SCEN 102", "SCEN 105", "SCEN 107", "SCEN 109", "SCEN 111", "SCEN 115", "SCEN 117", "SCEN 119", "STAT 200", "WOMS 422"];

//courses satisfying capstone requirement
export const capstone = ["ACCT 425", "AFRA 480", "AFRA 490", "AGRI 400", "ANFS 404", "ANFS 411", "ANFS 417", "ANFS 418", "ANFS 421", "ANFS 422", 
    "ANFS 426", "ANTH 486", "ANTH 487", "ANTH 488", "ANTH 489", "APEC 409", "APEC 450", "ART 403 ", "ART 419 ", "ARTC 495", "ARTH 402", 
    "ARTH 405", "ARTH 406", "ARTH 413", "ARTH 414", "ARTH 415", "ARTH 417", "ARTH 419", "ARTH 421", "ARTH 422", "ARTH 423", "ARTH 424", 
    "ARTH 425", "ARTH 427", "ARTH 429", "ARTH 431", "ARTH 433", "ARTH 435", "ARTH 440", "ARTH 445", "ARTH 456", "ARSC 480", "ARSC 482", 
    "BHAN 464", "BISC 315", "BISC 316", "BISC 411", "BISC 412", "BISC 413", "BISC 484", "BMEG 450", "BUAD 441", "BUAD 445", "BUAD 479", 
    "CHEG 432", "CHEM 402", "CHEM 465", "CHEM 468", "CIEG 461", "CIEG 491", "CGSC 380", "CGSC 451", "CGSC 470", "CGSC 485", "COMM 408", 
    "COMM 409", "COMM 413", "COMM 417", "COMM 421", "COMM 423", "COMM 424", "COMM 426", "COMM 427", "COMM 431", "COMM 443", "COMM 450", 
    "COMM 452", "COMM 453", "COMM 456", "COMM 458", "COMM 468", "COMM 476", "COMM 485", "COMM 490", "CISC 475", "CISC 499", "CRJU 357", 
    "CRJU 417", "CRJU 420", "CRJU 424", "CRJU 425", "CRJU 431", "CRJU 435", "CRJU 437", "CRJU 451", "CRJU 452", "CRJU 456", "CRJU 460", 
    "CRJU 475", "CRJU 489", "CRJU 495", "ECON 422", "ECON 433", "ECON 435", "ECON 436", "EDUC 400", "EDUC 422", "EDUC 433", "ELEG 498", 
    "ENEP 364", "ENEP 472", "ENEP 485", "ENGL 462", "ENGL 464", "ENGL 480", "ENWC 465", "ENTR 455", "ENSC 450", "FASH 484", "FASH 490", 
    "FINC 425", "FINC 426", "GAME 490", "GEOG 445", "GEOG 479", "GEOL 306", "GEOL 401", "GEOL 405", "HIST 400", "HLTH 492", "HLTH 495", 
    "HOSP 450", "HOSP 489", "HOSP 495", "HDFS 422", "HDFS 428", "HDFS 449", "JAPN 490", "KAAP 400", "KAAP 441", "KAAP 442", "KAAP 485", 
    "KAAP 487", "LARC 456", "LLCU 499", "LEAD 490", "LEST 450", "LING 401", "LING 471", "LING 480", "MISY 432", "MAST 309", "MAST 476", 
    "MAST 492", "MSEG 401", "MATH 420", "MATH 460", "MATH 512", "MATH 530", "MATH 549", "MEEG 401", "MEEG 402", "MMSC 441", "MMSC 442", 
    "MMSC 443", "MMSC 444", "MMSC 462", "MMSC 473", "MMSC 474", "MMSC 475", "MMSC 476", "MMSC 477", "MMSC 478", "MMSC 479", "MMSC 481", 
    "MUSC 420", "MUSC 423", "MUSC 458", "MUSC 464", "MUSC 483", "MUSC 499", "NSCI 407", "NSCI 429", "NSCI 430", "NSCI 468", "NURS 443", 
    "NURS 477", "NURS 478", "NURS 479", "NURS 485", "NTDT 403", "PHIL 465", "PHYS 460", "PHYS 468", "PLSC 455", "POSC 468", "POSC 497", 
    "POSC 498", "POSC 499", "PSYC 405", "PSYC 409", "PSYC 415", "PSYC 420", "PSYC 435", "PSYC 466", "PSYC 468", "SOCI 407", "SOCI 410", 
    "SOCI 413", "SOCI 415", "SOCI 416", "SOCI 418", "SOCI 420", "SOCI 425", "SOCI 428", "SOCI 430", "SOCI 433", "SOCI 444", "SOCI 449", 
    "SOCI 450", "SOCI 470", "SOCI 471", "SPAN 491", "SPTM 464", "STAT 468", "UAPP 440", "UNIV 402", "UNIV 468", "WOMS 403", "WOMS 410"];

//courses satisfying second writing requirement for Arts and Sciences
export const secondWrite = ["AFRA 250", "AFRA 304", "AFRA 305", "AFRA 306", "AFRA 314", "AFRA 325", "AFRA 329", "AFRA 362", "AFRA 363", 
    "AFRA 370", "AFRA 398", "AFRA 434", "AFRA 440", "AFRA 442", "AFRA 443", "AFRA 445", "AFRA 484", "ANTH 326", "ANTH 486", "ANTH 487", 
    "ANTH 488", "ANTH 489", "ART 315 ", "ART 324 ", "ARTH 301", "ARTH 302", "ARTH 303", "ARTH 310", "ARTH 311", "ARTH 314", "ARTH 323", 
    "ARTH 332", "ARTH 333", "ARTH 334", "ARTH 335", "ARTH 380", "ARTH 402", "ARTH 403", "ARTH 405", "ARTH 406", "ARTH 413", "ARTH 417", 
    "ARTH 419", "ARTH 423", "ARTH 429", "ARTH 431", "ARTH 433", "ARTH 435", "ARTH 440", "ARTH 445", "ARTH 444", "ARTH 456", "ARSC 316", 
    "BISC 452", "BISC 498", "CHEM 410", "CHEM 412", "CGSC 420", "CGSC 485", "COMM 306", "COMM 311", "COMM 329", "COMM 423", "COMM 424", 
    "COMM 427", "COMM 485", "CRJU 312", "CRJU 417", "CRJU 452", "CRJU 460", "CRJU 489", "ENEP 410", "ENEP 427", "ENEP 425", "ENEP 426", 
    "ENEP 468", "ENEP 470", "ENEP 472", "ENGL 225", "ENGL 280", "ENGL 301", "ENGL 304", "ENGL 305", "ENGL 306", "ENGL 307", "ENGL 308", 
    "ENGL 309", "ENGL 312", "ENGL 317", "ENGL 318", "ENGL 321", "ENGL 322", "ENGL 324", "ENGL 325", "ENGL 328", "ENGL 331", "ENGL 332", 
    "ENGL 334", "ENGL 338", "ENGL 340", "ENGL 341", "ENGL 342", "ENGL 344", "ENGL 345", "ENGL 347", "ENGL 348", "ENGL 351", "ENGL 352", 
    "ENGL 356", "ENGL 365", "ENGL 368", "ENGL 371", "ENGL 372", "ENGL 373", "ENGL 374", "ENGL 376", "ENGL 380", "ENGL 381", "ENGL 382", 
    "ENGL 385", "ENGL 386", "ENGL 409", "ENGL 410", "ENGL 411", "ENGL 412", "ENGL 413", "ENGL 416", "ENGL 418", "ENGL 430", "ENGL 450", 
    "ENGL 480", "ENGL 491", "GEOG 346", "GEOG 445", "GEOL 401", "HIST 250", "HIST 300", "HIST 302", "HIST 307", "HIST 308", "HIST 309", 
    "HIST 310", "HIST 313", "HIST 314", "HIST 318", "HIST 319", "HIST 323", "HIST 328", "HIST 334", "HIST 335", "HIST 337", "HIST 338", 
    "HIST 340", "HIST 341", "HIST 348", "HIST 349", "HIST 350", "HIST 352", "HIST 353", "HIST 354", "HIST 355", "HIST 356", "HIST 359", 
    "HIST 360", "HIST 361", "HIST 363", "HIST 365", "HIST 368", "HIST 369", "HIST 370", "HIST 373", "HIST 374", "HIST 377", "HIST 378", 
    "HIST 380", "HIST 382", "HIST 387", "HIST 388", "HIST 389", "HIST 392", "HIST 395", "HIST 397", "HIST 400", "HIST 411", "HIST 439", 
    "HIST 471", "HIST 473", "HIST 474", "HIST 475", "HIST 477", "HIST 479", "LLCU 321", "LLCU 327", "LLCU 328", "LLCU 329", "LLCU 330", 
    "LLCU 332", "LLCU 335", "LLCU 338", "LLCU 340", "LLCU 375", "LLCU 380", "LLCU 416", "LLCU 430", "LLCU 490", "LLCU 495", "MCST 402", 
    "MATH 308", "MATH 512", "MUSC 312", "MUSC 313", "MUSC 345", "MUSC 407", "NSCI 407", "NSCI 442", "PHIL 300", "PHIL 444", "PHIL 465", 
    "PHYS 460", "PHYS 480", "POSC 380", "POSC 387", "POSC 408", "POSC 411", "POSC 413", "POSC 414", "POSC 415", "POSC 419", "POSC 426", 
    "POSC 429", "POSC 433", "POSC 436", "POSC 443", "POSC 446", "POSC 448", "POSC 450", "POSC 459", "POSC 472", "POSC 482", "PSYC 314", 
    "PSYC 340", "PSYC 350", "PSYC 380", "PSYC 394", "PSYC 402", "PSYC 405", "PSYC 414", "PSYC 415", "PSYC 416", "PSYC 420", "PSYC 425", 
    "PSYC 445", "PSYC 492", "SOCI 305", "SOCI 407", "SOCI 415", "SOCI 418", "SOCI 425", "SOCI 428", "SOCI 433", "SOCI 444", "SOCI 449", 
    "SOCI 450", "SOCI 470", "THEA 340", "ENEP 425", "UAPP 230", "UAPP 401", "UNIV 402", "UNIV 490", "UNIV 491", "UNIV 495", "WOMS 308", 
    "WOMS 313"];

//list of engineering breadth courses
export const engineerBreadth = ["AFRA 305", "AFRA 308", "AFRA 330", "AFRA 443", "ANTH 354", "APEC 324", "ARAB 105", "ARAB 106", "ARAB 107", 
    "ARAB 200", "ARAB 201", "ARAB 205", "ARAB 208", "ART 406 ", "ARTH 198", "ARTH 199", "ARTH 249", "CHIN 105", "CHIN 106", "CHIN 107", 
    "CHIN 200", "CHIN 201", "CHIN 205", "CHIN 206", "CHIN 208", "CHIN 451", "CHIN 452", "CHIN 455", "CRJU 340", "CRJU 355", "CRJU 369", 
    "CRJU 375", "ECON 308", "ECON 320", "ECON 340", "ECON 408", "ECON 418", "ECON 430", "ECON 433", "ECON 443", "ECON 483", "ELEG 491", 
    "ENGL 214", "ENGL 294", "ENGL 301", "ENGL 312", "ENGL 318", "ENGL 322", "ENGL 325", "ENGL 328", "ENGL 331", "ENGL 332", "ENGL 338", 
    "ENGL 347", "ENGL 351", "ENGL 352", "ENGL 353", "ENGL 356", "ENGL 368", "ENGL 371", "ENGL 372", "ENGL 373", "ENGL 381", "ENGL 382", 
    "ENGL 410", "ENGL 413", "ENGL 472", "ENGL 494", "FASH 419", "FREN 105", "FREN 106", "FREN 107", "FREN 200", "FREN 205", "FREN 206", 
    "FREN 208", "FREN 209", "FREN 250", "FREN 301", "FREN 302", "FREN 303", "FREN 305", "FREN 306", "FREN 307", "FREN 308", "FREN 309", 
    "FREN 314", "FREN 325", "FREN 326", "FREN 350", "FREN 355", "FREN 376", "FREN 404", "FREN 405", "FREN 406", "FREN 407", "FREN 409", 
    "FREN 411", "FREN 412", "FREN 423", "FREN 424", "FREN 437", "FREN 438", "FREN 441", "FREN 442", "FREN 445", "FREN 446", "FREN 451", 
    "FREN 452", "FREN 453", "FREN 454", "FREN 455", "FREN 456", "FREN 457", "FREN 458", "FREN 459", "FREN 460", "FREN 476", "GEOG 230", 
    "GEOG 422", "GREK 101", "GREK 102", "GREK 201", "GREK 202", "GREK 366", "GREK 466", "GRMN 103", "GRMN 104", "GRMN 105", "GRMN 106", 
    "GRMN 107", "GRMN 200", "GRMN 205", "GRMN 206", "GRMN 235", "HEBR 105", "HEBR 106", "HEBR 107", "HEBR 205", "HEBR 366", "HEBR 466", 
    "HIST 336", "HIST 339", "HIST 350", "HIST 365", "ITAL 105", "ITAL 106", "ITAL 107", "ITAL 200", "ITAL 205", "ITAL 206", "JAPN 105", 
    "JAPN 106", "JAPN 107", "JAPN 200", "JAPN 201", "JAPN 202", "JAPN 205", "JAPN 206", "JAPN 208", "JAPN 209", "LLCU 105", "LLCU 106", 
    "LLCU 107", "LLCU 330", "LATN 101", "LATN 102", "LATN 201", "LATN 202", "MUSC 153", "MUSC 195", "MUSC 211", "MUSC 311", "MUSC 312", 
    "MUSC 313", "MUSC 328", "MUSC 363", "MUSC 403", "MUSC 405", "MUSC 407", "MUSC 430", "MUSC 484", "MUSC 485", "POSC 301", "POSC 309", 
    "POSC 310", "POSC 455", "POSC 313", "POSC 316", "POSC 317", "POSC 320", "POSC 322", "POSC 324", "POSC 330", "POSC 339", "POSC 340", 
    "POSC 350", "POSC 355", "POSC 377", "POSC 380", "POSC 407", "POSC 413", "POSC 417", "PORT 216", "PORT 316", "PSYC 310", "PSYC 312", 
    "PSYC 340", "PSYC 390", "PSYC 406", "PSYC 416", "PSYC 425", "PSYC 445", "PSYC 447", "RUSS 105", "RUSS 106", "RUSS 107", "RUSS 200", 
    "RUSS 205", "SOCI 203", "SOCI 312", "SOCI 323", "SOCI 341", "SOCI 348", "SOCI 415", "SOCI 416", "SOCI 418", "SOCI 428", "SOCI 430", 
    "SOCI 450", "SPAN 105", "SPAN 106", "SPAN 107", "SPAN 200", "SPAN 205", "SPAN 206", "SPAN 300", "SPAN 301", "SPAN 302", "SPAN 303", 
    "SPAN 304", "SPAN 305", "SPAN 306", "SPTM 320", "UAPP 406"];

//courses satisfying engineering professional development
export const engineerProfess = ["ACCT 352", "AFSC 310", "AFSC 311", "BUAD 100", "BUAD 306", "BUAD 429", "CHEG 410", "ECON 251", "ENGL 392", 
    "EDUC 413", "EDUC 414", "EDUC 419", "EDUC 420", "SCEN 491", "ENEP 117", "ENEP 402", "ENEP 470", "ENTR 150", "ENTR 155", "ENTR 156", 
    "ENTR 157", "ENTR 351", "ENTR 353", "ENTR 356", "ENTR 364", "ENTR 420", "ENTR 450", "ENTR 451", "ENTR 455", "ENTR 456", "ENTR 457", 
    "ENTR 458", "FINC 459", "ENTR 460", "ENTR 464", "FINC 200", "LEAD 110", "LEAD 341", "LEAD 400", "LEAD 404", "LEAD 411", "UAPP 325", 
    "UAPP 406", "UAPP 411", "UAPP 421"];

//cisc courses not satisfying tech elective
export const noTech = ["CISC 355", "CISC 356", "CISC 357", "CISC 366", "CISC 465", "CISC 466"];

//returns map object that has course code with a boolean.  boolean is for if course has been used to satisfy a req
export function accumulateCourses(semesters: Semester[]):Map<string, boolean>{
    let cours = new Map<string, boolean>();
    for (let i = 0; i < semesters.length; i++){
        for (let j = 0; j < semesters[i].courses.length; j++){
            cours = cours.set(semesters[i].courses[j].info.code, false);
        }
    }
    return cours;
}

//gets courses that are in both subCourse and potentialCourses arrays
export function findCommonCourses(subCourse: string[], potentialCourses: string[]): string[]{
    let courses: string[] = [];
    for (let i = 0; i < subCourse.length; i++){
        if(potentialCourses.includes(subCourse[i])){
            courses = [...courses, subCourse[i]];
        }
    }
    return courses;
}

//Below two functions are used for handling returns for checking requirements 
export interface reqSatisfied{ //individual requirement and if satisfed
    "requirement": string,
    "satisfied": boolean
}

export interface requirementList{ //List of many requirements
    "requirements": reqSatisfied[]
}

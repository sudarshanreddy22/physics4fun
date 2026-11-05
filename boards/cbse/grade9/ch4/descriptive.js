/* Updated: Examples, Pause and Ponder, Revise Reflect Refine | Physics4Fun | Grade 9 | chapter10_sound_waves | Textbook exercises with worked answers */
window.descriptiveData = [];
window.reviseReflectRefineData = [
  {
    "type": "revise-reflect-refine",
    "marks": 2,
    "question": "Which observation best shows that sound is a mechanical wave? (i) reflection (ii) needs a medium (iii) frequency (iv) energy transfer.",
    "answer": "Correct: (ii). Sound needs a material medium; it cannot propagate through vacuum."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 2,
    "question": "When frequency increases in the same medium, which increases: (i) wavelength (ii) speed (iii) compressions per second (iv) time period?",
    "answer": "Correct: (iii). Frequency is the number of compressions/cycles per second. Wavelength and time period decrease at fixed wave speed."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 2,
    "question": "Twenty compressions pass a point in 4 seconds. Find frequency.",
    "answer": "f=20/4=5 Hz. Correct option: (ii)."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 2,
    "question": "A reflected sound arrives after 0.05 s. Is it an echo or reverberation?",
    "answer": "Reverberation/merging with the original sound: 0.05 s is shorter than the approximately 0.1 s separation generally required for a distinct echo."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "Compare the two density–distance graphs in Fig. 10.30: (i) greater wavelength; (ii) smaller amplitude.",
    "answer": "Read the spacing between adjacent compressions for wavelength and the height of density variation for amplitude. The two textbook graph curves must be viewed to select (a) or (b) accurately."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "Three wave curves in Fig. 10.31 have different frequencies. Mark A (highest), B (middle), C (lowest).",
    "answer": "At equal wave speed, A is the curve with the most oscillations in the same distance (shortest wavelength); B has intermediate spacing; C has the fewest oscillations (longest wavelength)."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "Draw a density–distance graph with amplitude 3 units and wavelength 4 cm.",
    "answer": "Draw a sinusoidal curve about the equilibrium-density line, peaks +3 units and troughs −3 units relative to equilibrium. Consecutive peaks must be 4 cm apart. Example: Δρ(x)=3 sin(2πx/4), x in cm."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "A film shows a spacecraft explosion in space with a simultaneous flash and sound. Identify the errors.",
    "answer": "A flash can travel through space, but sound cannot propagate through the vacuum. Thus the audible explosion in open space is physically incorrect."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "A sound wave has wavelength 3.44 m and speed 344 m/s. Find time period.",
    "answer": "f=v/λ=344/3.44=100 Hz. T=1/f=0.010 s."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "A SONAR echo returns in 5 s; ultrasound speed in seawater is 1525 m/s. Find depth.",
    "answer": "Depth=vt/2=(1525×5)/2=3812.5 m."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "An ultrasonic parking sensor detects an obstacle 1.2 m away. Speed is 345 m/s. Find round-trip time.",
    "answer": "t=2d/v=2×1.2/345≈0.00696 s≈6.96 ms."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "Sound speed is 331 m/s at 0°C and 344 m/s at 22°C. Find extra time to travel 1720 m at 0°C.",
    "answer": "Δt=1720/331−1720/344≈0.196 s (about 0.20 s)."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "A sound wave travels at 340 m/s. From Fig. 10.32, determine wavelength and frequency.",
    "answer": "Use the 8 cm scale shown in Fig. 10.32 to measure separation between adjacent compressions (λ). Then calculate f=340/λ, converting λ to metres. The original figure is needed for the exact wavelength."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "Two waves A and B travel at 345 m/s. From Fig. 10.33 find their wavelengths and frequencies.",
    "answer": "Measure crest-to-crest or compression-to-compression spacing for each curve against the 2.5 cm and 5.0 cm scale. Then fA=345/λA and fB=345/λB (λ in metres). Exact values require reading the graph."
  },
  {
    "type": "revise-reflect-refine",
    "marks": 3,
    "question": "Two identical sound sources at A (air) and B (water) reflect from the same cliff. Return time at A is 4.5 times time at B. Find speed ratio.",
    "answer": "For equal distances, t=2d/v. Therefore v_air/v_water=t_water/t_air=1/4.5=2/9. Ratio air : water = 2 : 9."
  }
];


// Textbook worked Examples, in original chapter order.
window.examplesData = [
  {
    "type": "example",
    "marks": 0,
    "question": "If there are 10 density oscillations in 2 seconds at a given position, then calculate the (i) frequency of sound wave, and (ii) its time period.",
    "answer": "(i) $$f=10/2=\\boxed{5\\;\\mathrm{Hz}}$$<br>(ii) $$T=2/10=\\boxed{0.2\\;\\mathrm s}$$"
  },
  {
    "type": "example",
    "marks": 0,
    "question": "Human hearing roughly spans 20 Hz to 20 kHz. What are the corresponding wavelengths in air for these two frequencies? Use the speed of sound in air as 344 m s⁻¹.",
    "answer": "$$\\lambda=v/f$$<br>(i) At 20 Hz: $$\\lambda=344/20=\\boxed{17.2\\;\\mathrm m}$$<br>(ii) At 20000 Hz: $$\\lambda=344/20000=\\boxed{0.0172\\;\\mathrm m}$$"
  },
  {
    "type": "example",
    "marks": 0,
    "question": "During a thunderstorm, lightning is seen before thunder is heard because sound travels much slower than light. If the time delay between seeing the lightning and hearing thunder is 5 seconds, estimate the distance of the storm. Assume the speed of sound is 340 m s⁻¹.",
    "answer": "Neglecting the travel time of light:<br>$$d=vt=340\\times5=\\boxed{1700\\;\\mathrm m=1.7\\;\\mathrm{km}}$$"
  },
  {
    "type": "example",
    "marks": 0,
    "question": "From the graphical representation of a sound wave propagating in steel (Fig. 10.22), find its wavelength. Calculate its frequency and time period if the speed of sound in steel is 5000 m s⁻¹.",
    "answer": "From Fig. 10.22, $$\\lambda=50\\;\\mathrm m$$<br>$$f=v/\\lambda=5000/50=\\boxed{100\\;\\mathrm{Hz}}$$<br>$$T=1/f=\\boxed{0.01\\;\\mathrm s}$$"
  },
  {
    "type": "example",
    "marks": 0,
    "question": "You clap in an empty corridor and hear an echo after 0.5 s. If the speed of sound in air is 340 m s⁻¹, calculate your distance from the wall.",
    "answer": "The sound travels to the wall and back.<br>$$d=vt/2=340(0.5)/2=\\boxed{85\\;\\mathrm m}$$"
  },
  {
    "type": "example",
    "marks": 0,
    "question": "A naval sonar signal sent into seawater returns after 0.90 s. The speed of sound in seawater is 1530 m s⁻¹. How far is the object?",
    "answer": "The signal makes a round trip.<br>$$d=vt/2=1530(0.90)/2=\\boxed{688.5\\;\\mathrm m}$$"
  }
];

// Textbook Pause and Ponder, in original chapter order.
window.pauseAndPonderData = [
  {
    "type": "pause",
    "marks": 0,
    "question": "Explore various ways of producing sound.",
    "answer": "Examples: strike a tuning fork, pluck a string, beat a drum, blow across a bottle or into a flute, or speak. Each produces sound through vibrations."
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "Make a list of different types of musical instruments and identify their vibrating parts which produce sound.",
    "answer": "Guitar/violin: strings; tabla/drum: stretched membrane; flute: air column; bell: metal body; harmonium: metal reeds."
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "Assertion (A): We cannot hear the sound of a bell ringing in a closed jar after most of the air is pumped out.<br>Reason (R): Sound requires a medium to travel.<br>Choose the correct statement:<br>(i) Both A and R are true, but R is not the correct explanation of A.<br>(ii) Both A and R are true, and R is the correct explanation of A.<br>(iii) A is true, but R is false.<br>(iv) A is false, but R is true.",
    "answer": "(ii) Both are true and R correctly explains A."
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "Assertion (A): Compressions and rarefactions move through the medium.<br>Reason (R): Individual particles of the medium continuously move forward with the wave.<br>Choose the correct statement:<br>(i) Both A and R are true, but R is not the correct explanation of A.<br>(ii) Both A and R are true, and R is the correct explanation of A.<br>(iii) A is true, but R is false.<br>(iv) A is false, but R is true.",
    "answer": "(iii) A is true but R is false. Particles oscillate about their mean positions; they do not travel continuously with the wave."
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "When sound travels from a tuning fork to your ear, which of the following actually reaches your ear?<br>(i) Air particles near the tuning fork<br>(ii) Energy carried by sound waves<br>(iii) The tuning fork material<br>(iv) A continuous stream of compressed air",
    "answer": "(ii) Energy carried by sound waves."
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "The variation of density of the medium for two sound waves is shown in Fig. 10.17 (a) and (b). Label compression and rarefaction by C and R on it. In the graph given in Fig. 10.17 (c) and (d), label the axes and draw the curves corresponding to Fig. 10.17 (a) and (b).",
    "answer": "Label the high-density regions C (compression) and low-density regions R (rarefaction). For the corresponding curves, put distance on the horizontal axis and density on the vertical axis. Draw periodic peaks at C and troughs at R, matching the spacing of the supplied textbook diagrams."
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "Conduct Activity 10.1 once again with a thick rubber band and then with a thin rubber band. Does the thin rubber band vibrate faster than the thick rubber band? If yes, how do the frequency and time period of the sound produced by the thin rubber band differ from that of the thick rubber band?",
    "answer": "Typically, the thinner band vibrates faster under comparable tension: higher frequency and shorter time period (T = 1/f)."
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "If the frequency of a sound wave produced by an oscillating piston of a long tube filled with air is 20 Hz, then how many oscillations does the piston complete per minute?",
    "answer": "$$N=ft=20\\times60=\\boxed{1200\\;\\text{oscillations}}$$"
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "For the sound wave represented by the graph shown in Fig. 10.19, what is half of its wavelength?",
    "answer": "From the graph, successive density maxima are separated by 3.0 cm, so λ = 3.0 cm and $$\\boxed{\\lambda/2=1.5\\;\\mathrm{cm}}$$"
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "Table 10.1 shows the speed of sound in a few media at atmospheric pressure. Compare the speeds in different media by finding the ratio of (i) the speed of sound in water with respect to the speed in the air; (ii) the speed of sound in steel with respect to the speed in the water.",
    "answer": "(i) Water : air = 1500 : 340 = 75 : 17 ≈ 4.41 : 1.<br>(ii) Steel : water = 5000 : 1500 = 10 : 3 ≈ 3.33 : 1."
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "Two friends are standing along a steel fence at a distance of 340 m from each other (Fig. 10.23). Gunjan places her ear over the fence and her friend knocks the fence with a metal object. Using the values of the speed of sound in steel and air given in Table 10.1, calculate the time difference between the sound reaching through air and steel.",
    "answer": "$$t_{air}=340/340=1.000\\;\\mathrm s$$<br>$$t_{steel}=340/5000=0.068\\;\\mathrm s$$<br>$$\\boxed{\\Delta t=0.932\\;\\mathrm s}$$"
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "An experiment is being set up that requires echoes to arrive at least 0.2 s after the emission of sound. What minimum distance should a reflecting surface be placed at? Assume the speed of sound to be 343 m s⁻¹.",
    "answer": "$$d=vt/2=343(0.2)/2=\\boxed{34.3\\;\\mathrm m}$$"
  },
  {
    "type": "pause",
    "marks": 0,
    "question": "Sound travels much farther in water than light, and thus, is used for various underwater applications. A sonar signal sent to find the depth of ocean takes 4 s to return. What is the depth of the ocean at that location if the speed of sound in seawater is 1500 m s⁻¹?",
    "answer": "$$d=vt/2=1500(4)/2=\\boxed{3000\\;\\mathrm m}$$"
  }
];

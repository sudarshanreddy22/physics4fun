/* Physics4Fun — Grade 9 CBSE | Chapter: Motion
   Sections: 2-Marks · 3-Marks · Case-Based · Revise, Reflect, Refine
   ------------------------------------------------------------------ */

// IMPORTANT:
// Only the 3 equation-of-motion derivations belong to descriptiveData.
// All other NCERT Revise, Reflect, Refine questions are stored separately
// so they cannot be automatically grouped into 2-Marks or 3-Marks.

window.descriptiveData = [
{
    type: 'two-mark',
    marks: 2,
    question: "Derive the first equation of motion, v = u + at, using a velocity-time graph.",
    answer: `
<style>
.motion-proof-layout{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:18px;align-items:center;width:100%;}
.motion-proof-text{text-align:center;}
.motion-proof-text p{text-align:center;}
.motion-proof-image{width:330px;max-width:100%;height:auto;display:block;margin:auto;}
@media(max-width:800px){.motion-proof-layout{grid-template-columns:1fr;}.motion-proof-image{width:300px;}}
</style>
<div class="motion-proof-layout">
  <div class="motion-proof-text">
    <p>For uniformly accelerated motion, the slope of the velocity-time graph gives acceleration.</p>
    $$\\begin{aligned}a&=\\frac{v-u}{t}\\\\at&=v-u\\\\\\therefore\\quad v&=u+at\\end{aligned}$$
  </div>
  <div>
    <img class="motion-proof-image"
      src="https://physics4fun.in/images/equations/first-equation-vt-graph.svg"
      alt="Velocity-time graph for first equation of motion">
  </div>
</div>`
  },

{
    type: 'two-mark',
    marks: 2,
    question: "Derive the second equation of motion, s = ut + ½at², using a velocity-time graph.",
    answer: `
<div class="motion-proof-layout">
  <div class="motion-proof-text">
    <p>Displacement equals the area under the velocity-time graph.</p>
    $$\\begin{aligned}s&=\\text{area of rectangle OACD + area of triangle ABC}\\\\s&=ut+\\tfrac12t(v-u)\\\\s&=ut+\\tfrac12t(at)\\\\\\therefore\\quad s&=ut+\\tfrac12at^2\\end{aligned}$$
  </div>
  <div>
    <img class="motion-proof-image"
      src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/c1c853d37b0686475075ef3983d54e995dd0c03a/images/cbse/class%2009/ch01/equation_2_velocity_time_graph.svg"
      alt="Velocity-time graph for second equation of motion">
  </div>
</div>`
  },

{
    type: 'two-mark',
    marks: 2,
    question: "Derive the third equation of motion, v² = u² + 2as, using a velocity-time graph.",
    answer: `
<div class="motion-proof-layout">
  <div class="motion-proof-text">
    <p>Displacement equals the area of trapezium OABD.</p>
    $$\\begin{aligned}s&=\\tfrac12(u+v)t\\\\s&=\\tfrac12(u+v)\\frac{v-u}{a}\\\\2as&=(u+v)(v-u)\\\\2as&=v^2-u^2\\\\\\therefore\\quad v^2&=u^2+2as\\end{aligned}$$
  </div>
  <div>
    <img class="motion-proof-image"
      src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/c1c853d37b0686475075ef3983d54e995dd0c03a/images/cbse/class%2009/ch01/equation_3_velocity_time_graph.svg"
      alt="Velocity-time graph for third equation of motion">
  </div>
</div>`
  }
];

/* ══════════════════════════════════════════════════════════
   SECTION 4 — REVISE, REFLECT, REFINE
   These questions are NOT part of descriptiveData.
   They must be rendered from reviseReflectRefineData.
══════════════════════════════════════════════════════════ */

window.reviseReflectRefineData = [
{
    type: 'revise-reflect-refine',
    marks: 2,
    question: `My father went to a shop from home which is located at a distance of 250 m on a straight road. On reaching there, he discovered that he forgot to carry a cloth bag. He came home to take it, went to the shop again, bought provisions and came back home. How much was the total distance travelled by him? What was his displacement from home?`,
    answer: `The distance travelled is the total length of the path covered.

$$\\text{Distance}=250+250+250+250=1000\\;\\text{m}$$

He finally returns to his home, so his final position is the same as his initial position.

$$\\boxed{\\text{Distance}=1000\\;\\text{m}}$$
$$\\boxed{\\text{Displacement}=0\\;\\text{m}}$$`
  },

{
    type: 'revise-reflect-refine',
    marks: 2,
    question: `A student runs from the ground floor to the fourth floor of a school building to collect a book and then comes down to their classroom on the second floor. If the height of each floor is 3 m, find: (i) the total vertical distance travelled, and (ii) their displacement from the starting point.`,
    answer: `Taking the ground floor as the starting point:

From ground floor to fourth floor: $4\\times3=12\\;\\text{m}$

From fourth floor down to second floor: $2\\times3=6\\;\\text{m}$

$$\\boxed{\\text{Total distance}=12+6=18\\;\\text{m}}$$

The final position is the second floor, so

$$\\boxed{\\text{Displacement}=2\\times3=6\\;\\text{m upward}}$$`
  },

{
    type: 'revise-reflect-refine',
    marks: 2,
    question: `A girl is riding her scooter and finds that its speedometer reading is constant. Is it possible for her scooter to be accelerating and if so, how?`,
    answer: `Yes. Acceleration depends on the change in velocity, and velocity has both magnitude and direction.

Even when the speedometer reading is constant, the scooter can accelerate if its direction of motion changes. For example, while moving around a circular path at constant speed, the direction of velocity continuously changes.

Hence, the scooter can have acceleration even though its speed remains constant.`
  },

{
    type: 'revise-reflect-refine',
    marks: 2,
    question: `A car starts from rest and its velocity reaches $24\\;\\text{m s}^{-1}$ in $6\\;\\text{s}$. Find the average acceleration and the distance travelled in these $6\\;\\text{s}$.`,
    answer: `Given: $u=0,\\quad v=24\\;\\text{m s}^{-1},\\quad t=6\\;\\text{s}$

Average acceleration:
$$a=\\frac{v-u}{t}=\\frac{24-0}{6}=4\\;\\text{m s}^{-2}$$

Distance travelled:
$$s=ut+\\frac12at^2=0+\\frac12(4)(6)^2=72\\;\\text{m}$$

$$\\boxed{a=4\\;\\text{m s}^{-2},\\quad s=72\\;\\text{m}}$$`
  },

{
    type: 'revise-reflect-refine',
    marks: 2,
    question: `Fig. 4.27 shows a position-time graph of two objects A and B that are moving along parallel tracks in the same direction. Do objects A and B ever have equal velocity? Justify your answer.`,
    answer: `Yes. The velocity of an object is given by the slope of its position-time graph.

$$v=\\frac{\\Delta x}{\\Delta t}$$

At the instant when the two position-time curves have equal slopes (their tangents are parallel), their velocities are equal.

Thus, objects A and B can have equal velocity even though their positions may be different.`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_27_position_time_graph.svg`
  },

{
    type: 'revise-reflect-refine',
    marks: 2,
    question: `A graph in Fig. 4.28 shows the change in position with time for two objects A and B moving in a straight line from 0 to 10 seconds. Choose the correct option(s).

(i) The average velocity of both over the 10 s time interval is equal since they have the same initial and final positions.
(ii) The average speeds of both over the 10 s time interval are equal since both cover equal distance in equal time.
(iii) The average speed of A over the 10 s time interval is lower than that of B since it covers a shorter distance than B in 10 seconds.
(iv) The average speed of A over the 10 s time interval is greater than that of B since B's speed is lower than A's in some segments.`,
    answer: `Correct options: $\\boxed{(i)\\text{ and }(iii)}$

For average velocity: Both objects have the same initial and final positions, so their displacements and hence their average velocities are equal.

For average speed: Object A covers a shorter total distance than B in the same 10 s interval. Therefore, A has the lower average speed.`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_28_position_time_graph.svg`
  },

{
    type: 'revise-reflect-refine',
    marks: 2,
    question: `A truck driver driving at the speed of $54\\;\\text{km h}^{-1}$ notices a road sign with a speed limit of $40\\;\\text{km h}^{-1}$ for trucks. He slows down to $36\\;\\text{km h}^{-1}$ in $36\\;\\text{s}$. What was the distance travelled by him during this time? Assume the acceleration to be constant while slowing down.`,
    answer: `Convert speeds to SI units:
$$u=54\\times\\tfrac{5}{18}=15\\;\\text{m s}^{-1},\\quad v=36\\times\\tfrac{5}{18}=10\\;\\text{m s}^{-1}$$

Average velocity for uniform acceleration:
$$v_{\\text{avg}}=\\frac{u+v}{2}=\\frac{15+10}{2}=12.5\\;\\text{m s}^{-1}$$

$$s=v_{\\text{avg}}\\,t=12.5\\times36=\\boxed{450\\;\\text{m}}$$`
  },

{
    type: 'revise-reflect-refine',
    marks: 2,
    question: `A student said, "The Earth moves around the Sun". In this context, discuss whether an object kept on the Earth can be considered to be at rest.`,
    answer: `Motion and rest are relative to a chosen reference point.

An object kept on the Earth is **at rest** with respect to the Earth because its position relative to the Earth does not change.

However, the same object is **in motion** with respect to the Sun because the Earth revolves around the Sun.

Thus, the object can be considered at rest relative to the Earth but in motion relative to the Sun.`
  },

{
    type: 'revise-reflect-refine',
    marks: 3,
    question: `A motorbike moving with initial velocity $28\\;\\text{m s}^{-1}$ and constant acceleration stops after travelling $98\\;\\text{m}$. Find the acceleration of the motorbike and the time taken to come to a stop.`,
    answer: `Given: $u=28\\;\\text{m s}^{-1},\\quad v=0,\\quad s=98\\;\\text{m}$

Using $v^2=u^2+2as$:
$$0=784+196a\\implies a=-4\\;\\text{m s}^{-2}$$

Using $v=u+at$:
$$0=28-4t\\implies t=7\\;\\text{s}$$

$$\\boxed{a=-4\\;\\text{m s}^{-2},\\quad t=7\\;\\text{s}}$$`
  },

{
    type: 'revise-reflect-refine',
    marks: 3,
    question: `A car starts from rest and accelerates uniformly to $20\\;\\text{m s}^{-1}$ in $5$ seconds. It then travels at $20\\;\\text{m s}^{-1}$ for $10$ seconds and finally applies the brake (with uniform acceleration) to stop in $6$ seconds. Find the total distance travelled.`,
    answer: `**Stage 1** (acceleration): $s_1=\\dfrac{0+20}{2}\\times5=50\\;\\text{m}$

**Stage 2** (constant velocity): $s_2=20\\times10=200\\;\\text{m}$

**Stage 3** (braking): $s_3=\\dfrac{20+0}{2}\\times6=60\\;\\text{m}$

$$\\boxed{s_{\\text{total}}=50+200+60=310\\;\\text{m}}$$`
  },

{
    type: 'revise-reflect-refine',
    marks: 3,
    question: `A bus is travelling at $36\\;\\text{km h}^{-1}$ when the driver sees an obstacle $30\\;\\text{m}$ ahead. The driver takes $0.5$ seconds to react before pressing the brake. Once the brake is applied, the velocity of the bus reduces with constant acceleration of $2.5\\;\\text{m s}^{-2}$. Will the bus be able to stop before reaching the obstacle?`,
    answer: `Convert initial speed: $u=36\\times\\tfrac{5}{18}=10\\;\\text{m s}^{-1}$

Distance during reaction time: $s_r=10\\times0.5=5\\;\\text{m}$

Braking distance ($v=0,\\;a=-2.5\\;\\text{m s}^{-2}$):
$$0=100-5s\\implies s_b=20\\;\\text{m}$$

Total stopping distance: $5+20=25\\;\\text{m}<30\\;\\text{m}$

$$\\boxed{\\text{Yes — the bus stops 5 m before the obstacle.}}$$`
  },

{
    type: 'revise-reflect-refine',
    marks: 3,
    question: `The velocity-time graph from $0\\;\\text{s}$ to $120\\;\\text{s}$ for a cyclist is shown in Fig. 4.30. Calculate the displacement and average acceleration in the $120\\;\\text{s}$ time interval.`,
    answer: `From the graph:
- $0$ to $20$ s: velocity increases $0\\to3\\;\\text{m s}^{-1}$ → $s_1=\\tfrac12(20)(3)=30\\;\\text{m}$
- $20$ to $100$ s: constant $3\\;\\text{m s}^{-1}$ → $s_2=80\\times3=240\\;\\text{m}$
- $100$ to $120$ s: decreases $3\\to2\\;\\text{m s}^{-1}$ → $s_3=\\tfrac12(3+2)(20)=50\\;\\text{m}$

$$\\boxed{s=30+240+50=320\\;\\text{m}}$$

Average acceleration:
$$a_{\\text{avg}}=\\frac{v-u}{t}=\\frac{2-0}{120}=\\boxed{\\tfrac{1}{60}\\;\\text{m s}^{-2}}$$`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_30_velocity_time_graph.svg`
  },

{
    type: 'revise-reflect-refine',
    marks: 3,
    question: `A girl is preparing for her first marathon by running on a straight road. The graph (Fig. 4.31) depicts her velocity versus time. Estimate the distance she ran based on the graph.`,
    answer: `From the graph the velocity is approximately $7.5\\;\\text{km h}^{-1}$ for the first $2$ h, then decreases linearly to $5\\;\\text{km h}^{-1}$ at $6$ h.

$$s_1=7.5\\times2=15\\;\\text{km}$$
$$s_2=\\frac{7.5+5}{2}\\times4=25\\;\\text{km}$$

$$\\boxed{s=s_1+s_2=40\\;\\text{km}}$$

(The value is an estimate read from the plotted graph.)`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_31_velocity_time_graph.svg`
  },

{
    type: 'revise-reflect-refine',
    marks: 3,
    question: `On entering a state highway, a car continues to move with a constant velocity of $6\\;\\text{m s}^{-1}$ for $2$ minutes and then accelerates at $1\\;\\text{m s}^{-2}$ for $6$ seconds. Find the displacement in the $2$ min $6$ s interval.`,
    answer: `First $120$ s (constant velocity):
$$s_1=6\\times120=720\\;\\text{m}$$

Next $6$ s ($a=1\\;\\text{m s}^{-2}$):
$$s_2=6(6)+\\tfrac12(1)(36)=36+18=54\\;\\text{m}$$

$$\\boxed{s_{\\text{total}}=720+54=774\\;\\text{m}}$$

On the velocity-time graph: horizontal line at $6\\;\\text{m s}^{-1}$ from $0$–$120$ s, then a rising line from $(120,6)$ to $(126,12)$. The total area equals the displacement.`
  },

{
    type: 'revise-reflect-refine',
    marks: 3,
    question: `Two cars A and B start from rest with constant acceleration. Car A attains $5\\;\\text{m s}^{-1}$ in $5$ s; Car B attains $3\\;\\text{m s}^{-1}$ in $10$ s. Plot the velocity-time graphs and calculate their displacements over those intervals.`,
    answer: `**Car A**: $a_A=1\\;\\text{m s}^{-2}$; line from $(0,0)$ to $(5,5)$.
$$s_A=\\tfrac12(5)(5)=12.5\\;\\text{m}$$

**Car B**: $a_B=0.3\\;\\text{m s}^{-2}$; line from $(0,0)$ to $(10,3)$.
$$s_B=\\tfrac12(10)(3)=15\\;\\text{m}$$

$$\\boxed{s_A=12.5\\;\\text{m},\\quad s_B=15\\;\\text{m}}$$`
  },

{
    type: 'revise-reflect-refine',
    marks: 3,
    question: `Rohan studies science from 6 PM to 7:30 PM. Consider the tip of the minute hand of the wall clock (length $7\\;\\text{cm}$). Find its: (i) distance travelled, (ii) displacement, (iii) average speed, and (iv) average velocity.`,
    answer: `Time interval: $90$ min; the minute hand completes $1.5$ revolutions.

**(i) Distance:**
$$s=1.5\\times2\\pi r=1.5\\times14\\pi=21\\pi\\approx66\\;\\text{cm}$$

**(ii) Displacement:** tip moves from 12 o'clock to 6 o'clock (diameter):
$$|\\Delta r|=2r=14\\;\\text{cm}$$

**(iii) Average speed:**
$$\\bar{v}=\\frac{21\\pi}{90\\times60}\\approx1.22\\times10^{-2}\\;\\text{cm s}^{-1}$$

**(iv) Average velocity:**
$$|\\bar{v}_{\\text{avg}}|=\\frac{14}{90\\times60}\\approx2.59\\times10^{-3}\\;\\text{cm s}^{-1}$$
directed from 12 o'clock position towards 6 o'clock position.`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_32_clock_minute_hand.svg`
  }
];

/* ══════════════════════════════════════════════════════════
   EXAMPLES — Describing Motion Around Us
   Rendered separately under the Examples tab.
══════════════════════════════════════════════════════════ */
window.examplesData = [
{
  type:'example', marks:0,
  question:`Consider two postmen. They start walking towards each other from a distance of 210 yojanas. One travels 9 yojanas per day and the other covers 5 yojanas per day. In how many days will they meet each other?`,
  answer:`Distance covered together in one day $=9+5=14$ yojanas.<br>Time taken to cover 210 yojanas together:<br>$$t=\\frac{210}{14}=15\\;\\text{days}$$<br>Therefore, both postmen meet after $15$ days.<br>In 15 days, the first postman covers $135$ yojanas and the second covers $75$ yojanas.`
},
{
  type:'example', marks:0,
  question:`Sarang takes 50 s to swim from one end to the other end and back in a swimming pool of length 25 m. Find his average speed and average velocity during the 50 s interval.`,
  answer:`Total distance travelled $=25+25=50\\;\\text{m}$<br>Displacement after returning to the starting point $=0\\;\\text{m}$<br>$$\\text{Average speed}=\\frac{\\text{total distance}}{\\text{time}}=\\frac{50}{50}=1\\;\\text{m s}^{-1}$$<br>$$\\text{Average velocity}=\\frac{\\text{displacement}}{\\text{time}}=\\frac{0}{50}=0\\;\\text{m s}^{-1}$$`
},
{
  type:'example', marks:0,
  question:`A bus is moving on a long straight highway with a velocity of $36\\;\\text{km h}^{-1}$. The driver presses the accelerator for 10 s and the velocity increases to $54\\;\\text{km h}^{-1}$. Later, the driver applies the brakes and the bus comes to rest in 5 s. Find the average acceleration (i) while the accelerator is pressed and (ii) while the brakes are pressed.`,
  answer:`(i) While accelerating:<br>$u=36\\;\\text{km h}^{-1}=10\\;\\text{m s}^{-1}$, $v=54\\;\\text{km h}^{-1}=15\\;\\text{m s}^{-1}$, $t=10\\;\\text{s}$<br>$$a=\\frac{v-u}{t}=\\frac{15-10}{10}=0.5\\;\\text{m s}^{-2}$$<br>(ii) While braking:<br>$u=15\\;\\text{m s}^{-1}$, $v=0$, $t=5\\;\\text{s}$<br>$$a=\\frac{0-15}{5}=-3\\;\\text{m s}^{-2}$$<br>The negative sign shows that acceleration acts opposite to the direction of velocity.`
},
{
  type:'example', marks:0,
  question:`An object is dropped from a height. Its velocity increases as it falls. Find the magnitude of its average acceleration in every successive interval of one second using velocities $0$, $9.8$, $19.6$, $29.4$ and $39.2\\;\\text{m s}^{-1}$ at $0$, $1$, $2$, $3$ and $4$ s respectively. Is the average acceleration constant? What is its direction?`,
  answer:`For each successive 1 s interval:<br>$$a=\\frac{\\Delta v}{\\Delta t}=\\frac{9.8}{1}=9.8\\;\\text{m s}^{-2}$$<br>The same value is obtained for $1$–$2$ s, $2$–$3$ s and $3$–$4$ s because the velocity increases by $9.8\\;\\text{m s}^{-1}$ every second.<br>Therefore, the average acceleration is constant at $9.8\\;\\text{m s}^{-2}$ and acts vertically downward.`
},
{
  type:'example', marks:0,
  question:`For a vehicle starting from rest and speeding up, the positions at times $0$, $2$, $4$, $6$, $8$, $10$ and $12$ s are $0$, $1$, $4$, $9$, $16$, $25$ and $36$ m respectively. Plot the corresponding position-time graph and describe its nature.`,
  answer:`Plot time on the X-axis and position on the Y-axis using the points $(0,0)$, $(2,1)$, $(4,4)$, $(6,9)$, $(8,16)$, $(10,25)$ and $(12,36)$.<br>The plotted points do not lie on a straight line. They form a curve whose slope increases with time.<br>Hence, the vehicle is moving with increasing velocity.`
},
{
  type:'example', marks:0,
  question:`What does a position-time graph that is a horizontal straight line at a position of 40 m indicate about the nature of motion of the vehicle?`,
  answer:`The position of the vehicle remains $40\\;\\text{m}$ from the origin and does not change with time.<br>Therefore, the vehicle is at rest at $40\\;\\text{m}$ from the origin.<br>A horizontal line on a position-time graph represents a stationary object.`
},
{
  type:'example', marks:0,
  question:`The position-time graphs of two objects A and B are straight lines. Line B is steeper than line A. The magnitude of average velocity of which object is higher?`,
  answer:`The slope of a position-time graph represents velocity.<br>For the same time interval, object B has a greater displacement than object A. Therefore, line B has a greater slope.<br>Hence, the magnitude of average velocity of object B is higher than that of object A.`
},
{
  type:'example', marks:0,
  question:`A car moving on a highway is brought to rest with an acceleration of $-4\\;\\text{m s}^{-2}$. Find the distance travelled before stopping when its initial velocity is (i) $54\\;\\text{km h}^{-1}$ and (ii) $108\\;\\text{km h}^{-1}$.`,
  answer:`Given $a=-4\\;\\text{m s}^{-2}$ and $v=0$. Using<br>$$v^2=u^2+2as$$<br>$$s=\\frac{u^2}{8}$$<br>(i) $u=54\\;\\text{km h}^{-1}=15\\;\\text{m s}^{-1}$<br>$$s=\\frac{15^2}{8}=28.125\\;\\text{m}\\approx28.1\\;\\text{m}$$<br>(ii) $u=108\\;\\text{km h}^{-1}=30\\;\\text{m s}^{-1}$<br>$$s=\\frac{30^2}{8}=112.5\\;\\text{m}$$`
}
];

/* ══════════════════════════════════════════════════════════
   PAUSE AND PONDER — Describing Motion Around Us
══════════════════════════════════════════════════════════ */
window.pauseAndPonderData = [
{
  type:'pause', marks:0,
  question:`In the example of an athlete running back and forth on a straight track, when will the displacement of the athlete be zero? What will be the total distance travelled in that case?`,
  answer:`The displacement becomes zero when the athlete returns to the starting point because the final position is the same as the initial position.<br>The total distance is not zero; it is the complete path length travelled by the athlete while going away from and returning to the starting point.`
},
{
  type:'pause', marks:0,
  question:`Fuel used up in a vehicle depends on which of the following? Justify your answer.<br>(i) Total distance travelled<br>(ii) Displacement`,
  answer:`Fuel used depends on the total distance travelled, not on displacement.<br>A vehicle consumes fuel throughout the actual path it travels. Even when it returns to its starting point and its displacement becomes zero, fuel has still been consumed.`
},
{
  type:'pause', marks:0,
  question:`A ball rolls down a straight inclined track from O to D. Can its motion be represented along a horizontal line by taking O as the origin? Are the total distance travelled and the magnitude of displacement from O equal or different at positions A, B, C and D?`,
  answer:`Yes. Since the ball moves along a straight line, its position can be represented on a horizontal one-dimensional line with O as the origin.<br>Because the ball moves only in one direction along the straight track without reversing, the total distance travelled from O is equal to the magnitude of its displacement at A, B, C and D.`
},
{
  type:'pause', marks:0,
  question:`During a family road trip, you drive 200 km north in 3 h and then 200 km south in 2 h. Find the average speed and average velocity for the entire trip.`,
  answer:`Total distance $=200+200=400\\;\\text{km}$<br>Total time $=3+2=5\\;\\text{h}$<br>$$\\text{Average speed}=\\frac{400}{5}=80\\;\\text{km h}^{-1}$$<br>The final position is the starting point, so displacement $=0$.<br>$$\\text{Average velocity}=\\frac{0}{5}=0\\;\\text{km h}^{-1}$$`
},
{
  type:'pause', marks:0,
  question:`Under what condition(s) is<br>(i) the magnitude of average velocity of an object equal to its average speed?<br>(ii) the magnitude of average velocity zero while its average speed is not zero?`,
  answer:`(i) The magnitude of average velocity equals average speed when the distance travelled is equal to the magnitude of displacement, such as motion along a straight line without changing direction.<br>(ii) The magnitude of average velocity is zero while average speed is non-zero when the object returns to its starting point. Its displacement is then zero, although it has travelled a non-zero distance.`
}
];


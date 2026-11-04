// Grade 9 CBSE – Describing Motion Around Us
// NCERT Textbook: Revise, Reflect, Refine
// Kept completely separate from 2-Marks, 3-Marks and Case-Based sections.

window.reviseReflectRefineData = [
  {
    question: `1. My father went to a shop from home which is located at a distance of 250 m on a straight road. On reaching there, he discovered that he forgot to carry a cloth bag. He came home to take it, went to the shop again, bought provisions and came back home. How much was the total distance travelled by him? What was his displacement from home?`,
    answer: `The distance travelled is the total length of the path covered.

$$\\text{Distance}=250+250+250+250=1000\\;\\text{m}$$

He finally returns to his home, so his final position is the same as his initial position.

$$\\boxed{\\text{Distance}=1000\\;\\text{m}}$$
$$\\boxed{\\text{Displacement}=0\\;\\text{m}}$$`,
    marks: 2
  },
  {
    question: `2. A student runs from the ground floor to the fourth floor of a school building to collect a book and then comes down to their classroom on the second floor. If the height of each floor is 3 m, find: (i) the total vertical distance travelled, and (ii) their displacement from the starting point.`,
    answer: `Taking the ground floor as the starting point:

From ground floor to fourth floor:
$$4\\times3=12\\;\\text{m}$$

From fourth floor down to second floor:
$$2\\times3=6\\;\\text{m}$$

Therefore,

$$\\boxed{\\text{Total distance}=12+6=18\\;\\text{m}}$$

The final position is the second floor, so

$$\\boxed{\\text{Displacement}=2\\times3=6\\;\\text{m upward}}$$`,
    marks: 2
  },
  {
    question: `3. A girl is riding her scooter and finds that its speedometer reading is constant. Is it possible for her scooter to be accelerating and if so, how?`,
    answer: `Yes. Acceleration depends on the change in velocity, and velocity has both magnitude and direction.

Even when the speedometer reading is constant, the scooter can accelerate if its direction of motion changes. For example, while moving around a circular path at constant speed, the direction of velocity continuously changes.

Hence, the scooter can have acceleration even though its speed remains constant.`,
    marks: 2
  },
  {
    question: `4. A car starts from rest and its velocity reaches $24\\;\\text{m s}^{-1}$ in $6\\;\\text{s}$. Find the average acceleration and the distance travelled in these $6\\;\\text{s}$.`,
    answer: `Given:
$$u=0,\\qquad v=24\\;\\text{m s}^{-1},\\qquad t=6\\;\\text{s}$$

Average acceleration:
$$a=\\frac{v-u}{t}=\\frac{24-0}{6}=4\\;\\text{m s}^{-2}$$

Distance travelled:
$$s=ut+\\frac12at^2$$
$$=0+\\frac12(4)(6)^2$$
$$=72\\;\\text{m}$$

$$\\boxed{a=4\\;\\text{m s}^{-2},\\quad s=72\\;\\text{m}}$$`,
    marks: 2
  },
  {
    question: `5. A motorbike moving with initial velocity $28\\;\\text{m s}^{-1}$ and constant acceleration stops after travelling $98\\;\\text{m}$. Find the acceleration of the motorbike and the time taken to come to a stop.`,
    answer: `Given:
$$u=28\\;\\text{m s}^{-1},\\quad v=0,\\quad s=98\\;\\text{m}$$

Using
$$v^2=u^2+2as$$

$$0=28^2+2a(98)$$
$$0=784+196a$$
$$a=-4\\;\\text{m s}^{-2}$$

Now,
$$v=u+at$$
$$0=28-4t$$
$$t=7\\;\\text{s}$$

$$\\boxed{a=-4\\;\\text{m s}^{-2},\\quad t=7\\;\\text{s}}$$`,
    marks: 3
  },
  {
    question: `6. Fig. 4.27 shows a position-time graph of two objects A and B that are moving along parallel tracks in the same direction. Do objects A and B ever have equal velocity? Justify your answer.`,
    answer: `Yes. The velocity of an object is given by the slope of its position-time graph.

$$v=\\frac{\\Delta x}{\\Delta t}$$

At the instant when the two position-time curves have equal slopes (their tangents are parallel), their velocities are equal.

Thus, objects A and B can have equal velocity even though their positions may be different.`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_27_position_time_graph.svg`,
    marks: 2
  },
  {
    question: `7. A graph in Fig. 4.28 shows the change in position with time for two objects A and B moving in a straight line from 0 to 10 seconds. Choose the correct option(s).

(i) The average velocity of both over the 10 s time interval is equal since they have the same initial and final positions.

(ii) The average speeds of both over the 10 s time interval are equal since both cover equal distance in equal time.

(iii) The average speed of A over the 10 s time interval is lower than that of B since it covers a shorter distance than B in 10 seconds.

(iv) The average speed of A over the 10 s time interval is greater than that of B since B’s speed is lower than A’s in some segments.`,
    answer: `Correct options: $\\boxed{(i)\\text{ and }(iii)}$.

For average velocity,
$$\\text{Average velocity}=\\frac{\\text{displacement}}{\\text{time}}$$

Both objects have the same initial and final positions, so their displacements and hence their average velocities are equal.

For average speed,
$$\\text{Average speed}=\\frac{\\text{total distance}}{\\text{time}}$$

Object A covers a shorter total distance than B in the same 10 s interval. Therefore, A has the lower average speed.`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_28_position_time_graph.svg`,
    marks: 2
  },
  {
    question: `8. A truck driver driving at the speed of $54\\;\\text{km h}^{-1}$ notices a road sign with a speed limit of $40\\;\\text{km h}^{-1}$ for trucks (Fig. 4.29). He slows down to $36\\;\\text{km h}^{-1}$ in $36\\;\\text{s}$. What was the distance travelled by him during this time? Assume the acceleration to be constant while slowing down.`,
    answer: `Convert the speeds into SI units:

$$u=54\\times\\frac5{18}=15\\;\\text{m s}^{-1}$$
$$v=36\\times\\frac5{18}=10\\;\\text{m s}^{-1}$$

For uniform acceleration, average velocity is

$$v_{\\text{avg}}=\\frac{u+v}{2}=\\frac{15+10}{2}=12.5\\;\\text{m s}^{-1}$$

Therefore,

$$s=v_{\\text{avg}}t=12.5\\times36=450\\;\\text{m}$$

$$\\boxed{s=450\\;\\text{m}}$$`,
    marks: 2
  },
  {
    question: `9. A car starts from rest and accelerates uniformly to $20\\;\\text{m s}^{-1}$ in $5$ seconds. It then travels at $20\\;\\text{m s}^{-1}$ for $10$ seconds and finally applies the brake (with uniform acceleration) to stop in $6$ seconds. Find the total distance travelled.`,
    answer: `First stage:
$$u=0,\\quad v=20,\\quad t=5$$
$$s_1=\\frac{u+v}{2}t=\\frac{0+20}{2}\\times5=50\\;\\text{m}$$

Second stage: constant velocity $20\\;\\text{m s}^{-1}$ for $10$ s:
$$s_2=20\\times10=200\\;\\text{m}$$

Third stage:
$$u=20,\\quad v=0,\\quad t=6$$
$$s_3=\\frac{20+0}{2}\\times6=60\\;\\text{m}$$

Therefore,

$$\\boxed{s_{\\text{total}}=50+200+60=310\\;\\text{m}}$$`,
    marks: 3
  },
  {
    question: `10. A bus is travelling at $36\\;\\text{km h}^{-1}$ when the driver sees an obstacle $30\\;\\text{m}$ ahead. The driver takes $0.5$ seconds to react before pressing the brake. Once the brake is applied, the velocity of the bus reduces with constant acceleration of $2.5\\;\\text{m s}^{-2}$. Will the bus be able to stop before reaching the obstacle?`,
    answer: `Convert the initial speed:
$$u=36\\times\\frac5{18}=10\\;\\text{m s}^{-1}$$

Distance travelled during the reaction time:
$$s_r=ut=10\\times0.5=5\\;\\text{m}$$

After braking, $v=0$ and $a=-2.5\\;\\text{m s}^{-2}$.

Using
$$v^2=u^2+2as$$

$$0=10^2+2(-2.5)s$$
$$s=20\\;\\text{m}$$

Total stopping distance:
$$s_{\\text{total}}=5+20=25\\;\\text{m}$$

Since $25\\;\\text{m}<30\\;\\text{m}$, the bus stops before the obstacle.

$$\\boxed{\\text{Yes, the bus stops }5\\;\\text{m before the obstacle.}}$$`,
    marks: 3
  },
  {
    question: `11. A student said, “The Earth moves around the Sun”. In this context, discuss whether an object kept on the Earth can be considered to be at rest.`,
    answer: `Motion and rest are relative to a chosen reference point.

An object kept on the Earth is at rest with respect to the Earth because its position relative to the Earth does not change.

However, the same object is in motion with respect to the Sun because the Earth revolves around the Sun.

Thus, the object can be considered at rest relative to the Earth but in motion relative to the Sun.`,
    marks: 2
  },
  {
    question: `12. The velocity-time graph from $0\\;\\text{s}$ to $120\\;\\text{s}$ for a cyclist is shown in Fig. 4.30. Shade the areas representing the displacement of the cyclist (i) while the cyclist is moving with constant velocity and (ii) when the velocity of the cyclist is decreasing. Also, calculate the displacement and average acceleration in the $120\\;\\text{s}$ time interval.`,
    answer: `In a velocity-time graph, the area under the graph represents displacement.

The graph shows:
- velocity increasing from $0$ to $3\\;\\text{m s}^{-1}$ during the first $20$ s;
- constant velocity $3\\;\\text{m s}^{-1}$ from $20$ s to $100$ s;
- velocity decreasing from $3$ to $2\\;\\text{m s}^{-1}$ from $100$ s to $120$ s.

Displacement is the total area under the graph:

$$s=\\frac12(20)(3)+(80)(3)+\\frac12(3+2)(20)$$
$$=30+240+50$$
$$=320\\;\\text{m}$$

Average acceleration:
$$a_{\\text{avg}}=\\frac{v-u}{t}=\\frac{2-0}{120}=\\frac1{60}\\;\\text{m s}^{-2}$$

$$\\boxed{s=320\\;\\text{m},\\quad a_{\\text{avg}}=\\frac1{60}\\;\\text{m s}^{-2}}$$

For the graph, the horizontal rectangular region corresponds to constant velocity, while the final sloping region corresponds to decreasing velocity.`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_30_velocity_time_graph.svg`,
    marks: 3
  },
  {
    question: `13. A girl is preparing for her first marathon by running on a straight road. She uses a smartwatch to calculate her running speed at different intervals. The graph (Fig. 4.31) depicts her velocity versus time. Estimate the distance she ran based on the graph.`,
    answer: `The distance travelled is obtained from the area under the velocity-time graph.

From the graph, the velocity is approximately $7.5\\;\\text{km h}^{-1}$ for the first $2$ h, and then decreases approximately linearly to $5\\;\\text{km h}^{-1}$ at $6$ h.

First part:
$$s_1=7.5\\times2=15\\;\\text{km}$$

Second part:
$$s_2=\\frac{7.5+5}{2}\\times4=25\\;\\text{km}$$

Therefore,

$$\\boxed{s=s_1+s_2=40\\;\\text{km}}$$

The value is an estimate because it is read from the plotted graph.`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_31_velocity_time_graph.svg`,
    marks: 3
  },
  {
    question: `14. On entering a state highway, a car continues to move with a constant velocity of $6\\;\\text{m s}^{-1}$ for $2$ minutes and then accelerates with a constant acceleration $1\\;\\text{m s}^{-2}$ for $6$ seconds. Find the displacement of the car on the state highway in the $2$ min $6$ s time interval by drawing a velocity-time graph for its motion.`,
    answer: `For the first $2$ minutes:
$$t_1=120\\;\\text{s},\\quad u=v=6\\;\\text{m s}^{-1}$$

$$s_1=vt_1=6\\times120=720\\;\\text{m}$$

For the next $6$ s:
$$u=6\\;\\text{m s}^{-1},\\quad a=1\\;\\text{m s}^{-2},\\quad t_2=6\\;\\text{s}$$

Final velocity:
$$v=u+at=6+1(6)=12\\;\\text{m s}^{-1}$$

Displacement:
$$s_2=ut+\\frac12at^2$$
$$=6(6)+\\frac12(1)(6)^2=54\\;\\text{m}$$

Therefore,

$$\\boxed{s_{\\text{total}}=720+54=774\\;\\text{m}}$$

On the velocity-time graph, draw a horizontal line at $6\\;\\text{m s}^{-1}$ from $0$ to $120$ s, followed by a straight rising line from $(120,6)$ to $(126,12)$. The area under the graph gives the displacement.`,
    marks: 3
  },
  {
    question: `15. Two cars A and B start moving with a constant acceleration from rest, in a straight line. Car A attains a velocity of $5\\;\\text{m s}^{-1}$ in $5$ s. Car B attains a velocity of $3\\;\\text{m s}^{-1}$ in $10$ s. Plot the velocity-time graphs for both cars in the same graph. Using the graph, calculate the displacement in the two time intervals mentioned.`,
    answer: `For car A:
$$u=0,\\quad v=5\\;\\text{m s}^{-1},\\quad t=5\\;\\text{s}$$
$$a_A=\\frac{5-0}{5}=1\\;\\text{m s}^{-2}$$

Its velocity-time graph is a straight line from $(0,0)$ to $(5,5)$.

Displacement is the triangular area:
$$s_A=\\frac12(5)(5)=12.5\\;\\text{m}$$

For car B:
$$u=0,\\quad v=3\\;\\text{m s}^{-1},\\quad t=10\\;\\text{s}$$
$$a_B=\\frac{3-0}{10}=0.3\\;\\text{m s}^{-2}$$

Its velocity-time graph is a straight line from $(0,0)$ to $(10,3)$.

Displacement:
$$s_B=\\frac12(10)(3)=15\\;\\text{m}$$

Thus,

$$\\boxed{s_A=12.5\\;\\text{m},\\quad s_B=15\\;\\text{m}}$$

Plot both straight lines on the same velocity-time axes using the stated end points.`,
    marks: 3
  },
  {
    question: `16. Rohan studies science from 6 PM to 7:30 PM at home. Consider the tip of the minute’s hand of the wall clock. During the given time interval, what is its: (i) distance travelled, (ii) displacement, (iii) speed, and (iv) velocity? The length of the minute’s hand is $7\\;\\text{cm}$ (Fig. 4.32).`,
    answer: `Time interval:
$$6:00\\;\\text{PM}\\to7:30\\;\\text{PM}=90\\;\\text{min}$$

The minute hand completes $1.5$ revolutions.

Radius:
$$r=7\\;\\text{cm}$$

Distance travelled:
$$s=1.5(2\\pi r)=1.5(14\\pi)=21\\pi\\;\\text{cm}\\approx66\\;\\text{cm}$$

At 6:00 PM the tip is at 12 o’clock, and at 7:30 PM it is at 6 o’clock. Therefore, the displacement is the diameter:

$$\\boxed{|\\Delta r|=2r=14\\;\\text{cm}}$$

Average speed:
$$\\text{speed}=\\frac{21\\pi}{90}\\approx0.733\\;\\text{cm min}^{-1}$$
$$\\approx0.0122\\;\\text{cm s}^{-1}$$

Average velocity:
$$|v_{\\text{avg}}|=\\frac{14}{90}=0.156\\;\\text{cm min}^{-1}$$
$$\\approx0.00259\\;\\text{cm s}^{-1}$$

The average velocity is directed from the 12 o’clock position towards the 6 o’clock position.

$$\\boxed{\\text{Distance}=21\\pi\\;\\text{cm}\\approx66\\;\\text{cm}}$$
$$\\boxed{\\text{Displacement}=14\\;\\text{cm}}$$
$$\\boxed{\\text{Average speed}\\approx0.0122\\;\\text{cm s}^{-1}}$$
$$\\boxed{|\\text{Average velocity}|\\approx0.00259\\;\\text{cm s}^{-1}}$$`,
    diagramUrl: `https://physics4fun.in/images/cbse/class%2009/ch01/fig_4_32_clock_minute_hand.svg`,
    marks: 3
  }
];

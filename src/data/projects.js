window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.projects = [
  {
    slug: 'about-me-website',
    type: 'personal',
    title: 'Personal About Me Website',
    eyebrow: 'First Year · Web Fundamentals',
    year: 'First Year',
    category: 'Web',
    image: 'assets/images/web.png',
    summary: 'My first web project, rebuilt as a polished personal mini-site while keeping the original purpose: introducing who I am, what I enjoy, and where I started in Computer Engineering.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    featured: false
  },
  {
    slug: 'autonomous-sumobot',
    title: 'Autonomous Sumobot',
    eyebrow: 'First Year · Robotics',
    year: 'First Year',
    category: 'Embedded',
    image: 'assets/images/sumobot.jpg',
    summary: 'A small autonomous robot designed to stay inside a sumo ring, detect an opponent, and control its motors based on sensor input.',
    stack: ['Arduino', 'C/C++', 'IR Sensors', 'DC Motors'],
    challenge: 'The robot had to make useful movement decisions without a human controller. It needed to react quickly to both the ring boundary and the opponent.',
    solution: 'I organized the behavior around a continuous sense–decide–act loop. Boundary detection receives the highest priority, while opponent sensing determines when the robot should search, turn, or move forward.',
    architecture: [
      ['Sense', 'Read boundary and opponent sensors continuously.'],
      ['Prioritize', 'Protect the robot from leaving the ring before any attack action.'],
      ['Decide', 'Choose between search, turn, retreat, or attack behavior.'],
      ['Act', 'Drive the motors in the selected direction and immediately repeat the loop.']
    ],
    highlights: [
      ['Autonomous control', 'Movement is determined by sensor conditions rather than manual steering.'],
      ['Boundary safety', 'Edge detection can override attacking behavior to keep the robot in play.'],
      ['Physical debugging', 'Testing exposed timing, traction, sensor placement, and wiring issues that were not obvious in code.']
    ],
    learnings: ['Sensor-driven decision logic', 'Motor direction and timing', 'Hardware/software troubleshooting', 'Iterative testing'],
    featured: true
  },
  {
    slug: 'land-use-inventory',
    title: 'Land Use Inventory',
    eyebrow: 'First Year · C Programming',
    year: 'First Year',
    category: 'Software',
    image: 'assets/images/landuse.jpg',
    summary: 'A C-based record system for storing lot information, searching entries, working with coordinate points, calculating area, and representing a property shape.',
    stack: ['C', 'File Handling', 'Coordinates', 'Data Structures'],
    challenge: 'Land records become difficult to manage when information is stored manually and calculations are done separately from the records.',
    solution: 'The program brings data entry, searching, coordinate handling, area calculation, and basic visualization into one structured workflow.',
    architecture: [
      ['Capture', 'Collect lot identity, land-use details, and coordinate points.'],
      ['Store', 'Save records using file handling so information can be retrieved later.'],
      ['Process', 'Use coordinates to compute useful values such as area.'],
      ['Present', 'Search records and display an approximate representation of the lot.']
    ],
    highlights: [
      ['Persistent records', 'File handling keeps lot information available across sessions.'],
      ['Coordinate processing', 'Boundary points become inputs for calculation and visualization.'],
      ['Modular logic', 'Functions separate data entry, searching, calculation, and output.']
    ],
    learnings: ['C structures and variables', 'File input/output', 'Function-based program design', 'Input validation'],
    featured: false
  },
  {
    slug: 'gps-attendance-system',
    title: 'GPS Attendance System',
    eyebrow: 'Second Year · Web + Geolocation',
    year: 'Second Year',
    category: 'Web',
    image: 'assets/images/attendance.jpg',
    summary: 'A location-aware attendance system that checks whether a student is within an allowed venue radius before accepting a check-in.',
    stack: ['Java EE', 'JSP/Servlets', 'MySQL', 'Geolocation API'],
    challenge: 'A normal online attendance form can confirm that someone clicked a button, but it does not confirm that the person is physically near the event venue.',
    solution: 'The browser collects the current latitude and longitude, the server compares the position with the configured venue coordinates, and the attendance rule accepts or rejects the check-in based on distance.',
    architecture: [
      ['Client', 'Request location permission and collect current coordinates.'],
      ['Validation', 'Send the position with the attendance request.'],
      ['Distance check', 'Estimate the student-to-venue distance using geographic coordinates.'],
      ['Record', 'Store the attendance result with the user, event, and timestamp.']
    ],
    highlights: [
      ['Location verification', 'The check-in rule adds physical context to an online attendance action.'],
      ['Admin configuration', 'Venue coordinates and an allowed radius define the accepted area.'],
      ['Traceable records', 'Attendance data can include the event, timestamp, and location result.']
    ],
    formulas: [
      { name: 'Haversine component', formula: 'a = sin²(Δφ/2) + cos φ₁ · cos φ₂ · sin²(Δλ/2)', note: 'Uses differences in latitude and longitude on the Earth’s surface.' },
      { name: 'Estimated distance', formula: 'd = 2R · atan2(√a, √(1-a))', note: 'The result is compared with the configured attendance radius.' }
    ],
    learnings: ['Browser geolocation', 'Server-side validation', 'Database records', 'Geographic distance calculation'],
    featured: true
  },
  {
    slug: 'sumobot-hockey-demo',
    title: 'Sumobot / Hockey Demonstration',
    eyebrow: 'Second Year · Robotics Demonstration',
    year: 'Second Year',
    category: 'Embedded',
    image: 'assets/images/sumobot.jpg',
    summary: 'A demonstration-focused version of the robot project showing how autonomous motion, sensing, recovery, and competitive behavior perform outside the code editor.',
    stack: ['Arduino', 'Sensors', 'Motor Control', 'Testing'],
    challenge: 'A program can look correct in code while behaving differently once timing, traction, battery condition, and sensor placement affect the physical robot.',
    solution: 'The demonstration emphasizes repeatable test cycles: search for a target, detect conditions, react with motor commands, recover after losing the target, and refine the behavior based on actual movement.',
    architecture: [
      ['Search', 'Rotate or move until a useful target condition appears.'],
      ['Detect', 'Read sensors for the opponent and the playing boundary.'],
      ['React', 'Change direction or speed according to the current condition.'],
      ['Recover', 'Return to searching when the target is lost and continue the cycle.']
    ],
    highlights: [
      ['Real-world validation', 'The demo shows whether control logic survives physical conditions.'],
      ['Behavior tuning', 'Motor timing and direction changes can be refined from observed results.'],
      ['Robotics mindset', 'Testing connects software logic with mechanical and electrical behavior.']
    ],
    learnings: ['Behavior testing', 'Sensor response tuning', 'Motor timing', 'Physical-system debugging'],
    featured: false
  },
  {
    slug: 'numerical-methods-matlab',
    title: 'Numerical Methods — MATLAB',
    eyebrow: 'Second Year · Numerical Analysis',
    year: 'Second Year',
    category: 'Software',
    image: 'assets/images/numericals.png',
    summary: 'A MATLAB project that explores numerical root-finding: estimating where a function becomes zero using repeatable algorithms rather than relying only on symbolic algebra.',
    stack: ['MATLAB', 'Root Finding', 'Iteration', 'Graphing'],
    challenge: 'Some equations are difficult or inconvenient to solve exactly. The project needed a way to approximate roots and show how each estimate improves from one iteration to the next.',
    solution: 'The program applies standard numerical methods, tracks the current approximation and error, and uses graphs or iteration tables to make the convergence process easier to understand.',
    architecture: [
      ['Define', 'Enter the function and the starting values required by the selected method.'],
      ['Iterate', 'Apply the method formula and update the estimated root.'],
      ['Evaluate', 'Measure error or test the stopping condition.'],
      ['Present', 'Show the estimated root, iteration details, and graph for interpretation.']
    ],
    highlights: [
      ['Self-contained explanation', 'The portfolio documents the purpose, workflow, and formulas directly inside the project case study.'],
      ['Method comparison', 'Different methods can be compared by their starting requirements and convergence behavior.'],
      ['Visual interpretation', 'Graphs help explain what a root means before focusing on iterative formulas.']
    ],
    formulas: [
      { name: 'Graphical Method', formula: 'Root ≈ x where f(x) crosses y = 0', note: 'Useful for visual estimation and choosing starting intervals.' },
      { name: 'Incremental Search', formula: 'f(xᵢ) · f(xᵢ₊₁) < 0', note: 'A sign change suggests that a root lies between two tested points.' },
      { name: 'Bisection', formula: 'xₘ = (xₗ + xᵤ) / 2', note: 'Repeatedly halves an interval that still contains a sign change.' },
      { name: 'Regula Falsi', formula: 'xᵣ = xᵤ − f(xᵤ)(xₗ−xᵤ) / (f(xₗ)−f(xᵤ))', note: 'Uses the x-intercept of a line between two bounds.' },
      { name: 'Newton–Raphson', formula: 'xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ)', note: 'Uses the function and its derivative to move toward the root.' },
      { name: 'Secant', formula: 'xₙ₊₁ = xₙ − f(xₙ)(xₙ−xₙ₋₁)/(f(xₙ)−f(xₙ₋₁))', note: 'Approximates the slope using two previous points instead of an explicit derivative.' }
    ],
    learnings: ['Iterative algorithms', 'Stopping criteria', 'Error tracking', 'MATLAB plotting'],
    featured: true
  },
  {
    slug: 'numerical-methods-python',
    title: 'Numerical Methods — Python',
    eyebrow: 'Second Year · Python Application',
    year: 'Second Year',
    category: 'Software',
    image: 'assets/images/numericals.png',
    summary: 'A desktop learning application that places several root-finding methods in one interface so users can enter a function, calculate a root, and visualize how the result is obtained.',
    stack: ['Python', 'GUI', 'Matplotlib', 'Numerical Algorithms'],
    challenge: 'Numerical methods can feel abstract when students only see formulas and tables. The project needed to make the calculations easier to explore and compare.',
    solution: 'The interface groups methods into one application, accepts method-specific inputs, displays results, and uses plots to connect the algorithm with the graph of the function.',
    architecture: [
      ['Input', 'Enter the function and the values required by the selected method.'],
      ['Method engine', 'Run the chosen numerical algorithm using its own iteration rules.'],
      ['Result', 'Display the estimated root and relevant iteration output.'],
      ['Visualization', 'Plot the function so the user can interpret where the root occurs.']
    ],
    highlights: [
      ['Multiple methods', 'Graphical, incremental, bisection, regula falsi, Newton–Raphson, and secant approaches are presented together.'],
      ['Learning-focused UI', 'The same problem can be explored using different strategies without switching applications.'],
      ['No external video dependency', 'The project explanation, formulas, and purpose are available directly inside the portfolio.']
    ],
    formulas: [
      { name: 'Root condition', formula: 'f(x) = 0', note: 'A root is a value of x that makes the function equal to zero.' },
      { name: 'Bisection', formula: 'xₘ = (xₗ + xᵤ) / 2', note: 'Cuts the active interval in half each iteration.' },
      { name: 'Regula Falsi', formula: 'xᵣ = xᵤ − f(xᵤ)(xₗ−xᵤ)/(f(xₗ)−f(xᵤ))', note: 'Uses a line between two bounds to estimate the x-intercept.' },
      { name: 'Newton–Raphson', formula: 'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)', note: 'Uses tangent information to generate the next approximation.' },
      { name: 'Secant', formula: 'xₙ₊₁ = xₙ − f(xₙ)(xₙ−xₙ₋₁)/(f(xₙ)−f(xₙ₋₁))', note: 'Uses two previous points to approximate the derivative.' }
    ],
    learnings: ['Python GUI design', 'Numerical algorithms', 'Graph interpretation', 'Method comparison'],
    featured: false
  },
  {
    slug: 'rfid-attendance-management',
    title: 'RFID Attendance Management System',
    eyebrow: 'Special Project · RFID + Web Platform',
    year: 'Special Project',
    category: 'Full Stack',
    image: 'assets/images/attendance-special.png',
    summary: 'A university-focused attendance platform connecting RFID identification with event records, time in/out, online student access, fines management, and administrative tools.',
    stack: ['RFID', 'PHP', 'MySQL', 'JavaScript', 'Web Dashboard'],
    challenge: 'A card scan is only useful when the system can identify the student, understand the active event, determine whether the scan is time-in or time-out, and store the result clearly for both students and administrators.',
    solution: 'The project links RFID tags to student records and routes each valid scan through event rules before writing an attendance record that can be reviewed online.',
    architecture: [
      ['RFID card', 'Provides the unique identifier assigned to a student.'],
      ['Reader', 'Captures the tag and sends the identifier to the system.'],
      ['Application logic', 'Validates the user, event, scan state, and allowed action.'],
      ['Database', 'Stores attendance, event, account, and fine information.'],
      ['Dashboards', 'Expose the correct records and controls to students and administrators.']
    ],
    highlights: [
      ['Fast identification', 'RFID removes repeated manual typing during event attendance.'],
      ['Role-aware interface', 'Students and administrators receive different views and permissions.'],
      ['Time-aware records', 'Scans can be interpreted as time-in or time-out with a stored timestamp.'],
      ['Online transparency', 'Students can review their own attendance and related records.']
    ],
    learnings: ['Hardware-to-web integration', 'PHP/MySQL workflows', 'Authentication and roles', 'Relational data modeling'],
    featured: true
  },
  {
    slug: 'letter-display-system',
    title: 'Letter Display System',
    eyebrow: 'Third Year · Digital Electronics',
    year: 'Third Year',
    category: 'Hardware',
    image: 'assets/images/ic.jpg',
    summary: 'A digital electronics project that uses integrated circuits and logic connections to turn Boolean output states into recognizable letter patterns on a display.',
    stack: ['Digital Logic', 'Integrated Circuits', 'LED Display', 'Breadboard'],
    challenge: 'Truth tables and Boolean expressions can feel abstract until the logic is connected to a physical output that immediately shows whether the design is correct.',
    solution: 'The circuit maps input combinations through integrated circuits to the display lines required for each character, making the relationship between logic and output visible.',
    architecture: [
      ['Input', 'A switch or control state defines the requested condition.'],
      ['Logic', 'ICs process the input combination according to the circuit design.'],
      ['Driver output', 'Logic states are delivered to the corresponding display lines.'],
      ['Display', 'The active segments or LEDs form the intended letter.']
    ],
    highlights: [
      ['Truth-table design', 'Outputs are planned from the character pattern before wiring the circuit.'],
      ['Physical implementation', 'Integrated circuits perform the logic rather than software.'],
      ['Traceable troubleshooting', 'Incorrect characters can be checked through power, pins, logic states, and wiring.']
    ],
    learnings: ['IC pinouts and datasheets', 'Boolean logic', 'Breadboard wiring', 'Circuit troubleshooting'],
    featured: false
  },
  {
    slug: 'cpu-scheduling-simulator',
    title: 'Preemptive CPU Scheduling Simulator',
    eyebrow: 'Third Year · Operating Systems',
    year: 'Third Year',
    category: 'Software',
    image: 'assets/images/cpu-scheduling.png',
    summary: 'An interactive simulator that shows how preemptive scheduling algorithms choose processes and how those decisions affect waiting, turnaround, response time, and context switching.',
    stack: ['Python', 'Algorithms', 'Gantt Chart', 'Operating Systems'],
    challenge: 'Scheduling algorithms are easier to memorize than to truly understand because process arrivals, interruptions, and resumes happen over time.',
    solution: 'The simulator converts process inputs into an execution timeline, making each scheduling decision visible and calculating metrics that can be compared across algorithms.',
    architecture: [
      ['Input', 'Define process ID, arrival time, burst time, priority, or time quantum when required.'],
      ['Scheduler', 'Apply Round Robin, SRTF, or Preemptive Priority rules.'],
      ['Timeline', 'Build an execution sequence showing when processes run, pause, and resume.'],
      ['Metrics', 'Calculate waiting, turnaround, response time, and context switches.']
    ],
    highlights: [
      ['Round Robin', 'Ready processes receive CPU time according to a defined quantum.'],
      ['SRTF', 'The process with the shortest remaining burst can preempt the current one.'],
      ['Preemptive Priority', 'A newly arrived higher-priority process can replace the running process.'],
      ['Visual timeline', 'A Gantt-style output makes the execution order easier to inspect.']
    ],
    learnings: ['Scheduling algorithms', 'Process metrics', 'Preemption', 'Algorithm visualization'],
    featured: true
  },
  {
    slug: 'smart-locker-system',
    title: 'Smart Locker System',
    eyebrow: 'Third Year · Embedded Systems',
    year: 'Third Year',
    category: 'Embedded',
    image: 'assets/images/locker.jpg',
    summary: 'A microcontroller-based access-control project combining keypad input, status feedback, and an electronic locking mechanism.',
    stack: ['Arduino', 'Keypad', 'LCD', 'Servo / Lock Actuator'],
    challenge: 'An electronic lock needs more than a motor. It must collect user input, validate access, communicate status clearly, and control the actuator only when the access rule is satisfied.',
    solution: 'The system separates the flow into input, verification, feedback, and actuation so each step can be tested independently.',
    architecture: [
      ['Input', 'Read the password through the keypad.'],
      ['Verify', 'Compare the entered value with the stored access code.'],
      ['Feedback', 'Use the LCD, LEDs, or buzzer to communicate the result.'],
      ['Actuate', 'Move the servo or lock only after successful verification.']
    ],
    highlights: [
      ['Clear access flow', 'The user receives feedback before the physical lock changes state.'],
      ['Hardware integration', 'Input, display, sound, and actuator components work under one controller.'],
      ['Retry handling', 'Invalid attempts can be detected and responded to without opening the locker.']
    ],
    learnings: ['Matrix keypad reading', 'LCD prompts', 'Servo control', 'Access-control logic'],
    featured: false
  },
  {
    slug: 'smart-carpark-system',
    title: 'Smart Carpark Management System',
    eyebrow: 'Third Year · IoT & Embedded Systems',
    year: 'Third Year',
    category: 'IoT',
    image: 'assets/images/carpark.png',
    summary: 'A connected parking concept that turns physical slot occupancy into live status data for a web interface using ESP32-based sensing.',
    stack: ['ESP32', 'Sensors', 'IoT', 'Web Dashboard'],
    challenge: 'Knowing that parking is available is not enough if the user still has to drive around to find the open slot. The system needs to connect physical sensing with useful location information.',
    solution: 'Each slot is sensed, processed by the controller, transmitted as a status update, and represented in a browser interface as available or occupied.',
    architecture: [
      ['Sensor', 'Detect whether a vehicle is present in a specific parking slot.'],
      ['ESP32', 'Read the slot state and prepare the status data.'],
      ['Network', 'Transmit updates to the server or data layer.'],
      ['Web interface', 'Present available and occupied spaces in a readable layout.']
    ],
    highlights: [
      ['Live availability', 'Each parking space can be represented by its latest detected state.'],
      ['Slot identity', 'Users can understand where the available space is, not only the total count.'],
      ['Hardware + software', 'The project demonstrates a complete IoT path from physical sensing to a user-facing interface.']
    ],
    learnings: ['ESP32 programming', 'Sensor state handling', 'Wireless updates', 'IoT dashboard design'],
    featured: true
  }
];

window.PortfolioData.site = {
  name: 'Charles Dave Morales',
  role: 'Computer Engineering Student',
  email: 'charlesdavemorales04@gmail.com',
  facebook: 'https://www.facebook.com/share/153rtxc1iN/',
  instagram: 'https://www.instagram.com/charlesdavemorales?igsh=bXFjcTlrbGlycGU1',
  intro: 'I design and build practical systems across software, embedded hardware, web applications, and IoT.'
};

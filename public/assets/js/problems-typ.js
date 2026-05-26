// Have a problem to add? Submit it here: https://forms.gle/DXjPeTL5DbJBhKRv8

let problems = [
	{
		"title": "Quadratic Formula",
		"description": "Classic.",
		"typst": String.raw`x = (-b plus.minus sqrt(b^2 - 4 a c))/(2 a)`
	},
	{
		"title": "Pythagorean Theorem",
		"description": "Classic.",
		"typst": String.raw`c = sqrt(a^2+b^2)`
	},
	{
		"title": String.raw`Sum of First $n$ Squares`,
		"description": "Classic.",
		"typst": String.raw`sum_(i=1)^n i^2 = (n(n+1)(2n+1))/6`
	},
	{
		"title": "Law of Cosines",
		"description": "Classic.",
		"typst": String.raw`c^2 = a^2 + b^2 - 2 a b cos angle C`
	},
	{
		"title": "Legendre's Formula",
		"description": "Floors.",
		"typst": String.raw`nu_p (n!) = sum_(i = 1)^oo floor(n/p^i)`
	},
	{
		"title": "Euler's Identity",
		"description": "The most beautiful equation in mathematics.",
		"typst": String.raw`e^(pi i) + 1 = 0`
	},
	{
		"title": "Euler's Lesser-Known Identity",
		"description": "Troll.",
		"typst": String.raw`ceil(e) - floor(pi) = 0`
	},
	{
		"title": "Normal Distribution",
		"description": "Thanks to Martin for correcting this!",
		"typst": String.raw`Phi(x) = 1/(sigma sqrt(2 pi)) e^(-(x - mu)^2/(2 sigma^2))`
	},
	{
		"title": "Fourier Transform",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`hat(f)(omega) = integral_(-oo)^oo f(x) e^(-2 pi i x omega) "d"x`
	},
	{
		"title": "Wave Equation",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`(partial^2 u)/(partial t^2) = c^2 (partial^2 u)/(partial x^2)`
	},
	{
		"title": "Navier-Stokes Equation",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`rho ((partial bold("v"))/(partial t) + bold("v") dot nabla bold("v")) = -nabla p + nabla dot bold("T") + bold("f")`
	},
	{
		"title": "Schrödinger's Equation",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`i planck (partial)/(partial t) Psi = H Psi`
	},
	{
		"title": "Black-Scholes Equation",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`(partial V)/(partial t) + 1/2 sigma^2 S^2 (partial^2 V)/(partial S^2) + r S (partial V)/(partial S) - r V = 0`
	},
	{
		"title": "Relativity",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`E = m c^2`
	},
	{
		"title": "Chaos Theory",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`x_(t+1) = k x_t (1 - x_t)`
	},
	{
		"title": "Definition of the Derivative",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`("d"f)/("d"x) = lim_(h -> 0) (f(x + h) - f(x))/h`
	},
	{
		"title": "Euler's Formula for Polyhedra",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`V - E + F = 2`
	},
	{
		"title": "Gravitation",
		"description": "17 Equations That Changed the World.",
		"typst": String.raw`F = (G m_1 m_2)/d^2`
	},
	{
		"title": "AM-GM",
		"description": "Fun",
		"typst": String.raw`(x_1 + x_2 + dots.h.c + x_n)/n >= root(n, x_1 dot x_2 dots.h.c x_n)`
	},
	{
		"title": "Stirling's Approximation",
		"description": "Fun",
		"typst": String.raw`n! approx sqrt(2 pi n) (n/e)^n`
	},
	{
		"title": "Stokes' Theorem",
		"description": "Fun",
		"typst": String.raw`integral.double_S (nabla times bold("F")) dot "d"bold("S") = integral.cont_Gamma bold("F") dot "d"bold(Gamma)`
	},
	{
		"title": "Divergence Theorem",
		"description": "Fun",
		"typst": String.raw`integral.triple_V (nabla dot bold("F")) "d"V = integral.surf_S (bold("F") dot bold("n")) "d"S`
	},
	{
		"title": "Cauchy-Schwarz Inequality",
		"description": "Fun",
		"typst": String.raw`abs(chevron.l bold("u")\, bold("v") chevron.r)^2 <= chevron.l bold("u"), bold("u") chevron.r dot chevron.l bold("v"), bold("v") chevron.r`
	},
	{
		"title": "Area of a Circle",
		"description": "Simple",
		"typst": String.raw`A = pi r^2`
	},
	{
		"title": String.raw`Definition of $tau$`,
		"description": "Troll.",
		"typst": String.raw`tau = 2 pi`
	},
	{
		"title": "Sophie Germain Identity",
		"description": "Simple.",
		"typst": String.raw`a^4 + 4 b^4 = (a^2 + 2 a b + 2 b^2)(a^2 - 2 a b + 2 b^2)`
	},
	{
		"title": "Pascal's Identity",
		"description": "Classic.",
		"typst": String.raw`binom(n, k) = binom(n-1, k) + binom(n-1, k-1)`
	},
	{
		"title": "Hockey-Stick Identity",
		"description": "Classic.",
		"typst": String.raw`sum_(i=r)^n binom(i, r) = binom(n+1, r+1)`
	},
	{
		"title": "Vandermonde's Identity",
		"description": "Classic.",
		"typst": String.raw`binom(m + n, r) = sum_(k = 0)^r binom(m, k) binom(n, r-k)`
	},
	{
		"title": "Combinations",
		"description": "Simple.",
		"typst": String.raw`binom(n, k) = (n!)/(k!(n-k)!)`
	},
	{
		"title": "Heine's Identity",
		"description": "No idea what this is. Looks cool tho.",
		"typst": String.raw`1/sqrt(z - cos psi) = sqrt(2)/pi sum_(m = -oo)^oo Q_(m - 1/2)(z) e^(i m psi)`
	},
	{
		"title": "Binomial Identity",
		"description": "Classic.",
		"typst": String.raw`(x + y)^n = sum_(k=0)^n binom(n, k) x^(n-k) y^k`
	},
	{
		"title": "Hermite's Identity",
		"description": "Hadn't heard of this either.",
		"typst": String.raw`sum_(k=0)^(n-1) floor(x + k/n) = floor(n x)`
	},
	{
		"title": "Matrix Determinant Lemma",
		"description": "Or this lmao.",
		"typst": String.raw`det(bold("A") + bold("u") bold("v")^top) = (1 + bold("v")^top bold("A")^(-1) bold("u")) det(bold("A"))`
	},
	{
		"title": "Euler Product of the Riemann-Zeta Function",
		"description": "Classic.",
		"typst": String.raw`zeta(s) = sum_(n=1)^oo 1/n^s = product_(p in PP) 1/(1 - p^(-s))`
	},
	{
		"title": "Irrationality of the Square Root of 2",
		"description": "I just really wanted to keep using bb.",
		"typst": String.raw`sqrt(2) in.not QQ`
	},
	{
		"title": "Heron's Formula",
		"description": "Classic.",
		"typst": String.raw`[triangle A B C] = sqrt(s(s-a)(s-b)(s-c))`
	},
	{
		"title": "Heisenberg's Uncertainty Principle",
		"description": "Classic.",
		"typst": String.raw`Delta x Delta p approx planck`
	},
	{
		"title": String.raw`Continued Fraction for $pi/2$`,
		"description": "@InertialObservr",
		"typst": String.raw`pi/2 = 1 + 1/(1 + 1/(1/2 + 1/(1/3 + 1/(1/4 + dots.down))))`
	},
	{
		"title": "Sophomore's Dream",
		"description": "Cool.",
		"typst": String.raw`integral_0^1 x^(-x) "d"x = sum_(n=1)^oo n^(-n)`
	},
	{
		"title": String.raw`Identity Involving $pi$ and $e$`,
		"description": "@InertialObservr",
		"typst": String.raw`product_(n=2)^oo e (1 - 1/n^2)^(n^2) = pi/(e sqrt(e))`
	},
	{
		"title": "Representation of the Golden Ratio",
		"description": "Classic",
		"typst": String.raw`phi.alt = sqrt(1 + sqrt(1 + sqrt(1 + sqrt(1 + dots.h))))`
	},
	{
		"title": "The Sum of All Positive Integers",
		"description": "Troll.",
		"typst": String.raw`sum_(n = 1)^oo n = -1/12`
	},
	{
		"title": "Inverse of a Complex Number",
		"description": "Gotta know macron man",
		"typst": String.raw`z^(-1) = macron(z)/abs(z)^2, forall z != 0`
	},
	{
		"title": "Definition of Convolution",
		"description": "Shout out to 6.003",
		"typst": String.raw`(f * g)(t) = integral_(-oo)^oo f(tau) g(t - tau) "d"tau`
	},
	{
		"title": "Definition of the Kronecker Delta Function",
		"description": "cases ftw",
		"typst": String.raw`delta_(i,j) = cases(0 quad & i != j, 1 quad & i = j)`
	},
	{
		"title": "Bayes' Theorem",
		"description": "bae's theorem",
		"typst": String.raw`P(A|B) = (P(B|A) P(A))/(P(B))`
	},
	{
		"title": String.raw`Probability Density Function of the Student's $t$-distribution`,
		"description": "fun",
		"typst": String.raw`f(t) = Gamma((nu + 1)/2) / (sqrt(nu pi) Gamma(nu/2)) (1 + t^2/nu)^(-(nu + 1)/2)`
	},
	{
		"title": "De Morgan's Laws",
		"description": "fun",
		"typst": String.raw`not (P and Q) tack.r (not P) or (not Q)`
	},
	{
		"title": "Principle of Inclusion-Exclusion",
		"description": "for dummies",
		"typst": String.raw`abs(A union B) = abs(A) + abs(B) - abs(A inter B)`
	},
	{
		"title": "General Principle of Inclusion-Exclusion",
		"description": "for galaxy brains",
		"typst": String.raw`abs(union.big_(i = 1)^n A_i) = sum_(emptyset != J subset.eq {1, dots.h, n}) (-1)^(abs(J) + 1) abs(inter.big_(j in J) A_j)`
	},
	{
		"title": String.raw`Determinant of a $2 times 2$ Matrix`,
		"description": "matrix",
		"typst": String.raw`det mat(delim: "[", a, b; c, d) = a d - b c`
	},
	{
		"title": "Sawtooth Function",
		"description": "bb cases floors, this has it all",
		"typst": String.raw`S(x) = cases(x - floor(x) - 1\/2 quad & x in RR without ZZ, 0 quad & x in ZZ)`
	},
	{
		"title": "Definition of Graham's Number",
		"description": "G = g_{64}",
		"typst": String.raw`g_n = cases(3 arrow.t arrow.t arrow.t arrow.t 3 quad & n = 1, 3 attach(arrow.t, tr: g_(n-1)) 3 quad & n >= 2 and n in NN)`
	},
	{
		"title": "Burnside's Lemma",
		"description": "The Lemma that is not Burnside's",
		"typst": String.raw`abs(X\/G) = 1/abs(G) sum_(g in G) abs(X^g)`
	},
	{
		"title": "Continuum Hypothesis",
		"description": "independent of ZFC!",
		"typst": String.raw`aleph_0 = abs(NN), frak(c) = abs(RR) \ exists.not A : aleph_0 < abs(A) < frak(c)`
	},
	{
		"title": "Spectral Decomposition",
		"description": "derived from memory",
		"typst": String.raw`A = mat(delim: "(", |, |, , |; bold("v")_1, bold("v")_2, dots.h, bold("v")_n; |, |, , |) mat(delim: "(", lambda_1, , , ; , lambda_2, , ; , , dots.down, ; , , , lambda_n) mat(delim: "(", |, |, , |; bold("v")_1, bold("v")_2, dots.h, bold("v")_n; |, |, , |)^(-1)`
	},
	{
		"title": "Pythagorean Identity",
		"description": "basically just the Pythagorean theorem",
		"typst": String.raw`sin^2 theta + cos^2 theta = 1`
	},
	{
		"title": "Double Angle for \sin",
		"description": "back to basics",
		"typst": String.raw`sin(2 theta) = 2 sin(theta) cos(theta)`
	},
	{
		"title": "Double Angle for \cos",
		"description": "back to basics",
		"typst": String.raw`cos(2 theta) = cos^2(theta) - sin^2(theta)`
	},
	{
		"title": "Fermat's Last Theorem",
		"description": "have a marvelous proof, but this description's too small to contain it",
		"typst": String.raw`exists.not {x,y,z,n} in NN, n > 2 : x^n + y^n = z^n`
	},
	{
		"title": "Fermat's Little Theorem",
		"description": "fermat's itty bitty theorem",
		"typst": String.raw`a^p equiv a quad (mod p)`
	},
	{
		"title": "Euler's Theorem",
		"description": "totients",
		"typst": String.raw`gcd(a, n) = 1 ==> a^(phi(n)) equiv 1 quad (mod n)`
	},
	{
		"title": "QM-AM-GM-HM Inequality over 3 Variables",
		"description": "cool-looking",
		"typst": String.raw`sqrt((a^2 + b^2 + c^2)/3) >= (a + b + c)/3 >= root(3, a b c) >= 3/(1/a + 1/b + 1/c)`
	},
	{
		"title": "Extended Law of Sines",
		"description": "threw in the circumradius as well",
		"typst": String.raw`a/(sin angle A) = b/(sin angle B) = c/(sin angle C) = 2 R`
	},
	{
		"title": "Integration by Parts",
		"description": "it's just the product rule really",
		"typst": String.raw`integral u "d"v = u v - integral v "d"u`
	},
	{
		"title": "Definition of Perfect Numbers",
		"description": "shrug",
		"typst": String.raw`{n : sum_(d | n)^(d < n) d = n}`
	},
	{
		"title": "Gaussian Integral",
		"description": "classic trick",
		"typst": String.raw`integral_(-oo)^oo e^(-x^2) "d"x = sqrt(integral_(-oo)^oo integral_(-oo)^oo e^(-x^2 - y^2) "d"x "d"y) = sqrt(integral_0^(2 pi) integral_0^oo e^(-r^2) r "d"r "d"theta) = sqrt(pi)`
	},
	{
		"title": "Definition of an Integral",
		"description": "why not",
		"typst": String.raw`integral_a^b f(x) "d"x = lim_(k -> oo) ((b-a) sum_(i = 1)^k (f(a + i(b-a)/k))/k)`
	},
	{
		"title": "Quantum Fourier Transform",
		"description": "bra ket notation is fun",
		"typst": String.raw`|x chevron.r |-> 1/sqrt(N) sum_(k = 0)^(N-1) omega_x^k |k chevron.r`
	},
	{
		"title": "Recursive Definition of the Hadamard Transform",
		"description": "matrix in cases",
		"typst": String.raw`H_m = cases(1 quad & m = 0, 1/sqrt(2) mat(delim: "(", H_(m-1), H_(m-1); H_(m-1), -H_(m-1)) quad & m > 0)`
	},
	{
		"title": "Wigner Transform of the Density Matrix",
		"description": "I know some of these words",
		"typst": String.raw`W(x,p) = 1/(pi planck) integral_(-oo)^oo chevron.l x + y | hat(rho) | x - y chevron.r e^(-2 i p y\/planck) "d"y`
	},
	{
		"title": "Imaginary Numbers",
		"description": "Just gonna add some simple formulas",
		"typst": String.raw`i^2 = -1`
	},
	{
		"title": "Sum of Cubes",
		"description": "Simple",
		"typst": String.raw`a^3 + b^3 = (a+b)(a^2 - a b + b^2)`
	},
	{
		"title": "RSA Decryption Algorithm",
		"description": "good ol' rivest",
		"typst": String.raw`m = c^(e^(-1) mod phi.alt(n)) quad (mod n)`
	},
	{
		"title": "Contraposition",
		"description": "logic yo",
		"typst": String.raw`(p ==> q) <==> (not q ==> not p)`
	},
	{
		"title": "Equation of a Spring",
		"description": "Gonna use dots like the physicists do",
		"typst": String.raw`m dot.double(x) = -k x`
	},
	{
		"title": String.raw`Sum of Reciprocals of Partial Sums of $NN$`,
		"description": "Credit to @IntertialObservr",
		"typst": String.raw`sum_(i = 2)^oo 1/(sum_(j = 1)^i j) = 1`
	},
	{
		"title": "Binet's Formula",
		"description": "Classic",
		"typst": String.raw`F_n = 1/sqrt(5) (phi^n - (-1)^n/phi^n)`
	},
	{
		"title": String.raw`Sum of First $n$ Cubes`,
		"description": "Classic",
		"typst": String.raw`sum_(k = 0)^n k^3 = (sum_(k = 0)^n k)^2`
	},
	{
		"title": "The Basel Problem",
		"description": "Classic",
		"typst": String.raw`sum_(n = 1)^oo 1/n^2 = pi^2/6`
	},
	{
		"title": "Root Mean Square",
		"description": "how could i forget",
		"typst": String.raw`f_"rms" = sqrt(1/(T_2 - T_1) integral_(T_1)^(T_2) [f(t)]^2 "d"t)`
	},
	{
		"title": "The Harmonic Series",
		"description": "Classic",
		"typst": String.raw`sum_(n=1)^oo 1/n = oo`
	},
	{
		"title": "Tupper's Self-Referential Formula",
		"description": "Troll",
		"typst": String.raw`1/2 < floor(mod(floor(y/17) 2^(-17 floor(x) - mod(floor(y), 17)), 2))`
	},
	{
		"title": String.raw`H$dot.double(bold("o"))$lder's Inequality`,
		"description": "Styled like the OTIS handouts by Evan Chen",
		"typst": String.raw`(sum_(i = 1)^n a_i)^p (sum_(i = 1)^n b_i)^q >= (sum_(i = 1)^n root(p+q, a_i^p b_i^q))^(p+q)`
	},
	{
		"title": "Rearrangement Inequality",
		"description": "kinda cool",
		"typst": String.raw`a_1 <= a_2 <= dots.h.c <= a_n, b_1 <= b_2 <= dots.h.c <= b_n ==> sum_(i=1)^n a_i b_i >= sum_(i=1)^n a_(sigma(i)) b_i >= sum_(i=1)^n a_(n+1-i) b_i`
	},
	{
		"title": "Power Mean",
		"description": "like RMS-AM-GM-HM but like generalized",
		"typst": String.raw`M_r(x_1, x_2, dots.h, x_n) = cases((1/n sum_(i=1)^n x_i^r)^(1/r) quad & r != 0, root(n, product_(i=1)^n x_i) quad & r = 0)`
	},
	{
		"title": "Law of Tangents",
		"description": "yes this actually exists",
		"typst": String.raw`(a-b)/(a+b) = tan((angle A - angle B)/2)/tan((angle A + angle B)/2)`
	},
	{
		"title": "Euler's Arctangent Identity",
		"description": "dammit euler OP",
		"typst": String.raw`tan^(-1)(1/x) = tan^(-1)(1/(x+y)) + tan^(-1)(y/(x^2 + x y + 1))`
	},
	{
		"title": "The Dirichlet Convolution",
		"description": "bruh",
		"typst": String.raw`(f ast g)(n) = sum_(d|n) f(d) g(n/d)`
	},
	{
		"title": "Sum of a Row of Pascal's Triangle",
		"description": "not sure how else to word it",
		"typst": String.raw`binom(n, 0) + binom(n, 1) + binom(n, 2) + dots.h.c + binom(n, n) = 2^n`
	},
	{
		"title": "Alternating Harmonic Series",
		"description": "First use of ln",
		"typst": String.raw`1 - 1/2 + 1/3 - 1/4 + 1/5 - dots.h.c = ln 2`
	},
	{
		"title": "Definitions of Catalan's Constant",
		"description": "Credit to /u/heropup",
		"typst": String.raw`G = beta(2) = sum_(k=0)^oo (-1)^k/(2k+1)^2 = integral.double_([0,1]^2) ("d"x "d"y)/(1 + x^2 y^2)`
	},
	{
		"title": String.raw`Series Representation of Ap$acute(bold("e"))$ry's Constant`,
		"description": "Credit to /u/heropup",
		"typst": String.raw`zeta(3) = 5/2 sum_(n=1)^oo (-1)^(n-1)/(n^3 binom(2n, n))`
	},
	{
		"title": "Definition of the Euler-Mascheroni Constant",
		"description": "Credit to /u/heropup",
		"typst": String.raw`gamma = lim_(n -> oo) (sum_(k=1)^n 1/k - ln n) = integral_1^oo (1/floor(x) - 1/x) "d"x`
	},
	{
		"title": "Mertens' Theorem",
		"description": "actually his third theorem",
		"typst": String.raw`product_(p in PP)^n (1 - 1/p) ~ e^(-gamma)/(log n)`
	},
	{
		"title": "Green's First Identity",
		"description": "Credit to Varge",
		"typst": String.raw`integral_Omega (psi Delta phi + nabla psi dot nabla phi) "d"V = integral.cont_(partial Omega) psi (nabla phi dot bold("n")) "d"S`
	},
	{
		"title": "Cauchy-Riemann Equations",
		"description": "complex analysis is best analysis (1); credit to blu_bird",
		"typst": String.raw`(partial u)/(partial x) = (partial v)/(partial y), (partial u)/(partial y) = -(partial v)/(partial x)`
	},
	{
		"title": "Cauchy's Integral Formula",
		"description": "complex analysis is best analysis (2); credit to blu_bird",
		"typst": String.raw`f(z_0) = 1/(2 pi i) integral.cont_Gamma f(z)/(z-z_0) "d"z`
	},
	{
		"title": "Cauchy's Differentiation Formula",
		"description": "complex analysis is best analysis (3); credit to blu_bird",
		"typst": String.raw`f^((k))(z_0) = k!/(2 pi i) integral.cont_Gamma f(z)/(z-z_0)^(k+1) "d"z`
	},
	{
		"title": "Functional Equation for the Riemann-Zeta Function",
		"description": "This is the simplest example of a functional equation in the Langlands program. Conjecturally all Hasse-Weil zeta functions have Euler factorizations and functional equations with the Riemann zeta function as just one example.",
		"typst": String.raw`pi^(-s\/2) Gamma(s/2) zeta(s) = pi^(-(1-s)\/2) Gamma((1-s)/2) zeta(1-s)`
	},
	{
		"title": "Well-Ordering Principle",
		"description": "Classic. Credit to Eucrue",
		"typst": String.raw`forall M (M subset NN and M != emptyset ==> exists m_0 [m_0 in M and forall n (n in M ==> m <= n)])`
	},
	{
		"title": "Asymptotic Formula for the Dirichlet Divisor Function",
		"description": "very cool dirichlet",
		"typst": String.raw`sum_(n <= x) tau(n) = x log x + (2 gamma - 1) x + O(sqrt(x))`
	},
	{
		"title": "Prime Number Theorem",
		"description": "trivial",
		"typst": String.raw`pi(x) ~ x/(log x)`
	},
	{
		"title": "Cumulative Distribution Function of the Gaussian Distribution",
		"description": "dense",
		"typst": String.raw`Phi(x) = 1/sqrt(2 pi) integral_(-oo)^x e^(-t^2\/2) "d"t`
	},
	{
		"title": "Chernoff Bound",
		"description": "I never really learned what this was",
		"typst": String.raw`PP(X >= t) <= (EE[e^(lambda X)])/e^(lambda t)`
	},
	{
		"title": "Union Bound",
		"description": "Never learned what this was either",
		"typst": String.raw`PP(union.big_(i=1)^n X_i) <= sum_(i=1)^n PP(X_i)`
	},
	{
		"title": "Law of Total Probability",
		"description": "shrug",
		"typst": String.raw`PP(A) = sum_(i=1)^n PP(A|B_i) PP(B_i)`
	},
	{
		"title": "Linear Least Squares Estimator",
		"description": "i love regression analysis",
		"typst": String.raw`L[X|Y] = EE[X] + "cov"(X,Y)/"var"(Y) (Y - EE[Y])`
	},
	{
		"title": "Rademacher Complexity",
		"description": "The empirical Rademacher complexity of a function class",
		"typst": String.raw`cal(R)_n (cal(F)) = EE_epsilon [sup_(f in cal(F)) 1/n sum_(i=1)^n epsilon_i f(x_i)]`
	},
	{
		"title": "Definition of the Dilogarithm",
		"description": "aka Spence's function. don't wanna be accused of sleeping on spence",
		"typst": String.raw`"Li"_2(z) = -integral_0^z log(1-t)/t "d"t, z in CC`
	},
	{
		"title": "Leibniz's Determinant Formula",
		"description": "Determinant of an n by n matrix",
		"typst": String.raw`det(A) = sum_(sigma in S_n) epsilon(sigma) product_(i=1)^n A_(i, sigma(i))`
	},
	{
		"title": "Euler-Lagrange Equations",
		"description": "The basis for all of Lagrangian mechanics",
		"typst": String.raw`(partial L)/(partial q_i) = "d"/("d"t) (partial L)/(partial dot(q_i))`
	},
	{
		"title": "Definition of the Euler Totient Function",
		"description": "what does totient mean anyways?",
		"typst": String.raw`phi(n) = abs({k in NN_(<=n) | gcd(k,n)=1}) = n product_(p|n) (1 - 1/p)`
	},
	{
		"title": "Sum of Divisors",
		"description": "i guess this person likes multiplicative functions",
		"typst": String.raw`sigma(n) = sum_(d|n) d = product_(p^a||n) ((p^(a+1)-1)/(p-1))`
	},
	{
		"title": "Einstein Field Equations",
		"description": "This form makes use of the Einstein tensor",
		"typst": String.raw`G_(mu nu) + Lambda g_(mu nu) = (8 pi G)/c^4 T_(mu nu)`
	},
	{
		"title": "Second Fundamental Theorem of Calculus",
		"description": "credit to VBG",
		"typst": String.raw`integral_a^b f(x) "d"x = [F(x)]_a^b = F(b) - F(a)`
	},
	{
		"title": "Abel's Summation Formula",
		"description": "unclear to me why this is at all useful tbh",
		"typst": String.raw`sum_(x < n <= y) a(n) f(n) = A(y) f(y) - A(x) f(x) - integral_x^y A(t) f'(t) "d"t`
	},
	{
		"title": "Lagrange's Theorem",
		"description": "more group theory",
		"typst": String.raw`(G:H) = abs(G)/abs(H)`
	},
	{
		"title": "Catalan Numbers",
		"description": "A000108",
		"typst": String.raw`C_n = sum_(k=1)^(n-1) C_k C_(n-k-1) = 1/(n+1) binom(2n, n)`
	},
	{
		"title": "Ising Model Hamiltonian",
		"description": "Mathematical model of ferromagnetism",
		"typst": String.raw`H(sigma) = -sum_(chevron.l i,j chevron.r) J_(i j) sigma_i sigma_j - mu sum_j h_j sigma_j`
	},
	{
		"title": "Borwein Integral",
		"description": "The pattern famously breaks down after this integral.",
		"typst": String.raw`integral_0^oo sin(x)/x sin(x\/3)/(x\/3) dots.h.c sin(x\/13)/(x\/13) "d"x = pi/2`
	},
	{
		"title": "Wigner Semicircle Distribution",
		"description": "Essentially just a semicircle scaled to be a probability distribution.",
		"typst": String.raw`f(x) = cases(2/(pi R^2) sqrt(R^2-x^2) quad & -R <= x <= R, 0 quad & abs(x) > R)`
	},
	{
		"title": "Parseval Gutzmer Formula",
		"description": "Apply the Cauchy Integral Formula to derive",
		"typst": String.raw`f(z) = sum_(k=0)^oo a_k z^k ==> 1/(2 pi) integral_0^(2 pi) abs(f(r e^(i theta)))^2 "d"theta = sum_(k=0)^oo abs(a_k r^k)^2`
	},
	{
		"title": "Fubini's Theorem",
		"description": "switching the order of integration ftw",
		"typst": String.raw`integral_X (integral_Y f(x,y) "d"y) "d"x = integral_Y (integral_X f(x,y) "d"x) "d"y = integral_(X times Y) f(x,y) "d"(x,y)`
	},
	{
		"title": "Coarea Formula",
		"description": "A generalization of Fubini's theorem",
		"typst": String.raw`integral_Omega g(x) abs(nabla u(x)) "d"x = integral_RR (integral_(u^(-1)(t)) g(x) "d"H_(n-1)(x)) "d"t`
	},
	{
		"title": "Equation of a Torus",
		"description": "yum, donuts",
		"typst": String.raw`(sqrt(x^2 + y^2) - R)^2 + z^2 = r`
	},
	{
		"title": "Ampère-Maxwell Law",
		"description": "credit to Andrija",
		"typst": String.raw`nabla times bold("B") = mu_0 (bold("J") + epsilon_0 (partial""bold("E"))/(partial t))`
	},
	{
		"title": "Gauss's Flux Theorem (Differential Form)",
		"description": "guess we're doing all of Maxwell's equations now huh",
		"typst": String.raw`nabla dot bold("E") = rho/epsilon_0`
	},
	{
		"title": "Gauss's Law for Magnetism",
		"description": "I'll need to fix this once we discover magnetic monopoles.",
		"typst": String.raw`nabla dot bold("B") = 0`
	},
	{
		"title": "Maxwell–Faraday Equation",
		"description": "induction",
		"typst": String.raw`nabla times bold("E") = -(partial""bold("B"))/(partial t)`
	},
	{
		"title": "Eigenvalue Formula",
		"description": "this yields the characteristic polynomial",
		"typst": String.raw`det(bold("A") - lambda""bold("I")) = 0`
	},
	{
		"title": "Collatz Function",
		"description": "The conjecture is that repeated applications of this function always hit 1.",
		"typst": String.raw`f(n) = cases(n\/2 quad & n equiv 0 quad (mod 2), 3n + 1 quad & n equiv 1 quad(mod 2))`
	},
	{
		"title": "Gamma Function",
		"description": "A generalization of the factorial function",
		"typst": String.raw`Gamma(z) = integral_0^oo x^(z - 1) e^(-x) "d"x`
	},
	{
		"title": "Laplace Transform",
		"description": "signals and systems baby",
		"typst": String.raw`cal(L){f}(s) = integral_0^oo f(t) e^(-s t) "d"t`
	},
	{
		"title": "Taylor Series",
		"description": "When a = 0, it's a Maclaurin series",
		"typst": String.raw`f(x) = sum_(n = 0)^oo (f^((n))(a))/(n!) (x - a)^n`
	},
	{
		"title": "Quaternion Multiplication Formula",
		"description": "Hamilton famously carved this formula into the stone of a bridge when he came up with it.",
		"typst": String.raw`bold("i")^2 = bold("j")^2 = bold("k")^2 = bold("i")bold("j")bold("k") = -1`
	},
	{
		"title": "General Solution to First-Order Linear Differential Equations",
		"description": "You can derive this with an integrating factor. ",
		"typst": String.raw`y = e^(-integral P(x) "d"x) integral Q(x) e^(integral P(x) "d"x) "d"x + C e^(-integral P(x) "d"x)`
	},
	{
		"title": "Fibonacci Binomial Coefficients Identity",
		"description": "Sum up the shallow diagonals of Pascal's triangle to make Fibonacci numbers",
		"typst": String.raw`F_(n+1) = binom(n, 0) + binom(n-1, 1) + binom(n-2, 2) + dots.h.c+ binom(n - floor(n/2), floor(n/2))`
	},
	{
		"title": "Bellman Optimality Equation",
		"description": "Somehow connected to reinforcement learning! Credit to Constantine.",
		"typst": String.raw`V^(pi*)(s) = max_a {R(s,a) + gamma sum_(s') P(s'|s,a) V^(pi*)(s')}`
	},
	{
		"title": "Definition of a Well-founded Relation",
		"description": "R is well-founded iff every proper subset contains a minimal element with respect to R. Credit to Constantine.",
		"typst": String.raw`(forall S subset.eq X) [S != emptyset ==> (exists m in S) (forall s in S) not(s R m)]`
	},
	{
		"title": "Estimation Lemma",
		"description": "Credit to Ben Napier.",
		"typst": String.raw`abs(integral_gamma f(z) "d"z) <= L(gamma) sup_gamma abs(f)`
	},
	{
		"title": "Chaitin's Constant",
		"description": "The probability that a randomly constructed program will halt.",
		"typst": String.raw`Omega_F = sum_(p in P_F) 2^(-abs(p))`
	},
	{
		"title": "Cauchy's Differentiation Formula",
		"description": "Credit to epm",
		"typst": String.raw`f^((n))(a) = n!/(2 pi i) integral.cont_gamma f(z)/(z-a)^(n+1) "d"z`
	},
	{
		"title": "Definition of the Quasi-Stationary Distribution",
		"description": "Getting rid of absorbing states.",
		"typst": String.raw`forall B in cal(B)(cal(X)^a), forall t >= 0, P_nu (Y_t in B, T > t) = nu(B) P_nu (T > t)`
	},
	{
		"title": "Addition of Sound Levels in Decibels",
		"description": "50dB + 50dB --> ~53dB!",
		"typst": String.raw`L_(a b) = 10 log_10 (10^(L_a\/10) + 10^(L_b\/10))`
	},
	{
		"title": "Fast-Growing Hierarchy",
		"description": "You wanna see some real speed?",
		"typst": String.raw`f_alpha (n) = cases(n+1 quad & alpha = 0, f_beta (n) quad & alpha = beta + 1, f_(alpha[n]) (n) quad & "else")`
	},
	{
		"title": "Feigenbaum-Cvitanović Functional Equation",
		"description": "Damn, that's a mouthful.",
		"typst": String.raw`g(g(x)) = -1/alpha g(alpha x)`
	},
	{
		"title": "Dirac Equation",
		"description": "Relativistic wave equation. Credit to Leon.",
		"typst": String.raw`i planck gamma^mu partial_mu psi - m c psi = 0`
	},
	{
		"title": "Feynman's Trick",
		"description": "Essentially differentiating under the integral sign; the given problem is extremely difficult to solve otherwise. Credit to Aarsh Chotalia.",
		"typst": String.raw`integral_0^pi ln(1 - 2 alpha cos x + alpha^2) "d"x = 2 pi ln abs(alpha)`
	},
	{
		"title": "Lorentz Factor",
		"description": "Time and length change by a factor of gamma when objects move near the speed of light.",
		"typst": String.raw`gamma = 1/sqrt(1 - v^2/c^2)`
	},
	{
		"title": "Time Dilation",
		"description": "Clocks moving at high speed will be observed to tick slower.",
		"typst": String.raw`Delta t = (Delta t_0)/sqrt(1 - v^2/c^2)`
	},
	{
		"title": "Gauss's Flux Theorem (Integral Form)",
		"description": "Use the divergence theorem to get to the differential form.",
		"typst": String.raw`integral.surf_S bold("E") dot "d"bold("A") = Q/epsilon_0`
	},
	{
		"title": "Doppler Effect",
		"description": "beep beep beep",
		"typst": String.raw`f_o/f_s = lambda_s/lambda_o = (v plus.minus v_o)/(v minus.plus v_s)`
	},
	{
		"title": "Bernoulli's Equation",
		"description": "I included just because it included this bonkers rho.alt thingy. What was wrong with rho??",
		"typst": String.raw`P_1 + rho.alt g y_1 + 1/2 rho.alt v_1^2 = P_2 + rho.alt g y_2 + 1/2 rho.alt v_2^2`
	},
	{
		"title": String.raw`Relation Between $K_p$ and $K_c$`,
		"description": "Credit to Freddie Bullard.",
		"typst": String.raw`K_p = K_c (R T)^(Delta n)`
	},
	{
		"title": "Van der Waals Equation",
		"description": "Generalization of the Ideal Gas Law.",
		"typst": String.raw`(P + a n^2/V^2) (V - n b) = n R T`
	},
	{
		"title": "Maxwell-Boltzmann Distribution",
		"description": "Don't have enough statistical mechanics formulas.",
		"typst": String.raw`f(v) = 4 pi v^2 (m/(2 pi k T))^(3\/2) e^(-(m v^2) / (2 k_B T))`
	},
	{
		"title": "Cayley-Hamilton Theorem",
		"description": "Square matrices over commutative rings are annihilated by their own characteristic polynomial.",
		"typst": String.raw`p(lambda) = det(lambda bold("I")_n - bold("A")) ==> p(bold("A")) = 0`
	},
	{
		"title": String.raw`Chudnovsky's Formula for $pi$`,
		"description": "This formula, based on a Ramanujan formula, was used to calculate pi to the tens of trillions of digits.",
		"typst": String.raw`1/pi = 12 sum_(k=0)^oo ((-1)^k (6k)! (545140134 k + 13591409))/((3k)! (k!)^3 (640320)^(3k + 3\/2))`
	},
	{
		"title": "Residue Theorem",
		"description": "Q: Why did the mathematician name her dog Cauchy? A: Because it left a residue at every pole.",
		"typst": String.raw`1/(2 pi i) integral.cont_gamma f(z) "d"z = sum_(p "pole") bold("I")(gamma, p) "Res"(f, p)`
	},
	{
		"title": "Center of Mass",
		"description": "In a uniform gravitation field, this is the same as the center of gravity.",
		"typst": String.raw`bold("R") = 1/M integral.triple_Q rho(bold("r"))bold("r") "d"V`
	},
	{
		"title": "The Fundamental Group of the Circle",
		"description": "It's isomorphic to the group of integers. Credit to fish.",
		"typst": String.raw`pi_1(S^1) tilde.equiv ZZ`
	},
	{
		"title": "Definition of the Operator Norm on a Finite Dimensional Banach Space",
		"description": "Credit to Richik Chakraborty.",
		"typst": String.raw`{norm(T(x))' / norm(x) : x != 0, x in X} equiv {norm(T(x))' : norm(x) = 1, x in X}`
	},
	{
		"title": "Green's Theorem",
		"description": "Credit to Facejo.",
		"typst": String.raw`integral.cont_C (L "d"x + M "d"y) = integral.double_D ((partial M)/(partial x) - (partial L)/(partial y)) "d"x"d"y`
	},
	{
		"title": "Portfolio Variance",
		"description": "Used to compute the covariance of a portfolio made up of n different assets, if the single variances and covariances are known. Credit to Marco.",
		"typst": String.raw`sigma^2_z = (sum_(i=1)^n w^2_i sigma^2_i) + 2 (sum_(i=1)^(n-1) sum_(j = i+1)^n w_i w_j sigma_(i, j))`
	},
	{
		"title": "Newton's Method",
		"description": "Credit to https://github.com/lucasalavapena.",
		"typst": String.raw`x_(n+1) = x_n - f(x_n)/(f'(x_n))`
	},
	{
		"title": "Shannon Entropy",
		"description": "Credit to https://github.com/lucasalavapena.",
		"typst": String.raw`H(X) = -sum_(i=1)^n P(x_i) log_2 P(x_i)`
	},
	{
		"title": "Pinsker's Inequality",
		"description": "It's possible I'm off by a factor of two here.",
		"typst": String.raw`norm(mu - nu)_"TV" <= sqrt(2 D_"KL" (mu||nu))`
	},
	{
		"title": "Sackur-Tetrode Equation",
		"description": "Entropy of monatomic ideal gas. Credit to Haydn Gwyn.",
		"typst": String.raw`S/(k_B N) = ln[V/N (4 pi m/(3 h^2) U/N)^(3\/2)] + 5/2`
	},
	{
		"title": "Conditional Entropy",
		"description": "The amount of information needed to describe the outcome of a random variable given the outcome of another variable.",
		"typst": String.raw`H(Y|X) = -sum_(x in cal(X), y in cal(Y)) p(x,y) log (p(x,y)/p(x))`
	},
	{
		"title": "Force-Potential Relation",
		"description": "Force is defined as the negative gradient of the potential energy function. Credit to Mayank Kumar.",
		"typst": String.raw`bold("F") = -(partial U)/(partial x) hat(bold("i")) - (partial U)/(partial y) hat(bold("j")) - (partial U)/(partial z) hat(bold("k")) = -arrow(nabla)(U)`
	},
	{
		"title": "Beta Function",
		"description": "A special function that is closely related to the gamma function and to binomial coefficients. Credit to Salil Gokhale.",
		"typst": String.raw`B(x,y) = integral_0^1 t^(x-1) (1-t)^(y-1) "d"t`
	},
	{
		"title": "Moist Adiabatic Lapse Rate",
		"description": "The rate that the temperature falls with respect to altitude in a wet environment.",
		"typst": String.raw`Gamma_"w" = -("d"T)/("d"z) = g ((1 + (H_"v" r)/(R_"sd" T)))/((c_"pd" + (H_"v"^2 r)/(R_"sw" T^2)))`
	},
	{
		"title": "Cardano's Formula",
		"description": "Solution for a depressed cubic. Credit to TetanicRain7592.",
		"typst": String.raw`root(3, -q/2 + sqrt(q^2/4 + p^3/27)) + root(3, -q/2 - sqrt(q^2/4 + p^3/27))`
	},
	{
		"title": "General Cubic Formula",
		"description": "The deltas represents the cubic's discriminants. You must choose /any/ cube root and /any/ square root that doesn't result in C = 0. Credit to TetanicRain7592.",
		"typst": String.raw`C = root(3, (Delta_1 plus.minus sqrt(Delta_1^2 - 4 Delta_0^3))/2)`
	},
	{
		"title": "Riemann Zeta Function",
		"description": "This formula works when the real part of s is greater than 1. Other cases require analytic continuation.",
		"typst": String.raw`zeta(s) = 1/Gamma(s) integral_0^oo x^(s-1)/(e^x - 1) "d"x`
	},
	{
		"title": "Tangent Sum of Angles Formula",
		"description": "Credit to TetanicRain7592.",
		"typst": String.raw`tan(alpha plus.minus beta) = (tan(alpha) plus.minus tan(beta))/(1 minus.plus tan(alpha) tan(beta))`
	},
	{
		"title": "Inner Product of Continuous Complex Valued Functions",
		"description": "Credit to Zeus Hernández.",
		"typst": String.raw`chevron.l f, g chevron.r = integral_0^(2 pi) f(t) overline(g(t)) "d"t`
	},
	{
		"title": "Definition of a Pseudorandom Generator",
		"description": "Crypto means Cryptography!",
		"typst": String.raw`abs(Pr_(x <- {0,1}^k) [cal(A)(G(x)) = 1] - Pr_(x <- {0,1}^(p(k))) [cal(A)(x) = 1]) < mu(k)`
	},
	{
		"title": "Generalized Stokes' Theorem",
		"description": "One theorem to rule them all",
		"typst": String.raw`integral_(partial M) omega = integral_M "d"omega`
	},
	{
		"title": "Cartan's Magic Formula",
		"description": "A cool little magic trick",
		"typst": String.raw`cal(L)_X = "d"compose iota_X + iota_X compose "d"`
	},
	{
		"title": "Ridge Regression",
		"description": "Estimate coefficients of a regression with L2 regularization",
		"typst": String.raw`ell(bold("w")) = 1/N norm(bold("X")bold("w") - bold("y"))_2^2 + lambda norm(bold("w"))_2^2`
	},
	{
		"title": "Evidence Lower Bound (ELBO)",
		"description": "Lower bound on the log-likelihood of observed data",
		"typst": String.raw`L(phi.alt, theta; x) = EE_(z ~ q_phi.alt (dot | x)) [ln (p_theta (x,z))/(q_phi.alt (z | x))]`
	},
	{
		"title": "Langevin Dynamics (Overdamped)",
		"description": "Stochastic gradient flow with a deterministic potential and random noise",
		"typst": String.raw`"d"x_t = -nabla U(x_t) "d"t + sqrt(2 beta^(-1)) "d"W_t`
	}
];

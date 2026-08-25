import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Activity, a as Sparkles, c as Menu, d as Instagram, f as HeartPulse, g as ArrowRight, h as BadgeCheck, i as Stethoscope, l as MapPin, m as Facebook, n as Twitter, o as ShieldCheck, p as FlaskConical, r as Syringe, s as Phone, t as X, u as Mail } from "../_libs/lucide-react.mjs";
import { a as useMotionValue, c as AnimatePresence, i as useTransform, n as useReducedMotion, o as useScroll, r as useSpring, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CLvtma_M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Shared premium easing curve + timings. */
var EASE = [
	.22,
	1,
	.36,
	1
];
var viewportOnce = {
	once: true,
	margin: "-80px"
};
/**
* Reveal
* Scroll-triggered entrance wrapper. Uses Motion's `whileInView` (backed by
* IntersectionObserver) so nothing runs on the main thread until a section is
* about to be seen. Transform + opacity only, to stay on the compositor.
*/
function Reveal({ children, delay = 0, y = 24, x = 0, scale = 1, blur = 0, duration = .7, className, as = "div" }) {
	const reduced = useReducedMotion();
	const Comp = motion[as];
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: viewportOnce,
		transition: { duration: .3 },
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		initial: {
			opacity: 0,
			y,
			x,
			scale,
			...blur ? { filter: `blur(${blur}px)` } : {}
		},
		whileInView: {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			...blur ? { filter: "blur(0px)" } : {}
		},
		viewport: viewportOnce,
		transition: {
			duration,
			delay,
			ease: EASE
		},
		children
	});
}
/** Staggered container for lists of cards. */
function StaggerContainer({ children, className, stagger = .1, delayChildren = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-60px"
		},
		variants: { show: { transition: {
			staggerChildren: stagger,
			delayChildren
		} } },
		children
	});
}
function StaggerItem({ children, className, y = 28, scale = .98 }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: reduced ? {
			hidden: { opacity: 0 },
			show: {
				opacity: 1,
				transition: { duration: .3 }
			}
		} : {
			hidden: {
				opacity: 0,
				y,
				scale
			},
			show: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					duration: .65,
					ease: EASE
				}
			}
		},
		children
	});
}
/** Back-compat aliases used across the site. */
var RevealGroup = StaggerContainer;
var RevealItem = StaggerItem;
/** Very subtle continuous organic floating motion. Disabled for reduced motion. */
function FloatingElement({ children, className, amplitude = 8, duration = 5, delay = 0 }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		animate: { y: [
			0,
			-amplitude,
			0
		] },
		transition: {
			duration,
			delay,
			repeat: Infinity,
			ease: "easeInOut"
		},
		children
	});
}
/** Reusable SVG path drawing animation (pathLength based, GPU friendly). */
function DrawSVG({ d, className = "", viewBox = "0 0 200 100", duration = 1.6, delay = 0, strokeWidth = 2, dashed = false, ...rest }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox,
		className,
		fill: "none",
		"aria-hidden": "true",
		...rest,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d,
			stroke: "currentColor",
			strokeWidth,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeDasharray: dashed ? "6 10" : void 0,
			initial: reduced ? { opacity: 1 } : {
				pathLength: 0,
				opacity: .15
			},
			whileInView: reduced ? { opacity: 1 } : {
				pathLength: 1,
				opacity: 1
			},
			viewport: { once: true },
			transition: {
				duration,
				delay,
				ease: "easeInOut"
			}
		})
	});
}
/**
* Counter
* Animated number that starts counting only when scrolled into view.
* A spring drives a MotionValue; we subscribe once and write to state at a
* rounded granularity so React re-renders stay cheap.
*/
function Counter({ to, prefix = "", suffix = "", decimals = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const reduced = useReducedMotion();
	const value = useMotionValue(0);
	const spring = useSpring(value, {
		stiffness: 70,
		damping: 20
	});
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (reduced) {
			setDisplay(to);
			return;
		}
		value.set(to);
	}, [
		inView,
		to,
		value,
		reduced
	]);
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		return spring.on("change", (v) => setDisplay(v));
	}, [spring, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			display.toFixed(decimals),
			suffix
		]
	});
}
/** Self-drawing checkmark in a circle. */
function AnimatedCheck({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		"aria-hidden": "true",
		initial: "hidden",
		whileInView: "show",
		viewport: { once: true },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
			cx: "12",
			cy: "12",
			r: "10",
			className: "fill-brand-soft stroke-brand",
			strokeWidth: "1.5",
			variants: {
				hidden: {
					scale: .6,
					opacity: 0
				},
				show: {
					scale: 1,
					opacity: 1
				}
			},
			transition: {
				duration: .4,
				ease: "backOut"
			},
			style: { transformOrigin: "center" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M7.5 12.4l3 3 6-6.4",
			className: "stroke-foreground",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			variants: {
				hidden: { pathLength: 0 },
				show: { pathLength: 1 }
			},
			transition: {
				duration: .5,
				delay: .15,
				ease: "easeOut"
			}
		})]
	});
}
/** Soft organic wellness wave used as a section divider. */
function WellnessWave({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawSVG, {
		className,
		viewBox: "0 0 600 60",
		d: "M0 40C80 40 90 12 160 12s85 34 160 34 90-34 160-34 100 28 120 28",
		duration: 2,
		strokeWidth: 1.75
	});
}
/** 
* ScrollProgress
* Top progress bar driven by page scroll.
*/
function ScrollProgress({ className = "" }) {
	const { scrollYProgress } = useScroll();
	if (useReducedMotion()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: `fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-[100] ${className}`,
		style: { scaleX: scrollYProgress }
	});
}
/** 
* SvgMorphPath
* Animates a path transitioning between two d values on scroll.
*/
function SvgMorphPath({ dStart, dEnd, className = "", viewBox = "0 0 100 100" }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const scale = useTransform(scrollYProgress, [0, 1], [.8, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
		ref,
		viewBox,
		className,
		style: { scale },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: dStart,
			stroke: "currentColor",
			fill: "none"
		})
	});
}
/**
* GlowOrb
*/
function GlowOrb({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: `rounded-full filter blur-[60px] opacity-30 mix-blend-screen pointer-events-none ${className}`,
		animate: {
			scale: [
				1,
				1.2,
				1
			],
			opacity: [
				.3,
				.5,
				.3
			]
		},
		transition: {
			duration: 4,
			repeat: Infinity,
			ease: "easeInOut"
		},
		style: { background: "var(--gradient-brand)" }
	});
}
/**
* PulsingGrid
*/
function PulsingGrid({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `absolute inset-0 pointer-events-none opacity-20 ${className}`,
		style: {
			backgroundImage: "radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)",
			backgroundSize: "24px 24px",
			maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
		}
	});
}
var consult_room_default = "/assets/consult-room-Cl35i0j2.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var NAV = [
	{
		label: "Programs",
		href: "#programs"
	},
	{
		label: "Why Us",
		href: "#why-us"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "How It Works",
		href: "#how-it-works"
	},
	{
		label: "About",
		href: "#about"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: reduced ? { opacity: 0 } : {
			opacity: 0,
			y: -16
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "backdrop-blur-md" : ""),
		style: {
			backgroundColor: scrolled ? "color-mix(in oklab, var(--background) 82%, transparent)" : "transparent",
			boxShadow: scrolled ? "var(--shadow-soft)" : "none"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden border-b border-border/70 bg-secondary/60 py-1.5 text-xs text-muted-foreground md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-rmc flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Licensed medical supervision · Nationwide telehealth" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "transition-colors hover:text-foreground",
							href: "tel:18006253837",
							children: "1-800-625-3837"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "transition-colors hover:text-foreground",
							href: "mailto:info@rmmcenter.com",
							children: "info@rmmcenter.com"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-rmc flex h-18 items-center justify-between py-3",
				"aria-label": "Main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "group flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative grid h-9 w-9 place-items-center rounded-xl",
							style: { background: "var(--gradient-brand)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								className: "h-5 w-5 text-accent-foreground",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z",
									fill: "currentColor"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[15px] leading-tight font-semibold tracking-tight",
							children: ["Royal Medical", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase",
								children: "Center"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: item.href,
							initial: "rest",
							whileHover: "hover",
							whileFocus: "hover",
							animate: "rest",
							className: "group relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								"aria-hidden": "true",
								className: "absolute bottom-1 left-3.5 h-0.5 rounded-full bg-brand",
								variants: {
									rest: { scaleX: 0 },
									hover: { scaleX: 1 }
								},
								transition: {
									duration: .3,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								style: {
									right: "0.875rem",
									originX: 0
								}
							})]
						}) }, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-3 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:18006253837",
							className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), " Call"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							href: "https://royalmedicalcenters.com/contact/#form",
							children: "Get Started"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						className: "grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				transition: {
					duration: .3,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "overflow-hidden border-t border-border bg-background lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.ul, {
					className: "container-rmc space-y-1 py-4",
					initial: "hidden",
					animate: "show",
					variants: { show: { transition: {
						staggerChildren: .06,
						delayChildren: .08
					} } },
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
						variants: {
							hidden: {
								opacity: 0,
								y: reduced ? 0 : 10
							},
							show: {
								opacity: 1,
								y: 0,
								transition: {
									duration: .35,
									ease: [
										.22,
										1,
										.36,
										1
									]
								}
							}
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							onClick: () => setOpen(false),
							className: "block rounded-xl px-3 py-3 text-base font-medium hover:bg-secondary",
							children: item.label
						})
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
						className: "pt-2",
						variants: {
							hidden: {
								opacity: 0,
								y: reduced ? 0 : 10
							},
							show: {
								opacity: 1,
								y: 0,
								transition: {
									duration: .35,
									ease: [
										.22,
										1,
										.36,
										1
									]
								}
							}
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							href: "https://royalmedicalcenters.com/contact/#form",
							full: true,
							children: "Get Started"
						})
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 w-full h-[2px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {})
			})
		]
	});
}
function CtaLink({ href, children, full, variant = "brand" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href,
		initial: "rest",
		animate: "rest",
		whileHover: "hover",
		whileFocus: "hover",
		variants: {
			rest: {
				y: 0,
				scale: 1
			},
			hover: {
				y: -2,
				scale: 1.02
			}
		},
		whileTap: { scale: .97 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		className: cn("group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none", full && "w-full", variant === "brand" ? "text-accent-foreground" : "border border-border bg-card text-foreground hover:bg-secondary"),
		style: variant === "brand" ? {
			background: "var(--gradient-brand)",
			boxShadow: "var(--shadow-brand)"
		} : {},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": "true",
				className: "relative z-10",
				variants: {
					rest: { x: 0 },
					hover: { x: 4 }
				},
				transition: {
					duration: .25,
					ease: "easeOut"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
			}),
			variant === "brand" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": "true",
				className: "absolute inset-0 bg-white/25",
				variants: {
					rest: { x: "-100%" },
					hover: { x: "100%" }
				},
				transition: {
					duration: .7,
					ease: "easeInOut"
				}
			})
		]
	});
}
var hero_patients_default = "/assets/hero-patients-BkYxla2S.jpg";
var RING = {
	cx: 250,
	cy: 250,
	r: 196
};
/**
* Decorative rotating orbit ring with glowing particles travelling the path.
* Purely decorative — hidden from assistive technology.
*/
function WellnessOrbit({ className = "" }) {
	const circumference = 2 * Math.PI * RING.r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 500 500",
		className,
		"aria-hidden": "true",
		focusable: "false",
		role: "presentation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "orbit-stroke",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--brand-soft)",
							stopOpacity: "0.15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "45%",
							stopColor: "var(--brand-soft)",
							stopOpacity: "0.75"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--brand)",
							stopOpacity: "0.3"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "orbit-particle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "var(--brand)",
						stopOpacity: "0.95"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "var(--brand)",
						stopOpacity: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "orbit-particle-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "var(--brand-soft)",
						stopOpacity: "0.9"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "var(--brand-soft)",
						stopOpacity: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					id: "orbit-path",
					d: `M ${RING.cx} ${RING.cy - RING.r} a ${RING.r} ${RING.r} 0 1 1 -0.01 0`
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "origin-center animate-orbit motion-reduce:animate-none",
				style: { transformBox: "view-box" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: RING.cx,
						cy: RING.cy,
						r: RING.r,
						fill: "none",
						stroke: "url(#orbit-stroke)",
						strokeWidth: "1.25"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: RING.cx,
						cy: RING.cy,
						r: RING.r - 26,
						fill: "none",
						stroke: "var(--brand-soft)",
						strokeOpacity: "0.22",
						strokeWidth: "1",
						strokeDasharray: "2 12",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: RING.cx,
						cy: RING.cy,
						r: RING.r + 30,
						fill: "none",
						stroke: "var(--brand)",
						strokeOpacity: "0.16",
						strokeWidth: "1",
						strokeDasharray: `${circumference * .14} ${circumference * .86}`,
						strokeLinecap: "round"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: "origin-center animate-orbit-reverse motion-reduce:animate-none",
				style: {
					transformBox: "view-box",
					animationDuration: "95s"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: RING.cx,
					cy: RING.cy,
					r: RING.r - 58,
					fill: "none",
					stroke: "var(--brand)",
					strokeOpacity: "0.1",
					strokeWidth: "1",
					strokeDasharray: "1 10",
					strokeLinecap: "round"
				})
			}),
			[
				{
					dur: "26s",
					begin: "0s",
					r: 9,
					fill: "url(#orbit-particle)"
				},
				{
					dur: "34s",
					begin: "-9s",
					r: 7,
					fill: "url(#orbit-particle-2)"
				},
				{
					dur: "44s",
					begin: "-21s",
					r: 11,
					fill: "url(#orbit-particle)"
				}
			].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				r: p.r,
				fill: p.fill,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
					dur: p.dur,
					begin: p.begin,
					repeatCount: "indefinite",
					rotate: "auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mpath", { href: "#orbit-path" })
				})
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: "origin-center animate-orbit motion-reduce:animate-none",
				style: { transformBox: "view-box" },
				children: Array.from({ length: 6 }).map((_, i) => {
					const a = Math.PI * 2 * i / 6 - Math.PI / 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: RING.cx + Math.cos(a) * RING.r,
						cy: RING.cy + Math.sin(a) * RING.r,
						r: "3",
						fill: "var(--brand-soft)",
						fillOpacity: "0.55"
					}, i);
				})
			})
		]
	});
}
/** Soft organic background: radial washes, blobs, fine lines, tiny particles. */
function HeroBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-[18%] top-[-22%] h-[70vw] max-h-[820px] w-[70vw] max-w-[820px] rounded-full opacity-70 blur-3xl",
				style: { background: "radial-gradient(circle, color-mix(in oklab, var(--brand-soft) 34%, transparent), transparent 68%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-[14%] bottom-[-26%] h-[62vw] max-h-[760px] w-[62vw] max-w-[760px] rounded-full opacity-60 blur-3xl",
				style: { background: "radial-gradient(circle, color-mix(in oklab, var(--brand) 26%, transparent), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 h-full w-full",
				viewBox: "0 0 1440 900",
				preserveAspectRatio: "xMidYMid slice",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "blob-a",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--brand-soft)",
							stopOpacity: "0.22"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--brand)",
							stopOpacity: "0.08"
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "url(#blob-a)",
						d: "M1180 118c92 54 160 168 148 274-12 106-104 205-206 258-102 53-214 60-296 12-82-48-134-151-124-254 10-103 82-205 176-260 94-55 210-84 302-30Z"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						stroke: "var(--brand)",
						strokeOpacity: "0.07",
						fill: "none",
						strokeWidth: "1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-40 700C240 640 420 520 700 540s420 160 800 90" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-40 760C260 706 430 596 720 612s430 150 800 84" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-40 820C280 772 440 672 740 684s440 140 800 78" })
						]
					})
				]
			}),
			[
				{
					l: "12%",
					t: "24%",
					d: "0s",
					s: 5
				},
				{
					l: "26%",
					t: "68%",
					d: "-2.5s",
					s: 3
				},
				{
					l: "44%",
					t: "16%",
					d: "-4s",
					s: 4
				},
				{
					l: "68%",
					t: "78%",
					d: "-1.4s",
					s: 3
				},
				{
					l: "84%",
					t: "30%",
					d: "-3.2s",
					s: 5
				},
				{
					l: "92%",
					t: "62%",
					d: "-5s",
					s: 3
				}
			].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full bg-brand-soft/35 animate-drift motion-reduce:animate-none",
				style: {
					left: p.l,
					top: p.t,
					width: p.s,
					height: p.s,
					animationDelay: p.d,
					animationDuration: `${8 + i}s`
				}
			}, i))
		]
	});
}
var BENEFITS = [
	{
		label: "More Energy",
		angle: -90
	},
	{
		label: "Radiant Skin",
		angle: -30
	},
	{
		label: "Restful Sleep",
		angle: 30
	},
	{
		label: "Sexual Wellness",
		angle: 90
	},
	{
		label: "Balanced Mind",
		angle: 150
	},
	{
		label: "Thicker Hair",
		angle: 210
	}
];
function usePointerParallax() {
	const ref = (0, import_react.useRef)(null);
	const [offset, setOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const fine = window.matchMedia("(pointer: fine)");
		const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (!fine.matches || calm.matches) return;
		let frame = 0;
		const onMove = (e) => {
			const el = ref.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			const x = (e.clientX - (r.left + r.width / 2)) / r.width;
			const y = (e.clientY - (r.top + r.height / 2)) / r.height;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => setOffset({
				x,
				y
			}));
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(frame);
		};
	}, []);
	return {
		ref,
		offset
	};
}
function Hero() {
	const { ref, offset } = usePointerParallax();
	const shift = (depth) => ({ transform: `translate3d(${offset.x * depth}px, ${offset.y * depth}px, 0)` });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		"aria-labelledby": "hero-heading",
		className: "relative isolate flex min-h-[88svh] items-center overflow-hidden bg-background pt-24 pb-16 sm:pt-32 sm:pb-24 lg:min-h-[92svh] lg:py-0 lg:pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[45fr_55fr] lg:gap-10 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl animate-rise",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "h-3.5 w-3.5 text-brand",
							"aria-hidden": "true"
						}), "Personalized to you"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "hero-heading",
						className: "mt-7 font-display text-[clamp(2.6rem,6.4vw,4.6rem)] font-light leading-[1.03] tracking-[-0.025em] text-foreground",
						children: "Royal Medical Center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Competitive pricing for Testosterone Therapy, Hormone Therapy, Weight Management, and Peptide programs — personalized and designed around your individual health needs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://royalmedicalcenters.com/contact/#form",
							className: "group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold tracking-wide text-brand-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-soft hover:shadow-[var(--shadow-cta-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
							children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
								"aria-hidden": "true"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://royalmedicalcenters.com/all-programs/",
							className: "inline-flex items-center justify-center rounded-full border border-border bg-card/60 px-8 py-4 text-sm font-semibold tracking-wide text-secondary-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
							children: "Explore Programs"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center gap-4 border-t border-border/70 pt-6 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-9 w-px bg-gradient-to-b from-transparent via-brand to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand",
									children: "Personalized Programs"
								}),
								"Starting at",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-medium text-foreground",
									children: "$67/mo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "*"
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[560px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-square w-full",
					style: shift(10),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-[6%] rounded-full blur-2xl",
							style: { background: "var(--gradient-halo)" },
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WellnessOrbit, { className: "absolute inset-0 h-full w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-[16%] animate-breathe motion-reduce:animate-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full w-full overflow-hidden rounded-full border border-glass-border shadow-[var(--shadow-float)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_patients_default,
									width: 1024,
									height: 1280,
									alt: "A healthy, confident adult smiling in natural daylight",
									className: "h-full w-full object-cover object-top",
									fetchPriority: "high"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 hidden sm:block",
							style: shift(-16),
							children: BENEFITS.map((b, i) => {
								const rad = b.angle * Math.PI / 180;
								const radius = 43;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute animate-drift motion-reduce:animate-none",
									style: {
										left: `${50 + Math.cos(rad) * radius}%`,
										top: `${50 + Math.sin(rad) * radius}%`,
										transform: "translate(-50%, -50%)",
										animationDelay: `${i * -1.35}s`,
										animationDuration: `${8.5 + i * .7}s`
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "glass-panel flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-[0.7rem] font-semibold tracking-wide text-secondary-foreground lg:text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-1.5 w-1.5 shrink-0 rounded-full bg-brand",
											"aria-hidden": "true"
										}), b.label]
									})
								}, b.label);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel absolute -bottom-8 left-1/2 hidden w-[13.5rem] -translate-x-1/2 rounded-2xl px-5 py-4 text-center sm:bottom-[-2%] sm:left-[-2%] sm:block sm:translate-x-0 sm:text-left lg:bottom-4 lg:left-0",
							style: shift(18),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand",
									children: "Personalized Programs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Starting at"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-2xl font-medium leading-tight text-foreground",
									children: ["$67/mo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "*"
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-20 flex flex-wrap justify-center gap-2 sm:hidden",
					children: BENEFITS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "glass-panel rounded-full px-3 py-1.5 text-[0.7rem] font-semibold text-secondary-foreground",
						children: b.label
					}, b.label))
				})]
			})]
		})]
	});
}
var programs = [
	{
		id: "trt",
		nav: "TRT for Men",
		number: "01",
		eyebrow: "TRT for Men",
		title: "Testosterone Replacement Therapy",
		description: "Support energy, mental clarity, confidence, and overall well-being through personalized testosterone therapy.",
		cta: "Explore TRT",
		href: "https://royalmedicalcenters.com/testosterone-replacement-therapy/",
		image: "/assets/program-trt-C8dWHJ_E.jpg",
		alt: "Man in soft natural light looking calm and confident"
	},
	{
		id: "hrt",
		nav: "HRT for Women",
		number: "02",
		eyebrow: "HRT for Women",
		title: "Women's Hormone Therapy",
		description: "Personalized hormone programs designed around individual needs and hormonal balance.",
		cta: "Explore HRT",
		href: "https://royalmedicalcenters.com/hormone-testosterone-therapy-for-women/",
		image: "/assets/program-hrt-fBqtq5YG.jpg",
		alt: "Woman standing in warm morning light in a calm minimal interior"
	},
	{
		id: "weight-loss",
		nav: "Weight Loss",
		number: "03",
		eyebrow: "Weight Loss",
		title: "Medical Weight Management",
		description: "Personalized medical programs designed to help men and women achieve lasting weight-management goals.",
		cta: "Explore Weight Loss",
		href: "https://royalmedicalcenters.com/weight-loss/",
		image: "/assets/program-weight-B8Ej5qXT.jpg",
		alt: "Couple walking outdoors at golden hour"
	},
	{
		id: "peptides",
		nav: "Peptides",
		number: "04",
		eyebrow: "Peptide Therapy",
		title: "Peptide Therapy",
		description: "Explore medically guided peptide treatments designed around your individual wellness goals.",
		cta: "Explore Peptides",
		href: "https://royalmedicalcenters.com/all-programs/",
		image: "/assets/program-peptides-CM-QWXjk.jpg",
		alt: "Person stretching calmly in a bright minimal room"
	}
];
function OrbitDecor({ index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 400 400",
		className: "pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] opacity-70",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "rmc-ring",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "var(--brand-soft)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "var(--brand)",
					stopOpacity: "0.15"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "rmc-orbit",
				style: {
					transformOrigin: "200px 200px",
					animationDelay: `${index * -3}s`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "200",
					r: 130 + index * 8,
					fill: "none",
					stroke: "url(#rmc-ring)",
					strokeWidth: "1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: 70 - index * 8,
					r: "4",
					fill: "var(--brand)",
					opacity: "0.5"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: "rmc-orbit-reverse",
				style: {
					transformOrigin: "200px 200px",
					animationDelay: `${index * -2}s`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "200",
					cy: "200",
					rx: 170 - index * 6,
					ry: 110 + index * 10,
					fill: "none",
					stroke: "var(--brand-soft)",
					strokeWidth: "1",
					strokeDasharray: "3 9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "rmc-draw",
				d: `M20 ${300 - index * 20} C 120 ${200 + index * 18}, 280 ${340 - index * 24}, 380 ${180 + index * 12}`,
				fill: "none",
				stroke: "var(--accent-soft)",
				strokeWidth: "1.5"
			})
		]
	});
}
function ProgramShowcase() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const sectionRef = (0, import_react.useRef)(null);
	const program = programs[active];
	(0, import_react.useEffect)(() => {
		const node = sectionRef.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, { threshold: .15 });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		"aria-labelledby": "programs-heading",
		"data-visible": visible,
		className: "rmc-reveal relative overflow-hidden bg-background py-24 sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-40 top-10 h-[38rem] w-[38rem] rounded-full opacity-60 blur-3xl",
				style: { background: "var(--gradient-halo)" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rmc-item text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brand",
								children: "Personalized Programs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "programs-heading",
								className: "rmc-item mt-5 text-balance text-4xl font-light leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl",
								children: ["A Personalized Path to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-brand",
									children: "Better Health"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rmc-item mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "Explore personalized programs designed to support your individual health goals, from hormone balance and weight management to peptide therapy."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "tablist",
						"aria-label": "Treatment programs",
						className: "rmc-item mt-14 -mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:gap-6 md:mx-0 md:justify-between md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden",
						children: programs.map((item, index) => {
							const isActive = index === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								role: "tab",
								id: `program-tab-${item.id}`,
								"aria-selected": isActive,
								"aria-controls": "program-panel",
								tabIndex: isActive ? 0 : -1,
								onClick: () => setActive(index),
								onMouseEnter: () => setActive(index),
								onFocus: () => setActive(index),
								onKeyDown: (event) => {
									if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
										event.preventDefault();
										const next = (active + (event.key === "ArrowRight" ? 1 : -1) + programs.length) % programs.length;
										setActive(next);
										document.getElementById(`program-tab-${programs[next].id}`)?.focus();
									}
								},
								className: "group relative shrink-0 whitespace-nowrap rounded-full px-1 py-3 text-sm font-medium tracking-wide outline-none transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background md:text-base",
								style: { transitionDelay: `${index * 80}ms` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: isActive ? "text-foreground transition-colors duration-500" : "text-muted-foreground transition-colors duration-500 group-hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mr-2 text-xs tabular-nums text-brand/70",
										children: item.number
									}), item.nav]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "absolute inset-x-0 -bottom-px h-px origin-left bg-brand transition-transform duration-500 ease-out",
									style: { transform: `scaleX(${isActive ? 1 : 0})` }
								})]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "program-panel",
						role: "tabpanel",
						"aria-labelledby": `program-tab-${program.id}`,
						className: "rmc-item mt-12 grid items-center gap-10 rounded-[2rem] border border-border/70 bg-card/60 p-6 shadow-[0_30px_80px_-60px_rgba(20,40,45,0.6)] backdrop-blur-sm sm:p-10 lg:grid-cols-[45fr_55fr] lg:gap-16 lg:p-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rmc-swap order-2 lg:order-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-brand",
											children: program.number
										}),
										" — ",
										program.eyebrow
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl",
									children: program.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-base leading-relaxed text-muted-foreground",
									children: program.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: program.href,
									className: "group mt-8 inline-flex items-center gap-3 rounded-full border border-brand/30 px-6 py-3 text-sm font-medium text-foreground transition-all duration-500 hover:border-brand hover:bg-brand/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
									children: [program.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "transition-transform duration-500 group-hover:translate-x-1",
										children: "→"
									})]
								})
							]
						}, `copy-${program.id}`), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative order-1 lg:order-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitDecor, { index: active }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[1.75rem] border border-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: program.image,
									alt: program.alt,
									loading: "lazy",
									width: 1104,
									height: 1312,
									className: "rmc-swap-image aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
								}, program.id), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute inset-0",
									style: { background: "var(--gradient-image-veil)" }
								})]
							})]
						})]
					})
				]
			})
		]
	});
}
var trt_patient_new_default = "/assets/trt-patient-new-CrQ0JOdP.jpg";
var weight_loss_new_default = "/assets/weight-loss-new-C4NbcpCh.jpg";
var lab_testing_new_default = "/assets/lab-testing-new-CiEsYWvZ.jpg";
function BalanceVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto aspect-square w-full max-w-[560px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 rounded-full blur-2xl",
				style: { background: "var(--gradient-halo)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 400 400",
				role: "presentation",
				"aria-hidden": "true",
				focusable: "false",
				className: "h-full w-full overflow-visible",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
							id: "coreGlow",
							cx: "50%",
							cy: "50%",
							r: "50%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "var(--brand-soft)",
								stopOpacity: "0.95"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "var(--brand-soft)",
								stopOpacity: "0"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "shapeA",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "var(--brand)",
								stopOpacity: "0.32"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "var(--brand-soft)",
								stopOpacity: "0.08"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "shapeB",
							x1: "100%",
							y1: "0%",
							x2: "0%",
							y2: "100%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "var(--brand)",
								stopOpacity: "0.34"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "var(--brand-soft)",
								stopOpacity: "0.06"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						style: { transformOrigin: "200px 200px" },
						className: "animate-balance-a",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "168",
							cy: "192",
							rx: "104",
							ry: "96",
							fill: "url(#shapeA)"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						style: { transformOrigin: "200px 200px" },
						className: "animate-balance-b",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "238",
							cy: "208",
							rx: "96",
							ry: "104",
							fill: "url(#shapeB)"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						style: { transformOrigin: "200px 200px" },
						className: "animate-orbit",
						stroke: "var(--brand)",
						fill: "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "200",
								cy: "200",
								r: "168",
								strokeOpacity: "0.22",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "200",
								cy: "200",
								r: "168",
								strokeOpacity: "0.55",
								strokeWidth: "1.5",
								strokeDasharray: "34 430"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "368",
								cy: "200",
								r: "4.5",
								fill: "var(--brand)",
								stroke: "none"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						style: { transformOrigin: "200px 200px" },
						className: "animate-orbit-reverse max-sm:hidden",
						stroke: "var(--brand)",
						fill: "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "200",
								cy: "200",
								rx: "132",
								ry: "132",
								strokeOpacity: "0.24",
								strokeWidth: "1",
								strokeDasharray: "2 8"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "200",
								cy: "68",
								r: "3.5",
								fill: "var(--brand)",
								stroke: "none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "200",
								cy: "332",
								r: "2.5",
								fill: "var(--brand)",
								stroke: "none"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						style: { transformOrigin: "200px 200px" },
						className: "animate-orbit max-sm:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "200",
							r: "96",
							fill: "none",
							stroke: "var(--brand)",
							strokeOpacity: "0.16",
							strokeWidth: "1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "296",
							cy: "200",
							r: "3",
							fill: "var(--brand-soft)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						style: { transformOrigin: "200px 200px" },
						className: "animate-core-pulse",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "200",
							r: "58",
							fill: "url(#coreGlow)"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "200",
						cy: "200",
						r: "7",
						fill: "var(--brand)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "200",
						cy: "200",
						r: "16",
						fill: "none",
						stroke: "var(--brand)",
						strokeOpacity: "0.35",
						strokeWidth: "1"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-[8%] left-[2%] w-28 h-36 md:w-32 md:h-44 rounded-full overflow-hidden border-[6px] border-surface shadow-[var(--shadow-lift)] transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:z-20 cursor-pointer animate-breathe",
				style: { animationDelay: "0s" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: trt_patient_new_default,
					alt: "TRT Patient",
					className: "w-full h-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand/10 hover:bg-transparent transition-colors" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-[5%] right-[12%] w-40 h-28 md:w-48 md:h-32 rounded-[2rem] overflow-hidden border-[6px] border-surface shadow-[var(--shadow-lift)] transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:z-20 cursor-pointer animate-breathe",
				style: { animationDelay: "2s" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: weight_loss_new_default,
					alt: "Weight Loss Patient",
					className: "w-full h-full object-cover object-center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand/10 hover:bg-transparent transition-colors" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-[45%] right-[-10%] w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-[6px] border-surface shadow-[var(--shadow-lift)] transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:z-20 cursor-pointer animate-breathe",
				style: { animationDelay: "4s" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lab_testing_new_default,
					alt: "Lab Testing",
					className: "w-full h-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand/10 hover:bg-transparent transition-colors" })]
			})
		]
	});
}
var features = [
	{
		number: "01",
		icon: FlaskConical,
		title: "Comprehensive Lab Testing",
		text: "Understand your individual health profile through comprehensive testing."
	},
	{
		number: "02",
		icon: Activity,
		title: "Ongoing Monitoring",
		text: "Your progress is monitored throughout your treatment journey."
	},
	{
		number: "03",
		icon: ShieldCheck,
		title: "Medical-Grade Hormone Therapy",
		text: "Receive medically guided hormone therapy designed around your individual needs."
	},
	{
		number: "04",
		icon: Stethoscope,
		title: "Guidance from Professionals",
		text: "Get professional guidance throughout your personalized health journey."
	}
];
function BalanceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "balance-heading",
		className: "relative overflow-hidden bg-surface py-[120px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 opacity-[0.35]",
				style: {
					backgroundImage: "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
					backgroundSize: "88px 88px",
					maskImage: "radial-gradient(80% 60% at 50% 40%, black, transparent 75%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-[46%_54%_38%_62%/58%_42%_58%_42%] blur-3xl animate-drift",
				style: {
					background: "var(--gradient-halo)",
					opacity: .5
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceVisual, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-1 lg:col-start-2 lg:row-start-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand tracking-wide mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "w-4 h-4" }), " Customized Care"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									id: "balance-heading",
									className: "mt-5 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl",
									children: [
										"Optimal Health Starts With",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-brand relative inline-block",
											children: ["Balance", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "absolute -bottom-2 left-0 w-full h-3 text-brand/30",
												viewBox: "0 0 100 20",
												preserveAspectRatio: "none",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M0,10 Q50,20 100,10",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "4",
													strokeLinecap: "round"
												})
											})]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
									children: "Our hormone therapy programs are customized to your unique needs, ensuring you feel your best today and for years to come. We don’t believe in one-size-fits-all treatments."
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealGroup, {
						className: "order-3 lg:col-start-2 lg:row-start-2 lg:-mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col",
							children: features.map((feature, index) => {
								const Icon = feature.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
									className: "group border-b border-border/70 last:border-b-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex gap-5 py-6 transition-transform duration-500 ease-out group-hover:translate-x-2 group-focus-within:translate-x-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 font-display text-2xl tabular-nums text-muted-foreground/60 transition-colors duration-500 group-hover:text-brand group-focus-within:text-brand",
												children: feature.number
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														"aria-hidden": "true",
														strokeWidth: 1.5,
														className: "size-[18px] text-brand transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-110"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-base font-semibold tracking-tight text-foreground",
														children: feature.title
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 max-w-md text-sm leading-relaxed text-muted-foreground",
													children: feature.text
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute bottom-0 left-0 h-px w-0 bg-brand transition-all duration-700 ease-out group-hover:w-full group-focus-within:w-full"
											})
										]
									})
								}, feature.number);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .4,
							className: "mt-8 text-sm italic text-muted-foreground",
							children: "*Your health journey is personal. We're with you every step of the way.*"
						})]
					})
				]
			})
		]
	});
}
var IMPORTANT = [
	["Home", "https://royalmedicalcenters.com/"],
	["About", "https://royalmedicalcenters.com/about/"],
	["Contact Us", "https://royalmedicalcenters.com/contact/"],
	["Men FAQ", "https://royalmedicalcenters.com/mens-faqs/"],
	["Women FAQ", "https://royalmedicalcenters.com/women-faqs/"],
	["Before/After", "https://royalmedicalcenters.com/before-after/"],
	["Blog", "https://royalmedicalcenters.com/blog/"],
	["Privacy Policy", "https://royalmedicalcenters.com/privacy-policy/"],
	["HIPAA Privacy Policy", "https://royalmedicalcenters.com/hipaa-privacy-policy-statement/"],
	["Compounding Disclaimer", "https://royalmedicalcenters.com/compounding-disclaimers/"]
];
var PROGRAMS = [
	["TRT for Men", "https://royalmedicalcenters.com/testosterone-replacement-therapy/"],
	["HRT for Women", "https://royalmedicalcenters.com/hormone-testosterone-therapy-for-women/"],
	["Sexual Health", "https://royalmedicalcenters.com/erectile-dysfunction/"],
	["Weight Loss", "https://royalmedicalcenters.com/weight-loss/"],
	["Peptides", "https://royalmedicalcenters.com/shop/"],
	["Manopause & Andropause", "https://royalmedicalcenters.com/manopause-andropause/"],
	["Non-Menopausal Therapy for Women", "https://royalmedicalcenters.com/non-menopausal-therapy-for-women/"],
	["Menopausal Therapy for Women", "https://royalmedicalcenters.com/menopausal-therapy-for-women/"],
	["Estrogen Therapy", "https://royalmedicalcenters.com/estrogen-therapy/"],
	["Pregnenolone", "https://royalmedicalcenters.com/pregnenolone/"],
	["Progesterone", "https://royalmedicalcenters.com/progesterone/"]
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border/10 bg-foreground text-background pt-24 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 opacity-30 mix-blend-screen pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowOrb, { className: "absolute -top-40 -left-40 w-[40rem] h-[40rem] opacity-40 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowOrb, { className: "absolute top-1/2 -right-40 w-[30rem] h-[30rem] opacity-20 text-blue-500" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rmc relative z-10 grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-brand/20 shadow-[0_0_20px_rgba(var(--brand-rgb),0.3)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
									className: "h-6 w-6 text-brand-foreground",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xl font-bold tracking-tight",
								children: [
									"Royal Medical",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-[0.3em] uppercase text-background/60",
										children: "Center"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "space-y-4 text-sm text-background/70 not-italic leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-1 h-4 w-4 shrink-0 text-brand-foreground",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"1000 E Hillsboro Blvd, Suite 102",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Deerfield Beach, FL 33441"
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-3 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "h-4 w-4 text-brand-foreground transition-transform group-hover:scale-110",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "transition-colors hover:text-white",
										href: "tel:18006253837",
										children: "1-800-625-3837"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-3 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "h-4 w-4 text-brand-foreground transition-transform group-hover:scale-110",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "transition-colors hover:text-white",
											href: "mailto:info@rmmcenter.com",
											children: "info@rmmcenter.com"
										}),
										" ",
										" (or ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "transition-colors hover:text-white",
											href: "mailto:jianna@rmmcenter.com",
											children: "jianna@rmmcenter.com"
										}),
										")"
									] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex gap-3",
							children: [
								[
									Facebook,
									"Facebook",
									"https://www.facebook.com/royalmedicalcenters/"
								],
								[
									Twitter,
									"X (Twitter)",
									"https://twitter.com/rmmcenter"
								],
								[
									Instagram,
									"Instagram",
									"https://www.instagram.com/royalmedicalcenters"
								]
							].map(([Icon, label, href]) => {
								const I = Icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
									href,
									"aria-label": label,
									target: "_blank",
									rel: "noreferrer noopener",
									whileHover: {
										y: -4,
										scale: 1.1,
										backgroundColor: "rgba(255,255,255,0.15)"
									},
									whileTap: { scale: .95 },
									transition: {
										type: "spring",
										stiffness: 400,
										damping: 17
									},
									className: "grid h-12 w-12 place-items-center rounded-full border border-background/20 bg-background/5 text-background/80 hover:text-white hover:border-background/40 backdrop-blur",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {
										className: "h-5 w-5",
										"aria-hidden": "true"
									})
								}, label);
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Important links",
						className: "lg:pl-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-semibold text-white mb-6 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-brand-foreground" }), "Important Links"]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
							className: "space-y-3 text-sm",
							stagger: .05,
							children: IMPORTANT.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href,
								className: "group flex items-center gap-2 text-background/60 transition-colors hover:text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-brand-foreground",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "-translate-x-5 transition-transform duration-300 group-hover:translate-x-0",
									children: label
								})]
							}) }, href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Programs & Services",
						className: "lg:col-span-2 lg:pl-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-semibold text-white mb-6 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-brand-foreground" }), "Programs & Services"]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
							className: "grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2",
							stagger: .03,
							children: PROGRAMS.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href,
								className: "group flex items-center gap-2 text-background/60 transition-colors hover:text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-brand-foreground",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "-translate-x-5 transition-transform duration-300 group-hover:translate-x-0",
									children: label
								})]
							}) }, href))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .4,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-rmc mt-24 border-t border-background/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-background/50 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Royal Medical Center. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Dispensing Pharmacy:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-white hover:underline hover:text-brand-foreground transition-colors",
							href: "https://www.belmarpharmasolutions.com/",
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Belmar Pharma Solutions"
						})
					] })]
				})
			})
		]
	});
}
function WhyChooseSection() {
	const sectionRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		id: "why-choose-us",
		className: "relative overflow-hidden bg-background py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 pointer-events-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulsingGrid, { className: "absolute inset-0 opacity-[0.03]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowOrb, { className: "absolute top-0 right-0 w-[40rem] h-[40rem] opacity-20 -translate-y-1/2 translate-x-1/4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowOrb, { className: "absolute bottom-0 left-0 w-[40rem] h-[40rem] opacity-20 translate-y-1/3 -translate-x-1/4 text-brand-soft" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rmc relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "mx-auto max-w-2xl text-center mb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.3em] text-brand",
					children: "Why Royal Medical Center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground",
					children: "Trust & Transparency"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-full bg-border origin-left" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
							y: 30,
							delay: .1,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-5xl font-light leading-none text-brand/30 md:text-6xl",
									children: "01"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl",
									children: "Low Price Guarantee"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg leading-relaxed text-muted-foreground max-w-md",
									children: "We’ll beat any competitor’s price by 25%."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#programs",
									className: "mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 group/btn",
									children: ["Check Our Programs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover/btn:translate-x-1" })]
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center md:justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
								x: 40,
								delay: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-56 w-56 md:h-64 md:w-64",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
										viewBox: "0 0 200 200",
										className: "h-full w-full drop-shadow-xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												id: "ring-text-path",
												d: "M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0",
												fill: "none"
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "100",
												cy: "100",
												r: "88",
												className: "fill-none stroke-brand/10",
												strokeWidth: "1"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.g, {
												animate: { rotate: 360 },
												transition: {
													duration: 20,
													repeat: Infinity,
													ease: "linear"
												},
												style: {
													originX: "100px",
													originY: "100px"
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
													className: "fill-brand/60 text-[8.5px] font-semibold uppercase tracking-[0.4em]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
														href: "#ring-text-path",
														startOffset: "0%",
														children: "Price Guarantee • Price Guarantee • Price Guarantee •"
													})
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.g, {
												whileHover: { rotate: 90 },
												transition: {
													type: "spring",
													stiffness: 60
												},
												style: {
													originX: "100px",
													originY: "100px"
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
													cx: "100",
													cy: "100",
													r: "66",
													className: "fill-none stroke-brand/70",
													strokeWidth: "2",
													strokeLinecap: "round",
													transform: "rotate(-90 100 100)",
													initial: {
														strokeDasharray: 415,
														strokeDashoffset: 415
													},
													whileInView: { strokeDashoffset: 104 },
													viewport: {
														once: true,
														margin: "-100px"
													},
													transition: {
														duration: 1.5,
														ease: "easeInOut",
														delay: .5
													}
												})
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute inset-0 flex items-center justify-center font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl drop-shadow-md",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											initial: {
												scale: .5,
												opacity: 0
											},
											whileInView: {
												scale: 1,
												opacity: 1
											},
											transition: {
												type: "spring",
												delay: 1
											},
											viewport: { once: true },
											children: "25%"
										})
									})]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-full bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "order-2 flex justify-center md:order-1 md:justify-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
								x: -40,
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-48 w-64 md:h-56 md:w-72",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
										viewBox: "0 0 240 200",
										className: "h-full w-full overflow-visible",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
												className: "lens-grid",
												children: [
													0,
													1,
													2,
													3,
													4,
													5
												].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "20",
													x2: "220",
													y1: 30 + i * 28,
													y2: 30 + i * 28,
													className: "stroke-brand/10",
													strokeWidth: "1.5"
												}, `h${i}`))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
												cx: "98",
												cy: "100",
												r: "58",
												className: "fill-brand/5 stroke-brand/40 backdrop-blur-sm",
												strokeWidth: "1.5",
												animate: {
													x: [
														-5,
														5,
														-5
													],
													y: [
														-5,
														5,
														-5
													]
												},
												transition: {
													duration: 6,
													repeat: Infinity,
													ease: "easeInOut"
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
												cx: "146",
												cy: "100",
												r: "58",
												className: "fill-brand/5 stroke-brand/40 backdrop-blur-sm",
												strokeWidth: "1.5",
												animate: {
													x: [
														5,
														-5,
														5
													],
													y: [
														5,
														-5,
														5
													]
												},
												transition: {
													duration: 6,
													repeat: Infinity,
													ease: "easeInOut",
													delay: 1
												}
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 rounded-xl overflow-hidden opacity-50 blur-[2px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: consult_room_default,
											alt: "Consultation",
											className: "w-full h-full object-cover"
										})
									})]
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "order-1 md:order-2 md:text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
								y: 30,
								delay: .1,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-5xl font-light leading-none text-brand/30 md:text-6xl",
										children: "02"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl",
										children: "No Hidden Fees"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-lg leading-relaxed text-muted-foreground max-w-lg md:ml-auto",
										children: "Our pricing is all-inclusive, covering everything you need, including lab testing, medications, physicals and Dr. consultations — no surprises, ever."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://royalmedicalcenters.com/contact/#form",
										className: "mt-8 inline-flex items-center gap-2 rounded-full border-2 border-brand/40 bg-card px-6 py-3 text-sm font-semibold text-brand transition-all hover:border-brand hover:bg-brand/5 hover:shadow-lg hover:shadow-brand/10 group/btn",
										children: ["Start now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover/btn:translate-x-1" })]
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-full bg-border" })
				]
			})]
		})]
	});
}
var commitment_care_default = "/assets/commitment-care-Cfn3M6SZ.jpg";
var points = [{
	num: "01",
	title: "Monitor Patient's Progress",
	body: "We closely monitor each patient's progress—whether in hormone therapy or weight loss programs—to ensure results are effective and levels reach their optimal range."
}, {
	num: "02",
	title: "No Fine Print",
	body: "We tell patients upfront what our programs cost. Unlike other clinics, there are no hidden costs or additional fees."
}];
function OurCommitment() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "commitment-heading",
		className: "relative overflow-hidden bg-background py-24 lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-y-0 left-0 w-1/2 aspect-square rounded-full bg-brand/5 blur-[80px] -translate-x-1/2 pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-1/2 w-full max-w-5xl h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/30 to-transparent pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[45fr_55fr] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-2 flex justify-center lg:order-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 420 460",
						className: "w-full max-w-[340px] sm:max-w-[420px] text-brand",
						"aria-hidden": "true",
						focusable: "false",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
								id: "core-clip",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "210",
									cy: "150",
									r: "104"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "rmc-line",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "currentColor",
										stopOpacity: "0.15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "35%",
										stopColor: "currentColor",
										stopOpacity: "0.75"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "currentColor",
										stopOpacity: "0.2"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
								cx: "210",
								cy: "150",
								r: "126",
								className: "fill-none stroke-brand/30",
								animate: {
									scale: [
										1,
										1.045,
										1
									],
									opacity: [
										.3,
										.8,
										.3
									]
								},
								transition: {
									duration: 7,
									repeat: Infinity,
									ease: "easeInOut"
								},
								style: {
									originX: "210px",
									originY: "150px"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
								clipPath: "url(#core-clip)",
								animate: { scale: [
									1,
									1.05,
									1
								] },
								transition: {
									duration: 15,
									repeat: Infinity,
									ease: "easeInOut"
								},
								style: {
									originX: "210px",
									originY: "150px"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
									href: commitment_care_default,
									x: "106",
									y: "46",
									width: "208",
									height: "208",
									preserveAspectRatio: "xMidYMid slice",
									className: "opacity-80"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "210",
									cy: "150",
									r: "104",
									className: "fill-brand/20 mix-blend-overlay"
								})]
							}),
							[
								{
									x: 120,
									y: 50,
									r: 2,
									delay: 0
								},
								{
									x: 300,
									y: 80,
									r: 1.5,
									delay: 1.5
								},
								{
									x: 90,
									y: 220,
									r: 3,
									delay: 3
								},
								{
									x: 330,
									y: 250,
									r: 2,
									delay: .8
								}
							].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
								cx: p.x,
								cy: p.y,
								r: p.r,
								className: "fill-brand/60",
								animate: {
									y: [
										p.y,
										p.y - 15,
										p.y
									],
									opacity: [
										0,
										1,
										0
									]
								},
								transition: {
									duration: 5 + i * 2,
									repeat: Infinity,
									ease: "easeInOut",
									delay: p.delay
								}
							}, i)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "210",
								cy: "150",
								r: "104",
								className: "fill-none stroke-brand/40",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
								cx: "210",
								cy: "150",
								r: "66",
								className: "fill-none stroke-brand/50",
								strokeDasharray: "2 7",
								animate: { rotate: 360 },
								transition: {
									duration: 40,
									repeat: Infinity,
									ease: "linear"
								},
								style: {
									originX: "210px",
									originY: "150px"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								d: "M210 150 C 210 250, 186 280, 210 340 S 210 400, 210 438",
								fill: "none",
								stroke: "url(#rmc-line)",
								strokeWidth: "2.5",
								initial: {
									strokeDasharray: 340,
									strokeDashoffset: 340
								},
								whileInView: { strokeDashoffset: 0 },
								viewport: {
									once: true,
									margin: "-100px"
								},
								transition: {
									duration: 2,
									ease: "easeInOut",
									delay: .5
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
								animate: active === 0 ? { scale: 1.18 } : { scale: 1 },
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 20
								},
								style: {
									originX: "203px",
									originY: "300px"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "203",
									cy: "300",
									r: "18",
									className: "fill-none stroke-brand/40"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
									cx: "203",
									cy: "300",
									r: "5",
									className: "fill-brand",
									initial: {
										opacity: 0,
										scale: 0
									},
									whileInView: {
										opacity: 1,
										scale: 1
									},
									viewport: {
										once: true,
										margin: "-50px"
									},
									transition: { delay: .8 }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
								animate: active === 1 ? { scale: 1.18 } : { scale: 1 },
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 20
								},
								style: {
									originX: "210px",
									originY: "408px"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "210",
									cy: "408",
									r: "18",
									className: "fill-none stroke-brand/40"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
									cx: "210",
									cy: "408",
									r: "5",
									className: "fill-brand",
									initial: {
										opacity: 0,
										scale: 0
									},
									whileInView: {
										opacity: 1,
										scale: 1
									},
									viewport: {
										once: true,
										margin: "-50px"
									},
									transition: { delay: 1 }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "118",
								y1: "150",
								x2: "70",
								y2: "150",
								className: "stroke-brand/30",
								strokeWidth: "1.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "302",
								y1: "150",
								x2: "350",
								y2: "150",
								className: "stroke-brand/30",
								strokeWidth: "1.5"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.32em] text-brand",
							children: "Our Commitment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "commitment-heading",
							className: "mt-6 font-display text-4xl leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl",
							children: "Your Health Journey Deserves Ongoing Care."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
							y: 20,
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
								children: "We encourage prospective patients to research their options and make informed healthcare decisions. Royal Medical Center provides personalized Hormone Replacement Therapy Programs with transparent competitive pricing and licensed medical supervision."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-12 space-y-10 pl-10 border-l border-brand/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute left-0 top-0 bottom-0 w-[2px] bg-brand/50 origin-top",
								initial: { scaleY: 0 },
								whileInView: { scaleY: 1 },
								viewport: {
									once: true,
									margin: "-100px"
								},
								transition: {
									duration: 1.5,
									ease: "easeInOut",
									delay: .5
								}
							}), points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
								y: 30,
								delay: .4 + i * .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									tabIndex: 0,
									onMouseEnter: () => setActive(i),
									onMouseLeave: () => setActive(null),
									onFocus: () => setActive(i),
									onBlur: () => setActive(null),
									className: "relative outline-none group cursor-default",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -left-[46px] top-1 h-3 w-3 rounded-full border-2 bg-background transition-all duration-300 ${active === i ? "border-brand scale-150 shadow-[0_0_10px_rgba(var(--brand-rgb),0.5)]" : "border-brand/40"}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-2xl font-light tracking-[0.08em] text-brand/70",
											children: p.num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-brand",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 max-w-lg text-base leading-relaxed text-muted-foreground",
											children: p.body
										})
									]
								})
							}, p.num))]
						})
					]
				})]
			})
		]
	});
}
var lab_testing_default = "/assets/lab-testing-CxeU1V77.jpg";
var delivery_kit_default = "/assets/delivery-kit-DuVlOkF5.jpg";
var SERVICES = [
	{
		icon: Stethoscope,
		title: "Men's Testosterone Therapy",
		points: [
			"Restore testosterone levels naturally",
			"Boost energy, mental clarity, and confidence",
			"Improve mental clarity and emotional well-being"
		]
	},
	{
		icon: Sparkles,
		title: "Women's Hormone Therapy",
		points: [
			"Alleviate symptoms of hormonal imbalance",
			"Improve sleep, mood, and overall vitality",
			"Customized estrogen and hormone balancing programs"
		]
	},
	{
		icon: Activity,
		title: "Weight Loss",
		points: ["At Royal Medical Center, we specialize in helping men and women achieve lasting weight loss through personalized medical programs that restore energy, health, and confidence."]
	},
	{
		icon: Syringe,
		title: "Peptide Therapy",
		points: [
			"Support natural hormone function",
			"Improve sleep and cognition",
			"Explore medically guided peptide treatments"
		]
	}
];
var STEPS = [
	{
		n: "01",
		title: "Initial Consultation",
		body: "Complete comprehensive panel of labs. Complete review of medical history. Complete physical examination. Physician's consultation.",
		image: lab_testing_default,
		alt: "Hormone lab test vials and results on a clinic desk"
	},
	{
		n: "02",
		title: "Personalized Treatment Plan",
		body: "Our physicians will build a personalized program just for you, designed to target your specific goals, enhance your well-being, and deliver ongoing results through one-on-one care and expert monitoring.",
		image: consult_room_default,
		alt: "Bright modern medical consultation room"
	},
	{
		n: "03",
		title: "Delivered To You",
		body: "Once the doctor has designed your customized program, and prescribed you the medication, the medication will be discreetly shipped from the pharmacy to your home or office.",
		image: delivery_kit_default,
		alt: "Discreet medication shipment box with vials and syringe"
	}
];
var DISCLAIMERS = [
	"The FDA does not verify the safety, effectiveness, or quality of compounded drugs offered at our clinic.",
	"As an alternative to FDA-approved branded products, where appropriate, a provider may prescribe a compounded drug, which is prepared by a state-licensed sterile compounding pharmacy partner. Although compounded drugs are permitted to be prescribed under federal law, they are not FDA-approved and do not undergo safety, effectiveness, or manufacturing review.",
	"Claims of personalization and potential reduction in side effects are based on the ability of compounding to customize treatment for individual needs. These benefits are not guaranteed. Side effects may still occur and vary by patient.",
	"Compounded medications offered through this service are prescribed on an individual basis by a licensed healthcare provider. While some patients may experience weight loss or other benefits, results are not guaranteed. Outcomes depend on a variety of factors including, but not limited to, patient health status, genetics, lifestyle, diet, and exercise. Neither the prescribing provider nor the pharmacy makes any promise or warranty of specific results."
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramShowcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorksSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutDoctorSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurCommitment, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaSection, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclaimersSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function ServicesSection() {
	const [activeIdx, setActiveIdx] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "scroll-mt-24 py-20 md:py-28 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rmc",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold sm:text-4xl",
						children: "Hormone & Weight Management Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground text-lg",
						children: "Physician-designed programs for men and women, backed by comprehensive labs and ongoing monitoring."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WellnessWave, { className: "mt-6 h-8 w-full max-w-md text-brand" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_1.5fr] gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-4",
					children: SERVICES.map((s, idx) => {
						const isActive = activeIdx === idx;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveIdx(idx),
							className: `text-left p-6 rounded-[2rem] border transition-all duration-300 relative overflow-hidden group
                    ${isActive ? "border-brand bg-card shadow-[var(--shadow-brand)]" : "border-border bg-surface hover:border-brand/50 hover:bg-card opacity-70 grayscale-[0.5]"}
                  `,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 relative z-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid h-14 w-14 place-items-center rounded-2xl transition-colors duration-300 ${isActive ? "bg-brand text-accent-foreground" : "bg-muted text-muted-foreground group-hover:text-brand"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										animate: isActive ? { rotate: [
											0,
											10,
											-10,
											0
										] } : {},
										transition: {
											repeat: Infinity,
											duration: 4,
											ease: "easeInOut"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
											className: "h-6 w-6",
											"aria-hidden": "true"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: `text-xl font-semibold transition-colors ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`,
									children: s.title
								})]
							}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								layoutId: "activeTabIndicator",
								className: "absolute inset-0 border-2 border-brand rounded-[2rem]",
								initial: false,
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 30
								}
							})]
						}, s.title);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: -20,
								scale: .98
							},
							transition: {
								duration: .4,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "surface-card p-8 lg:p-12 h-full flex flex-col justify-center relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none",
									children: (() => {
										const Icon = SERVICES[activeIdx].icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-96 h-96" });
									})()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl lg:text-4xl font-bold mb-8",
									children: SERVICES[activeIdx].title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-6",
									children: SERVICES[activeIdx].points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: .2 + i * .1 },
										className: "flex gap-4 items-start text-lg text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCheck, { className: "h-7 w-7 shrink-0 text-brand mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
									}, p))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
										href: "https://royalmedicalcenters.com/contact/#form",
										children: "Learn more"
									})
								})
							]
						}, activeIdx)
					})
				})]
			})]
		})
	});
}
function HowItWorksSection() {
	const containerRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end center"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "how-it-works",
		className: "scroll-mt-24 border-y border-border py-20 md:py-28 relative overflow-hidden",
		style: { background: "var(--gradient-brand-subtle)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulsingGrid, { className: "absolute inset-0 opacity-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rmc relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold sm:text-4xl",
						children: "How Our Programs Work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Your journey to optimal health is simple, transparent, and fully supported by our medical team."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 relative max-w-5xl mx-auto",
					ref: containerRef,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-brand/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute top-0 left-0 w-full bg-brand origin-top",
							style: {
								scaleY: scrollYProgress,
								height: "100%"
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-24 lg:space-y-32",
						children: STEPS.map((step, idx) => {
							const isEven = idx % 2 === 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden lg:grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 place-items-center rounded-full bg-card border-4 border-brand shadow-lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											initial: { scale: 0 },
											whileInView: { scale: 1 },
											transition: {
												type: "spring",
												stiffness: 300,
												damping: 15,
												delay: .2
											},
											className: "text-xl font-bold text-brand",
											children: idx + 1
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `w-full lg:w-1/2 ${isEven ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
											x: isEven ? -40 : 40,
											y: 0,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-display text-sm font-bold tracking-[0.3em] text-brand",
													children: ["STEP ", idx + 1]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-3 text-2xl font-bold sm:text-3xl",
													children: step.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 text-muted-foreground text-lg leading-relaxed",
													children: step.body
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `w-full lg:w-1/2 ${isEven ? "lg:order-2 lg:pl-12" : "lg:text-right lg:pr-12"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
											x: isEven ? 40 : -40,
											y: 0,
											delay: .1,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative rounded-[2rem] overflow-hidden border border-border shadow-[var(--shadow-soft)] aspect-4/3 group",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
													whileHover: { scale: 1.05 },
													transition: {
														duration: .7,
														ease: "easeOut"
													},
													src: step.image,
													alt: step.alt,
													loading: "lazy",
													className: "w-full h-full object-cover"
												})
											})
										})
									})
								]
							}, step.title);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3,
					className: "mt-20 text-center relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						href: "https://royalmedicalcenters.com/contact/#form",
						className: "group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: ["Start Your Journey", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })]
						})
					})
				})
			]
		})]
	});
}
function FinalCtaSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-32 md:py-48 text-center border-t border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulsingGrid, { className: "absolute inset-0 opacity-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowOrb, { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rmc relative z-10 flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand tracking-wide mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), " Nationwide Telehealth"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl font-bold sm:text-5xl md:text-6xl max-w-3xl leading-tight",
							children: [
								"Ready to feel like ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand",
									children: "yourself"
								}),
								" again?"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl",
							children: "Start with a comprehensive lab panel and a physician consultation. Transparent pricing from $67/mo, with your medication shipped discreetly to your door."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .3,
						className: "mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							href: "https://royalmedicalcenters.com/contact/#form",
							children: "Start Your Transformation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							href: "tel:18006253837",
							variant: "outline",
							children: "Call 1-800-625-3837"
						})]
					})
				]
			})
		]
	});
}
function AboutDoctorSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-24 py-24 md:py-36 relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-rmc relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full min-h-[400px] rounded-[2.5rem] bg-surface border border-border overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgMorphPath, { className: "absolute inset-0 text-brand opacity-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center p-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingElement, {
							amplitude: 15,
							duration: 6,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid place-items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand/20 blur-2xl rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative h-32 w-32 rounded-full border border-brand/30 bg-card shadow-[0_8px_30px_rgba(var(--brand-rgb),0.15)] grid place-items-center mb-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-bold text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
											to: 20,
											suffix: "+"
										})
									})
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .2,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold tracking-tight",
								children: "Years of Excellence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground uppercase tracking-widest font-medium",
								children: "Pioneering HRT"
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:pl-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold tracking-wide mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "w-4 h-4 text-brand" }), " Trusted Authority"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight",
								children: "DR. RODRIGUEZ PIONEERED THE HORMONE REPLACEMENT THERAPY INDUSTRY."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							className: "mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dr. Rodriguez helped create an easy-to-understand payment plan, an all-inclusive program that has been very successful for our patients. He has also helped develop medications in collaboration with pharmacies nationwide, enabling men and women to lead better lives." })
						})
					]
				})]
			})
		})
	});
}
function DisclaimersSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "disclaimers",
		className: "border-t border-border/10 bg-foreground text-background py-16 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--brand-soft)_0%,transparent_50%)] opacity-10 pointer-events-none mix-blend-screen" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rmc relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 place-items-center rounded-full bg-background/5 border border-background/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
						className: "h-5 w-5 text-background/60",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "disclaimers",
					className: "text-xl font-bold tracking-tight",
					children: "FDA & Compounding Disclaimers"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealGroup, {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: DISCLAIMERS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur transition-colors hover:bg-background/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-brand-foreground font-bold text-lg mb-2 block opacity-80",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-background/70",
						children: d
					})]
				}) }, i))
			})]
		})]
	});
}
//#endregion
export { Home as component };

type HeroVariant = "home" | "auth";

export default function Hero({ variant = "home" }: { variant?: HeroVariant }) {
    return (
        <div className={`hero hero--${variant}`}>
            <div className="hero__content">
                <h1>Organize your TODO</h1>
                <p>Plan, track and deliver with boards, lists and cards. Collaborate in real-time.</p>
            </div>

            {/* NEW: soft scrim behind text to guarantee contrast */}
            <div className="hero__scrim" aria-hidden />

            {/* decorative layer (behind content) */}
            <div className="grid" aria-hidden />
            <div className="note yellow" aria-hidden />
            <div className="note pink" aria-hidden />
        </div>
    );
}

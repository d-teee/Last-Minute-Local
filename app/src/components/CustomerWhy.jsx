import { Countdown, Reveal } from '../lib/motion.jsx';
import { Notif } from './atoms.jsx';

const RAIL_A = [['Eating out'], ['Hair', true], ['Takeaways'], ['Beauty'], ['Wellbeing'], ['Fitness', true], ['Fashion'], ['Sportswear'], ['Food shop']];
const RAIL_B = [['Homewares'], ['Barbers'], ['Bakeries', true], ['Yoga'], ['Boutiques'], ['Nails'], ['Trainers', true], ['Cafés']];

function ChipRail({ chips, reverse = false }) {
  return (
    <div className={`chip-rail${reverse ? ' rev' : ''}`}>
      {[...chips, ...chips].map(([label, on], k) => (
        <span key={k} className={on ? 'on' : undefined}>{label}</span>
      ))}
    </div>
  );
}

const col = { flexDirection: 'column', alignItems: 'stretch', gap: 14 };

export default function CustomerWhy() {
  return (
    <section id="why" className="section dark">
      <div className="wrap">
        <Reveal className="head">
          <span className="kick">Why it matters</span>
          <h2 className="display">Great local deals. <em>Fresh every day.</em></h2>
          <p className="lede">The best discounts on your high street disappear within hours, sometimes minutes. Last Minute Local surfaces them the moment they go live, so you never have to go looking.</p>
        </Reveal>

        <div className="bento three">
          <Reveal className="tile">
            <div className="vis" style={col}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="kick" style={{ color: 'var(--muted)' }}>Ends in</span>
                <span className="sticker">40% off</span>
              </div>
              <Countdown seconds={3492} long className="big-clock" />
              <div className="rule"><i></i></div>
            </div>
            <div>
              <h3>Real-time. Not &ldquo;sale of the season&rdquo;.</h3>
              <p>No waiting for Black Friday. New discounts on services and products go live throughout every day, right where you are.</p>
            </div>
          </Reveal>

          <Reveal className="tile" delay="1">
            <div className="vis" style={{ flexDirection: 'column', gap: 10, overflow: 'hidden', margin: '0 -28px' }}>
              <ChipRail chips={RAIL_A} />
              <ChipRail chips={RAIL_B} reverse />
            </div>
            <div>
              <h3>Everything you need. Right now!</h3>
              <p>Haircuts, yoga classes, last season's trainers, tonight's table for two, all in one feed, filtered to what you're after.</p>
            </div>
          </Reveal>

          <Reveal className="tile" delay="2">
            <div className="vis" style={col}>
              <Notif title="Bayside Yoga" body="Vinyasa at 6:30pm, 40% off. 0.2 mi away." time="2m" style={{ position: 'relative', width: 'auto' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="pips"><i className="on"></i><i className="on"></i><i></i><i></i><i></i></span>
                <span className="mono" style={{ fontSize: 13, color: 'var(--muted)' }}>2 of 5 today</span>
              </div>
            </div>
            <div>
              <h3>No spam. Just stuff you need.</h3>
              <p>You only hear about deals that match what you actually want.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

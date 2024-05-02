'use client';
import 'css-doodle';

export default function CSSDoodleTest() {
  return (
    <div>
      {/* <style>{styleCode}</style> */}
      <css-doodle use="var(--rule)">
        {`
					:doodle {
    @grid: 5 / 10vmax;
    background: #0a0c27;
    font-family: sans-serif;
  }
  :after {
    content: \@hex(@rand(0x2500, 0x257f));
    color: hsla(@r(360), 70%, 70%, @r(.9));
    font-size: 1vmax;
  }
					`}
      </css-doodle>
    </div>
  );
}

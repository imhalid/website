'use client';
import 'css-doodle';

export default function CSSDoodleTest() {
  return (
    <css-doodle use="var(--rule)">
      {`
					 @grid: 1 / 50vw 50vh / #0a0c27;
    background-size: 200px 200px;
    background-image: @doodle(
      @grid: 6 / 100%;
      @size: 4px;
      font-size: 4px;
      color: hsl(@r240, 30%, 50%);
      box-shadow: @m3x5(
        calc(4em - @nx * 1em) calc(@ny * 1em)
          @p(@m3(currentColor), @m2(transparent)),
        calc(2em + @nx * 1em) calc(@ny * 1em)
          @lp
      );
    );
					`}
    </css-doodle>
  );
}

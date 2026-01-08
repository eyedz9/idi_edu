'use client';

export function GridLines() {
  return (
    <div className="grid-lines" aria-hidden="true">
      <div className="grid-line"></div>
      <div className="grid-line hidden md:block"></div>
      <div className="grid-line hidden md:block"></div>
      <div className="grid-line"></div>
    </div>
  );
}

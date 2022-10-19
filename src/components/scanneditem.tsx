import React from 'react';

interface Scan {
  text: string;
  complete: boolean;
}

interface Props {
  scan: Scan;
}

export const ScanListItem: React.FC<Props> = ({ scan }) => {
  return (
    <li>
      <label style={{ textDecoration: scan.complete ? 'line-through' : undefined }}>
        <input type="checkbox" checked={scan.complete} /> {scan.text}
      </label>
    </li>
  );
};

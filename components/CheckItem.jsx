import { memo } from "react";

// Performance optimized CheckItem component
const CheckItem = memo(({ title, description }) => (
  <div className="flex items-start gap-3">
    <div className="text-accent mt-1">✓</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-secondaryText text-sm">{description}</p>
    </div>
  </div>
));

export default CheckItem; 
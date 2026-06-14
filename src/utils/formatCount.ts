export function formatCount(value: number, isMobile = false) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  
  if (value >= 10_000) return `${(value / 1_000).toFixed(1)}K`;

  if (isMobile) return value.toLocaleString("en-US"); // If use mobile phone the countHeart will show 1,233 instead of 1233; 1233 it'll show on the laptop

  return String(value);
}
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="#0B1220" stroke="#26334f" />
      <rect x="12" y="32" width="10" height="16" fill="#D4AF37" />
      <rect x="16" y="24" width="2" height="32" fill="#D4AF37" />
      <rect x="27" y="20" width="10" height="20" fill="#FFFFFF" />
      <rect x="31" y="12" width="2" height="36" fill="#FFFFFF" />
      <rect x="42" y="10" width="10" height="18" fill="#D4AF37" />
      <rect x="46" y="6" width="2" height="26" fill="#D4AF37" />
    </svg>
  )
}

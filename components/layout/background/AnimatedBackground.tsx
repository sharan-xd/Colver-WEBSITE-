import dynamic from 'next/dynamic'

const AnimatedBackground = dynamic(
  () => import('./AnimatedBackground.client'),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10 bg-black" />
    ),
  }
)

export default AnimatedBackground

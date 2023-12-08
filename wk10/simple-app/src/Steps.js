import { useState } from 'react'

function Steps() {
  const [steps, setSteps] = useState(0)

  return (
    <div>
      <div>
        Current number of steps: {steps}
      </div>
    </div>
  )
}

export default Steps
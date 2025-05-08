import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div>
        <Button variant={'elevated'}>
          I am A button
        </Button>
      </div>
      <div>
        <Input placeholder='I am an input' />
      </div>
        <Textarea placeholder='I am a textarea' />
          <Checkbox title='dd'/>
    </div>
  )
}

export default page
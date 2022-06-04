import React from 'react'
import { ThemeContext } from '@context'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import icon from '@assets/images/svg/btn.svg'

export const App: React.FC<{}> = () => {
  const { switchThemeMode } = React.useContext(ThemeContext)!

  return (
    <main style={{ padding: '2rem' }}>
      <Button
        value='change theme mode'
        onClick={() => switchThemeMode()}
        rounded='poignant'
      />
      <p>Nepmotheme</p>

      <hr />

      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>

      <hr />

      <h3 className='fs-xs'>Custom header size "fs-xs"</h3>
      <h3 className='fs-sm'>Custom header size "fs-sm"</h3>
      <h3 className='fs-lg'>Custom header size "fs-lg"</h3>
      <h3 className='fs-xl'>Custom header size "fs-xl"</h3>
      <h3 className='fs-xxl'>Custom header size "fs-xxl"</h3>
      <h3 className='fs-xxxl'>Custom header size "fs-xxxl"</h3>

      <hr />

      <p className='fs-xs'>
        If you want, set up own font-size, for example: "fs-xs"
      </p>
      <p className='fs-sm'>
        If you want, set up own font-size, for example: "fs-sm"
      </p>
      <p className='fs-lg'>
        If you want, set up own font-size, for example: "fs-lg"
      </p>
      <p className='fs-xl'>
        If you want, set up own font-size, for example: "fs-xl"
      </p>
      <p className='fs-xxl'>
        If you want, set up own font-size, for example: "fs-xxl"
      </p>
      <p className='fs-xxxl'>
        If you want, set up own font-size, for example: "fs-xxxl"
      </p>

      <hr />

      <div
        style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
        className='shadow-md'
      >
        <h3 style={{ textAlign: 'center' }}>small input</h3>
        <Input size='small' />
        <br />
        <Input size='small' error={'error'} />
        <Input size='small' warning={'warning'} />
        <Input size='small' rounded='smoothed' success />
        <h3 style={{ textAlign: 'center' }}>middle input with icon</h3>
        <Input size='middle' icon={icon} iconPosition='left' />
        <br />
        <Input size='middle' icon={icon} iconPosition='left' error={'error'} />
        <Input
          size='middle'
          icon={icon}
          iconPosition='left'
          warning={'warning'}
        />
        <Input
          size='middle'
          icon={icon}
          iconPosition='left'
          rounded='smoothed'
          success
        />
        <h3 style={{ textAlign: 'center' }}>large input</h3>
        <Input size='large' icon={icon} iconPosition='right' />
        <br />
        <Input size='large' icon={icon} iconPosition='right' error={'error'} />
        <Input
          size='large'
          icon={icon}
          iconPosition='right'
          warning={'warning'}
        />
        <Input
          size='large'
          icon={icon}
          iconPosition='right'
          rounded='smoothed'
          success
        />
      </div>

      <hr />

      <h1>component Button</h1>

      <Button
        value='icon BUTTON on the top'
        icon={icon}
        iconPosition='top'
        size='small'
        type='button'
        appearance='flat'
        color='primary'
        variant='outlined'
        rounded='smoothed'
      />

      <Button
        value='icon button on the right'
        icon={icon}
        iconPosition='right'
        size='small'
        type='button'
        appearance='flat'
        color='primary'
        variant='outlined'
        rounded='smoothed'
      />

      <Button
        value='icon button on the bottom'
        icon={icon}
        iconPosition='bottom'
        size='small'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <Button
        value='icon button on the left'
        icon={icon}
        iconPosition='left'
        size='small'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <hr />

      <Button
        value='icon BUTTON on the top'
        icon={icon}
        iconPosition='top'
        size='middle'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <Button
        value='icon button on the right'
        icon={icon}
        iconPosition='right'
        size='middle'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <Button
        value='icon button on the bottom'
        icon={icon}
        iconPosition='bottom'
        size='middle'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <Button
        value='icon button on the left'
        icon={icon}
        iconPosition='left'
        size='middle'
        type='button'
        appearance='flat'
        iconListenTheme
        rounded='smoothed'
      />

      <hr />

      <Button
        value='icon BUTTON on the top'
        icon={icon}
        iconPosition='top'
        size='large'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <Button
        value='icon button on the right'
        icon={icon}
        iconPosition='right'
        size='large'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <Button
        value='icon button on the bottom'
        icon={icon}
        iconPosition='bottom'
        size='large'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <Button
        value='icon button on the left'
        icon={icon}
        iconPosition='left'
        size='large'
        type='button'
        appearance='flat'
        rounded='smoothed'
      />

      <hr />

      <Button
        value='equilateral square middle button'
        size='middle'
        type='button'
        appearance='flat'
        shape='square'
        equilateral
      />

      <Button
        value='equilateral square middle button'
        size='middle'
        type='button'
        appearance='concave'
        shape='square'
        equilateral
      />

      <Button
        value='equilateral square middle button'
        size='middle'
        type='button'
        appearance='convex'
        shape='square'
        equilateral
        color='success'
        variant='outlined'
      />

      <hr />

      <Button
        value='equilateral circle middle button'
        size='middle'
        type='button'
        appearance='flat'
        shape='circle'
        equilateral
      />

      <Button
        value='equilateral circle middle button'
        size='middle'
        type='button'
        appearance='concave'
        shape='circle'
        equilateral
      />

      <Button
        value='equilateral circle middle button'
        size='middle'
        type='button'
        appearance='convex'
        shape='circle'
        equilateral
      />

      <hr />

      <Button
        value='square middle button'
        size='middle'
        type='button'
        appearance='flat'
        shape='square'
        rounded='smoothed'
      />

      <Button
        value='square middle button'
        size='middle'
        type='button'
        appearance='concave'
        shape='square'
        rounded='smoothed'
      />

      <Button
        value='square middle button'
        size='middle'
        type='button'
        appearance='convex'
        shape='square'
        rounded='smoothed'
      />

      <hr />

      <Button
        value='circle middle button'
        size='middle'
        type='button'
        appearance='flat'
        shape='circle'
        rounded='smoothed'
      />

      <Button
        value='circle middle button'
        size='middle'
        type='button'
        appearance='concave'
        shape='circle'
        rounded='smoothed'
      />

      <Button
        value='circle middle button'
        size='middle'
        type='button'
        appearance='convex'
        shape='circle'
        rounded='smoothed'
      />

      <hr />
    </main>
  )
}

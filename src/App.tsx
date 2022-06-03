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
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center'
        }}
      >
        <div
          style={{ padding: '1.5rem' }}
          className='shadow-sm circle-small-fixed'
        >
          <h3>circle block</h3>
        </div>
        <div
          style={{ padding: '1.5rem' }}
          className='concave shadow-md circle-middle-fixed'
        >
          <h3>circle concave block</h3>
        </div>
        <div
          style={{ padding: '1.5rem' }}
          className='convex shadow-lg circle-large-fixed'
        >
          <h3>circle convex block</h3>
        </div>
      </div>

      <hr />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center'
        }}
      >
        <div
          style={{ padding: '1.5rem' }}
          className='shadow-sm square-sm-fixed'
        >
          <h3>square block</h3>
        </div>
        <div
          style={{ padding: '1.5rem' }}
          className='concave shadow-md square-md-fixed'
        >
          <h3>square concave block</h3>
        </div>
        <div
          style={{ padding: '1.5rem' }}
          className='convex shadow-lg square-lg-fixed'
        >
          <h3>square convex block</h3>
        </div>
      </div>

      <hr />

      <h1>component Button</h1>

      <Input value='small-text' size='small' />

      <Button
        value='icon BUTTON on the top'
        icon={icon}
        iconPosition='top'
        size='small'
        type='button'
        appearance='flat'
        color='primary'
        variant='outlined'
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
      />

      <Button
        value='icon button on the bottom'
        icon={icon}
        iconPosition='bottom'
        size='small'
        type='button'
        appearance='flat'
      />

      <Button
        value='icon button on the left'
        icon={icon}
        iconPosition='left'
        size='small'
        type='button'
        appearance='flat'
      />

      <hr />

      <Input value='middle-text' size='middle' />

      <Button
        value='icon BUTTON on the top'
        icon={icon}
        iconPosition='top'
        size='middle'
        type='button'
        appearance='flat'
      />

      <Button
        value='icon button on the right'
        icon={icon}
        iconPosition='right'
        size='middle'
        type='button'
        appearance='flat'
      />

      <Button
        value='icon button on the bottom'
        icon={icon}
        iconPosition='bottom'
        size='middle'
        type='button'
        appearance='flat'
      />

      <Button
        value='icon button on the left'
        icon={icon}
        iconPosition='left'
        size='middle'
        type='button'
        appearance='flat'
        iconListenTheme
      />

      <hr />

      <Input
        value='large-text smoothed input'
        size='large'
        rounded='smoothed'
      />

      <Button
        value='icon BUTTON on the top'
        icon={icon}
        iconPosition='top'
        size='large'
        type='button'
        appearance='flat'
      />

      <Button
        value='icon button on the right'
        icon={icon}
        iconPosition='right'
        size='large'
        type='button'
        appearance='flat'
      />

      <Button
        value='icon button on the bottom'
        icon={icon}
        iconPosition='bottom'
        size='large'
        type='button'
        appearance='flat'
      />

      <Button
        value='icon button on the left'
        icon={icon}
        iconPosition='left'
        size='large'
        type='button'
        appearance='flat'
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
      />

      <Button
        value='square middle button'
        size='middle'
        type='button'
        appearance='concave'
        shape='square'
      />

      <Button
        value='square middle button'
        size='middle'
        type='button'
        appearance='convex'
        shape='square'
      />

      <hr />

      <Button
        value='circle middle button'
        size='middle'
        type='button'
        appearance='flat'
        shape='circle'
      />

      <Button
        value='circle middle button'
        size='middle'
        type='button'
        appearance='concave'
        shape='circle'
      />

      <Button
        value='circle middle button'
        size='middle'
        type='button'
        appearance='convex'
        shape='circle'
      />

      <hr />

      <Button
        value='equilateral circle middle button'
        size='small'
        type='button'
        appearance='flat'
        shape='circle'
        equilateral
      />

      <hr />
    </main>
  )
}

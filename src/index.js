import React, {Fragment} from 'react'
import { render } from 'react-dom'

import {App} from './js/containers/App'



render(<Fragment>{App()}</Fragment>,document.getElementById('app'));
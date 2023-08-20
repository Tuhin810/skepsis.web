import React from 'react'

function New() {
  return (
    <div>
        <div class="keyboard mt-11">
	<button class="keyboard__key keyboard__key--meta" type="button" data-key="cmd">
		<span class="keyboard__key-lines">
			<svg class="keyboard__cmd keyboard__key-line--tr" viewBox="0 0 16 16" width="16px" height="16px" aria-hidden="true">
				<path fill="none" stroke="currentcolor" stroke-width="2" d="M5.7,10.3v2.3c0,1.3-1,2.3-2.3,2.3S1,14,1,12.7s1-2.3,2.3-2.3H5.7z M5.7,10.3h4.7 M5.7,10.3V5.7M10.3,10.3v2.3c0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3s-1-2.3-2.3-2.3H10.3z M10.3,10.3V5.7 M10.3,5.7H5.7 M10.3,5.7V3.3c0-1.3,1-2.3,2.3-2.3S15,2,15,3.3s-1,2.3-2.3,2.3H10.3z M5.7,5.7V3.3C5.7,2,4.6,1,3.3,1S1,2,1,3.3s1,2.3,2.3,2.3H5.7z" />
			</svg>
			<small class="keyboard__key-line keyboard__key-line--small keyboard__key-line--br">command</small>
		</span>
	</button>
	<button class="keyboard__key" type="button" data-key="c">
		<span class="keyboard__key-lines">
			<span class="keyboard__key-line">C</span>
		</span>
	</button>
	<button class="keyboard__key" type="button" data-key="v">
		<span class="keyboard__key-lines">
			<span class="keyboard__key-line">V</span>
		</span>
	</button>
</div>
    </div>
  )
}

export default New
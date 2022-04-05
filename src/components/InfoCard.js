import React from 'react'

const InfoCard = () => {
  return (
    <div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
        <img class="w-full" src="/nyan.gif" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 font-mono">mku.eth</div>
            <p class="text-gray-700 text-base font-mono">
            is actively learning web3
            </p>
        </div>
        <div class="px-6 pt-2 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ai</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#crypto</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web3</span>
        </div>
    </div>
  )
}

export default InfoCard
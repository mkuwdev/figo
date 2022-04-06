import React from 'react'

const InfoCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl font-mono">
        <img className="w-full" src="/pond.gif" alt="Fish Pond"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 font-mono">mku.eth</div>
            <p className="text-gray-700 text-base font-mono">
            <strong className="text-green-700">ACTIVE NOW:</strong> Learning web3
            </p>
        </div>
        <div className="px-6 pt-2 pb-2">
            <span className="inline-block bg-gray-200 cursor-pointer hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ai</span>
            <span className="inline-block bg-gray-200 cursor-pointer hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#crypto</span>
            <span className="inline-block bg-gray-200 cursor-pointer hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web3</span>
        </div>
    </div>
  )
}

export default InfoCard
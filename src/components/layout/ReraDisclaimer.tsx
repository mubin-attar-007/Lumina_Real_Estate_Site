import React from 'react';


const ReraDisclaimer: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Logo & ID */}
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white border border-gray-300 rounded flex items-center justify-center">
                            {/* Placeholder for MahaRERA Logo */}
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='8' font-weight='bold' fill='%23d4af37'%3ERERA%3C/text%3E%3C/svg%3E" alt="MahaRERA" className="w-12 opacity-80" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-sm">MahaRERA Registered</h4>
                            <p className="text-[10px] text-gray-500 max-w-[200px]">
                                All our projects are registered under Maharashtra Real Estate Regulatory Authority.
                            </p>
                        </div>
                    </div>

                    {/* Disclaimer Text */}
                    <div className="flex-1">
                        <h5 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-2">Disclaimer</h5>
                        <p className="text-[10px] text-gray-500 leading-relaxed text-justify">
                            The designs, images, specifications, and other details are purely indicative. This material does not constitute an offer and/or contract of any type between the Developer/Promoter and the Recipent. Any purchaser of this development shall be governed by the terms and conditions of the Agreement for Sale entered into between the parties, and no details mentioned in this printed material shall in any way govern such transactions. The developer reserves the right to change plans, specifications, and features without prior notice or obligation, at their sole discretion.
                        </p>
                        <a href="https://maharera.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-gold-600 hover:underline mt-2 inline-block">
                            Verify at https://maharera.mahaonline.gov.in
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReraDisclaimer;

import React from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg';

export default function RREF_REF() {
  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <SidebarLinalg />
        <div className="flex flex-col w-[60%] mt-20">
          {/* Title */}
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold">Reduced Row Echelon Form</p>
          </div>
          {/* Description */}
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quidem cumque commodi sit totam accusamus temporibus officia,
              reiciendis dolorum tempore libero error porro voluptatum eius.
              Reiciendis, impedit consectetur! Dolore animi impedit vero dolor!
              Quaerat aliquam, consectetur unde, dolorem dolores repudiandae a
              qui accusantium optio facere exercitationem fuga aut rem possimus
              odit autem vel quos reprehenderit nam officia eaque doloremque.
              Ducimus possimus molestiae quae reiciendis numquam inventore,
              aliquam, quasi totam culpa similique, delectus modi sequi? Et odio
              at corporis, qui animi optio voluptatibus vitae quia tenetur quis
              aspernatur iusto alias! Deleniti accusantium optio dignissimos
              sit, excepturi ea itaque nemo ut omnis.
            </p>
          </div>
          {/* Inputs */}
          {/* Solutions */}
          {/* Steps */}
        </div>
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold"> Right Side</h1>
        </div>
      </div>
    </div>
  );
}

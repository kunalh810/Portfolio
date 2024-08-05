import React from 'react'

const Coding = () => {
  return (
      <div className="skills__content">
            <h3 className="skills__title">Coding Languages</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div>

                </div>

                <div className="skills__group">

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">C#</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Coding

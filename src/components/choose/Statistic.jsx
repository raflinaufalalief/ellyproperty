import CountUp from "react-countup"
import { stats } from "../../data/data"

const Statistic = () => {
  return (
    <div className="py-20 mobile:pt-14 mobile:py-0">
      <div className="mx-auto containers text-primary">
        <div className="grid grid-cols-2 Sdesktop:grid-cols-4 mobile:gap-y-6">
          {stats.map((item, index) => {
            const { startNumber, endNumber, title, unit } = item
            return (
              <div key={index} className="text-center Sdesktop:border-r-2">
                <h6 className="font-bold Sdesktop:text-3xl mobile:text-2xl ">
                  <CountUp
                    start={startNumber}
                    end={endNumber}
                    duration={2}
                    enableScrollSpy
                  />
                  {unit}
                  <span className="text-accent">+</span>
                </h6>
                <p className="text-sm font-medium tracking-widest uppercase Sdesktop:text-base">
                  {title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Statistic

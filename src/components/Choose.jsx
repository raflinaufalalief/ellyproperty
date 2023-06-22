import React from "react"
import coment from "../assets/comm2.png"

const Choose = () => {
  return (
    <section>
      <div className="mx-auto containers">
        <div className="flex flex-wrap gap-24 mobile:px-3 mobile:text-center">
          <div className="relative flex-1  basis-[22rem]  ">
            <h1 className="title">Why Choose Us</h1>
            <h1 className="heading">we decorate your home environment</h1>
            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              consequatur quisquam, dicta dolorum obcaecati modi fugiat sint
              eaque voluptate ex dolore! Ipsum exercitationem doloribus illo
              similique consectetur animi dignissimos eos delectus voluptate
              suscipit, ex minima veritatis aperiam obcaecati optio beatae
              officiis! Mollitia ipsum ad debitis reiciendis velit fuga
              assumenda architecto?
            </p>
          </div>
          <div className="relative mobile:right-0 flex-1 basis-[18rem]    ">
            <img
              src="https://img.freepik.com/premium-photo/outdoor-big-modern-house-generative-art-by-ai_35887-6823.jpg?size=626&ext=jpg&uid=R83530561&ga=GA1.2.628561962.1680109885&semt=sph"
              alt=""
              className="object-cover mobile:w-[500px] rounded-lg"
            />
            <img
              src={coment}
              alt=""
              className="absolute object-cover w-[200px] rounded-lg -bottom-20 -right-2 -left-24 top-[50%] mobile:left-20 backdrop-blur-sm mobile:-top-8 "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose

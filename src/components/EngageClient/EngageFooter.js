import { useUser } from "../lib/hooks";

const userIcon = {
  anonymous: <i className="far fa-user mr-4 text-lg text-gray-200"></i>,
  knownlocal: <i className="fas fa-user-check mr-4 text-lg text-green-200"></i>,
  private: <i className="fas fa-user mr-4 text-lg text-gray-200"></i>
};

const EngageFooter = props => {
  const user = useUser();

  return (
    <nav
      style={{
        top: "auto",
        fontSize: "1em",
        position: "absolute",
        bottom: 0,
        opacity: 0.6
      }}
      className="w-full flex flex-inline justify-center text-white bg-gray-500 items-center"
    >
      <div class="mx-auto content-center">
        <div class="flex items-center justify-between h-8">
          <img class="ml-16" width="150px" src="/pbxtag.png" alt="" />
        </div>
      </div>
      {user && (
        <button onClick={() => props.handler({ ok: "dokey" })}>
          {/* {userIcon.knownlocal} */}
          {user.email ? userIcon.knownlocal : userIcon.anonymous}
        </button>
      )}
      {!user && (
        <div onClick={() => props.handler({ ctxout: { foo: "bar" } })}>
          <span class="mx-2 inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="inline-flex items-center px-2 py-1 border border-transparent text-xs leading-4 font-medium rounded text-white bg-gray-600 hover:bg-gray-400 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150"
            >
              Sign In
            </button>
          </span>
        </div>
      )}
    </nav>
  );
};

export default EngageFooter;

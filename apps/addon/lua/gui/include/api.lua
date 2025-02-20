local function _getToken()
    return LocalPlayer():GetPData("gmessage_auth_token", "123456")
end

local function Fetch(path, params, onSuccess, onFailure)
    local url = GMessage.APIServerURL

    local reqURL = url .. path

    local paramsString = ""
    for k, v in pairs(params or {}) do
        paramsString = paramsString .. "&" .. k .. "=" .. v
    end

    local token = _getToken();

    local headers = {
        authorization = 'Bearer ' .. token
    }

    http.Fetch(reqURL .. paramsString, onSuccess, onFailure)

end

local function Post(path, params, body, onSuccess, onFailure)
    local url = GMessage.APIServerURL

    local reqURL = url .. path

    local paramsString = ""
    for k, v in pairs(params or {}) do
        paramsString = paramsString .. "&" .. k .. "=" .. v
    end

    local token = _getToken();

    HTTP({
        failed = onFailure,
        success = onSuccess,
        method = "POST",
        headers = {
          
            ['Authorization'] = 'Bearer ' .. token
        },
        type = 'application/json',
        body = util.TableToJSON(body),
        url = reqURL
    })

end

function createNewMessage(message, callback)
   
    Post("messages", _, message, function(code, body, headers)
        print(code, body, headers)
        callback(true)
    end, function(body, _, _, code)
        print(code, body, headers)
        callback(false)
    end)

end

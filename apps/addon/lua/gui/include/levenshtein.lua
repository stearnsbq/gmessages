
function Levenshtein(a, b)
    local len_a = #a
    local len_b = #b
    local d = {}


    for i = 0, len_a do
        d[i] = {}
        d[i][0] = i
    end
    for j = 0, len_b do
        d[0][j] = j
    end

    for i = 1, len_a do
        for j = 1, len_b do
            local cost = (a:sub(i, i) == b:sub(j, j)) and 0 or 1
            d[i][j] = math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + cost)
        end
    end

    return d[len_a][len_b]
end


function LevenshteinSimilarity(a, b)
    local distance = Levenshtein(a, b)
    local maxLength = math.max(#a, #b)
    if maxLength == 0 then
        return 1 
    end
    return 1 - (distance / maxLength)
end


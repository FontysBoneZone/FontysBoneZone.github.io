using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerInvertory : MonoBehaviour
{
    int hasKey;
    public void AddKey()
    {
        hasKey++;
    }
    public void RemoveKey()
    {
        hasKey--;
    }

public bool ConsumeKey()
    {
        if (hasKey > 0)
        {
            RemoveKey();
            return true;
        }
        return false;
    }
}
